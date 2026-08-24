import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ── iOS Safari Viewport Measurement ──────────────────────────────────────────
const setRealVH = () => {
  const h = window.visualViewport?.height || window.innerHeight || document.documentElement?.clientHeight || 800;
  document.documentElement.style.setProperty('--real-vh', `${h * 0.01}px`);
  document.documentElement.style.setProperty('--app-height', `${h}px`);
};
setRealVH();
window.addEventListener('resize', setRealVH);
window.addEventListener('orientationchange', () => {
  setTimeout(setRealVH, 100);
  setTimeout(setRealVH, 300);
});
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', setRealVH);
}
// ────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
