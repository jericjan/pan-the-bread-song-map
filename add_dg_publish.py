import os

EXCLUDED_DIRS = {'.obsidian', '.git', '.trash', 'node_modules', '.venv'}


def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return False

    newline = '\r\n' if '\r\n' in content else '\n'

    # Check if the file starts with YAML frontmatter
    if content.startswith('---\n') or content.startswith('---\r\n'):
        lines = content.splitlines(keepends=True)
        closing_idx = -1

        # Search for closing frontmatter delimiter
        for i in range(1, len(lines)):
            stripped = lines[i].strip()
            if stripped in ('---', '...'):
                closing_idx = i
                break

        if closing_idx != -1:
            fm_lines = lines[1:closing_idx]
            has_dg_publish = False
            updated_fm = []

            for line in fm_lines:
                if line.strip().startswith('dg-publish:'):
                    has_dg_publish = True
                    line_ending = '\r\n' if line.endswith('\r\n') else '\n'
                    updated_fm.append(f'dg-publish: true{line_ending}')
                else:
                    updated_fm.append(line)

            if not has_dg_publish:
                updated_fm.append(f'dg-publish: true{newline}')

            new_content = ''.join([lines[0]] + updated_fm + lines[closing_idx:])
        else:
            # Unclosed frontmatter block - prepend new frontmatter
            new_content = f'---{newline}dg-publish: true{newline}---{newline}' + content
    else:
        # No frontmatter present - prepend new frontmatter block
        new_content = f'---{newline}dg-publish: true{newline}---{newline}' + content

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True

    return False


def main():
    modified_count = 0
    total_count = 0

    for root, dirs, files in os.walk('.'):
        # Exclude hidden directories (.obsidian, .git, etc.)
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in EXCLUDED_DIRS]

        for file in files:
            # Ignore README.md if it is located in the root folder
            if root == '.' and file.lower() == 'readme.md':
                continue

            if file.endswith('.md'):
                total_count += 1
                filepath = os.path.join(root, file)
                if process_file(filepath):
                    modified_count += 1
                    print(f"Updated: {filepath}")

    print(f"\nDone. Scanned {total_count} files, updated {modified_count} files.")


if __name__ == '__main__':
    main()