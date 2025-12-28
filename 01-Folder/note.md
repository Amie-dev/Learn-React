
---

## What is React?

**React** is a **JavaScript library** used to build **user interfaces (UI)**, especially **single-page applications (SPA)**.

It is mainly used to create:

* Fast
* Interactive
* Reusable UI components

React was developed by **Facebook (Meta)**.

---

## Why do we need React?

Before React:

* Web pages were slow
* Updating UI required full page reloads
* Code was hard to manage as apps grew

### React solves these problems by:

1. **Component-based architecture**
   → UI is divided into small reusable parts (components)

2. **Fast performance**
   → Uses **Virtual DOM** instead of real DOM

3. **Reusable code**
   → Write once, use many times

4. **Easy state management**
   → UI updates automatically when data changes

5. **Large community & ecosystem**
   → Huge support, libraries, tools

---

## Basic Theory of React

### 1. Component

* A component is a **reusable piece of UI**
* Example: Button, Navbar, Card

Types:

* Functional Components (most used)
* Class Components (older)

---

### 2. JSX (JavaScript XML)

* JSX allows writing **HTML inside JavaScript**
* Makes code easy to read and write

Example:

```jsx
const App = () => {
  return <h1>Hello React</h1>;
};
```

---

### 3. Virtual DOM

* React creates a **virtual copy of the real DOM**
* Changes are first made in Virtual DOM
* Only the changed part updates in Real DOM
  ➡️ Faster performance

---

### 4. State & Props

* **State** → Internal data of a component (changeable)
* **Props** → Data passed from parent to child (read-only)

---

## What is a Library?

A **library** is a collection of reusable code.

* You control the flow
* You call the library when needed

Example:

* React
* jQuery
* Lodash

---

## What is a Framework?

A **framework** is a complete structure for building applications.

* Framework controls the flow
* You must follow its rules

Example:

* Angular
* Django
* Spring

---

## Framework vs Library (Important for Exams)

| Feature     | Library                  | Framework                  |
| ----------- | ------------------------ | -------------------------- |
| Control     | Developer controls flow  | Framework controls flow    |
| Flexibility | More flexible            | Less flexible              |
| Scope       | Focused on specific task | Full application structure |
| Example     | React                    | Angular                    |

---

## Is React a Framework or Library?

👉 **React is a Library**, not a framework.

Reason:

* React only handles **UI layer**
* Routing, state management, API calls need extra libraries

---

