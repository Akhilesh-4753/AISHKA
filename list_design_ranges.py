import json

with open('gdrive_files.json') as f:
    data = json.load(f)

jpgs = [item for item in data if item['path'].lower().endswith(('.jpg', '.jpeg', '.png'))]

ranges = [
    ("Teal Blue Kaftan", 0, 40),
    ("Terracotta Rust Dress", 41, 75),
    ("Teal in Park", 76, 95),
    ("Terracotta in Park", 96, 119),
    ("Forest Green & Mint Kaftans", 120, 149),
    ("Sky Blue Kaftan (Colonial Door)", 150, 191),
    ("Rose Pink Kaftan & Duos", 192, 245),
    ("Midnight Black Dress", 246, 251),
    ("Yellow Gingham Dress", 252, 275),
    ("Pink Striped Shirt Dress", 276, 299),
    ("Pink & Aqua Gingham Midi", 300, 375),
    ("Yellow Plaid & Green Gingham", 376, 405),
    ("Royal Violet Co-ord Set", 406, 425),
    ("Chartreuse Lime Co-ord Set", 426, 455),
    ("Sage Olive & Berry Crimson Sets", 456, 467),
    ("Navy Blue Co-ord & Lime Veranda", 468, 490),
    ("Mint Green Shirt Dress", 491, 515),
    ("Oatmeal Sand Shirt Dress", 516, 530),
    ("Blush Pink Shirt Dress", 531, 538)
]

for name, start, end in ranges:
    print(f"=== {name} (idx {start} to {end}) ===")
    sample = [f"{i}:{jpgs[i]['path']}" for i in range(start, min(end+1, len(jpgs)), max(1, (end - start)//4))]
    print("  ", " | ".join(sample))
