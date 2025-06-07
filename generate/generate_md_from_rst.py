"""
Berilgan papka ichidagi .rst fayllarni .md faylga o'tkazib destination papka ichiga saqlaydi
"""
import os
import re
import shutil

import pypandoc


def process_rst_file_updated(src_path):
    try:
        # Convert RST to Markdown
        markdown = pypandoc.convert_file(src_path, 'md', format='rst')
    except RuntimeError:
        return None  # skip files that can't be converted

    # Apply transformations
    markdown = markdown.replace('-->', '‣')
    markdown = re.sub(r'{[^}]*}', '', markdown)
    markdown = re.sub(r'<[^>]*>', '', markdown)
    markdown = re.sub(r'::: title\n.*?\n:::\n?', '', markdown, flags=re.DOTALL)
    markdown = markdown.replace(':::: note', '::: tip')
    markdown = markdown.replace(':::: important', '::: warning')
    markdown = markdown.replace(':::: tip', '::: tip')
    markdown = re.sub(r'::: seealso\n.*?\n:::\n?', '', markdown, flags=re.DOTALL)

    markdown = re.sub(r'show-content\s*:?\s*', '', markdown)
    markdown = re.sub(r'hide-page-toc\s*:?\s*', '', markdown)

    markdown = re.sub(r':{8,}\s*cards\s*\n.*?\n:{8,}\s*\n?', '', markdown, flags=re.DOTALL)

    return markdown


def convert_directory_updated(source_dir, destination_dir):
    for root, dirs, files in os.walk(source_dir):
        for file in files:
            src_path = os.path.join(root, file)
            relative_path = os.path.relpath(src_path, source_dir)
            dest_path = os.path.join(destination_dir, relative_path)

            os.makedirs(os.path.dirname(dest_path), exist_ok=True)

            if file.endswith('.rst'):
                markdown = process_rst_file_updated(src_path)
                if markdown is not None:
                    dest_path = os.path.splitext(dest_path)[0] + '.md'
                    with open(dest_path, 'w', encoding='utf-8') as f:
                        f.write(markdown)
            else:
                shutil.copy2(src_path, dest_path)

    return destination_dir


convert_directory_updated(
    "/Users/user/Documents/odoo-documentation/content/applications/inventory_and_mrp/inventory",
    "/Users/user/Documents/zedcentury/documentations/odoo/src/pages/user-docs/inventory"
)
