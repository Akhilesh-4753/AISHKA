import os, glob
from PIL import Image, ImageDraw, ImageFont

files = sorted(glob.glob('temp_preview/*.jpg'))
print(f"Generating contact sheet for {len(files)} preview images...")

cols = 6
cell_w = 200
cell_h = 300
rows = (len(files) + cols - 1) // cols

sheet = Image.new('RGB', (cols * cell_w, rows * cell_h), color=(30, 30, 30))
draw = ImageDraw.Draw(sheet)

for i, fpath in enumerate(files):
    row = i // cols
    col = i % cols
    x = col * cell_w
    y = row * cell_h
    try:
        im = Image.open(fpath)
        im.thumbnail((cell_w - 10, cell_h - 40))
        # Center in cell
        paste_x = x + (cell_w - im.width) // 2
        paste_y = y + (cell_h - 40 - im.height) // 2 + 10
        sheet.paste(im, (paste_x, paste_y))
        fname = os.path.basename(fpath).split('_')[0] + "_" + os.path.basename(fpath).split('_')[-1][:12]
        draw.text((x + 10, y + cell_h - 25), fname, fill=(255, 255, 255))
    except Exception as e:
        print(f"Error on {fpath}: {e}")

# Save in artifacts directory so we can view it
out_path = r"C:\Users\AKHILESH\.gemini\antigravity-ide\brain\f1c6bf35-04b8-4937-9ae5-7d8bcbf88cf3\outfits_contact_sheet.jpg"
sheet.save(out_path, quality=85)
print(f"Saved contact sheet to {out_path} ({sheet.width}x{sheet.height})")
