import os
import json
import re
from pathlib import Path

# Papka manzilini kiriting
folder_path = "/Users/user/Documents/zedcentury/documentations/odoo/src/pages/user-docs/manufacturing"
base_menu = "/user-docs/manufacturing"


def extract_header_from_md(file_path):
    """
    Markdown fayldan birinchi # header ni oladi
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                line = line.strip()
                if line.startswith('# '):
                    # "# " dan keyingi qismni olish
                    return line[2:].strip()
        return None
    except Exception as e:
        print(f"Xatolik {file_path} faylni o'qishda: {e}")
        return None


def path_to_link(file_path, base_path):
    """
    Fayl path ni link formatiga o'giradi
    """
    # Fayl kengaytmasini olib tashlash
    relative_path = os.path.relpath(file_path, base_path)
    link_path = relative_path.replace('\\', '/').replace('.md', '')
    return f"{base_menu}/{link_path}"


def scan_directory_recursive(directory_path, base_path, current_level=0):
    """
    Rekursiv ravishda papkalarni skanlab, har papka uchun items yaratadi
    """
    items = []
    dir_path = Path(directory_path)

    # Papkadagi barcha .md fayllarni olish
    md_files = []
    subdirs = []

    try:
        for item in dir_path.iterdir():
            if item.is_file() and item.suffix == '.md':
                md_files.append(item)
            elif item.is_dir():
                subdirs.append(item)
    except PermissionError:
        print(f"Ruxsat yo'q: {directory_path}")
        return items

    # MD fayllarni qayta ishlash
    for md_file in sorted(md_files):
        header = extract_header_from_md(md_file)
        if header:
            link = path_to_link(md_file, base_path)
            file_item = {
                'text': header,
                'link': link
            }

            # Fayl nomi bilan bir xil papka bormi tekshirish
            matching_folder = None
            folder_name = md_file.stem  # fayl nomi .md siz

            for subdir in subdirs:
                if subdir.name == folder_name:
                    matching_folder = subdir
                    break

            # Agar mos papka topilsa, uning ichidagi elementlarni items ga qo'shish
            if matching_folder:
                sub_items = scan_directory_recursive(matching_folder, base_path, current_level + 1)
                if sub_items:
                    file_item['items'] = sub_items
                # Bu papkani subdirs dan olib tashlash (takrorlanmasligi uchun)
                subdirs.remove(matching_folder)

            items.append(file_item)

    # Qolgan papkalarni ham qayta ishlash (agar ularga mos .md fayl bo'lmasa)
    for subdir in sorted(subdirs):
        # Papka ichidagi elementlarni olish
        sub_items = scan_directory_recursive(subdir, base_path, current_level + 1)
        if sub_items:
            # Papka nomini header sifatida ishlatish (agar boshqa variant bo'lmasa)
            folder_item = {
                'text': subdir.name.replace('_', ' ').title(),
                'link': path_to_link(subdir / 'index.md', base_path).replace('/index', ''),
                'items': sub_items
            }
            items.append(folder_item)

    return items


def scan_directory(directory_path):
    """
    Asosiy papkani skanlab, menyuni yaratadi
    """
    base_path = Path(directory_path)

    if not base_path.exists():
        print(f"Papka topilmadi: {directory_path}")
        return []

    return scan_directory_recursive(directory_path, base_path)


def generate_menu_json(directory_path, output_file=None):
    """
    Asosiy funksiya - menyuni generatsiya qiladi
    """
    if not os.path.exists(directory_path):
        print(f"Xatolik: '{directory_path}' papkasi topilmadi!")
        return None

    print(f"'{directory_path}' papkasini skanlamoqda...")
    menu_data = scan_directory(directory_path)

    # JSON formatida chiqarish
    json_output = json.dumps(menu_data, ensure_ascii=False, indent=4)

    if output_file:
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(json_output)
            print(f"Menu '{output_file}' faylga saqlandi.")
        except Exception as e:
            print(f"Xatolik faylga yozishda: {e}")
    else:
        print("Generatsiya qilingan menu:")
        print(json_output)

    return menu_data


# Chiqish fayli (ixtiyoriy)
save_to_file = input("JSON faylga saqlashni xohlaysizmi? (y/n): ").strip().lower()

if save_to_file == 'y':
    output_filename = input("Fayl nomini kiriting (menu.json): ").strip()
    if not output_filename:
        output_filename = "menu.json"
    generate_menu_json(folder_path, output_filename)
else:
    generate_menu_json(folder_path)
