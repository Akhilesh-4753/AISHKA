import json, os, requests, concurrent.futures

with open('gdrive_files.json') as f:
    data = json.load(f)

jpgs = [item for item in data if item['path'].lower().endswith(('.jpg', '.jpeg', '.png'))]
print(f"Total image files: {len(jpgs)}")

os.makedirs('temp_preview', exist_ok=True)

# Sample every 5th image to cover the full range of 539 photos
sample_indices = list(range(0, len(jpgs), 6))
# Always include first and last
if (len(jpgs) - 1) not in sample_indices:
    sample_indices.append(len(jpgs) - 1)

print(f"Sampling {len(sample_indices)} images for outfit identification...")

def download_thumb(idx):
    item = jpgs[idx]
    filename = item['path'].replace('\\', '_').replace('/', '_')
    out_path = os.path.join('temp_preview', f"{idx:03d}_{filename}")
    if os.path.exists(out_path):
        return idx, True
    url = f"https://drive.google.com/thumbnail?id={item['id']}&sz=w300"
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            with open(out_path, 'wb') as f:
                f.write(r.content)
            return idx, True
    except Exception as e:
        return idx, False
    return idx, False

with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(download_thumb, sample_indices))

successful = [r for r in results if r[1]]
print(f"Downloaded {len(successful)} sampled thumbnails into temp_preview/")
