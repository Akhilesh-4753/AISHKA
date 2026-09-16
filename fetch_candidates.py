import json, os, requests, concurrent.futures

with open('gdrive_files.json') as f:
    data = json.load(f)

jpgs = [item for item in data if item['path'].lower().endswith(('.jpg', '.jpeg', '.png'))]

# Let's inspect candidate files in each design group:
candidates = [
    # 1. Teal Blue Linen Kaftan
    (0, "teal_kaftan_1"), (18, "teal_kaftan_2"), (30, "teal_kaftan_3"),
    # 2. Terracotta Rust Linen Shift
    (48, "terracotta_veranda"), (60, "terracotta_playful"), (66, "terracotta_portrait"),
    # 3. Teal in Park
    (84, "teal_park_walk"), (90, "teal_park_sit"),
    # 4. Terracotta in Park
    (102, "terracotta_park_walk"), (114, "terracotta_park_stand"),
    # 5. Forest Green Kaftan
    (120, "forest_green_standing"), (126, "forest_green_seated"),
    # 6. Mint & Forest Duo / Mint Kaftan
    (132, "duo_forest_mint"), (138, "mint_kaftan_standing"), (144, "mint_kaftan_bamboo"),
    # 7. Sky Blue Kaftan (Colonial Door)
    (156, "skyblue_door_dance"), (168, "skyblue_door_side"), (180, "skyblue_door_front"),
    # 8. Rose Pink Kaftan & Blue-Pink Duo
    (198, "duo_blue_pink_door"), (210, "duo_blue_pink_full"), (228, "duo_blue_pink_close"), (234, "rose_pink_window"), (240, "rose_pink_portrait"),
    # 9. Midnight Black Dress
    (246, "midnight_black_full"), (247, "midnight_black_2"), (249, "midnight_black_3"),
    # 10. Sunshine Yellow Gingham Dress
    (252, "yellow_gingham_door"), (258, "yellow_gingham_duo"), (264, "yellow_gingham_courtyard"), (270, "yellow_gingham_motion"),
    # 11. Pink Striped Shirt Dress
    (276, "pink_stripe_garden"), (282, "pink_stripe_pillar"), (288, "pink_stripe_bench"), (294, "pink_stripe_steps"),
    # 12. Pink & Aqua Gingham Midi Dress
    (300, "duo_pink_aqua_gingham"), (306, "pink_gingham_window"), (312, "aqua_gingham_window"), (336, "pink_gingham_palms"), (366, "duo_gingham_window_sit"),
    # 13. Yellow Plaid & Green Gingham
    (378, "yellow_plaid_close"), (384, "yellow_plaid_full"), (390, "duo_yellow_green_checks"), (402, "green_gingham_garden"),
    # 14. Royal Violet Kaftan Ensemble
    (408, "royal_violet_veranda"), (414, "royal_violet_profile"), (420, "royal_violet_seated"),
    # 15. Chartreuse Lime Co-ord Set
    (426, "chartreuse_lime_entrance"), (432, "chartreuse_lime_palms"), (444, "chartreuse_lime_standing"), (450, "chartreuse_lime_arms_up"),
    # 16. Sage Olive Co-ord Set
    (456, "sage_olive_entrance"), (457, "sage_olive_close"),
    # 17. Berry Crimson Red Cowl Kaftan
    (462, "berry_crimson_brick_wall"), (463, "berry_crimson_close"),
    # 18. Navy Blue Co-ord Set
    (468, "navy_coord_white_wall"), (474, "navy_coord_window"),
    # 19. Chartreuse Lime in Veranda
    (480, "chartreuse_lime_steps"), (486, "chartreuse_lime_pillars"),
    # 20. Mint Green Shirt Dress
    (492, "mint_shirt_dress_courtyard"), (498, "mint_shirt_dress_walk"), (510, "mint_shirt_dress_stylish"),
    # 21. Oatmeal Sand Shirt Dress
    (522, "oatmeal_shirt_dress_full"), (528, "oatmeal_shirt_dress_wall"),
    # 22. Blush Pink Shirt Dress
    (534, "blush_pink_shirt_dress_plants"), (538, "blush_pink_shirt_dress_garden")
]

os.makedirs('candidate_thumbs', exist_ok=True)

def fetch_candidate(item_tuple):
    idx, label = item_tuple
    if idx >= len(jpgs):
        return
    item = jpgs[idx]
    out_file = os.path.join('candidate_thumbs', f"{idx:03d}_{label}.jpg")
    if os.path.exists(out_file):
        return
    url = f"https://drive.google.com/thumbnail?id={item['id']}&sz=w600"
    r = requests.get(url, timeout=12)
    if r.status_code == 200:
        with open(out_file, 'wb') as f:
            f.write(r.content)

print(f"Downloading {len(candidates)} high-resolution candidate previews...")
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex:
    list(ex.map(fetch_candidate, candidates))

print("Done downloading candidate previews!")
