**Quick Answer:**  
Local storage in React lets you persist data in the browser across page reloads and sessions. You can use the `localStorage` API (`setItem`, `getItem`, `removeItem`) directly or integrate it with React hooks like `useState` and `useEffect` to keep state synchronized.

---

## 🌐 What is Local Storage?

- **[localStorage](guide://action?prefill=Tell%20me%20more%20about%3A%20localStorage)** is part of the Web Storage API that stores key-value pairs in the browser with no expiration date.  
- Data remains even after refreshing or closing the browser, unlike **[sessionStorage](guide://action?prefill=Tell%20me%20more%20about%3A%20sessionStorage)** which clears when the tab/window closes.  
- It’s often used for **[persisting user preferences](guide://action?prefill=Tell%20me%20more%20about%3A%20persisting%20user%20preferences)** (like dark mode), saving form inputs, or caching small amounts of app state.

---

## ⚙️ How to Use Local Storage in React

### 1. **[Storing Data](guide://action?prefill=Tell%20me%20more%20about%3A%20Storing%20Data)**

```javascript
localStorage.setItem('username', 'JohnDoe');
```

### 2. **[Retrieving Data](guide://action?prefill=Tell%20me%20more%20about%3A%20Retrieving%20Data)**

```javascript
const user = localStorage.getItem('username');
```

### 3. **[Removing Data](guide://action?prefill=Tell%20me%20more%20about%3A%20Removing%20Data)**

```javascript
localStorage.removeItem('username');
```

---

## 🔗 Using Local Storage with React Hooks

You can combine `localStorage` with React’s `useState` and `useEffect`:

```javascript
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

- **[Initialization with localStorage](guide://action?prefill=Tell%20me%20more%20about%3A%20Initialization%20with%20localStorage)**: Load saved value when the component mounts.  
- **[Syncing state changes](guide://action?prefill=Tell%20me%20more%20about%3A%20Syncing%20state%20changes)**: Use `useEffect` to update localStorage whenever state changes.  

---

## ⚠️ Limitations & Risks
- **[Not secure](guide://action?prefill=Tell%20me%20more%20about%3A%20Not%20secure)**: Data is stored in plain text, accessible via browser dev tools.  
- **[Limited size](guide://action?prefill=Tell%20me%20more%20about%3A%20Limited%20size)**: Typically around 5MB per domain.  
- **[Not a database](guide://action?prefill=Tell%20me%20more%20about%3A%20Not%20a%20database)**: Shouldn’t be used for sensitive or large-scale data.  
- **[Cleared by user](guide://action?prefill=Tell%20me%20more%20about%3A%20Cleared%20by%20user)**: Users can manually clear cache/storage, so persistence isn’t guaranteed.

---
