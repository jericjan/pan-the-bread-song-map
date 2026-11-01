import os
import re
import subprocess
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

import yaml

WEBLINKS_PATH = "./Weblinks"
MEDIA_PATH = Path("Images/Media")

FRONTMATTER_PATTERN = re.compile(
    r"\A(?P<opening>\ufeff?---[ \t]*\r?\n)"
    r"(?P<yaml>.*?)"
    r"(?P<closing>^(?:---|\.\.\.)[ \t]*(?:\r?\n|\Z))",
    re.MULTILINE | re.DOTALL,
)


def clean_frontmatter(frontmatter):
    """Remove complete previewImage entries without reformatting other YAML."""
    node = yaml.compose(frontmatter, Loader=yaml.SafeLoader)
    if not isinstance(node, yaml.MappingNode):
        return frontmatter, None

    lines = frontmatter.splitlines(keepends=True)
    removed_lines = set()
    url = None
    for index, (key, value) in enumerate(node.value):
        if key.value == "previewImage":
            # The next top-level key bounds folded/literal blocks, quoted
            # multiline strings, and collection values alike.
            end = (
                node.value[index + 1][0].start_mark.line
                if index + 1 < len(node.value)
                else len(lines)
            )
            # Preserve separator whitespace and comments before the next key.
            while end > key.start_mark.line + 1 and (
                not lines[end - 1].strip() or lines[end - 1].startswith("#")
            ):
                end -= 1
            removed_lines.update(range(key.start_mark.line, end))
        elif key.value == "url" and isinstance(value, yaml.ScalarNode):
            url = value.value

    return "".join(line for i, line in enumerate(lines) if i not in removed_lines), url


def youtube_id(url):
    """Extract video IDs from watch, short, live, embed, and youtu.be URLs."""
    if not isinstance(url, str):
        return None
    url = url.strip()
    if "://" not in url and not url.startswith("//"):
        url = "https://" + url
    try:
        parsed = urlsplit(url)
    except ValueError:
        return None
    if parsed.scheme not in ("", "http", "https"):
        return None
    host = (parsed.hostname or "").lower()
    parts = parsed.path.strip("/").split("/")
    video_id = None
    if host in ("youtu.be", "www.youtu.be"):
        video_id = parts[0]
    elif host in ("youtube.com", "youtube-nocookie.com") or host.endswith(
        (".youtube.com", ".youtube-nocookie.com")
    ):
        if parts[0] == "watch":
            video_id = parse_qs(parsed.query).get("v", [None])[0]
        elif len(parts) >= 2 and parts[0] in ("shorts", "live", "embed", "v"):
            video_id = parts[1]
    if video_id and re.fullmatch(r"[A-Za-z0-9_-]{11}", video_id):
        return video_id
    return None


def find_thumbnail(video_id):
    """Match the exact ID, regardless of the file extension."""
    return next(
        (path for path in sorted(MEDIA_PATH.glob(f"{video_id}.*"))
         if path.is_file() and path.stem == video_id),
        None,
    )


def get_thumbnail(video_id):
    thumbnail = find_thumbnail(video_id)
    if thumbnail is not None:
        return thumbnail

    MEDIA_PATH.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "yt-dlp",
            "--ignore-config",
            "--skip-download",
            "--write-thumbnail",
            "--no-playlist",
            "--output", str(MEDIA_PATH / "%(id)s.%(ext)s"),
            f"https://www.youtube.com/watch?v={video_id}",
        ],
        check=True,
    )
    thumbnail = find_thumbnail(video_id)
    if thumbnail is None:
        raise RuntimeError(f"yt-dlp did not produce a thumbnail for {video_id}")
    return thumbnail


def process_file(file_path):
    with open(file_path, "r", encoding="utf-8", newline="") as f:
        content = f.read()

    match = FRONTMATTER_PATTERN.match(content)
    if not match:
        print(f"Skipped (no YAML frontmatter): {file_path}")
        return

    try:
        frontmatter, url = clean_frontmatter(match.group("yaml"))
    except yaml.YAMLError as exc:
        print(f"Skipped (invalid YAML): {file_path}: {exc}")
        return

    closing = match.group("closing")
    body = content[match.end():]
    newline = "\r\n" if "\r\n" in content else "\n"
    video_id = youtube_id(url)
    if video_id:
        try:
            thumbnail = get_thumbnail(video_id)
        except (OSError, subprocess.CalledProcessError, RuntimeError) as exc:
            print(f"Thumbnail failed for {file_path}: {exc}")
        else:
            embed = f"![](Images/Media/{thumbnail.name})"
            # Move our existing embed to the top instead of duplicating it.
            body = re.sub(
                rf"^{re.escape(embed)}[ \t]*(?:\r?\n|\Z)",
                "", body, flags=re.MULTILINE,
            )
            body = embed + newline + body

    # Add a newline if the original closing delimiter was at EOF.
    if body and not closing.endswith("\n"):
        closing += newline

    new_content = match.group("opening") + frontmatter + closing + body
    if new_content != content:
        with open(file_path, "w", encoding="utf-8", newline="") as f:
            f.write(new_content)

        print(f"Updated: {file_path}")
    else:
        print(f"Skipped (already clean): {file_path}")


def main():
    if not os.path.exists(WEBLINKS_PATH):
        print(f"Error: Folder '{WEBLINKS_PATH}' not found.")
        return

    for root, _, files in os.walk(WEBLINKS_PATH):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                process_file(file_path)


if __name__ == "__main__":
    main()
