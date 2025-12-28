
---

# Create React App using Vite

## Step 1: Create React App with Vite

### Requirements

* Node.js installed (v16+ recommended)
* npm or yarn

### Command

```bash
npm create vite@latest my-react-app
```

### Select options

```
✔ Select a framework → React
✔ Select a variant → JavaScript or TypeScript
```

Then:

```bash
cd my-react-app
npm install
npm run dev
```

---

## Project Folder Structure (Vite + React)

```
my-react-app
│
├── node_modules/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

# Folder & File Explanation (IMPORTANT)

---

## 1. node_modules/

* Contains all **installed dependencies**
* Created after `npm install`
* ❌ Do not edit manually

---

## 2. public/

Stores **static files** that don’t go through bundling.

### vite.svg

* Default Vite logo
* Can be deleted if not needed

➡️ Files here are served **directly**.

---

## 3. src/ (Main Application Code)

### a) assets/

* Stores images, icons, fonts
* Used inside React components

Example:

```js
import logo from './assets/react.svg'
```

---

### b) App.jsx

* **Main component**
* UI logic starts here

Example:

```jsx
function App() {
  return <h1>Hello React + Vite</h1>
}

export default App
```

---

### c) App.css

* Styles for `App.jsx`

---

### d) main.jsx

* **Entry point of React app**
* Renders `App` into the DOM

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

### e) index.css

* Global styles
* Applied to entire app

---

## 4. index.html (VERY IMPORTANT)

* Only **HTML file**
* React app mounts here

```html
<div id="root"></div>
```

➡️ React injects UI inside `#root`.

---

## 5. .gitignore

* Files ignored by Git
* Example:

  * node_modules
  * dist
  * env files

---

## 6. package.json

* Project metadata
* Dependencies
* Scripts

Important scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 7. package-lock.json

* Locks exact dependency versions
* Ensures same install everywhere

---

## 8. vite.config.js

* Vite configuration file

Example:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```

---

# How React App Runs (Flow)

```
index.html
   ↓
main.jsx
   ↓
App.jsx
   ↓
Components
```

---

## Why Vite over Create React App (CRA)?

| Feature    | CRA     | Vite        |
| ---------- | ------- | ----------- |
| Speed      | Slow    | Very fast   |
| Dev Server | Webpack | ESBuild     |
| Config     | Heavy   | Lightweight |
| Build Time | Slow    | Fast        |

---

## Short Exam Answer (3–4 Marks)

**Vite is a modern build tool used to create fast React applications. It provides instant server start, faster hot reload, and simple configuration.**

---
