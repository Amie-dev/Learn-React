

---

# 🔥 `useState` Deep Dive (React)

---

## 1️⃣ What is `useState`?

`useState` is a **React Hook** that allows **functional components** to:

* Store **state** (data that changes)
* **Trigger re-renders**
* **Preserve values** across renders

```js
const [state, setState] = useState(initialValue);
```

---

## 2️⃣ Why do we use `useState`?

### ✅ Core reasons

1. **To store UI-related dynamic data**

   * Counter values
   * Form inputs
   * Toggle states
   * API responses

2. **To re-render the component**

   * React updates the UI when state changes

3. **To persist values across renders**

   * State survives re-render cycles

---

## 3️⃣ Why NOT `const`, `let`, or `var`?

### ❌ Problem with normal variables

```js
let count = 0;

const increment = () => {
  count++;
};
```

### ❗ Issues:

1. ❌ React does **not track** variable changes
2. ❌ UI does **not update**
3. ❌ Value **resets on every render**

---

### 🔁 Why value resets?

Every re-render:

```js
function Component() {
  let count = 0; // runs again → reset
}
```

👉 React **re-executes the function**, so variables restart.

---

### ✅ How `useState` fixes this

```js
const [count, setCount] = useState(0);
```

* React stores `count` internally
* `setCount()` tells React:

  > “State changed → re-render component”

---

## 4️⃣ Key Rule of `useState`

> ❗ **Never update state directly**

❌ Wrong:

```js
count = count + 1;
```

✅ Correct:

```js
setCount(count + 1);
```

---

# 🔹 Updating State Correctly (Deep Dive)

---

## 5️⃣ Updating Primitive Values

```js
setCount(count + 1);
```

But ⚠️ **Better approach (safe)**:

```js
setCount(prev => prev + 1);
```

### ✅ Why?

* Prevents stale state issues
* Required in batch updates

---

## 6️⃣ Updating Objects (Immutability)

### ❌ Wrong (mutating state)

```js
user.name = "Aminul";
setUser(user);
```

🚫 React may NOT re-render

---

### ✅ Correct (Immutable update)

```js
setUser({
  ...user,
  name: "Aminul"
});
```

### 🔑 Rule:

> Always create a **new object**

---

## 7️⃣ Updating Nested Objects

```js
const [user, setUser] = useState({
  name: "Aminul",
  address: {
    city: "Delhi",
    pin: 110001
  }
});
```

✅ Correct update:

```js
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Mumbai"
  }
});
```

---

## 8️⃣ Updating Arrays (Immutability)

### ❌ Wrong (mutation)

```js
items.push("Apple");
setItems(items);
```

---

### ✅ Correct Ways

### ➕ Add item

```js
setItems([...items, "Apple"]);
```

### ❌ Remove item

```js
setItems(items.filter(item => item !== "Apple"));
```

### ✏️ Update item

```js
setItems(
  items.map(item =>
    item.id === 1 ? { ...item, name: "Updated" } : item
  )
);
```

---

## 9️⃣ Why Immutability is Important?

React compares:

* **Old reference**
* **New reference**

```js
oldState === newState ❌
```

If same reference → ❌ no re-render
If new reference → ✅ re-render

---

# 🔹 Batch Updates in React

---

## 🔟 What is Batch Updating?

React **groups multiple state updates** into a **single re-render** for performance.

```js
setCount(count + 1);
setCount(count + 1);
```

### ❌ Output:

```txt
count increases by 1 only
```

---

### ✅ Correct way (functional updates)

```js
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

✔ Result: count increases by **2**

---

### 🔑 Rule:

> When next state depends on previous state → **use functional update**

---

## 1️⃣1️⃣ Event Handling with State

---

### Example: Button Click

```js
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(prev => prev + 1);
};

<button onClick={handleClick}>+</button>
```

---

### Example: Input Field

```js
const [name, setName] = useState("");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

✔ Controlled Component
✔ React owns the state

---

## 1️⃣2️⃣ State Update is Asynchronous

```js
setCount(count + 1);
console.log(count); // old value
```

### Why?

* React schedules updates
* State updates happen **after render**

---

## 1️⃣3️⃣ When to Use `useState` vs Normal Variables

| Use Case               | `useState` | `let/const` |
| ---------------------- | ---------- | ----------- |
| UI updates             | ✅          | ❌           |
| Persist across renders | ✅          | ❌           |
| Temporary calc         | ❌          | ✅           |
| Form data              | ✅          | ❌           |

---

## ⭐ Interview Ready One-Liners

**Q: Why use `useState` instead of variables?**
👉 Because normal variables don’t trigger re-render and lose their value on every render.

**Q: Why immutability matters?**
👉 React detects changes by reference, not by mutation.

**Q: Why functional update?**
👉 To avoid stale state and handle batch updates safely.

---
