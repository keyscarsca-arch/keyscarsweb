/* Tema Black Friday de Keys Cars (negro y dorado).
   Se activa solo del 12 al 30 de noviembre y se apaga después.
   Para probar: ?blackfriday=1 (forzar) o ?blackfriday=0 (apagar).
   Es solo decoración: no toca el catálogo ni los datos. Para quitarlo del todo: borrar este archivo y su línea <script> en index.html. */
(function(){
  var ANIO = 2026, VIERNES = new Date(ANIO, 10, 27, 0, 0, 0);
  try{
    var q = new URLSearchParams(location.search).get('blackfriday');
    var d = new Date(), m = d.getMonth(), day = d.getDate();
    var enFecha = (m === 10 && day >= 11 && day <= 27);
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
  '.hero .shine-sweep{opacity:.3!important;}' +
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
  /* carrete de ofertas: franja compacta con productos girando; al pasar el cursor se detiene, la tarjeta se agranda y la foto se amplía con lupa */
  '.bf-ofertas{background:radial-gradient(800px 200px at 80% 0,rgba(26,95,180,.4),transparent 65%),linear-gradient(180deg,#0B0B0D,#06142b);padding:16px 0 18px;border-bottom:4px solid #FFC400;position:relative;overflow:hidden;}' +
  '.bf-of-head{max-width:1200px;margin:0 auto 6px;padding:0 24px;display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap;}' +
  '.bf-of-head h2{margin:0;font:800 19px/1.1 "Plus Jakarta Sans",Inter,sans-serif;color:#fff;letter-spacing:.02em;}' +
  '.bf-of-head h2 span{color:#FFC400;}' +
  '.bf-of-head small{color:#AEB4C2;font:600 11.5px/1 Inter,sans-serif;letter-spacing:.04em;}' +
  '.bf-of-head h2 .bf-demo{background:#FFC400;color:#0B0B0D;font:800 10px/1 Inter,sans-serif;letter-spacing:.1em;padding:5px 9px;border-radius:5px;text-transform:uppercase;margin-left:10px;}' +
  '.bf-reel{position:relative;overflow:hidden;padding:30px 0 26px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);}' +
  '.bf-track{display:flex;gap:16px;width:max-content;animation:bfReel var(--dur,40s) linear infinite;}' +
  '.bf-reel:hover .bf-track{animation-play-state:paused;}' +
  '@keyframes bfReel{to{transform:translateX(var(--shift,-50%))}}' +
  '.bf-card{position:relative;flex:none;width:286px;height:164px;background:linear-gradient(180deg,#17171B,#0f0f12);border:1.5px solid rgba(255,196,0,.45);border-radius:14px;padding:10px;display:flex;gap:10px;box-shadow:0 8px 22px rgba(0,0,0,.45);transition:transform .25s cubic-bezier(.2,.8,.2,1),border-color .25s,box-shadow .25s;}' +
  '.bf-card:hover{transform:translateY(-6px) scale(1.12);z-index:6;border-color:#FFC400;box-shadow:0 0 0 1px #FFC400,0 20px 44px rgba(0,0,0,.6),0 0 32px rgba(255,196,0,.3);}' +
  '.bf-card,.bf-img img{will-change:transform;}' +
  '.bf-card{transition:transform .35s cubic-bezier(.2,.8,.2,1),border-color .3s,box-shadow .35s,opacity .3s,filter .3s;}' +
  '.bf-img img{transition:transform .5s cubic-bezier(.2,.8,.2,1);}' +
  '.bf-card:hover .bf-img img{transform:scale(1.1);}' +
  '.bf-img{overflow:hidden;}' +
  '.bf-reel:hover .bf-card{opacity:.55;filter:saturate(.7) brightness(.85);}' +
  '.bf-reel:hover .bf-card:hover{opacity:1;filter:none;}' +
  '.bf-off{position:absolute;top:-9px;left:-7px;z-index:3;background:#E00210;color:#fff;font:800 12px/1 "Plus Jakarta Sans",Inter,sans-serif;padding:6px 9px;border-radius:8px;transform:rotate(-6deg);box-shadow:0 5px 12px rgba(224,2,16,.45);}' +
  '.bf-img{position:relative;flex:none;width:128px;height:100%;background:#fff;border-radius:11px;display:flex;align-items:center;justify-content:center;}' +
  '.bf-img img{width:100%;aspect-ratio:1/1;height:auto;object-fit:contain;transform:scale(1.02);}' +
  '.bf-info{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:space-between;}' +
  '.bf-desc{color:#fff;font:600 11.5px/1.25 Inter,sans-serif;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}' +
  '.bf-code{color:#9AA0AE;font:10.5px/1 monospace;margin-top:3px;}' +
  '.bf-prices{display:flex;align-items:baseline;gap:7px;}' +
  '.bf-now{font:800 21px/1 "Plus Jakarta Sans",Inter,sans-serif;color:#FFC400;}' +
  '.bf-was{font:600 11.5px/1 Inter,sans-serif;color:#8C93A3;text-decoration:line-through;}' +
  '.bf-btn{display:flex;align-items:center;justify-content:center;gap:6px;background:#25D366;color:#06210f;font:800 11px/1 Inter,sans-serif;padding:7px;border-radius:8px;text-decoration:none;}' +
  '.bf-btn:hover{background:#1CA653;color:#fff;}' +
  '.bf-act{display:flex;gap:6px;align-items:stretch;}.bf-act .bf-btn{flex:1;}' +
  '.bf-cart{flex:0 0 36px;display:flex;align-items:center;justify-content:center;background:#17171B;color:#FFC400;border:1.5px solid #FFC400;border-radius:8px;cursor:pointer;padding:0;}' +
  '.bf-cart:hover{background:#FFC400;color:#0B0B0D;}.bf-cart.added{background:#FFC400;color:#0B0B0D;}' +
  '@media(max-width:560px){.bf-of-head small{display:none}.bf-card{width:252px;height:156px}.bf-img{width:112px}}' +
  '@media(prefers-reduced-motion:reduce){.bf-track{animation:none!important}.bf-reel{overflow-x:auto}}' +
  /* opción: parte de abajo oscura (?fondo=oscuro) */
  'body.bf-dark{--bg:#07090f;--panel:#12151c;--panel-2:#191d27;--line:#2a2f3b;--text:#F3F4F7;--text-dim:#C3C8D4;}' +
  'body.bf-dark{background:radial-gradient(900px 500px at 85% 900px,rgba(26,95,180,.28),transparent 65%),linear-gradient(180deg,#07090f,#0a1020 60%,#07090f)!important;}' +
  'body.bf-dark .section-head h2,body.bf-dark .section h2,body.bf-dark .section h3,body.bf-dark .mv-card h3{color:#fff!important;}' +
  'body.bf-dark .section-head p,body.bf-dark .mv-card p,body.bf-dark .section p{color:#C9CDD8!important;}' +
  'body.bf-dark .chip.active{background:#FFC400!important;color:#0B0B0D!important;border-color:#FFC400!important;}' +
  'body.bf-dark label,body.bf-dark .contact-grid strong,body.bf-dark .contact-grid b{color:#fff!important;}' +
  'body.bf-dark .card,body.bf-dark .info-card,body.bf-dark .mv-card,body.bf-dark .contact-card,body.bf-dark .form-card,body.bf-dark .map-card{background:linear-gradient(180deg,#14171f,#0e1016)!important;border-color:#2a2f3b!important;color:#E9EBF0;}' +
  'body.bf-dark .card-desc,body.bf-dark .card-code,body.bf-dark .card-cat{color:#E9EBF0!important;}' +
  'body.bf-dark .card-cat{color:#FFC400!important;}' +
  'body.bf-dark #nosotros .taller-anim{background:radial-gradient(circle,#F7F8FB,#D9DEE9);border-radius:50%;overflow:hidden;box-shadow:0 0 0 3px #FFC400,0 14px 34px rgba(0,0,0,.55);}' +
  'body.bf-dark input,body.bf-dark select,body.bf-dark textarea{background:#0b0d13!important;color:#fff!important;border-color:#2f3543!important;}' +
  'body.bf-dark .chip,body.bf-dark .cat-chip,body.bf-dark .filters button{background:#14171f!important;color:#E9EBF0!important;border-color:#2f3543!important;}' +
  /* opción: parte de abajo en tono medio (?fondo=medio): mezcla áurea (38,2 % claro / 61,8 % oscuro) entre #EEF1F6 y #0A1020, con matiz del azul de la marca */
  'body.bf-mid{background:radial-gradient(900px 520px at 85% 900px,rgba(26,95,180,.35),transparent 65%),linear-gradient(180deg,#5a6785 0%,#4b5873 38.2%,#3f4a63 61.8%,#363f55 100%)!important;}' +
  'body.bf-mid .section-head h2,body.bf-mid .section h2{color:#fff!important;}' +
  'body.bf-mid .section-head p,body.bf-mid #catalogo p,body.bf-mid #nosotros .section-head p,body.bf-mid #contacto .section-head p,body.bf-mid #catalogo .count,body.bf-mid #resultCount{color:#E6EAF2!important;}' +
  'body.bf-mid #nosotros .taller-anim{background:radial-gradient(circle,#F7F8FB,#D9DEE9);border-radius:50%;overflow:hidden;box-shadow:0 0 0 3px #FFC400,0 14px 34px rgba(0,0,0,.4);}' +
  'body.bf-mid .card,body.bf-mid .mv-card,body.bf-mid .form-card,body.bf-mid .map-card{box-shadow:0 10px 28px rgba(8,14,30,.35)!important;}' +
  /* opción: parte de abajo en azul profundo, reparto áureo de color: 61,8 % azul / 23,6 % negro / 14,6 % dorado (?fondo=azul) */
  'body.bf-azul{background:radial-gradient(760px 420px at 84% 880px,rgba(255,196,0,.10),transparent 70%),radial-gradient(1100px 620px at 18% 0,rgba(26,95,180,.45),transparent 70%),linear-gradient(180deg,#0f3a78 0%,#0b2b5c 38.2%,#081f45 61.8%,#050c1c 100%)!important;}' +
  'body.bf-azul .section{border-top:1px solid rgba(255,196,0,.18);}' +
  'body.bf-azul .section-head h2::after,body.bf-azul .section h2::after{content:"";display:block;width:61.8px;height:3px;border-radius:2px;background:#FFC400;margin-top:8px;}' +
  'body.bf-azul #nosotros .section-head h2::after{margin-left:auto;margin-right:auto;}' +
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
    var fondo = new URLSearchParams(location.search).get('fondo');
    if (!fondo || fondo === 'oscuro') document.body.classList.add('bf-dark');
    if (fondo === 'medio') document.body.classList.add('bf-mid');
    if (fondo === 'azul') document.body.classList.add('bf-mid', 'bf-azul');

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


    /* sección "Ofertas Black Friday": productos y precios los define la dueña en blackfriday-ofertas.json (nada sale del catálogo interno) */
    function money(v){ var n = parseFloat(String(v).replace(',', '.')); return isNaN(n) ? String(v) : '$' + n.toFixed(2).replace('.', ','); }
    function esc(t){ return String(t == null ? '' : t).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
    var demo = new URLSearchParams(location.search).get('ofertas') === 'demo';
    var lista = fetch('blackfriday-ofertas.json', {cache:'no-cache'}).then(function(r){ return r.ok ? r.json() : []; }).catch(function(){ return []; });
    if (demo) lista = Promise.resolve([
      {codigo:'CISA-01', precio_antes:'1.00', precio_promo:'0.80'},
      {codigo:'CISA-03', precio_antes:'1.00', precio_promo:'0.75'},
      {codigo:'LL-CISA-02', precio_antes:'2.50', precio_promo:'2.00'},
      {codigo:'T-0002', precio_antes:'10.00', precio_promo:'8.00'}
    ]);
    Promise.all([lista, fetch('productos.json').then(function(r){ return r.json(); }).catch(function(){ return {}; })]).then(function(res){
      var items = res[0] || [], cat = res[1] || {};
      if (!items.length) return;
      var num = (typeof WHATSAPP_NUMBER !== 'undefined') ? WHATSAPP_NUMBER : '584226377050';
      function tarjeta(o){
        var p = cat[o.codigo] || {codigo:o.codigo, descripcion:o.descripcion || '', categoria:o.categoria || ''};
        var a = parseFloat(String(o.precio_antes).replace(',', '.')), b = parseFloat(String(o.precio_promo).replace(',', '.'));
        var pct = (a > 0 && b >= 0 && b < a) ? Math.round((1 - b / a) * 100) : 0;
        var msg = 'Hola, quiero aprovechar la oferta Black Friday de Keys Cars:\n' + p.codigo + ' - ' + p.descripcion + '\nPrecio promoción: ' + money(o.precio_promo);
        var c = encodeURIComponent(p.codigo);
        return '<div class="bf-card">' + (pct ? '<div class="bf-off">-' + pct + '%</div>' : '') +
          '<div class="bf-img" data-cod="' + esc(p.codigo) + '"><img loading="lazy" alt="' + esc(p.codigo) + '" src="imagenes_productos/mini/' + c + '.webp" onerror="this.onerror=null;this.src=\'imagenes_productos/' + c + '.jpg\'"></div>' +
          '<div class="bf-info"><div><div class="bf-desc">' + esc(p.descripcion) + '</div><div class="bf-code">' + esc(p.codigo) + '</div></div>' +
          '<div class="bf-prices"><span class="bf-now">' + money(o.precio_promo) + '</span>' + (pct ? '<span class="bf-was">' + money(o.precio_antes) + '</span>' : '') + '</div>' +
          '<div class="bf-act"><button type="button" class="bf-cart" data-cod="' + esc(p.codigo) + '" title="Agregar a cotización" aria-label="Agregar a cotización"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg></button><a class="bf-btn" target="_blank" rel="noopener" href="https://wa.me/' + num + '?text=' + encodeURIComponent(msg) + '"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.2 17.2L2 22l4.9-1.3A11 11 0 0 0 20.5 3.5zM12 20a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3A9 9 0 1 1 12 20zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.5-.1-.7.1-.8.9-.9 1.1-.3.2-.6.1a7.4 7.4 0 0 1-3.7-3.2c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.700 11.700 0 0 0 4.500 3.900c1.700.7 2.300.8 3.100.7a2.600 2.600 0 0 0 1.700-1.200 2.100 2.100 0 0 0 .1-1.200c-.1-.1-.3-.2-.6-.4z"/></svg> Cotizar</a></div></div></div>';
      }
      var uno = items.map(tarjeta).join('');
      /* repetir el juego de tarjetas hasta cubrir ~1600 px y duplicarlo para que el giro no tenga cortes */
      var ancho = 286 + 16, veces = Math.max(1, Math.ceil(1600 / (items.length * ancho)));
      var set = new Array(veces + 1).join(uno);
      var setPx = items.length * veces * ancho;
      var sec = document.createElement('section'); sec.className = 'bf-ofertas'; sec.id = 'ofertas-bf';
      sec.innerHTML = '<div class="bf-of-head"><h2>Ofertas <span>Black Friday</span>' + (demo ? '<span class="bf-demo">Ejemplo · precios ficticios</span>' : '') + '</h2><small>Pasa el cursor para detener y ampliar</small></div>' +
        '<div class="bf-reel"><div class="bf-track" style="--shift:-' + setPx + 'px;--dur:' + Math.round(items.length * veces * 5) + 's">' + set + set + '</div></div>';
      var ref = document.getElementById('catalogo'); if (ref && ref.parentNode) ref.parentNode.insertBefore(sec, ref);
      /* botón de carrito: usa la misma cotización del catálogo */
      function marcar(){ try { sec.querySelectorAll('.bf-cart').forEach(function(b){ var en = cart.some(function(c){ return c.c === b.getAttribute('data-cod'); }); b.classList.toggle('added', en); b.title = en ? 'Agregado a cotización' : 'Agregar a cotización'; }); } catch(e){} }
      sec.addEventListener('click', function(e){
        var b = e.target.closest('.bf-cart'); if (!b) return;
        try { toggleCart(b.getAttribute('data-cod')); } catch(err){}
        marcar();
      });
      setInterval(marcar, 1200);
    });

    var panel = document.querySelector('.game-panel');
    if (panel) panel.insertAdjacentHTML('afterbegin', '<div class="bf-badge">' + tagIcon.replace('<svg ', '<svg width="16" height="16" ') + ' Edición Black Friday</div>');
  });
})();
