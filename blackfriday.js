/* Tema Black Friday de Keys Cars (negro y dorado).
   Se activa solo del 12 al 30 de noviembre y se apaga después.
   Para probar: ?blackfriday=1 (forzar) o ?blackfriday=0 (apagar).
   Es solo decoración: no toca el catálogo ni los datos. Para quitarlo del todo: borrar este archivo y su línea <script> en index.html. */
(function(){
  var ANIO = 2026, VIERNES = new Date(ANIO, 10, 27, 0, 0, 0);
  try{
    var q = new URLSearchParams(location.search).get('blackfriday');
    var d = new Date(), m = d.getMonth(), day = d.getDate();
    var enFecha = (m === 10 && day >= 12 && day <= 30);
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
  /* portada: degradado en proporción áurea (38,2 % / 61,8 %), del negro al azul de la foto, con un destello dorado en el punto áureo */
  '.hero-bg-image{background:' +
    'radial-gradient(ellipse 38.2% 100% at 80% 38.2%,rgba(255,196,0,.20) 0%,rgba(255,196,0,0) 100%),' +
    'radial-gradient(ellipse 61.8% 161.8% at 78% -23.6%,#1a5fb4 0%,rgba(26,95,180,0) 100%),' +
    'linear-gradient(90deg,#0B0B0D 0%,#0B0B0D 23.6%,#06142b 38.2%,#052a5b 61.8%,#033676 85.4%,#033676 100%)!important;}' +
  '.hero-photo-color{display:none!important;}' +
  '.hero-key-photo{-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 38.2%,#000 85%,transparent 100%),linear-gradient(180deg,transparent 0%,#000 23.6%,#000 76.4%,transparent 100%)!important;-webkit-mask-composite:source-in!important;mask-image:linear-gradient(90deg,transparent 0%,#000 38.2%,#000 85%,transparent 100%),linear-gradient(180deg,transparent 0%,#000 23.6%,#000 76.4%,transparent 100%)!important;mask-composite:intersect!important;}' +
  /* animaciones */
  '.bf-bar{background:linear-gradient(45deg,#FFC400 25%,#0B0B0D 25% 50%,#FFC400 50% 75%,#0B0B0D 75%)!important;background-size:50px 50px!important;animation:bfStripes 2.4s linear infinite;}' +
  '@keyframes bfStripes{to{background-position:50px 0}}' +
  '.hero-key-photo{animation:bfFloat 5.5s ease-in-out infinite;}' +
  '@keyframes bfFloat{0%,100%{transform:translateY(-50%) rotate(-1.6deg) scale(1)}50%{transform:translateY(calc(-50% - 11px)) rotate(1.6deg) scale(1.025)}}' +
  '.hero-bg-image::after{content:"";position:absolute;right:6%;top:8%;width:34%;height:84%;border-radius:50%;background:radial-gradient(circle,rgba(255,196,0,.32) 0%,rgba(255,196,0,0) 62%);animation:bfGlow 3.6s ease-in-out infinite;pointer-events:none;}' +
  '@keyframes bfGlow{0%,100%{opacity:.35;transform:scale(.92)}50%{opacity:1;transform:scale(1.08)}}' +
  '.bf-seal{position:relative;overflow:hidden;animation:bfSealPulse 2.8s ease-in-out infinite;}' +
  '.bf-seal::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.75),rgba(255,255,255,0));transform:skewX(-20deg);animation:bfShine 3.2s ease-in-out infinite;}' +
  '@keyframes bfShine{0%,35%{left:-60%}75%,100%{left:130%}}' +
  '@keyframes bfSealPulse{0%,100%{transform:rotate(-2deg) scale(1)}50%{transform:rotate(-2deg) scale(1.045)}}' +
  '.bf-count span:last-child{animation:bfTick 1s steps(1) infinite;}' +
  '@keyframes bfTick{0%{transform:scale(1.1)}30%,100%{transform:scale(1)}}' +
  '.bf-bar a{animation:bfBtn 2.2s ease-in-out infinite;}' +
  '@keyframes bfBtn{0%,100%{box-shadow:0 0 0 0 rgba(255,196,0,.7)}60%{box-shadow:0 0 0 9px rgba(255,196,0,0)}}' +
  '.bf-bar b{animation:bfBlink 1.8s ease-in-out infinite;}' +
  '@keyframes bfBlink{0%,100%{opacity:1}50%{opacity:.55}}' +
  '.bf-spark{animation:bfTwinkle 1.6s ease-in-out infinite;}' +
  '@keyframes bfTwinkle{0%,100%{filter:brightness(1)}50%{filter:brightness(1.8)}}' +
  '@media(prefers-reduced-motion:reduce){.bf-bar,.hero-key-photo,.hero-bg-image::after,.bf-seal,.bf-seal::after,.bf-count span,.bf-bar a,.bf-bar b{animation:none!important}}' +
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
