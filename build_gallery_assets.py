import json, os, requests, concurrent.futures
from PIL import Image

with open('gdrive_files.json') as f:
    data = json.load(f)

jpgs = [item for item in data if item['path'].lower().endswith(('.jpg', '.jpeg', '.png'))]

# The 25 curated selections (index in jpgs, filename_slug, title, category, tag, description, details)
curated_items = [
    {
        "id": 1,
        "idx": 18,
        "slug": "indigo-teal-kaftan",
        "title": "Indigo Teal Linen Kaftan",
        "category": "Everyday Casual",
        "tag": "Pure Linen Casual",
        "description": "Relaxed V-neck kaftan silhouette crafted in breathable indigo-dyed linen with graceful dropped kimono sleeves.",
        "details": "100% Handloom Linen • Breathable Texture • Relaxed Modest Cut"
    },
    {
        "id": 2,
        "idx": 48,
        "slug": "terracotta-rust-shift",
        "title": "Terracotta Rust Linen Shift",
        "category": "Everyday Casual",
        "tag": "Earth Tones",
        "description": "Warm earthen-toned modest shift dress with easy drape, tailored for airy day-long comfort and effortless grace.",
        "details": "Natural Slub Linen • Relaxed Fit • Modest Silhouette"
    },
    {
        "id": 3,
        "idx": 120,
        "slug": "emerald-forest-kaftan",
        "title": "Emerald Forest Linen Kaftan",
        "category": "Everyday Casual",
        "tag": "Signature Silhouette",
        "description": "Rich bottle green modest drape tailored in natural slub linen with structured drop shoulders and clean hemline.",
        "details": "Organic Flax Linen • Deep Forest Hue • Breathable Weave"
    },
    {
        "id": 4,
        "idx": 138,
        "slug": "seafoam-mint-kaftan",
        "title": "Seafoam Mint Linen Kaftan",
        "category": "Everyday Casual",
        "tag": "Pastel Palette",
        "description": "Soothing pastel mint kaftan designed with subtle side vents and weightless, cooling organic texture.",
        "details": "Air-Woven Linen • Gentle Drop Sleeves • Pure Modesty"
    },
    {
        "id": 5,
        "idx": 180,
        "slug": "cornflower-blue-kaftan",
        "title": "Cornflower Blue Kaftan",
        "category": "Everyday Casual",
        "tag": "Artisanal Weave",
        "description": "Vibrant sky blue modest kaftan captured at our heritage courtyard, combining timeless ease with striking color.",
        "details": "100% Pure Cotton-Linen • Hand-Finished Seams • Modest Volume"
    },
    {
        "id": 6,
        "idx": 240,
        "slug": "blossom-rose-dress",
        "title": "Blossom Rose Linen Dress",
        "category": "Everyday Casual",
        "tag": "Summer Brights",
        "description": "Flattering dusty rose linen dress with wide elbow cuffs, clean front pleat, and an effortless modest neckline.",
        "details": "Natural Rose Dye • Gathered Sleeve Cuffs • Airy Structure"
    },
    {
        "id": 7,
        "idx": 246,
        "slug": "midnight-charcoal-dress",
        "title": "Midnight Charcoal Linen Dress",
        "category": "Everyday Casual",
        "tag": "Classic Monotone",
        "description": "Timeless minimalist black dress featuring a relaxed A-line silhouette and understated architectural center seam.",
        "details": "Crisp Charcoal Linen • Flared Modest Cut • Versatile Day-to-Evening"
    },
    {
        "id": 8,
        "idx": 408,
        "slug": "royal-violet-coord",
        "title": "Royal Violet Co-ord Ensemble",
        "category": "Co-ord Sets",
        "tag": "Two-Piece Couture",
        "description": "Sophisticated violet layered cowl tunic paired with wide-leg flowing palazzo trousers for fluid modest movement.",
        "details": "Fluid Rayon-Viscose • Asymmetrical Cowl Hem • Wide Palazzo Cut"
    },
    {
        "id": 9,
        "idx": 444,
        "slug": "chartreuse-lime-coord",
        "title": "Chartreuse Lime Co-ord Set",
        "category": "Co-ord Sets",
        "tag": "Modern Minimalist",
        "description": "Striking asymmetrical cowl-hem tunic and coordinating relaxed trousers in luminous, energizing chartreuse.",
        "details": "Silky Fluid Crepe • High Modest Collar • Statement Palette"
    },
    {
        "id": 10,
        "idx": 456,
        "slug": "earthy-sage-coord",
        "title": "Earthy Sage Olive Set",
        "category": "Co-ord Sets",
        "tag": "Muted Earth",
        "description": "Subtle olive sage two-piece ensemble cut in premium breathable fluid fabric with an elegant high neckline.",
        "details": "Tactile Linen Blend • Coordinated Two-Piece • Serene Minimalist"
    },
    {
        "id": 11,
        "idx": 462,
        "slug": "berry-crimson-coord",
        "title": "Berry Crimson Drape Ensemble",
        "category": "Co-ord Sets",
        "tag": "Festive Grace",
        "description": "Deep burgundy cowl-neck tunic with tailored flare palazzo pants, merging evening richness with modest comfort.",
        "details": "Rich Mulberry Wine Hue • Asymmetrical Hem • Bespoke Drape"
    },
    {
        "id": 12,
        "idx": 474,
        "slug": "navy-midnight-coord",
        "title": "Navy Midnight Palazzo Co-ord",
        "category": "Co-ord Sets",
        "tag": "Refined Poise",
        "description": "Deep midnight navy flowing two-piece set, tailored with wide-cut legs and dropped shoulders for relaxed poise.",
        "details": "Double-Woven Crepe • Deep Navy Pigment • Elasticated Comfort Waist"
    },
    {
        "id": 13,
        "idx": 486,
        "slug": "chartreuse-veranda-coord",
        "title": "Chartreuse Tiered Co-ord",
        "category": "Co-ord Sets",
        "tag": "Architectural Cut",
        "description": "Luminous chartreuse silhouette styled amidst colonial pillars, celebrating bold color with understated modesty.",
        "details": "Relaxed Palazzo Fit • Architectural Drape • Signature Statement"
    },
    {
        "id": 14,
        "idx": 252,
        "slug": "peach-gingham-midi",
        "title": "Peach Gingham Tiered Midi",
        "category": "Checks & Stripes",
        "tag": "Heritage Check",
        "description": "Charming warm apricot and white gingham midi dress with gathered three-quarter sleeves and classic tiering.",
        "details": "100% Woven Cotton Gingham • Gathered Cuffs • Modest Calf-Length"
    },
    {
        "id": 15,
        "idx": 264,
        "slug": "sunshine-yellow-gingham",
        "title": "Sunshine Yellow Gingham Dress",
        "category": "Checks & Stripes",
        "tag": "Resort Casual",
        "description": "Graceful modest A-line silhouette in radiant canary yellow and white yarn-dyed checks for sunlit afternoons.",
        "details": "Breathable Yarn-Dyed Cotton • Sleeveless Modest Cut • Flared Hem"
    },
    {
        "id": 16,
        "idx": 276,
        "slug": "pink-candy-stripe-dress",
        "title": "Pink Candy Striped Shirt Dress",
        "category": "Checks & Stripes",
        "tag": "Classic Stripes",
        "description": "Lightweight pastel pink and white vertical striped modest dress with neat collar, button placket, and deep pockets.",
        "details": "Fine Cotton Poplin • Functional Placket • Relaxed Everyday Poise"
    },
    {
        "id": 17,
        "idx": 306,
        "slug": "rose-gingham-arch-midi",
        "title": "Rose Gingham Arch Midi",
        "category": "Checks & Stripes",
        "tag": "Summer Romance",
        "description": "Airy pink check dress with modest round neck and fluid midi hemline, framed by heritage teak windows.",
        "details": "Soft Slub Cotton • Modest Crew Neck • Hidden Side Seam Pockets"
    },
    {
        "id": 18,
        "idx": 312,
        "slug": "aqua-sky-gingham-midi",
        "title": "Aqua Sky Gingham Midi",
        "category": "Checks & Stripes",
        "tag": "Cool Tones",
        "description": "Crisp turquoise-blue gingham check midi dress capturing cool breezes and effortless weekend poise.",
        "details": "Yarn-Dyed Sky Gingham • Soft Washed Finish • Generous Modest Flare"
    },
    {
        "id": 19,
        "idx": 384,
        "slug": "mustard-navy-plaid-dress",
        "title": "Mustard & Navy Plaid Midi",
        "category": "Checks & Stripes",
        "tag": "Artisanal Plaid",
        "description": "Sophisticated high-neck modest dress tailored in soft cotton tartan checks with bracelet-length sleeves.",
        "details": "Woven Tartan Cotton • Modest High Neckline • Three-Quarter Sleeves"
    },
    {
        "id": 20,
        "idx": 402,
        "slug": "botanical-green-gingham",
        "title": "Botanical Green Gingham Dress",
        "category": "Checks & Stripes",
        "tag": "Garden Elegance",
        "description": "Deep olive-green gingham check dress framed by warm brickwork and lush garden greenery.",
        "details": "Pure Cotton Weave • Botanical Olive Hue • Effortless Flow"
    },
    {
        "id": 21,
        "idx": 366,
        "slug": "harmonious-gingham-duet",
        "title": "Harmonious Gingham Duet",
        "category": "Checks & Stripes",
        "tag": "Collection Story",
        "description": "Dual styling of rose and aqua gingham checks reflecting shared modest sisterhood and timeless comfort.",
        "details": "Curated Palette Story • Handloom Check Harmony • Everyday Grace"
    },
    {
        "id": 22,
        "idx": 510,
        "slug": "mint-celadon-shirt-dress",
        "title": "Mint Celadon Oversized Shirt Dress",
        "category": "Linen Shirt Dresses",
        "tag": "Modern Oversized",
        "description": "Contemporary collared shirt dress in cooling seafoam mint with functional pockets and relaxed dropped sleeves.",
        "details": "Soft Linen-Cotton Weave • Shell Button Closures • Roomy Silhouette"
    },
    {
        "id": 23,
        "idx": 522,
        "slug": "oatmeal-sand-shirt-dress",
        "title": "Oatmeal Sand Linen Shirt Dress",
        "category": "Linen Shirt Dresses",
        "tag": "Raw Neutral",
        "description": "Generously proportioned relaxed shirt dress in unbleached organic linen slub, minimal and pure.",
        "details": "100% Unbleached Organic Linen • Dropped Shoulders • Raw Texture"
    },
    {
        "id": 24,
        "idx": 534,
        "slug": "blush-rose-shirt-dress",
        "title": "Blush Rose Cotton Shirt Dress",
        "category": "Linen Shirt Dresses",
        "tag": "Soft Pastel",
        "description": "Delicate dusty blush pink button-down dress tailored with clean side vents for fluid movement.",
        "details": "Breathable Cotton Voile • Mother of Pearl Buttons • Modest Coverage"
    },
    {
        "id": 25,
        "idx": 198,
        "slug": "azure-rose-duet",
        "title": "Azure & Rose Kaftan Duet",
        "category": "Everyday Casual",
        "tag": "Signature Duet",
        "description": "A vibrant pairing of our cornflower blue and rose blossom linen kaftans at the colonnaded facade.",
        "details": "Signature Pure Linens • Dual Colorway Showcase • Modest Craftsmanship"
    }
]

