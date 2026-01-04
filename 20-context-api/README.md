
---

## 1️⃣ Props Drilling in React

### 🔹 What is Props Drilling?

**Props drilling** means passing data from a **parent component to deeply nested child components** through multiple intermediate components, even if those components don’t need the data.

### 🔹 Example

```jsx
function App() {
  return <ComponentA user="Aminul" />;
}

function ComponentA({ user }) {
  return <ComponentB user={user} />;
}

function ComponentB({ user }) {
  return <ComponentC user={user} />;
}

function ComponentC({ user }) {
  return <h1>Hello {user}</h1>;
}
```

📌 Here, `ComponentA` and `ComponentB` **don’t use `user`**, but still pass it → this is props drilling.

---

### 🔹 Problems with Props Drilling

❌ Code becomes **hard to read**
❌ Difficult to **maintain & debug**
❌ Adding new props requires updating many components
❌ Poor scalability in large apps

---

### 🔹 When Props Drilling is OK

✅ Component depth is small
✅ Data is used by only 1–2 levels
✅ Small applications

---

## 2️⃣ Context API in React

### 🔹 What is Context API?

**Context API** allows you to **share data globally** across components **without passing props manually at every level**.

👉 It solves the **props drilling problem**.

---

### 🔹 When to Use Context API?

Use Context when data is:

* User authentication (user, token)
* Theme (dark/light)
* Language (i18n)
* Global settings
* Cart data (e-commerce)

---

## 3️⃣ How Context API Works (3 Steps)

### ✅ Step 1: Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

### ✅ Step 2: Provide Context

```jsx
function App() {
  return (
    <UserContext.Provider value="Aminul">
      <ComponentA />
    </UserContext.Provider>
  );
}
```

---

### ✅ Step 3: Consume Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function ComponentC() {
  const user = useContext(UserContext);
  return <h1>Hello {user}</h1>;
}
```

📌 Now **no props drilling needed** 🎉

---

## 4️⃣ Props Drilling vs Context API

| Feature          | Props Drilling         | Context API          |
| ---------------- | ---------------------- | -------------------- |
| Data flow        | Parent → Child → Child | Direct access        |
| Code cleanliness | Messy                  | Clean                |
| Scalability      | Poor                   | Good                 |
| Best for         | Small apps             | Medium–large apps    |
| Performance      | Better for small data  | Can cause re-renders |

---

## 5️⃣ Important Interview Points ⭐

* Context API is **not a state manager** like Redux
* Context causes **re-render of all consumers**
* Avoid using Context for **frequently changing data**
* Combine Context + `useReducer` for better structure

---

## 6️⃣ Simple One-Line Difference (Exam Tip)

> **Props Drilling** passes data through multiple components manually,
> **Context API** shares data globally without prop passing.

---

