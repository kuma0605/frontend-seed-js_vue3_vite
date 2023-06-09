import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postCssPxToRem from "postcss-pxtorem"
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(),""); 
  let serverUrl = env.VITE_API_BASE_URL;
  return {
    plugins: [vue(), vueJsx(), UnoCSS({
      configFile: './uno.config.js',
    }),],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 16, // 1rem的大小
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          })
        ]
      }
    },
    server:{
      host:"0.0.0.0",
      port:5173,
      proxy:{
        // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
        
        '/sys': {
          target: serverUrl,
          changeOrigin: true
        },
        '/study': {
          target: serverUrl,
          changeOrigin: true
        },
        '/business': {
          target: serverUrl,
          changeOrigin: true
        },
        '/kh': {
          target: serverUrl,
          changeOrigin: true
        },
        '/statics': {
          target: serverUrl,
          changeOrigin: true
        },
        '/logout': {
          target: serverUrl,
          changeOrigin: true
        }
      }
    }
  }
})
