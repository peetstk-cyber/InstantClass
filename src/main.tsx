import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ── iOS Safari dvh fix ──────────────────────────────────────────────────────
// iOS Safari reports an incorrect dvh on initial load (address bar included).
// We calculate the real visible height from window.innerHeight and store it
// as --real-vh so layout uses the correct value on first paint.
const setRealVH = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--real-vh', `${vh}px`);
};
setRealVH();
window.addEventListener('resize', setRealVH);
window.addEventListener('orientationchange', () => {
  // Wait for orientation animation to finish before recalculating
  setTimeout(setRealVH, 150);
});
// ────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
