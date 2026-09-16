import requests, json

with open('gdrive_files.json') as f:
    data = json.load(f)

jpgs = [item for item in data if item['path'].lower().endswith(('.jpg', '.jpeg', '.png'))]
first = jpgs[0]
file_id = first['id']
thumb_url = f"https://drive.google.com/thumbnail?id={file_id}&sz=w600"

resp = requests.get(thumb_url, timeout=10)
print(f"Status: {resp.status_code}, Content-Type: {resp.headers.get('Content-Type')}, Bytes: {len(resp.content)}")

if resp.status_code == 200 and 'image' in resp.headers.get('Content-Type', ''):
    with open('test_thumb.jpg', 'wb') as f:
        f.write(resp.content)
    print("Successfully saved test_thumb.jpg!")
