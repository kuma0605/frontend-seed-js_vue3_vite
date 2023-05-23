function screenAdpative() {
  let docWidth = document.documentElement.clientWidth
  let fontsize = (docWidth / 1920) * 16
  let dpr = window.devicePixelRatio
  let customFontSize = fontsize * (1.25 / dpr)
  // if(customFontSize<10)customFontSize=10;
  console.log(dpr, fontsize, customFontSize)
  document.documentElement.style.fontSize = customFontSize + 'px'
}

window.onresize = screenAdpative

//优化缩放
screenAdpative()
setTimeout(() => {
  screenAdpative()
}, 0)
