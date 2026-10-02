import os
import re
import yaml

WEBLINKS_DIR = 'Weblinks'
EXCLUDED_DIRS = {'.obsidian', '.git', '.trash', 'node_modules', '.venv'}


def process_weblink_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"File read error: {e}"

    # Handle potential UTF-8 BOM
    content_clean = content.lstrip('\ufeff')

    # Strict regex matching: Opening '---' and Closing '---' or '...' MUST be on their own line
    fm_match = re.match(r'^\s*---\r?\n(.*?)\r?\n(?:---|\.\.\.)\r?\n(.*)$', content_clean, re.DOTALL)
    if not fm_match:
        return False, "No valid '---' YAML frontmatter block found at top of file"

    fm_raw = fm_match.group(1)
    body = fm_match.group(2)

    # Parse YAML with PyYAML
    try:
        fm = yaml.safe_load(fm_raw) or {}
    except Exception as e:
        return False, f"PyYAML parse error: {e}"

    if not isinstance(fm, dict):
        return False, "YAML content did not parse into a dictionary key-value structure"

    url = fm.get('url')
    if not url or not isinstance(url, str) or not url.strip():
        return False, "Field 'url' is missing, empty, or not a string"

    url = url.strip()
    link_markdown = f"[OPEN LINK]({url})"

    # Check if [OPEN LINK](...) already exists in the body
    link_pattern = r'\[OPEN LINK\]\([^\)]+\)'

    if re.search(link_pattern, body):
        if re.search(re.escape(link_markdown), body):
            return False, f"Already contains exact link ({link_markdown})"
        else:
            # Update existing link if URL changed in YAML
            new_body = re.sub(link_pattern, link_markdown, body)
    else:
        # Append link to body
        body_trimmed = body.rstrip()
        if body_trimmed:
            new_body = f"{body_trimmed}\n\n{link_markdown}\n"
        else:
            new_body = f"\n\n{link_markdown}\n"

    # Preserve newline formatting
    newline = '\r\n' if '\r\n' in content else '\n'
    new_content = f"---{newline}{fm_raw}{newline}---{new_body}"

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, "Updated successfully"

    return False, "File content was already up-to-date"


def main():
    if not os.path.exists(WEBLINKS_DIR):
        print(f"Directory '{WEBLINKS_DIR}' not found in the current path.")
        return

    updated_files = []
    skipped_files = []
    scanned_count = 0

    for root, dirs, files in os.walk(WEBLINKS_DIR):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in EXCLUDED_DIRS]

        for file in files:
            if file.lower().endswith('.md'):
                scanned_count += 1
                filepath = os.path.join(root, file)
                success, reason = process_weblink_file(filepath)

                if success:
                    updated_files.append(filepath)
                    print(f"✅ [UPDATED] {filepath}")
                else:
                    skipped_files.append((filepath, reason))

    print("\n" + "=" * 60)
    print("UNEDITED FILES REPORT")
    print("=" * 60)

    if skipped_files:
        for path, reason in skipped_files:
            print(f"❌ [SKIPPED] {path}")
            print(f"   └── Reason: {reason}")
    else:
        print("All scanned files were updated!")

    print(f"\nSummary: Scanned {scanned_count} markdown file(s). Updated {len(updated_files)}, Skipped {len(skipped_files)}.")


if __name__ == '__main__':
    main()