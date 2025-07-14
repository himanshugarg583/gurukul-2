import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: '/gurukul-2/',
  plugins: [react(),tailwindcss()],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   base: '/gurukul/', // 👈 MUST match your GitHub repo name
//   plugins: [react()],
// })
