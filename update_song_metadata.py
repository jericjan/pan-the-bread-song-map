import os
import re
import yaml

SONGS_DIR = 'Songs'
EXCLUDED_DIRS = {'.obsidian', '.git', '.trash', 'node_modules', '.venv'}


def is_valid_content(val):
    """Check if a YAML value is non-empty and non-null."""
    if val is None:
        return False
    if isinstance(val, list):
        return len(val) > 0
    if isinstance(val, str):
        cleaned = val.strip().lower()
        return cleaned not in ('', 'null', 'none', '[]')
    return bool(val)


def process_song_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return False

    # Check for YAML frontmatter
    if not (content.startswith('---\n') or content.startswith('---\r\n')):
        return False

    parts = content.split('---', 2)
    if len(parts) < 3:
        return False

    fm_raw = parts[1]
    body = parts[2]

    try:
        fm = yaml.safe_load(fm_raw) or {}
    except Exception as e:
        print(f"Error parsing YAML in {filepath}: {e}")
        return False

    artist = fm.get('artist')
    show_movie = fm.get('showMovie')
    game = fm.get('game')

    # Remove previous generated sections to allow safe re-runs
    headers_to_clean = [r'## Artist\(s\)', r'## Show/Movie', r'## Game\(s\)']
    for h in headers_to_clean:
        pattern = rf'{h}\s*\n(?:(?!^#).*\n?)*'
        body = re.sub(pattern, '', body, flags=re.MULTILINE)

    body = body.rstrip()

    # Build new sections
    new_sections = []

    # 1. Artist(s)
    if is_valid_content(artist):
        if isinstance(artist, list):
            lines = [f"- {item}" for item in artist if item]
            if lines:
                new_sections.append("## Artist(s)\n" + "\n".join(lines))
        elif isinstance(artist, str):
            new_sections.append(f"## Artist(s)\n- {artist.strip()}")

    # 2. Show/Movie
    if is_valid_content(show_movie):
        new_sections.append(f"## Show/Movie\n{str(show_movie).strip()}")

    # 3. Game(s)
    if is_valid_content(game):
        if isinstance(game, list):
            lines = [f"- {item}" for item in game if item]
            if lines:
                new_sections.append("## Game(s)\n" + "\n".join(lines))
        elif isinstance(game, str):
            new_sections.append(f"## Game(s)\n- {game.strip()}")

    # Reconstruct file
    if new_sections:
        formatted_addition = "\n\n" + "\n\n".join(new_sections) + "\n"
        new_content = f"---{fm_raw}---{body}{formatted_addition}"
    else:
        new_content = f"---{fm_raw}---{body}\n"

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True

    return False


def main():
    if not os.path.exists(SONGS_DIR):
        print(f"Directory '{SONGS_DIR}' not found in the current path.")
        return

    updated_count = 0
    scanned_count = 0

    for root, dirs, files in os.walk(SONGS_DIR):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in EXCLUDED_DIRS]

        for file in files:
            if file.lower().endswith('.md'):
                scanned_count += 1
                filepath = os.path.join(root, file)
                if process_song_file(filepath):
                    updated_count += 1
                    print(f"Updated: {filepath}")

    print(f"\nFinished. Scanned {scanned_count} markdown file(s) in '{SONGS_DIR}', updated {updated_count}.")


if __name__ == '__main__':
    main()