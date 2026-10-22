/* Tema de Halloween de Keys Cars.
   Se activa solo del 22 de octubre al 2 de noviembre y se apaga después. Para probar: ?halloween=1 (forzar) o ?halloween=0 (apagar).
   Es solo decoración: no recibe clics ni toca el contenido. Para quitarlo del todo: borrar este archivo y su línea <script> en index.html. */
(function(){
  try{
    var q = new URLSearchParams(location.search).get('halloween');
    var d = new Date(), m = d.getMonth(), day = d.getDate();
    var enFecha = (m === 9 && day >= 22) || (m === 10 && day <= 2);
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
  '@media(max-width:480px){.hw-web{width:84px;height:84px}.hw-pumpkin{width:46px;height:43px}.hw-pumpkin.hw-p2{width:36px;height:34px}.hw-spider.hw-s3{display:none}.hw-spider{width:36px;margin-left:-18px}.hw-spider svg{width:36px;height:29px}}' +
  '@media(prefers-reduced-motion:reduce){.hw-layer *,.hw-on .game-panel{animation:none!important}.hw-bat{display:none}.hw-spider{transform:translateY(60px)}}';

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var spiderSvg = '<svg viewBox="0 0 44 36" aria-hidden="true"><g stroke="#1a1024" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M14 16 L3 9 L1 20"/><path d="M14 20 L4 22 L3 33"/><path d="M15 24 L8 28 L9 35"/><path d="M30 16 L41 9 L43 20"/><path d="M30 20 L40 22 L41 33"/><path d="M29 24 L36 28 L35 35"/></g><ellipse cx="22" cy="23" rx="10" ry="11" fill="#1a1024"/><circle cx="22" cy="12" r="6.5" fill="#2b1840"/><circle cx="19.5" cy="11" r="2" fill="#ff3b3b"/><circle cx="24.5" cy="11" r="2" fill="#ff3b3b"/><path d="M18.5 22 q3.5 4 7 0" stroke="#ff8a00" stroke-width="1.6" fill="none"/></svg>';
  var batSvg = '<svg viewBox="0 0 46 26" aria-hidden="true"><path d="M23 9c-2-4-6-7-12-7C8 5 6 8 5 11 3 10 1 11 0 13c3 0 5 2 6 4 1-2 3-3 5-3 1 3 3 5 5 5l2-3c1 1 1 3 1 5 0-2 0-4 1-5l2 3c2 0 4-2 5-5 2 0 4 1 5 3 1-2 3-4 6-4-1-2-3-3-5-2-1-3-3-6-6-9-6 0-10 3-12 7z"/></svg>';
  var pumpkinSvg = '<svg viewBox="0 0 58 54" aria-hidden="true"><path d="M29 11c1-5 4-8 8-9" stroke="#3b7d23" stroke-width="4" stroke-linecap="round" fill="none"/><ellipse cx="18" cy="31" rx="15" ry="19" fill="#e86a00"/><ellipse cx="40" cy="31" rx="15" ry="19" fill="#e86a00"/><ellipse cx="29" cy="31" rx="13" ry="21" fill="#ff8a00"/><g class="hw-glow" fill="#ffe27a"><path d="M16 26l7 5-7 3z"/><path d="M42 26l-7 5 7 3z"/><path d="M17 40q12 9 24 0l-3-5-3 3-3-4-3 4-3-4-3 3z"/></g></svg>';
  var webSvg = '<svg viewBox="0 0 120 120" aria-hidden="true" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"><path d="M0 0L120 0M0 0L0 120M0 0L100 100M0 0L110 45M0 0L45 110"/><path d="M26 0Q22 22 0 26M52 0Q44 44 0 52M80 0Q64 64 0 80M108 0Q86 86 0 108"/></svg>';

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
