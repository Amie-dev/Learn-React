

---

# React Components

## 1. What is a React Component?

A **React component** is a **reusable, independent piece of UI**.
Each component controls **what appears on the screen** using logic (JavaScript) and structure (JSX).

👉 In simple words:
**Components are the building blocks of a React application.**

Example:

* Button
* Navbar
* Login form
* Card
* Footer

---

## 2. Why Components are Important?

* 🔁 **Reusability** – write once, use many times
* 🧩 **Modular code** – app divided into small parts
* 🛠 **Easy maintenance** – change one component, not the whole app
* 📈 **Scalability** – easy to grow large applications

---

## 3. Types of React Components

### 1️⃣ Functional Components (Modern & Recommended)

* Written as **JavaScript functions**
* Can use **React Hooks** (`useState`, `useEffect`, etc.)
* Simple and clean syntax

Example:

```jsx
function Welcome() {
  return <h1>Hello React</h1>;
}
```

Or using arrow function:

```jsx
const Welcome = () => {
  return <h1>Hello React</h1>;
};
```

---

### 2️⃣ Class Components (Older Approach)

* Written using **ES6 classes**
* Uses `this` keyword
* Lifecycle methods instead of hooks

Example:

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello React</h1>;
  }
}
```

⚠️ Mostly replaced by **functional components + hooks**

---

## 4. Component Naming Rules

* Component names must **start with a Capital letter**
* React treats lowercase names as **HTML elements**

✅ Correct:

```jsx
function Header() {}
```

❌ Wrong:

```jsx
function header() {}
```

---

## 5. JSX in Components

Components return **JSX (JavaScript XML)**.

JSX:

* Looks like HTML
* Runs inside JavaScript
* Must return **one parent element**

Example:

```jsx
function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>React Components</p>
    </div>
  );
}
```

---

## 6. Props in Components

**Props** are used to **pass data from parent to child component**.

Example:

```jsx
function Student(props) {
  return <h2>Name: {props.name}</h2>;
}

// Usage
<Student name="Aminul" />
```

🔹 Props are **read-only**
🔹 Used for dynamic data

---

## 7. State in Components

**State** is used to **store and manage component data** that can change.

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

🔹 State is **mutable**
🔹 Triggers **re-render** when updated

---

## 8. Component Reusability Example

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}

<Button text="Login" />
<Button text="Signup" />
```

---

## 9. Component Tree (Hierarchy)

React apps follow a **tree structure**:

```b
App
 ├── Header
 ├── Main
 │    ├── Card
 │    └── Card
 └── Footer
```

---

## 10. Key Points to Remember

* Components are **independent & reusable**
* Prefer **functional components**
* Use **props** for input
* Use **state** for dynamic data
* Component names must be **capitalized**

