# 🌐 Cyberbullying Detector - Chrome Extension

This Chrome Extension works alongside a Flask-based backend API to scan and highlight cyberbullying-related content directly on any webpage you visit.

---

## ⚙️ Features

- 🧠 Connects to a local server (Flask API) to detect and classify text on the current webpage.
- 🎯 Highlights content categorized under:
  - Cyberstalking
  - Doxing
  - Sexual Harassment
  - Revenge Porn
  - Slut Shaming
- ✅ Ignores safe content (`Non-Cyberbullying` class).

---

## 🚀 How to Use

### 1. Ensure Flask Backend is Running

Start your Flask server locally (should be running on `http://127.0.0.1:5000`):

```bash
python app.py
```

### 2. Load Extension into Chrome

1. Navigate to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click on **Load Unpacked**
4. Select the `chrome-extension/` directory

### 3. Scan Webpages

- Click on the extension icon in the Chrome toolbar
- Press the **Scan** button to detect and highlight offensive content on the current webpage

---

## 📁 Folder Structure

```
chrome-extension/
├── manifest.json
├── popup/
│   ├── popup.html
│   └── popup.js
├── background.js
├── content.js
└── icons/
    └── icon.png
```

---

## 🛠️ Tech Stack

- HTML, CSS, JavaScript
- Chrome Extension APIs (Manifest V3)
- Flask (for backend predictions)

---

## ❗ Note

Ensure the webpage you're scanning is not a `chrome://` or `newtab` page. Chrome restricts extensions from accessing internal browser pages.

---

## 👩‍💻 Author

Developed by **Srishti Chordia**
