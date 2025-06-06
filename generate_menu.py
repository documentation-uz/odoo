import json
import re
import os

def header_to_slug(header: str) -> str:
    """
    Convert a header (e.g. "Create Quotations") into a kebab-case slug (no .md).
    "Create Quotations" -> "create-quotations"
    """
    lower = header.lower()
    # Replace any sequence of non-alphanumeric chars with a single hyphen
    slug = re.sub(r'[^a-z0-9]+', '-', lower).strip('-')
    return slug

def name_to_title(name: str) -> str:
    """
    Convert a folder's kebab-case name into a human-friendly title.
    "get-started" -> "Get Started"
    """
    parts = name.split('-')
    return " ".join(part.capitalize() for part in parts)

def build_menu_entries(entries: list, base_path: str, current_segments: list) -> list:
    """
    Recursively produce a list of menu items from `entries`.

    - entries: a list of dicts, each with:
        * either "name" (folder) or "header" (leaf), optionally both.
        * if "name" present and it does NOT end with ".md", treat as a folder if "items" exist.
        * if "name" ends with ".md" or if no "items" at all, treat as a leaf (using header).
        * if "items" is present, recurse into build_menu_entries(...) for those children.
    - base_path: the fixed prefix for all links, e.g. "/user-docs/sale-management"
    - current_segments: a list of path segments accumulated so far (folder names in kebab-case).

    Returns: a list of dicts, each either:
      {
        "text": <string>,
        "link": "<full‐URL‐string>"       # if a leaf
      }
      OR
      {
        "text": <string>,
        "items": [ <recursive list> ]     # if a folder
      }
    """
    menu = []

    for entry in entries:
        name = entry.get("name")
        header = entry.get("header", "").strip()
        has_items = isinstance(entry.get("items"), list) and len(entry["items"]) > 0

        # --- Case 1: It's a folder (has a "name" that doesn't end in .md, and has items) ---
        if name and not name.endswith(".md") and has_items:
            folder_name = name
            # Build its display title
            folder_title = name_to_title(folder_name)
            # New path segments = whatever we had + this folder_name
            new_segments = current_segments + [folder_name]
            # Recurse on children
            children_menu = build_menu_entries(entry["items"], base_path, new_segments)
            if children_menu:
                menu.append({
                    "text": folder_title,
                    "items": children_menu
                })
            continue

        # --- Case 2: It's a leaf (either "name" ends with .md, or no "items") ---
        # We require a header to show text; if header is missing, skip it.
        if header:
            # Determine slug (no .md suffix) for the link
            if name and name.endswith(".md"):
                slug = name[:-3]
            else:
                slug = header_to_slug(header)

            # Full URL = base_path + "/" + "/".join(all folder segments) + "/" + slug
            full_path_segments = current_segments + [slug]
            link = f"{base_path}/" + "/".join(full_path_segments)

            menu.append({
                "text": header,
                "link": link
            })

        # --- Case 3: If somehow there's a "name" with ".md" AND also a nested "items" list, you could choose to:
        #             a) treat it as a folder anyway, ignoring the ".md".
        #             b) treat it as a leaf and skip its children.
        #     The code above does (2) first if header exists;
        #     if you want to allow a .md entry to also have children, move the children logic above or adapt as needed.
        #     In the common pattern, a .md entry is a leaf and won't have items.

    return menu

if __name__ == "__main__":
    # 1) Load your JSON file (e.g. "structure.json"):
    json_path = "structures/sale_management.json"
    if not os.path.isfile(json_path):
        raise FileNotFoundError(f"Could not find {json_path} in the current directory.")
    with open(json_path, "r", encoding="utf-8") as f:
        structure = json.load(f)

    # 2) Define your base path (e.g. "/user-docs/sale-management")
    base_path = "/user-docs/sale-management"

    # 3) Kick off recursion with an empty current_segments list:
    menu_data = build_menu_entries(structure, base_path, current_segments=[])

    # 4) Print it out as JavaScript‐style single‐quoted syntax:
    def to_js_array(menu_list, indent=0):
        sp = "  " * indent
        lines = [sp + "["]
        for item in menu_list:
            # If this entry has a "link", it's a leaf
            if "link" in item:
                lines.append(sp + "  {")
                lines.append(sp + f"    text: '{item['text']}',")
                lines.append(sp + f"    link: '{item['link']}'")
                lines.append(sp + "  },")
            # Otherwise, it has "items" → a submenu
            else:
                lines.append(sp + "  {")
                lines.append(sp + f"    text: '{item['text']}',")
                lines.append(sp + "    items: " + to_js_array(item["items"], indent + 2))
                lines.append(sp + "  },")
        lines.append(sp + "]")
        return "\n".join(lines)

    print(to_js_array(menu_data))
