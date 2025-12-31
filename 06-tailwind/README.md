
---

## 📝 Steps to Install Tailwind CSS in React (Vite)

1. **Create a new Vite project**

```bash
   npm create vite@latest my-project
   cd my-project
```

2. **Install Tailwind CSS with Vite plugin**

```bash
   npm install tailwindcss @tailwindcss/vite
```

3. **Configure Vite to use Tailwind CSS**

   - Open `vite.config.js`
   - Add the Tailwind plugin:

 ```js
     import { defineConfig } from 'vite'
     import tailwindcss from '@tailwindcss/vite'

     export default defineConfig({
       plugins: [
         tailwindcss(),
       ],
     })
  ```

4. **Import Tailwind into your CSS**
   - In `index.css`, add:
     ```css
     @import "tailwindcss";
     ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Start using Tailwind classes in your React components**
   - Example (`App.jsx`):
     ```jsx
     export default function App() {
       return (
         <h1 className="text-3xl font-bold underline text-blue-600">
           Hello Tailwind + React!
         </h1>
       )
     }
     ```

---
