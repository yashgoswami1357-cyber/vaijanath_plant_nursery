import os
import zipfile

def create_project_zip():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    zip_dir = os.path.join(base_dir, 'public')
    os.makedirs(zip_dir, exist_ok=True)
    zip_filename = os.path.join(zip_dir, 'vaijanath-plant-nursery.zip')

    exclude_dirs = {'node_modules', 'dist', '.git', '.cache', '__pycache__', '.vite'}
    exclude_files = {'vaijanath-plant-nursery.zip'}

    with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(base_dir):
            dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith('.')]
            for file in files:
                if file in exclude_files or file.endswith('.pyc') or file.startswith('.DS_Store'):
                    continue
                filepath = os.path.join(root, file)
                arcname = os.path.relpath(filepath, base_dir)
                if arcname.startswith('public/vaijanath-plant-nursery.zip'):
                    continue
                zipf.write(filepath, arcname)

    size = os.path.getsize(zip_filename)
    print(f"Created {zip_filename} ({size / 1024:.1f} KB)")

if __name__ == '__main__':
    create_project_zip()
