;(function () {
  function redraw() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    ctx.scale(canvas.width, canvas.height)

    ctx.strokeStyle = 'rgb(200,0,0)'
    ctx.lineWidth = 0.01
    ctx.strokeRect(0.25, 0.25, 0.5, 0.5)
  }

  document.addEventListener('DOMContentLoaded', () => {
    redraw()
  })

  document.addEventListener('resize', redraw)
})()
