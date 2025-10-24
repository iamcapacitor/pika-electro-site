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