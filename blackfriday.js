/* Tema Black Friday de Keys Cars (negro y dorado).
   Se activa solo del 20 de noviembre al 30 de noviembre y se apaga después.
   Para probar: ?blackfriday=1 (forzar) o ?blackfriday=0 (apagar).
   Es solo decoración: no toca el catálogo ni los datos. Para quitarlo del todo: borrar este archivo y su línea <script> en index.html. */
(function(){
  var ANIO = 2026, VIERNES = new Date(ANIO, 10, 27, 0, 0, 0);
  try{
    var q = new URLSearchParams(location.search).get('blackfriday');
    var d = new Date(), m = d.getMonth(), day = d.getDate();
    var enFecha = (m === 10 && day >= 20 && day <= 30);
    if (q === '0' || (q !== '1' && !enFecha)) return;
  }catch(e){ return; }

  var css = '' +
  /* paleta: el azul del sitio pasa a negro; el dorado se mantiene */
  ':root{--navy:#0B0B0D;--navy-dark:#17171B;--navy-darker:#000;--gold:#FFC400;--gold-dark:#E6AE00;}' +
  'header{background:#0B0B0D!important;border-bottom:3px solid #FFC400!important;}' +
  'header .brand-text,header .brand-text b{color:#FFC400!important;}' +
  'header .brand-sub,header .brand-rif{color:#D9D9DE!important;}' +
  'header .nav-links a{color:#F2F2F4!important;}' +
  'header .nav-links a:hover{color:#FFC400!important;}' +
  '.hero{background:radial-gradient(900px 480px at 85% -10%,rgba(255,196,0,.22),transparent 60%),linear-gradient(180deg,#141418,#050506)!important;border-bottom:4px solid #FFC400!important;}' +
  '.hero::before{background-image:repeating-linear-gradient(-45deg,rgba(255,196,0,.07) 0 14px,transparent 14px 28px)!important;background-size:auto!important;opacity:1!important;}' +
  '.hero p{color:#D5D5DB!important;}' +
  '.hero-stats div span{color:#C8C8CF!important;}' +
  /* todo en negro: la foto de las llaves va recortada, sin parche azul */
  '.hero-bg-image{background:radial-gradient(700px 420px at 80% 50%,rgba(255,196,0,.16),transparent 65%),#050506!important;}' +
  '.hero-photo-color,.hero-photo-tint,.hero-photo-frame,.shine-sweep{display:none!important;}' +
  '.hero-key-photo{-webkit-mask-image:none!important;mask-image:none!important;filter:drop-shadow(0 14px 26px rgba(0,0,0,.85)) drop-shadow(0 0 28px rgba(255,196,0,.28)) brightness(1.06)!important;height:96%!important;right:6%!important;}' +
  '.game-panel{background:radial-gradient(120% 140% at 50% -10%,#26210a 0%,#0e0e10 45%,#000 100%)!important;}' +
  '.game-panel > p{color:#D5D5DB!important;}' +
  '.reels{background:#111114!important;border-color:#FFC400!important;}' +
  /* cinta superior con cuenta regresiva */
  '.bf-bar{position:relative;z-index:41;display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;padding:8px 14px;background:repeating-linear-gradient(-45deg,#FFC400 0 18px,#0B0B0D 18px 36px);text-align:center;}' +
  '.bf-bar-in{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;padding:6px 18px;border-radius:999px;background:#0B0B0D;color:#fff;font:700 14px/1.2 "Plus Jakarta Sans",Inter,system-ui,sans-serif;box-shadow:0 0 0 2px #FFC400;}' +
  '.bf-bar b{color:#FFC400;letter-spacing:.08em;text-transform:uppercase;}' +
  '.bf-count{display:flex;gap:6px;}' +
  '.bf-count span{min-width:46px;padding:3px 6px;border-radius:6px;background:#FFC400;color:#0B0B0D;font:800 15px/1.1 "Plus Jakarta Sans",Inter,sans-serif;}' +
  '.bf-count small{display:block;font:700 9px/1 Inter,sans-serif;letter-spacing:.06em;text-transform:uppercase;}' +
  '.bf-bar a{color:#0B0B0D;background:#FFC400;padding:5px 12px;border-radius:999px;font:800 12px/1 Inter,sans-serif;text-decoration:none;}' +
  /* sello en el inicio */
  '.bf-seal{display:inline-flex;align-items:center;gap:10px;margin:0 0 10px;padding:8px 16px;border-radius:10px;background:#FFC400;color:#0B0B0D;font:800 13px/1 "Plus Jakarta Sans",Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase;transform:rotate(-2deg);box-shadow:0 6px 0 #000,0 10px 24px rgba(255,196,0,.35);}' +
  '.bf-seal svg{width:18px;height:18px;}' +
  '.hero h1{text-shadow:0 2px 18px rgba(255,196,0,.25);}' +
  /* destellos y etiquetas que caen */
  '.bf-layer{position:fixed;inset:0;z-index:35;pointer-events:none;overflow:hidden;}' +
  '.bf-bit{position:absolute;top:-60px;opacity:0;animation:bfFall var(--t,12s) linear var(--d,0s) infinite;}' +
  '.bf-tag{display:flex;align-items:center;justify-content:center;width:24px;height:24px;opacity:.55;border-radius:50%;background:#FFC400;color:#0B0B0D;font:800 14px/1 "Plus Jakarta Sans",Inter,sans-serif;box-shadow:0 0 14px rgba(255,196,0,.6);}' +
  '.bf-spark{width:7px;height:7px;opacity:.6;background:#FFC400;transform:rotate(45deg);box-shadow:0 0 10px rgba(255,196,0,.9);}' +
  '@keyframes bfFall{0%{transform:translate(0,0) rotate(0);opacity:0}8%{opacity:.9}92%{opacity:.9}100%{transform:translate(var(--x,30px),108vh) rotate(360deg);opacity:0}}' +
  /* ruleta */
  '.bf-on .game-panel{box-shadow:0 0 0 3px #FFC400,0 0 26px rgba(255,196,0,.5),0 10px 30px rgba(0,0,0,.3);animation:bfPanel 2.6s ease-in-out infinite;}' +
  '@keyframes bfPanel{0%,100%{box-shadow:0 0 0 3px #FFC400,0 0 18px rgba(255,196,0,.4),0 10px 30px rgba(0,0,0,.3)}50%{box-shadow:0 0 0 3px #FFD84D,0 0 36px rgba(255,196,0,.85),0 10px 30px rgba(0,0,0,.3)}}' +
  '.bf-badge{display:flex;align-items:center;justify-content:center;gap:8px;margin:0 auto 10px;padding:5px 14px;width:max-content;max-width:100%;border-radius:999px;background:#0B0B0D;color:#FFC400;border:1px solid #FFC400;font:800 12px/1.2 Inter,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;}' +
  '@media(max-width:560px){.bf-bar-in{font-size:12px;gap:8px;padding:6px 12px}.bf-count span{min-width:38px;font-size:13px}.bf-seal{font-size:11px}}' +
  '@media(prefers-reduced-motion:reduce){.bf-layer{display:none}.bf-on .game-panel{animation:none!important}}';

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var tagIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.4"/></svg>';

  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function(){
    document.body.classList.add('bf-on');

    var kp = document.querySelector('.hero-key-photo'); if (kp) kp.src = 'blackfriday-llaves.png';

    /* cinta superior */
    var bar = document.createElement('div'); bar.className = 'bf-bar';
    bar.innerHTML = '<div class="bf-bar-in"><b>Black Friday</b><span id="bfMsg">Ofertas especiales en llaves, cerraduras y controles</span>' +
      '<span class="bf-count" id="bfCount" aria-live="off"></span><a href="#catalogo">Ver catálogo</a></div>';
    document.body.insertBefore(bar, document.body.firstChild);

    function dos(n){ return (n < 10 ? '0' : '') + n; }
    function tick(){
      var ahora = new Date(), falta = VIERNES - ahora, c = document.getElementById('bfCount'), msg = document.getElementById('bfMsg');
      if (!c) return;
      if (falta > 0){
        var s = Math.floor(falta / 1000), dd = Math.floor(s / 86400), hh = Math.floor(s % 86400 / 3600), mm = Math.floor(s % 3600 / 60), ss = s % 60;
        c.innerHTML = '<span>' + dd + '<small>días</small></span><span>' + dos(hh) + '<small>horas</small></span><span>' + dos(mm) + '<small>min</small></span><span>' + dos(ss) + '<small>seg</small></span>';
      } else {
        msg.textContent = '¡Hoy es Black Friday! Cotiza tus ofertas por WhatsApp';
        c.style.display = 'none';
      }
    }
    tick(); setInterval(tick, 1000);

    /* sello sobre el título del inicio */
    var h1 = document.querySelector('.hero h1');
    if (h1) h1.insertAdjacentHTML('beforebegin', '<div class="bf-seal">' + tagIcon + 'Black Friday · Ofertas especiales</div>');

    /* destellos y etiquetas % que caen suavemente */
    var L = document.createElement('div'); L.className = 'bf-layer'; L.setAttribute('aria-hidden', 'true');
    var html = '';
    for (var i = 0; i < 14; i++){
      var left = Math.round(4 + i * 6.8), t = (11 + (i * 3) % 9) + 's', dl = '-' + ((i * 2.3) % 12).toFixed(1) + 's', x = ((i % 2) ? 40 : -40) + 'px';
      html += (i % 3 === 0)
        ? '<div class="bf-bit" style="left:' + left + '%;--t:' + t + ';--d:' + dl + ';--x:' + x + '"><div class="bf-tag">%</div></div>'
        : '<div class="bf-bit" style="left:' + left + '%;--t:' + t + ';--d:' + dl + ';--x:' + x + '"><div class="bf-spark"></div></div>';
    }
    L.innerHTML = html; document.body.appendChild(L);

    var panel = document.querySelector('.game-panel');
    if (panel) panel.insertAdjacentHTML('afterbegin', '<div class="bf-badge">' + tagIcon.replace('<svg ', '<svg width="16" height="16" ') + ' Edición Black Friday</div>');
  });
})();
