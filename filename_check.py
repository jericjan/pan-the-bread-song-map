import os
from collections import defaultdict

EXCLUDED_DIRS = {'.obsidian', '.git', '.trash', 'node_modules', '.venv'}
BANNED_OBSIDIAN_CHARS = {'#', '^', '[', ']', '|'}


def audit_vault(start_dir='.'):
    files_by_name = defaultdict(list)
    invalid_char_files = []
    total_md_files = 0

    for root, dirs, files in os.walk(start_dir):
        # Exclude hidden directories and system folders
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in EXCLUDED_DIRS]

        for file in files:
            if file.lower().endswith('.md'):
                total_md_files += 1
                full_path = os.path.join(root, file)

                # 1. Track for duplicate checking
                files_by_name[file].append(full_path)

                # 2. Check for banned Obsidian characters
                found_chars = sorted(set(file) & BANNED_OBSIDIAN_CHARS)
                if found_chars:
                    invalid_char_files.append((full_path, found_chars))

    # Filter to filenames that appear more than once
    duplicates = {name: paths for name, paths in files_by_name.items() if len(paths) > 1}

    return duplicates, invalid_char_files, total_md_files


def main():
    duplicates, invalid_char_files, total_files = audit_vault('.')

    print(f"Scanned {total_files} Markdown files in total.\n")

    # --- Section 1: Duplicate Filenames ---
    print("=== 1. DUPLICATE FILENAMES ===")
    if duplicates:
        print(f"Found {len(duplicates)} duplicate filename group(s):\n")
        for filename, paths in sorted(duplicates.items()):
            print(f"📄 {filename} ({len(paths)} occurrences):")
            for path in paths:
                print(f"   └── {path}")
            print()
    else:
        print("✅ No duplicate filenames found.\n")

    # --- Section 2: Invalid Obsidian Characters ---
    print("=== 2. FORBIDDEN OBSIDIAN CHARACTERS (# ^ [ ] |) ===")
    if invalid_char_files:
        print(f"Found {len(invalid_char_files)} file(s) containing banned characters:\n")
        for path, chars in invalid_char_files:
            chars_formatted = ", ".join(f"'{c}'" for c in chars)
            print(f"⚠️  {path}")
            print(f"   └── Contains forbidden character(s): {chars_formatted}\n")
    else:
        print("✅ No illegal characters found in filenames.\n")


if __name__ == '__main__':
    main()