out_dir = os.path.join('public', 'gallery')
os.makedirs(out_dir, exist_ok=True)

def process_item(item):
    idx = item['idx']
    slug = item['slug']
    gfile = jpgs[idx]
    file_id = gfile['id']
    
    out_file = os.path.join(out_dir, f"{slug}.jpg")
    if os.path.exists(out_file) and os.path.getsize(out_file) > 50000:
        print(f"Skipping {slug}, already exists.")
        item['image'] = f"/gallery/{slug}.jpg"
        return item
    
    # Download high-res (w1200 gives pristine retina clarity while fast to transfer)
    url = f"https://drive.google.com/thumbnail?id={file_id}&sz=w1200"
    try:
        r = requests.get(url, timeout=20)
        if r.status_code == 200:
            temp_path = os.path.join(out_dir, f"temp_{slug}.jpg")
            with open(temp_path, 'wb') as f:
                f.write(r.content)
            
            # Open with Pillow, resize/optimize to crisp 1000px width with quality=88
            with Image.open(temp_path) as im:
                im = im.convert('RGB')
                # Max dimension 1200, preserve aspect ratio
                im.thumbnail((1200, 1600), Image.Resampling.LANCZOS)
                im.save(out_file, 'JPEG', quality=88, optimize=True)
            
            if os.path.exists(temp_path):
                os.remove(temp_path)
            
            size_kb = os.path.getsize(out_file) / 1024
            print(f"Saved {slug}.jpg ({size_kb:.1f} KB)")
            item['image'] = f"/gallery/{slug}.jpg"
            return item
    except Exception as e:
        print(f"Error processing {slug}: {e}")
    return item

print(f"Downloading and optimizing {len(curated_items)} photos to public/gallery/...")
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(process_item, curated_items))

print("Finished processing all gallery photos!")
