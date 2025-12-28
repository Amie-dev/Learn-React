
---

# React Props (Properties)

## 1. What are Props?

**Props** (short for *properties*) are used to **pass data from one component to another** in React.

👉 Props allow components to be **dynamic and reusable**.

**Simple definition:**

> Props are **read-only inputs** passed from a **parent component to a child component**.

---

## 2. Why Props are Needed?

* 🔁 Reuse the same component with different data
* 📦 Pass data from parent to child
* 🧩 Keep components flexible and dynamic
* 🧹 Maintain clean and organized code

---

## 3. How Props Work (One-Way Data Flow)

React follows **one-way data flow**:

```
Parent Component → Child Component
```

❌ Child cannot modify props
✅ Parent controls the data

---

## 4. Passing Props to a Component

### Parent Component

```jsx
function App() {
  return <Student name="Aminul" age={22} />;
}
```

### Child Component

```jsx
function Student(props) {
  return (
    <h2>
      Name: {props.name}, Age: {props.age}
    </h2>
  );
}
```

---

## 5. Props are Read-Only

Props **cannot be changed** inside the child component.

❌ Invalid:

```jsx
props.name = "Rahul"; // Error
```

✅ Correct:

* Change the data in the **parent**
* Or use **state** if modification is required

---

## 6. Props Destructuring

Instead of using `props.name`, we can **destructure props**.

### Without Destructuring

```jsx
function Student(props) {
  return <h2>{props.name}</h2>;
}
```

### With Destructuring

```jsx
function Student({ name }) {
  return <h2>{name}</h2>;
}
```

✔ Cleaner
✔ More readable

---

## 7. Passing Different Data Types as Props

### String

```jsx
<User name="Aminul" />
```

### Number

```jsx
<User age={22} />
```

### Boolean

```jsx
<User isLoggedIn={true} />
```

### Array

```jsx
<User skills={["JS", "React"]} />
```

### Object

```jsx
<User profile={{ city: "Delhi", role: "Developer" }} />
```

---

## 8. Using Props with Children

React provides a special prop called **`props.children`**.

### Example:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>React</h2>
  <p>Props Example</p>
</Card>
```

---

## 9. Default Props

Used when a prop is **not passed**.

```jsx
function User({ name = "Guest" }) {
  return <h2>Welcome {name}</h2>;
}
```

---

## 10. Props vs State (Quick Comparison)

| Props                  | State                    |
| ---------------------- | ------------------------ |
| Passed from parent     | Managed inside component |
| Read-only              | Mutable                  |
| Used for configuration | Used for dynamic data    |
| Cannot be changed      | Can be updated           |

---

## 11. Props in Reusable Components

```jsx
function Button({ text, color }) {
  return <button style={{ background: color }}>{text}</button>;
}

<Button text="Login" color="blue" />
<Button text="Signup" color="green" />
```

---

## 12. Key Points to Remember

* Props = **component inputs**
* Data flows **parent → child**
* Props are **immutable**
* Use **destructuring** for clean code
* Use **state** if data needs to change

---