
# 🔄 Two-Way Binding Explained

- **Definition**: Two-way binding means the **UI (input field)** and the **state (data model)** are always in sync.  
- **Flow**:  
  1. User types → state updates.  
  2. State changes → input reflects the new value.  

This creates a continuous loop: **state ↔ UI**.

---

## 🛠️ React Implementation

React doesn’t have automatic two-way binding like Angular, but you achieve it using **controlled components**.

### Example

```jsx
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;
```

### 🔹 How it works

- `value={text}` → binds the input field to state.  
- `onChange={(e) => setText(e.target.value)}` → updates state when user types.  
- `<p>` shows the updated state instantly.  

---

## 📌 Key Points

- **Controlled components** are the React way of two-way binding.  
- Without binding, inputs are **uncontrolled** (React doesn’t manage their value).  
- Two-way binding is essential for **forms, validation, and dynamic UI updates**.  

---

## ⚠️ Pitfalls

- Forgetting `value` → input becomes uncontrolled.  
- Mixing controlled and uncontrolled inputs → causes warnings.  
- Overusing two-way binding → can make components harder to optimize.  

---