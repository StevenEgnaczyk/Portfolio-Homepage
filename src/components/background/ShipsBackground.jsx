import React, { useEffect, useRef } from 'react'
import './ShipsBackground.css'

const ShipsBackground = () => {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const ctx = canvas.getContext('2d')
    let raf = 0
    let width = 0
    let height = 0
    let dpr = 1
    let time = 0
    let glitchUntil = 0
    let nextGlitch = 12000 + Math.random() * 8000
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ships = [
      { x: 0.08, y: 0.82, scale: 1.35, speed: 0.01, direction: 1, lights: 5 },
      { x: 0.5, y: 0.88, scale: 1.0, speed: 0.007, direction: -1, lights: 4 },
      { x: 0.28, y: 0.93, scale: 0.8, speed: 0.013, direction: 1, lights: 3 },
      { x: 0.78, y: 0.78, scale: 1.15, speed: 0.006, direction: -1, lights: 5 },
    ]

    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.55,
      r: Math.random() * 1.2 + 0.25,
      a: Math.random() * 0.4 + 0.12,
      twinkle: Math.random() * Math.PI * 2,
    }))

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = wrap.clientWidth || window.innerWidth
      height = wrap.clientHeight || window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawShip = (ship, t, glitching) => {
      const cycle = ((ship.x + t * ship.speed * ship.direction) % 1.4 + 1.4) % 1.4
      const baseX = cycle * (width + 220) - 110
      const baseY = ship.y * height
      const s = ship.scale * Math.min(width, 1400) * 0.09

      ctx.save()
      ctx.globalAlpha = 0.85
      if (ship.direction < 0) {
        ctx.translate(baseX + s * 2.4, baseY)
        ctx.scale(-1, 1)
      } else {
        ctx.translate(baseX, baseY)
      }

      if (glitching) {
        ctx.translate((Math.random() - 0.5) * 3, 0)
      }

      ctx.fillStyle = 'rgba(0, 229, 255, 0.06)'
      ctx.beginPath()
      ctx.ellipse(s * 1.2, s * 0.45, s * 1.3, s * 0.22, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = 'rgba(18, 28, 38, 0.9)'
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)'
      ctx.lineWidth = 1.25
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(s * 2.4, 0)
      ctx.lineTo(s * 2.1, s * 0.36)
      ctx.lineTo(s * 0.12, s * 0.36)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(22, 34, 48, 0.95)'
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.3)'
      ctx.beginPath()
      ctx.rect(s * 0.55, -s * 0.45, s * 0.9, s * 0.45)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.rect(s * 0.85, -s * 0.78, s * 0.35, s * 0.33)
      ctx.fill()
      ctx.stroke()

      ctx.strokeStyle = 'rgba(0, 229, 255, 0.5)'
      ctx.lineWidth = 1.25
      ctx.beginPath()
      ctx.moveTo(s * 1.05, -s * 0.78)
      ctx.lineTo(s * 1.05, -s * 1.35)
      ctx.stroke()

      for (let i = 0; i < ship.lights; i++) {
        const lx = s * (0.3 + i * (1.8 / Math.max(ship.lights - 1, 1)))
        const flicker = 0.5 + Math.sin(t * 3 + i * 1.7 + ship.x * 10) * 0.25
        ctx.fillStyle = `rgba(0, 229, 255, ${flicker})`
        ctx.shadowColor = '#00e5ff'
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(lx, s * 0.1, Math.max(1.5, s * 0.045), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0

      const grad = ctx.createLinearGradient(0, s * 0.36, 0, s * 1.15)
      grad.addColorStop(0, 'rgba(0, 229, 255, 0.12)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(s * 0.15, s * 0.36, s * 2.0, s * 0.7)

      ctx.restore()
    }

    const frame = (ts) => {
      time = reducedMotion ? 0 : ts * 0.001
      ctx.clearRect(0, 0, width, height)

      stars.forEach((star) => {
        const tw = reducedMotion ? 1 : 0.55 + Math.sin(time * 1.2 + star.twinkle) * 0.45
        ctx.fillStyle = `rgba(180, 230, 255, ${star.a * tw})`
        ctx.beginPath()
        ctx.arc(star.x * width, star.y * height, star.r, 0, Math.PI * 2)
        ctx.fill()
      })

      const y = height * 0.74
      const water = ctx.createLinearGradient(0, y - 40, 0, height)
      water.addColorStop(0, 'transparent')
      water.addColorStop(0.35, 'rgba(0, 40, 55, 0.25)')
      water.addColorStop(1, 'rgba(0, 10, 18, 0.45)')
      ctx.fillStyle = water
      ctx.fillRect(0, y - 40, width, height - y + 40)

      ctx.strokeStyle = 'rgba(0, 229, 255, 0.1)'
      ctx.beginPath()
      ctx.moveTo(0, y)
      for (let x = 0; x <= width; x += 20) {
        const wave = reducedMotion ? 0 : Math.sin(x * 0.02 + time * 0.65) * 2
        ctx.lineTo(x, y + wave)
      }
      ctx.stroke()

      const glitching = !reducedMotion && ts < glitchUntil
      ships.forEach((ship) => drawShip(ship, time, glitching))

      if (!reducedMotion) {
        if (ts > nextGlitch) {
          glitchUntil = ts + 50 + Math.random() * 60
          nextGlitch = ts + 12000 + Math.random() * 10000
        }
        if (glitching) {
          const sy = height * (0.55 + Math.random() * 0.25)
          const sh = 2 + Math.random() * 6
          try {
            const img = ctx.getImageData(0, sy, width, sh)
            ctx.putImageData(img, (Math.random() - 0.5) * 8, sy)
          } catch {
            // ignore
          }
        }
        raf = requestAnimationFrame(frame)
      }
    }

    resize()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => {
      resize()
      if (reducedMotion) frame(0)
    }) : null
    if (ro) ro.observe(wrap)
    window.addEventListener('resize', resize)
    if (reducedMotion) {
      frame(0)
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      if (ro) ro.disconnect()
    }
  }, [])

  return (
    <div className="ships-bg" ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} className="ships-bg__canvas" />
    </div>
  )
}

export default ShipsBackground
