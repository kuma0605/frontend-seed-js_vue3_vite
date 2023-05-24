# 集成
    [✅]pinia
    [✅]unocss
    [✅]tailwindcss
    [✅](element-plus)[https://element-plus.org/zh-CN/component/button.html]
    [✅]axios请求封装
    [✅]eslint
    [✅]prettier
    [✅]屏幕适配(rem)
# frontend-seed_vue3_js

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn run dev
```

### Compile and Minify for Production

```sh
yarn run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn run lint
```

## 开发问题汇总

### windicss字体颜色优先级问题
    通过 Arbitrary values 解决，text-[#50d71e]
    还可通过前置感叹号，如 !text-gray

### download不生效问题
    download属性只会在href和你前端的地址是同源(非跨域)才会生效
    https://www.cnblogs.com/tseaki/p/13685665.html


### axios formdata请求
    方式一：qs.stringify
    方式二：new FormData
    jquery场景：data: "menuId=" + menuId, 对应axios要用qs.stringify({menuId})

### 动态加载图片
    function getImageUrl(name) {
      // 这里要写相对路径，不能用@，不明白
      return new URL(`../assets/img/nav/${name}.png`, import.meta.url).href
    }

### axios不能拦截302
    http://events.jianshu.io/p/42e16e91c515 
    Ajax 不能处理 302 状态码的响应，这个行为是浏览器的默认行为。

### 跨域图片不显示
    https://blog.qingyi1220.cn/posts/12492.html
    在index.html 中增加一个meta标签，不发送HTTP Referer首部。
    <meta name="referrer" content="no-referrer">
