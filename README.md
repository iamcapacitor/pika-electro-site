# Steps took for setup

## 1. create vite + react app
```js
 npm create vite@latest
```
## 2. setup tailwind css
- install package
```js
npm install tailwindcss @tailwindcss/vite
```
- update `vite.config.js` file
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
```
- add this line top of index.css
```js
@import "tailwindcss";
```
- done
## 3. for multipages in react
- install react-route-dom
```js
npm install react-router-dom
```
- add this line in app.jsx
```js
import { createBrowserRouter } from 'react-router-dom'
```
- check main.jsx to check other setup of this
