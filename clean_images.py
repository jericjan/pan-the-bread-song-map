import os
import re

WEBLINKS_PATH = "./Weblinks"

PREVIEW_IMAGE_PATTERN = re.compile(r"^previewImage:.*$\n?", re.MULTILINE)


def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "previewImage:" in content:
        new_content = re.sub(PREVIEW_IMAGE_PATTERN, "", content)

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"Updated: {file_path}")
    else:
        print(f"Skipped (no previewImage): {file_path}")


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