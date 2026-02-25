<div align="center">

# 🌿 Tree Tracer

**A lightweight, client-side web app to track the health of your indoor plants.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat&logo=daisyui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)




</div>

---

## Overview

**Tree Tracer** (branded in the UI as *Plant Tracer*) is a simple, responsive dashboard for managing your houseplants. Each plant is represented as a card displaying its common name, Latin name, lighting and watering requirements, care notes, and a quick status toggle — **Thriving** or **Struggling**. Summary counters and status filters let you see the state of your collection at a glance.

No backend. No build step. Just open `index.html` and go.

---

## ✨ Features

- 📊 **Live counters** — total plants, thriving, and struggling, updated in real time
- 🧾 **Add & delete cards** — manage your plant collection dynamically
- 🔍 **Status filtering** — toggle between All, Thriving, and Struggling views
- 🎨 **Responsive design** — built with Tailwind CSS and DaisyUI components
- ⚡ **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com) |
| Scripting | Vanilla JavaScript |
| Hosting | Static files — no build step required |

---

## 🚀 Getting Started

### Prerequisites

None. This project runs entirely in the browser.

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/tree-tracer.git

# 2. Navigate into the project
cd tree-tracer

# 3. Open in your browser
open index.html
```

> **Tip:** For a better development experience, use a local server such as the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension.

---

## 📁 Project Structure
```
tree-tracer/
├── index.html          # Main entry point with pre-populated plant cards
├── tailwind.init.css   # Custom Tailwind configuration and utilities
└── script/
    └── script.js       # Counters, filtering, and all interactivity
```

---

## 🗺 Roadmap

| Status | Feature |
|---|---|
| ✅ Done | Card-based plant display with status badges |
| ✅ Done | Dynamic counters and status filtering |
| 🔄 In Progress | Plant addition form with input validation |
| 🔄 In Progress | `localStorage` persistence |
| ⬜ Planned | Edit functionality for existing cards |
| ⬜ Planned | Advanced filtering (by light/water preference) |
| ⬜ Planned | Default plant data via JSON or public API |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'Add some feature'`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

> For major changes, please open an issue first to discuss your proposal.

---



<div align="center">
Made with 🌱 by Sakibul Islam
</div>
