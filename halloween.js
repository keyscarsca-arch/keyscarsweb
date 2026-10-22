/* Tema de Halloween de Keys Cars.
   Se activa solo del 22 de octubre al 1 de noviembre y se apaga después. Para probar: ?halloween=1 (forzar) o ?halloween=0 (apagar).
   Es solo decoración: no recibe clics ni toca el contenido. Para quitarlo del todo: borrar este archivo y su línea <script> en index.html. */
(function(){
  try{
    var q = new URLSearchParams(location.search).get('halloween');
    var d = new Date(), m = d.getMonth(), day = d.getDate();
    var enFecha = (m === 9 && day >= 22) || (m === 10 && day <= 1);
    if (q === '0' || (q !== '1' && !enFecha)) return;
  }catch(e){ return; }

  var css = '' +
  '.hw-layer{position:fixed;inset:0;z-index:35;pointer-events:none;overflow:hidden;}' +
  '.hw-layer *{pointer-events:none;}' +
  /* arañas colgando: el hilo sale por detrás del encabezado */
  '.hw-spider{position:absolute;top:0;width:44px;margin-left:-22px;transform-origin:50% 0;animation:hwDrop var(--t,9s) ease-in-out var(--d,0s) infinite;}' +
  '.hw-spider .hw-thread{width:2px;height:340px;margin:-250px auto 0;background:linear-gradient(#cfd6e6,#8e98b0);opacity:.85;}' +
  '.hw-spider svg{display:block;width:44px;height:36px;margin-top:-2px;filter:drop-shadow(0 3px 4px rgba(0,0,0,.45));animation:hwSway 3.2s ease-in-out infinite;transform-origin:50% 0;}' +
  '@keyframes hwDrop{0%,100%{transform:translateY(0)}45%,60%{transform:translateY(var(--drop,150px))}}' +
  '@keyframes hwSway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}' +
  /* murciélagos */
  '.hw-bat{position:absolute;left:-70px;width:46px;height:26px;opacity:0;animation:hwFly var(--t,16s) linear var(--d,0s) infinite;}' +
  '.hw-bat svg{width:100%;height:100%;fill:#1a1024;filter:drop-shadow(0 2px 3px rgba(0,0,0,.4));animation:hwFlap .38s ease-in-out infinite;transform-origin:50% 50%;}' +
  '@keyframes hwFlap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.45)}}' +
  '@keyframes hwFly{0%{transform:translate(0,0);opacity:0}6%{opacity:1}50%{transform:translate(55vw,var(--y2,40px))}94%{opacity:1}100%{transform:translate(calc(100vw + 140px),var(--y3,-10px));opacity:0}}' +
  /* calabaza con brillo */
  '.hw-pumpkin{position:absolute;left:10px;bottom:10px;width:58px;height:54px;animation:hwBob 3.4s ease-in-out infinite;filter:drop-shadow(0 0 12px rgba(255,140,0,.75));}' +
  '.hw-pumpkin.hw-p2{left:auto;right:12px;bottom:14px;width:44px;height:41px;animation-delay:-1.7s;}' +
  '.hw-pumpkin .hw-glow{animation:hwGlow 1.9s ease-in-out infinite;}' +
  '@keyframes hwBob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-6px) rotate(3deg)}}' +
  '@keyframes hwGlow{0%,100%{opacity:.78}45%{opacity:1}70%{opacity:.6}}' +
  /* bruja en escoba con luna */
  '.hw-witch{position:absolute;left:-290px;top:100px;width:220px;height:139px;opacity:0;animation:hwWitch 26s linear 3s infinite;filter:drop-shadow(0 0 16px rgba(255,200,80,.4));}' +
  '.hw-witch svg{width:100%;height:100%;animation:hwBobW 1.6s ease-in-out infinite;}' +
  '@keyframes hwBobW{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-9px) rotate(2deg)}}' +
  '@keyframes hwWitch{0%{transform:translate(0,0);opacity:0}3%{opacity:1}30%{transform:translate(45vw,60px)}55%{transform:translate(80vw,-20px);opacity:1}62%,100%{transform:translate(calc(100vw + 260px),20px);opacity:0}}' +
  /* fantasmas */
  '.hw-ghost{position:absolute;bottom:-170px;width:66px;height:142px;opacity:0;animation:hwGhost var(--t,14s) ease-in-out var(--d,0s) infinite;}' +
  '.hw-ghost svg{width:100%;height:100%;animation:hwWob 2.4s ease-in-out infinite;filter:drop-shadow(0 0 12px rgba(150,190,160,.55));}' +
  '@keyframes hwGhost{0%{transform:translateY(0);opacity:0}12%{opacity:.9}50%{opacity:.7}85%{opacity:.9}100%{transform:translateY(-115vh);opacity:0}}' +
  '@keyframes hwWob{0%,100%{transform:translateX(-14px) rotate(-3deg) skewX(-3deg)}50%{transform:translateX(14px) rotate(3deg) skewX(3deg)}}' +
  /* ojos rojos que miran desde la oscuridad */
  '.hw-eyes{position:absolute;bottom:92px;width:46px;height:14px;animation:hwBlink 7s infinite;filter:drop-shadow(0 0 6px #ff1a1a);}' +
  '@keyframes hwBlink{0%,42%,48%,100%{transform:scaleY(1);opacity:.95}45%{transform:scaleY(.08);opacity:.95}60%{opacity:0}80%{opacity:0}85%{opacity:.95}}' +
  /* relámpago suave */
  '.hw-flash{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0,rgba(210,225,255,.35),rgba(210,225,255,0) 65%);opacity:0;animation:hwFlash 19s linear infinite;}' +
  '@keyframes hwFlash{0%,92%,100%{opacity:0}93%{opacity:1}94%{opacity:.1}95%{opacity:.9}97%{opacity:0}}' +
  /* telarañas en las esquinas del inicio */
  '.hw-web{position:absolute;top:0;width:120px;height:120px;opacity:.55;z-index:3;pointer-events:none;}' +
  '.hw-web.l{left:0}.hw-web.r{right:0;transform:scaleX(-1)}' +
  /* ruleta */
  '.game-panel{position:relative;}' +
  '.hw-on .game-panel{box-shadow:0 0 0 3px #ff8a00,0 0 26px rgba(255,138,0,.55),0 10px 30px rgba(0,0,0,.25);animation:hwPanel 2.6s ease-in-out infinite;}' +
  '@keyframes hwPanel{0%,100%{box-shadow:0 0 0 3px #ff8a00,0 0 20px rgba(255,138,0,.45),0 10px 30px rgba(0,0,0,.25)}50%{box-shadow:0 0 0 3px #ffb23f,0 0 36px rgba(255,138,0,.85),0 10px 30px rgba(0,0,0,.25)}}' +
  '.hw-badge{display:flex;align-items:center;justify-content:center;gap:8px;margin:0 auto 10px;padding:5px 14px;width:max-content;max-width:100%;border-radius:999px;background:#1a1024;color:#ff9d1c;border:1px solid #ff8a00;font:800 12px/1.2 Inter,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;}' +
  '.hw-badge svg{width:16px;height:16px;flex:none;}' +
  '.hw-on .reel{box-shadow:inset 0 0 14px rgba(255,138,0,.35);}' +
  '@media(max-width:480px){.hw-witch{width:150px;height:95px;top:92px}.hw-ghost{width:46px;height:99px}.hw-web{width:84px;height:84px}.hw-pumpkin{width:46px;height:43px}.hw-pumpkin.hw-p2{width:36px;height:34px}.hw-spider.hw-s3{display:none}.hw-spider{width:36px;margin-left:-18px}.hw-spider svg{width:36px;height:29px}}' +
  '@media(prefers-reduced-motion:reduce){.hw-layer *,.hw-on .game-panel{animation:none!important}.hw-bat,.hw-witch,.hw-ghost,.hw-flash{display:none}.hw-spider{transform:translateY(60px)}}';

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var spiderSvg = '<svg viewBox="0 0 44 36" aria-hidden="true"><g stroke="#1a1024" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M14 16 L3 9 L1 20"/><path d="M14 20 L4 22 L3 33"/><path d="M15 24 L8 28 L9 35"/><path d="M30 16 L41 9 L43 20"/><path d="M30 20 L40 22 L41 33"/><path d="M29 24 L36 28 L35 35"/></g><ellipse cx="22" cy="23" rx="10" ry="11" fill="#1a1024"/><circle cx="22" cy="12" r="6.5" fill="#2b1840"/><circle cx="19.5" cy="11" r="2" fill="#ff3b3b"/><circle cx="24.5" cy="11" r="2" fill="#ff3b3b"/><path d="M18.5 22 q3.5 4 7 0" stroke="#ff8a00" stroke-width="1.6" fill="none"/></svg>';
  var batSvg = '<svg viewBox="0 0 46 26" aria-hidden="true"><path d="M23 9c-2-4-6-7-12-7C8 5 6 8 5 11 3 10 1 11 0 13c3 0 5 2 6 4 1-2 3-3 5-3 1 3 3 5 5 5l2-3c1 1 1 3 1 5 0-2 0-4 1-5l2 3c2 0 4-2 5-5 2 0 4 1 5 3 1-2 3-4 6-4-1-2-3-3-5-2-1-3-3-6-6-9-6 0-10 3-12 7z"/></svg>';
  var pumpkinSvg = '<svg viewBox="0 0 58 54" aria-hidden="true"><path d="M29 11c1-5 4-8 8-9" stroke="#3b7d23" stroke-width="4" stroke-linecap="round" fill="none"/><ellipse cx="18" cy="31" rx="15" ry="19" fill="#e86a00"/><ellipse cx="40" cy="31" rx="15" ry="19" fill="#e86a00"/><ellipse cx="29" cy="31" rx="13" ry="21" fill="#ff8a00"/><g class="hw-glow" fill="#ffe27a"><path d="M16 26l7 5-7 3z"/><path d="M42 26l-7 5 7 3z"/><path d="M17 40q12 9 24 0l-3-5-3 3-3-4-3 4-3-4-3 3z"/></g></svg>';
  var webSvg = '<svg viewBox="0 0 120 120" aria-hidden="true" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"><path d="M0 0L120 0M0 0L0 120M0 0L100 100M0 0L110 45M0 0L45 110"/><path d="M26 0Q22 22 0 26M52 0Q44 44 0 52M80 0Q64 64 0 80M108 0Q86 86 0 108"/></svg>';

  var witchSvg = '<svg viewBox="0 0 220 140" aria-hidden="true"><defs><radialGradient id="hwM" cx="40%" cy="38%" r="70%"><stop offset="0" stop-color="#fffbe0"/><stop offset="1" stop-color="#f1d98a"/></radialGradient><linearGradient id="hwC" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b1247"/><stop offset="1" stop-color="#0c0614"/></linearGradient></defs><circle cx="172" cy="40" r="34" fill="url(#hwM)" opacity=".95"/><circle cx="160" cy="32" r="6" fill="#e6cf7e" opacity=".7"/><circle cx="182" cy="52" r="4.5" fill="#e6cf7e" opacity=".7"/><circle cx="176" cy="26" r="3" fill="#e6cf7e" opacity=".6"/><g><path d="M42 98 L2 80 L7 96 L0 108 L9 111 L4 124 L44 106z" fill="#7a5628"/><path d="M42 98 L6 90M42 101 L4 104M42 104 L8 118" stroke="#3b2812" stroke-width="1.4" fill="none"/><path d="M40 96 L196 84" stroke="#3a2412" stroke-width="5.5" stroke-linecap="round"/><path d="M38 93 L46 93 L46 107 L38 107z" fill="#4a3216"/></g><path d="M106 62C94 66 86 78 80 96C62 100 42 112 22 130C46 124 66 122 86 110C82 118 78 124 72 132C92 122 106 110 114 98L128 88C124 72 118 62 106 62z" fill="url(#hwC)"/><path d="M80 96C70 104 56 112 40 120" stroke="#0c0614" stroke-width="3" fill="none"/><path d="M118 70L138 88" stroke="#140a1f" stroke-width="8" stroke-linecap="round"/><circle cx="141" cy="89" r="5" fill="#8fbf6a"/><path d="M114 50C96 44 80 52 60 44C74 60 94 62 114 58z" fill="#d7d7e6" opacity=".95"/><path d="M114 54C98 54 86 64 66 62C82 70 102 70 114 62z" fill="#a9a9bd" opacity=".9"/><circle cx="125" cy="52" r="12" fill="#8fbf6a"/><path d="M134 50C146 52 150 60 142 66C142 60 138 58 133 58z" fill="#78a857"/><path d="M123 63Q128 72 140 68L134 62z" fill="#78a857"/><path d="M122 58q6 5 13 0" stroke="#2a1840" stroke-width="1.6" fill="none"/><circle cx="130" cy="49" r="2.4" fill="#e6ff3a"/><circle cx="130" cy="49" r="1" fill="#1a1024"/><path d="M104 42C104 36 112 36 124 36 138 36 146 38 146 42 134 44 114 44 104 42z" fill="#0b0613"/><path d="M110 38C112 22 122 12 130 4Q137 -3 150 5Q139 7 138 14C138 24 140 32 140 38z" fill="#0b0613"/><path d="M110 31L140 31L141 37L109 37z" fill="#7a2bd1"/><rect x="121" y="30" width="9" height="8" rx="1" fill="none" stroke="#f0c53a" stroke-width="1.8"/><circle cx="58" cy="118" r="2" fill="#bfff4a" opacity=".8"/><circle cx="40" cy="132" r="1.6" fill="#ffd84a" opacity=".8"/><circle cx="24" cy="116" r="1.4" fill="#bfff4a" opacity=".6"/></svg>';
  var ghostSvg = '<svg viewBox="0 0 70 150" aria-hidden="true"><defs><linearGradient id="hwG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050408"/><stop offset=".75" stop-color="#0b0a10" stop-opacity=".92"/><stop offset="1" stop-color="#0b0a10" stop-opacity="0"/></linearGradient><radialGradient id="hwH" cx="50%" cy="30%" r="60%"><stop offset="0" stop-color="#9fb8a8" stop-opacity=".28"/><stop offset="1" stop-color="#9fb8a8" stop-opacity="0"/></radialGradient></defs><ellipse cx="35" cy="40" rx="34" ry="46" fill="url(#hwH)"/><path d="M35 3C20 3 13 17 13 32C13 43 17 51 22 57L48 57C53 51 57 43 57 32C57 17 50 3 35 3z" fill="#050408"/><ellipse cx="35" cy="33" rx="11" ry="15" fill="#000"/><circle cx="31" cy="30" r="1.2" fill="#a9c9a0" opacity=".55"/><circle cx="39" cy="30" r="1.2" fill="#a9c9a0" opacity=".55"/><path d="M30 42Q35 47 40 42" stroke="#1d2420" stroke-width="1.2" fill="none"/><path d="M22 55C12 72 8 100 1 140L10 124 13 148 22 126 27 150 35 128 42 150 48 126 56 148 59 124 69 140C62 100 58 72 48 55z" fill="url(#hwG)"/><path d="M50 62C60 68 66 80 62 94" stroke="#050408" stroke-width="9" stroke-linecap="round" fill="none"/><g stroke="#8d948a" stroke-width="1.5" stroke-linecap="round" fill="none"><path d="M62 96L58 110M63 97L62 112M64 96L67 110M63 95L69 104"/></g></svg>';
  var eyesSvg = '<svg viewBox="0 0 46 14" aria-hidden="true"><path d="M2 8 Q9 0 19 6 Q10 12 2 8z" fill="#ff2a2a"/><path d="M44 8 Q37 0 27 6 Q36 12 44 8z" fill="#ff2a2a"/><circle cx="11" cy="6.5" r="1.8" fill="#1a0000"/><circle cx="35" cy="6.5" r="1.8" fill="#1a0000"/></svg>';
  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function(){
    document.body.classList.add('hw-on');
    var L = document.createElement('div'); L.className = 'hw-layer'; L.setAttribute('aria-hidden','true');
    var html = '';
    [[3,'10s','-1s',150,'hw-s1'],[96,'12.5s','-6s',110,'hw-s2'],[63,'9s','-3.5s',90,'hw-s3']].forEach(function(s){
      html += '<div class="hw-spider '+s[4]+'" style="left:'+s[0]+'%;--t:'+s[1]+';--d:'+s[2]+';--drop:'+s[3]+'px"><div class="hw-thread"></div>'+spiderSvg+'</div>';
    });
    [[70,'17s','0s','30px','-30px',46],[160,'21s','-9s','-40px','60px',38],[260,'19s','-14s','50px','0px',42]].forEach(function(b){
      html += '<div class="hw-bat" style="top:'+b[0]+'px;--t:'+b[1]+';--d:'+b[2]+';--y2:'+b[3]+';--y3:'+b[4]+';width:'+b[5]+'px">'+batSvg+'</div>';
    });
    html += '<div class="hw-pumpkin">'+pumpkinSvg+'</div><div class="hw-pumpkin hw-p2">'+pumpkinSvg+'</div>';
    html += '<div class="hw-flash"></div><div class="hw-witch">'+witchSvg+'</div>';
    [[6,'17s','-2s'],[40,'22s','-11s'],[88,'19s','-6s']].forEach(function(g){ html += '<div class="hw-ghost" style="left:'+g[0]+'%;--t:'+g[1]+';--d:'+g[2]+'"> '+ghostSvg+'</div>'; });
    html += '<div class="hw-eyes" style="left:78px;animation-delay:-2s">'+eyesSvg+'</div><div class="hw-eyes" style="right:70px;animation-delay:-5s;transform:scale(.8)">'+eyesSvg+'</div>';
    L.innerHTML = html; document.body.appendChild(L);

    var hero = document.querySelector('.hero');
    if (hero){
      hero.insertAdjacentHTML('afterbegin','<div class="hw-web l">'+webSvg+'</div><div class="hw-web r">'+webSvg+'</div>');
      if (getComputedStyle(hero).position === 'static') hero.style.position = 'relative';
    }
    var panel = document.querySelector('.game-panel');
    if (panel) panel.insertAdjacentHTML('afterbegin','<div class="hw-badge">'+pumpkinSvg.replace('class="hw-glow"','')+' Edición Halloween</div>');
  });
})();
