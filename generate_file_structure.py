import json
import os
import re


def header_to_filename(header: str) -> str:
    """
    Convert a header string into a kebab-case filename ending in .md.
    E.g. "Create quotations" -> "create-quotations.md"
    """
    # 1) lowercase
    lower = header.lower()
    # 2) replace any sequence of non-alphanumeric characters with a single hyphen
    filename = re.sub(r'[^a-z0-9]+', '-', lower).strip('-')
    return filename + ".md"


def create_structure(items: list, base_path: str):
    """
    Recursively create folders and .md files based on a list of dicts.
    Each dict should have either:
      - a "name" key (if it's a folder or a pre-named .md file), and possibly a "header"
      - OR no "name" key but a "header" key (in which case we derive the .md filename from the header).
    """
    for entry in items:
        # Case A: "name" is explicitly provided
        if "name" in entry:
            name = entry["name"]
            target_path = os.path.join(base_path, name)

            if name.endswith(".md"):
                # It's a file whose exact filename is given
                header = entry.get("header", "")
                os.makedirs(os.path.dirname(target_path), exist_ok=True)
                with open(target_path, "w", encoding="utf-8") as f:
                    f.write(f"# {header}\n")

            else:
                # It's a folder
                os.makedirs(target_path, exist_ok=True)
                # Recurse if there are nested items
                if "items" in entry:
                    create_structure(entry["items"], target_path)

        # Case B: No "name", but a "header" → derive filename from header
        elif "header" in entry:
            header = entry["header"]
            filename = header_to_filename(header)
            target_path = os.path.join(base_path, filename)

            os.makedirs(os.path.dirname(target_path), exist_ok=True)
            with open(target_path, "w", encoding="utf-8") as f:
                f.write(f"# {header}\n")

        # If neither "name" nor "header" exists, skip (or you could raise an error)
        else:
            continue


json_path = "structures/sale_management.json"  # ← replace with your actual JSON filename
with open(json_path, "r", encoding="utf-8") as jf:
    structure = json.load(jf)

base_folder = "/Users/user/Documents/zedcentury/documentations/odoo/src/pages/user-docs/sale_management"
os.makedirs(base_folder, exist_ok=True)
create_structure(structure, base_folder)
print(f"Structure created under: {os.path.abspath(base_folder)}")
