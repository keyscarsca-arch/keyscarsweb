/* Tema de Navidad de Keys Cars (borrador para elegir estilo).
   Fechas previstas: del 28 de noviembre (cuando termina Black Friday) al 6 de enero. Las confirma la dueña.
   Para probar: ?navidad=1 (forzar) o ?navidad=0 (apagar). Estilo: ?estilo=1 (noche navideña), 2 (rojo clásico), 3 (dorado y negro) o 4 (verde y rojo).
   Es solo decoración: no toca el catálogo ni los datos. Para quitarlo del todo: borrar este archivo y su línea <script> en index.html. */
(function(){
  var q, estilo, tono;
  try{
    var p = new URLSearchParams(location.search);
    q = p.get('navidad'); estilo = p.get('estilo'); tono = p.get('tono');
    var d = new Date(), m = d.getMonth(), day = d.getDate();
    var enFecha = (m === 10 && day >= 28) || m === 11 || (m === 0 && day <= 6);
    if (q === '0' || (q !== '1' && !enFecha)) return;
  }catch(e){ return; }
  if (['2','3','4'].indexOf(estilo) < 0) estilo = '1';

  /* paletas de los tres estilos */
  var T = {
    '1': {lum:true, a:'#2F6FCB', a2:'#1B4FA0', head:'#E6F0FF', cinta:'#7FB0F0', hero:'linear-gradient(105deg,#FFFFFF 0%,#E3EEFF 38%,#B5D2FA 70%,#8DB8F2 100%)', band:'linear-gradient(100deg,#FFFFFF 0%,#DCEAFF 46%,#9CC2F4 100%)', bg:'#FBFDFF', bg2:'#E4EFFE', l1:'#E5303F', l2:'#2F6FCB', sky1:'#0b1a3d', sky2:'#1d3f80', ink:'#0F2A55', panel:'linear-gradient(180deg,#FFFFFF 0%,#D6E6FD 60%,#9CC2F4 100%)', swag:'#1f7a4d', swag2:'#E5303F', gold:'#E8B50C'},
    '2': {lum:true, a:'#C8283A', a2:'#A01420', head:'#FDE6E4', cinta:'#F08A92', hero:'linear-gradient(105deg,#FFFFFF 0%,#FDE4E1 38%,#F4A9AB 70%,#E5707A 100%)', band:'linear-gradient(100deg,#FFFFFF 0%,#FBDAD7 46%,#EE9097 100%)', bg:'#FFFCFB', bg2:'#FDE7E4', l1:'#C8283A', l2:'#E8B50C', sky1:'#4a0a12', sky2:'#8a1c28', ink:'#4a0f16', panel:'linear-gradient(180deg,#FFFFFF 0%,#FBD9D6 60%,#EE9097 100%)', swag:'#1f7a4d', swag2:'#E8B50C', gold:'#E8B50C'},
    '3': {lum:true, a:'#D4AF37', a2:'#B8902A', head:'#F6EBCB', cinta:'#D9BC6A', hero:'linear-gradient(105deg,#FFFBEF 0%,#F8EAC2 38%,#EFD799 70%,#E3C27A 100%)', band:'linear-gradient(100deg,#FFFBEF 0%,#F6E6B8 46%,#E6C57C 100%)', bg:'#FFFBF0', bg2:'#F8EDCB', l1:'#E5303F', l2:'#D4AF37', sky1:'#0f2350', sky2:'#2a4a8a', ink:'#3d2f0c', panel:'linear-gradient(180deg,#FFFBEF 0%,#F4E2AE 60%,#E3C27A 100%)', swag:'#1f7a4d', swag2:'#E5303F', gold:'#E8B50C'},
    '4': {lum:true, a:'#1E8F55', a2:'#0F6A3A', head:'#E3F4E8', cinta:'#8FD9AE', hero:'linear-gradient(105deg,#FFFFFF 0%,#E1F4E7 38%,#A9DDBD 70%,#6CBF8D 100%)', band:'linear-gradient(100deg,#FFFFFF 0%,#D5EFDD 46%,#86CCA3 100%)', bg:'#F8FCF9', bg2:'#DDEFE2', l1:'#E5303F', l2:'#1E8F55', sky1:'#082b18', sky2:'#1b6b44', ink:'#0a2f1a', panel:'linear-gradient(180deg,#FFFFFF 0%,#D3EEDB 60%,#86CCA3 100%)', swag:'#1b7a49', swag2:'#E5303F', gold:'#E8B50C'}
  }[estilo];
  /* tonos de texto y botones de cada estilo (mismo tratamiento luminoso que el dorado) */
  var P = {
    '1': {tx:'#0F2A55', tx2:'#2f4a7a', ac:'#1D5FB4', acc:'#B3202D', met:'linear-gradient(180deg,#6BA6F0 0%,#3677D1 55%,#1E55A8 100%)', mt:'#fff', bd:'#2F6FCB', snow:'#8DB8F2', cin:'linear-gradient(90deg,#4f8fe0,#BFD9FF 50%,#4f8fe0)', cit:'#0b1f44', reel:'linear-gradient(160deg,#FFFFFF,#BFD9FF)', hd:'linear-gradient(180deg,#FFFFFF,#E6F0FF)', body:'linear-gradient(180deg,#FBFDFF,#E4EFFE 55%,#FBFDFF)'},
    '2': {tx:'#4a0f16', tx2:'#7a2a32', ac:'#B3202D', acc:'#0f5a34', met:'linear-gradient(180deg,#F26F7B 0%,#D02A39 55%,#A01420 100%)', mt:'#fff', bd:'#C8283A', snow:'#F08A92', cin:'linear-gradient(90deg,#C8283A,#F8B9BD 50%,#C8283A)', cit:'#3a0a10', reel:'linear-gradient(160deg,#FFFFFF,#F9C9CC)', hd:'linear-gradient(180deg,#FFFFFF,#FDE6E4)', body:'linear-gradient(180deg,#FFFCFB,#FDE7E4 55%,#FFFCFB)'},
    '3': {tx:'#3d2f0c', tx2:'#5a4616', ac:'#9A7418', acc:'#8a1420', met:'linear-gradient(180deg,#F6E3A1 0%,#E2C063 50%,#C79A2C 100%)', mt:'#3d2f0c', bd:'#D4AF37', snow:'#E2C063', cin:'linear-gradient(90deg,#D4B25A,#F3E0A0 50%,#D4B25A)', cit:'#3d2f0c', reel:'linear-gradient(160deg,#FFFBEF,#EBD08A)', hd:'linear-gradient(180deg,#FFFEF9,#F6EBCB)', body:'linear-gradient(180deg,#FFFCF3,#F8EDCB 55%,#FFFCF3)'},
    '4': {tx:'#0a2f1a', tx2:'#2d5a40', ac:'#157347', acc:'#B3202D', met:'linear-gradient(180deg,#58C68B 0%,#1E8F55 55%,#0F6A3A 100%)', mt:'#fff', bd:'#1E8F55', snow:'#6CBF8D', cin:'linear-gradient(90deg,#157347,#A9E3C0 50%,#157347)', cit:'#052414', reel:'linear-gradient(160deg,#FFFFFF,#C4E8D1)', hd:'linear-gradient(180deg,#FFFFFF,#E3F4E8)', body:'linear-gradient(180deg,#FAFDFB,#DDEFE2 55%,#FAFDFB)'}
  }[estilo];

  /* versión oscura de los mismos cuatro modelos (?tono=oscuro) */
  var oscuro = (tono === 'oscuro');
  if (oscuro){
    var MG = 'linear-gradient(180deg,#FFE9A0 0%,#FFD43B 50%,#E0A800 100%)';
    var DK = {
      '1': {head:'#071533', hero:'radial-gradient(ellipse 55% 110% at 86% 30%,rgba(96,160,245,.38),transparent 62%),linear-gradient(105deg,#040a1c 0%,#0a1a40 38%,#0f2f6b 72%,#143c80 100%)', band:'linear-gradient(100deg,#050c20 0%,#0b1f4a 50%,#133d86 100%)', bg:'#060b1a', bg2:'#0a1630', panel:'linear-gradient(180deg,#123068 0%,#0a1c44 60%,#061230 100%)', hd:'linear-gradient(180deg,#0b1d47,#050d24)', cin:'linear-gradient(90deg,#071533,#1a4a9a 50%,#071533)', reel:'linear-gradient(160deg,#0a1a3a,#040a1c)', card:'#10204a,#08112a', body:'linear-gradient(180deg,#060b1a,#0a1630 55%,#060b1a)'},
      '2': {head:'#2a050a', hero:'radial-gradient(ellipse 55% 110% at 86% 30%,rgba(245,110,120,.34),transparent 62%),linear-gradient(105deg,#1a0407 0%,#4a0a14 38%,#7a121f 72%,#7a121f 100%)', band:'linear-gradient(100deg,#1c0508 0%,#5a0c18 50%,#9c1b28 100%)', bg:'#14060a', bg2:'#220a10', panel:'linear-gradient(180deg,#8a1424 0%,#4a0a14 60%,#1c0508 100%)', hd:'linear-gradient(180deg,#5a0c18,#240509)', cin:'linear-gradient(90deg,#2a050a,#a01a29 50%,#2a050a)', reel:'linear-gradient(160deg,#3a0810,#150306)', card:'#33101a,#1b070d', body:'linear-gradient(180deg,#14060a,#220a10 55%,#14060a)'},
      '3': {head:'#0b0b0c', hero:'radial-gradient(ellipse 55% 110% at 86% 35%,rgba(255,205,60,.38),transparent 62%),linear-gradient(105deg,#050505 0%,#0e0d0b 42%,#262522 72%,#333230 100%)', band:'linear-gradient(100deg,#060606 0%,#12100c 50%,#26221a 100%)', bg:'#080808', bg2:'#121212', panel:'linear-gradient(180deg,#2a261c 0%,#14120d 60%,#060606 100%)', hd:'linear-gradient(180deg,#1c1b18,#080808)', cin:'linear-gradient(90deg,#0b0b0c,#5a4a1c 50%,#0b0b0c)', reel:'linear-gradient(160deg,#1c1a14,#070707)', card:'#201e19,#0f0e0c', body:'linear-gradient(180deg,#080808,#121212 55%,#080808)'},
      '4': {head:'#04200f', hero:'radial-gradient(ellipse 55% 110% at 86% 30%,rgba(100,210,150,.32),transparent 62%),linear-gradient(105deg,#031a0d 0%,#07391f 38%,#0d5c33 72%,#0f6a3a 100%)', band:'linear-gradient(100deg,#041a0d 0%,#0a4527 50%,#12713f 100%)', bg:'#06140b', bg2:'#0a2414', panel:'linear-gradient(180deg,#12713f 0%,#0a4527 60%,#041a0d 100%)', hd:'linear-gradient(180deg,#0b4527,#04200f)', cin:'linear-gradient(90deg,#04200f,#17874e 50%,#04200f)', reel:'linear-gradient(160deg,#0a3a20,#031208)', card:'#0f3320,#07190f', body:'linear-gradient(180deg,#06140b,#0a2414 55%,#06140b)'}
    }[estilo];
    T.a = estilo === '3' ? '#F2C94C' : '#FFD43B'; T.a2 = '#E0A800'; T.dark = true; T.lum = true;
    T.head = DK.head; T.cinta = DK.head; T.hero = DK.hero; T.band = DK.band; T.bg = DK.bg; T.bg2 = DK.bg2; T.panel = DK.panel; T.l2 = '#FFFFFF'; T.l1 = '#FF4655';
    P = {tx:'#FFFFFF', tx2:'#D6DDE8', ac:T.a, acc:T.a, met:MG, mt:'#2b1d00', bd:T.a, snow:'#FFFFFF', cin:DK.cin, cit:'#FFFFFF', reel:DK.reel, hd:DK.hd, body:DK.body,
      card:DK.card, glass:'rgba(0,0,0,.30)', glass2:'rgba(0,0,0,.32)', dots:'.22', ink:'#FFFFFF',
      h1:'linear-gradient(100deg,#FFC62E 0%,#FFE27A 22%,#FFF8DC 34%,#FFD54A 48%,#FFC62E 60%,#FFE27A 74%,#FFF8DC 86%,#FFD54A 100%)'};
  }
  P.glass = P.glass || 'rgba(255,255,255,.58)'; P.glass2 = P.glass2 || 'rgba(255,255,255,.62)'; P.dots = P.dots || '.8';
  P.h1 = P.h1 || ('linear-gradient(100deg,' + P.tx + ' 0%,' + P.ac + ' 50%,' + P.tx + ' 100%)');


  var css = '' +
  ':root{--nv-a:' + T.a + ';--nv-a2:' + T.a2 + ';--nv-l1:' + T.l1 + ';--nv-l2:' + T.l2 + ';--gold:' + T.a + ';--gold-dark:' + T.a2 + ';}' +
  'header{background:' + T.head + '!important;border-bottom:3px solid ' + T.a + '!important;}' +
  'header .brand-text,header .brand-text b{color:' + T.a + '!important;}' +
  'header .brand-sub,header .brand-rif{color:#EDE6D6!important;}' +
  'header .nav-links a{color:#F7F2E7!important;}' +
  'header .nav-links a:hover{color:' + T.a + '!important;}' +
  '.hero{background:' + T.hero + '!important;border-bottom:4px solid ' + T.a + '!important;}' +
  '.hero::before{background-image:radial-gradient(circle,rgba(255,255,255,.10) 0 1.5px,transparent 2px)!important;background-size:46px 46px!important;opacity:1!important;}' +
  '.hero p{color:#E9E3D3!important;}' +
  '.hero-stats div span{color:#DCD5C3!important;}' +
  '.hero-bg-image{background:' + T.hero + '!important;}' +
  '.hero-photo-color{display:none!important;}' +
  '.hero-key-photo{-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 40%,#000 93%,transparent 100%),radial-gradient(ellipse 80% 78% at 58% 50%,#000 45%,rgba(0,0,0,.6) 65%,transparent 90%)!important;-webkit-mask-composite:source-in!important;mask-image:linear-gradient(90deg,transparent 0%,#000 40%,#000 93%,transparent 100%),radial-gradient(ellipse 80% 78% at 58% 50%,#000 45%,rgba(0,0,0,.6) 65%,transparent 90%)!important;mask-composite:intersect!important;}' +
  '.hero h1{background:linear-gradient(100deg,#FFC62E 0%,#FFE27A 22%,#FFF8DC 34%,#FFD54A 48%,#FFC62E 60%,#FFE27A 74%,#FFF8DC 86%,#FFD54A 100%)!important;background-size:220% 100%!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;}' +
  /* cinta superior */
  '.nv-cinta{background:' + T.cinta + ';color:#fff;border-bottom:1px solid rgba(255,255,255,.12);font:700 13px/1 Inter,sans-serif;letter-spacing:.04em;text-align:center;padding:9px 16px;}' +
  '.nv-cinta b{color:' + T.a + ';font-family:"Plus Jakarta Sans",Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;margin-right:10px;}' +
  /* luces colgantes */
  '.nv-luces{height:58px;background-color:' + T.head + ';background-repeat:repeat-x;background-position:center top;background-size:200px 58px;pointer-events:none;border-bottom:3px solid ' + T.a + ';}' +
  '.nv-marco{position:relative;}' +
  '.nv-corona{position:absolute;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45));z-index:3;}' +
  '.nv-gorro{position:absolute;pointer-events:none;z-index:6;width:38px;left:2px;top:-16px;transform:rotate(-16deg);transform-origin:50% 80%;filter:drop-shadow(0 2px 3px rgba(0,0,0,.45));}' +
  '.brand{position:relative;}' +
  '@media(max-width:700px){.nv-gorro{width:30px;left:1px;top:-12px}}' +
  '@keyframes nvLuz{0%,100%{opacity:1}50%{opacity:.35}}' +
  /* nieve */
  '.nv-nieve{position:fixed;inset:0;pointer-events:none;z-index:2;overflow:hidden;}' +
  '.nv-nieve i{position:absolute;top:-12px;width:var(--s);height:var(--s);border-radius:50%;background:#fff;opacity:.8;filter:blur(.3px);animation:nvCae var(--t) linear var(--d) infinite;}' +
  '@keyframes nvCae{0%{transform:translate(0,-10px)}100%{transform:translate(var(--x),108vh)}}' +
  /* banda del pesebre (ocupa el lugar del carrete) */
  '.nv-banda{position:relative;background:' + T.band + ';border-bottom:4px solid ' + T.a + ';padding:26px 0 24px;overflow:hidden;}' +
  '.nv-banda::before{content:"";position:absolute;inset:0;background:radial-gradient(circle,rgba(255,255,255,.16) 0 1.4px,transparent 2px);background-size:54px 54px;opacity:.6;pointer-events:none;}' +
  '.nv-banda-in{position:relative;max-width:1200px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:minmax(220px,340px) 1fr auto;align-items:center;gap:30px;}' +
  '.nv-escena{width:100%;filter:drop-shadow(0 10px 22px rgba(0,0,0,.45));}' +
  '.nv-texto{min-width:0;color:#fff;}' +
  '.nv-kicker{display:inline-block;font:800 11px/1 Inter,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:' + T.ink + ';background:' + T.a + ';padding:6px 11px;border-radius:5px;}' +
  '.nv-texto h2{margin:12px 0 8px;font:800 clamp(24px,3.2vw,36px)/1.1 "Plus Jakarta Sans",Inter,sans-serif;color:#fff;text-wrap:balance;}' +
  '.nv-texto h2 span{color:' + T.a + ';}' +
  '.nv-texto p{margin:0;color:#E6E0D0;font:500 15px/1.55 Inter,sans-serif;max-width:52ch;}' +
  '.nv-lado{display:flex;flex-direction:column;align-items:stretch;gap:10px;min-width:190px;}' +
  '.nv-dias{text-align:center;background:rgba(0,0,0,.28);border:1px solid ' + T.a + ';border-radius:12px;padding:12px 16px;color:#fff;}' +
  '.nv-dias b{display:block;font:800 38px/1 "Plus Jakarta Sans",Inter,sans-serif;color:' + T.a + ';font-variant-numeric:tabular-nums;}' +
  '.nv-dias small{font:600 11.5px/1.3 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#E6E0D0;}' +
  '.nv-lado a{display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;font:800 14px/1 Inter,sans-serif;padding:13px 16px;border-radius:9px;}' +
  '.nv-lado .nv-b1{background:' + T.a + ';color:' + T.ink + ';}' +
  '.nv-lado .nv-b2{background:#25D366;color:#06210f;}' +
  /* pesebre: animaciones */
  '.nv-estrella{transform-origin:center;transform-box:fill-box;animation:nvBrilla 2.6s ease-in-out infinite;}' +
  '@keyframes nvBrilla{0%,100%{opacity:.8;transform:scale(.92)}50%{opacity:1;transform:scale(1.12)}}' +
  '.nv-aura{animation:nvAura 3.2s ease-in-out infinite;transform-origin:center;transform-box:fill-box;}' +
  '@keyframes nvAura{0%,100%{opacity:.55}50%{opacity:1}}' +
  /* ruleta */
  '.nv-ruleta{display:block;width:100%;max-width:150px;margin:0 auto 6px;filter:drop-shadow(0 6px 12px rgba(0,0,0,.4));}.nv-luz0{animation:nvLuz 1.8s ease-in-out infinite}.nv-luz1{animation:nvLuz 1.8s ease-in-out .9s infinite}' +
  '.nv-badge{display:inline-flex;align-items:center;gap:7px;margin:0 auto 8px;background:' + T.a + ';color:' + T.ink + ';font:800 11px/1 Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:7px 12px;border-radius:999px;}' +
  '.game-panel{position:relative;border-color:' + T.a + '!important;' + (T.panel ? 'background:' + T.panel + '!important;' : '') + '}' +
  '@media(max-width:860px){.nv-banda-in{grid-template-columns:1fr;gap:18px;text-align:center;justify-items:center}.nv-escena{max-width:300px}.nv-texto p{margin:0 auto}.nv-lado{width:100%;max-width:340px}}' +
  '@media(prefers-reduced-motion:reduce){.nv-nieve i,.nv-estrella,.nv-aura{animation:none!important}.nv-nieve{display:none}}' +
  /* filtro del selector de estilo (solo vista previa) */
  '.nv-sel{position:fixed;left:12px;bottom:12px;z-index:9999;display:flex;gap:6px;flex-wrap:wrap;background:rgba(0,0,0,.82);padding:8px;border-radius:12px;font:700 12px/1 Inter,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.4);}' +
  '.nv-sel a{color:#fff;text-decoration:none;padding:9px 12px;border-radius:8px;background:rgba(255,255,255,.12);}' +
  '.nv-sel a.on{background:' + T.a + ';color:#111;}';

  /* estilos con fondo oscuro: mismo tratamiento que Black Friday, con ventanas blancas legibles */
  if (T.dark){
    css += '' +
    'body.nv-dark{--bg:' + T.bg + ';--panel:#12151c;--panel-2:#191d27;--line:#2a2f3b;--text:#F3F4F7;--text-dim:#C3C8D4;background:linear-gradient(180deg,' + T.bg + ',' + T.bg2 + ' 60%,' + T.bg + ')!important;}' +
    'body.nv-dark .section-head h2,body.nv-dark .section h2,body.nv-dark .section h3,body.nv-dark .mv-card h3{color:#fff!important;}' +
    'body.nv-dark .section-head p,body.nv-dark .mv-card p,body.nv-dark .section p{color:#C9CDD8!important;}' +
    'body.nv-dark .chip.active{background:' + T.a + '!important;color:#111!important;border-color:' + T.a + '!important;}' +
    'body.nv-dark label,body.nv-dark .contact-grid strong,body.nv-dark .contact-grid b{color:#fff!important;}' +
    'body.nv-dark .card,body.nv-dark .info-card,body.nv-dark .mv-card,body.nv-dark .contact-card,body.nv-dark .form-card,body.nv-dark .map-card{background:linear-gradient(180deg,#14171f,#0e1016)!important;border-color:#2a2f3b!important;color:#E9EBF0;}' +
    'body.nv-dark .card-desc,body.nv-dark .card-code{color:#E9EBF0!important;}' +
    'body.nv-dark .card-cat{color:' + T.a + '!important;}' +
    'body.nv-dark #nosotros .taller-anim{background:radial-gradient(circle,#F7F8FB,#D9DEE9);border-radius:50%;overflow:hidden;box-shadow:0 0 0 3px ' + T.a + ',0 14px 34px rgba(0,0,0,.55);}' +
    'body.nv-dark input,body.nv-dark select,body.nv-dark textarea{background:#0b0d13!important;color:#fff!important;border-color:#2f3543!important;}' +
    'body.nv-dark .chip,body.nv-dark .cat-chip,body.nv-dark .filters button{background:#14171f!important;color:#E9EBF0!important;border-color:#2f3543!important;}' +
    'body.nv-dark .product-modal,body.nv-dark .drawer,body.nv-dark .prize-box,body.nv-dark .claim-box,body.nv-dark .claim-done,body.nv-dark .local-load-card{--text:#0F2038;--text-dim:#26303F;--line:#DCE3EE;--panel:#FFFFFF;--panel-2:#EEF3FA;color:#0F2038;}' +
    'body.nv-dark .product-modal label,body.nv-dark .drawer label,body.nv-dark .claim-box label,body.nv-dark .prize-box label,body.nv-dark .claim-done label,body.nv-dark .product-modal strong,body.nv-dark .drawer strong,body.nv-dark .claim-box strong,body.nv-dark .prize-box strong,body.nv-dark .claim-done strong{color:#0F2038!important;}' +
    'body.nv-dark .claim-intro,body.nv-dark .claim-box p,body.nv-dark .claim-box small,body.nv-dark .claim-box span,body.nv-dark .drawer p,body.nv-dark .drawer small{color:#26303F!important;}' +
    'body.nv-dark .drawer-body,body.nv-dark .drawer-item-info,body.nv-dark .drawer-item-info b,body.nv-dark .qty-value{color:#0F2038!important;}' +
    'body.nv-dark .drawer-item-info span,body.nv-dark .drawer-foot p,body.nv-dark .drawer-empty{color:#4A5565!important;}' +
    'body.nv-dark .drawer .qty-btn{background:#EEF3FA!important;color:#0F2038!important;}' +
    'body.nv-dark .drawer-remove{background:#fff!important;color:#E00210!important;}' +
    'body.nv-dark .drawer input,body.nv-dark .drawer select,body.nv-dark .drawer textarea,body.nv-dark .claim-box input,body.nv-dark .claim-box select,body.nv-dark .claim-box textarea{background:#fff!important;color:#0F2038!important;border-color:#DCE3EE!important;}';
  }


  /* estilos luminosos: degradado suave del tono (igual que el dorado champán) */
  if (T.lum){
    css += '' +
    'body{background:' + P.body + '!important;}' +
    'header{background:' + P.hd + '!important;border-bottom:3px solid ' + P.bd + '!important;}' +
    'header .brand-text,header .brand-text b{color:' + P.ac + '!important;text-shadow:none!important;}' +
    'header .brand-sub{color:' + P.tx2 + '!important;}header .brand-rif{color:' + P.tx + '!important;}' +
    'header .nav-links a{color:' + P.tx + '!important;}header .nav-links a:hover{color:' + P.ac + '!important;}' +
    '.nv-cinta{background:' + P.cin + '!important;color:' + P.cit + '!important;border-bottom:1px solid rgba(0,0,0,.08)!important;}' +
    '.nv-cinta b{color:' + P.acc + '!important;}' +
    '.hero{border-bottom:4px solid ' + P.bd + '!important;}' +
    '.hero h1{background:' + P.h1 + '!important;background-size:220% 100%!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;filter:none!important;animation:none!important;}' +
    '.hero p,.hero-stats div span{color:' + P.tx2 + '!important;}' +
    '.hero .eyebrow-badge{background:' + P.met + '!important;color:' + P.mt + '!important;border-color:' + P.bd + '!important;}' +
    '.hero .eyebrow-badge svg{color:' + P.mt + '!important;}' +
    '.hl-tags .tag{border-color:' + P.ac + '!important;color:' + P.tx + '!important;}.hl-tags .tag svg{color:' + P.ac + '!important;}' +
    '.hero .btn-primary{background:' + P.met + '!important;color:' + P.mt + '!important;border:1px solid ' + P.bd + '!important;box-shadow:0 3px 10px rgba(0,0,0,.18);}' +
    '.hero .btn-ghost{border-color:' + P.ac + '!important;color:' + P.tx + '!important;}.hero .btn-ghost:hover{background:rgba(0,0,0,.05)!important;}' +
    '.hero-stats div{background:' + P.glass + '!important;border:1px solid ' + P.bd + '55!important;}' +
    '.hero-stats div b{color:' + P.ac + '!important;}' +
    '.hero-bg-image{background:none!important;}' +
    '.hero-key-photo{filter:drop-shadow(0 10px 18px rgba(0,0,0,.28)) saturate(1.04)!important;}' +
    '.nv-banda::before{background:radial-gradient(circle,rgba(255,255,255,.7) 0 1.4px,transparent 2px)!important;opacity:' + P.dots + '!important;}' +
    '.nv-texto,.nv-texto h2{color:' + P.tx + '!important;}.nv-texto h2 span{color:' + P.acc + '!important;}.nv-texto p{color:' + P.tx2 + '!important;}' +
    '.nv-kicker{background:' + P.met + '!important;color:' + P.mt + '!important;}' +
    '.nv-dias{background:' + P.glass2 + '!important;border-color:' + P.bd + '!important;}.nv-dias b{color:' + P.acc + '!important;}.nv-dias small{color:' + P.tx2 + '!important;}' +
    '.nv-lado .nv-b1{background:' + P.met + '!important;color:' + P.mt + '!important;border:1px solid ' + P.bd + ';}' +
    '.nv-nieve i{background:' + P.snow + '!important;opacity:.9!important;box-shadow:0 0 4px ' + P.snow + ';}' +
    '.game-panel{border-color:' + P.bd + '!important;}' +
    '.game-panel h3,.game-panel > p,.game-msg{color:' + P.tx + '!important;}' +
    '.reels{background:' + P.reel + '!important;border-color:' + P.bd + '!important;box-shadow:inset 0 3px 8px rgba(0,0,0,.15)!important;}' +
    '.spin-btn{background:' + P.met + '!important;color:' + P.mt + '!important;border:1px solid ' + P.bd + '!important;box-shadow:0 3px 0 rgba(0,0,0,.28),0 8px 18px rgba(0,0,0,.22)!important;}' +
    '.nv-badge{background:' + P.met + '!important;color:' + P.mt + '!important;}' +
    '.chip.active{background:' + P.met + '!important;color:' + P.mt + '!important;border-color:' + P.bd + '!important;}' +
    '.card-cat{color:' + P.ac + '!important;}' +
    '.search-box:focus-within,.card:hover{border-color:' + P.bd + '!important;}' +
    '.section-head h2{color:' + P.tx + '!important;}' +
    (P.card ? 'body.nv-dark .card,body.nv-dark .info-card,body.nv-dark .mv-card,body.nv-dark .contact-card,body.nv-dark .form-card,body.nv-dark .map-card{background:linear-gradient(180deg,' + P.card + ')!important;border-color:' + P.bd + '33!important;}' : '') +
    '.nv-sel a{color:#fff;}.nv-sel a.on{background:' + T.gold + ';color:#2b1d00;}';
  }

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* mini pesebre en vector: establo, estrella, María, José, el Niño en el pesebre y dos ovejas */
  function pesebre(id, cls){
    var s1 = T.sky1, s2 = T.sky2;
    return '<svg class="' + cls + '" viewBox="0 0 240 170" role="img" aria-label="Mini pesebre: el Niño Jesús, María y José bajo la estrella">' +
    '<defs>' +
      '<linearGradient id="cielo' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + s1 + '"/><stop offset="1" stop-color="' + s2 + '"/></linearGradient>' +
      '<radialGradient id="luz' + id + '" cx=".5" cy=".55" r=".6"><stop offset="0" stop-color="#FFE29A" stop-opacity=".95"/><stop offset="1" stop-color="#FFB547" stop-opacity="0"/></radialGradient>' +
      '<radialGradient id="est' + id + '" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#FFE58A" stop-opacity="0"/></radialGradient>' +
      '<clipPath id="marco' + id + '"><rect x="0" y="0" width="240" height="170" rx="16"/></clipPath>' +
    '</defs>' +
    '<g clip-path="url(#marco' + id + ')">' +
      '<rect width="240" height="170" fill="url(#cielo' + id + ')"/>' +
      '<g fill="#fff" opacity=".85"><circle cx="30" cy="24" r="1.3"/><circle cx="62" cy="14" r="1"/><circle cx="96" cy="30" r="1.2"/><circle cx="150" cy="16" r="1"/><circle cx="214" cy="52" r="1.3"/><circle cx="20" cy="62" r="1"/><circle cx="226" cy="22" r="1"/><circle cx="176" cy="44" r="1"/></g>' +
      /* colinas y suelo */
      '<path d="M0 126 Q50 104 104 122 T240 114 V170 H0Z" fill="#0b1630" opacity=".85"/>' +
      '<path d="M0 142 Q70 128 130 140 T240 136 V170 H0Z" fill="#33261a"/>' +
      '<path d="M0 152 Q80 144 150 152 T240 150 V170 H0Z" fill="#473320"/>' +
      /* estrella y rayo de luz */
      '<polygon points="120,34 70,150 170,150" fill="url(#luz' + id + ')" opacity=".30"/>' +
      '<g class="nv-estrella"><circle cx="120" cy="22" r="17" fill="url(#est' + id + ')"/>' +
      '<path d="M120 6 L123.2 18.8 L136 22 L123.2 25.2 L120 38 L116.8 25.2 L104 22 L116.8 18.8Z" fill="#FFF3B0"/></g>' +
      /* establo */
      '<rect x="68" y="66" width="104" height="84" fill="#241a12"/>' +
      '<ellipse class="nv-aura" cx="120" cy="116" rx="46" ry="38" fill="url(#luz' + id + ')"/>' +
      '<polygon points="56,70 120,38 184,70" fill="#6d4524"/>' +
      '<polygon points="56,70 120,38 184,70 184,76 56,76" fill="#7b5029" opacity=".0"/>' +
      '<path d="M63 68 L120 41 L177 68" fill="none" stroke="#8a5d31" stroke-width="2"/>' +
      '<g stroke="#4d3018" stroke-width="1.2" opacity=".8"><path d="M76 62 L120 44.5"/><path d="M92 66 L120 52"/><path d="M164 62 L120 44.5"/><path d="M148 66 L120 52"/></g>' +
      '<rect x="66" y="70" width="7" height="82" fill="#5a3a1c"/><rect x="167" y="70" width="7" height="82" fill="#5a3a1c"/>' +
      '<rect x="62" y="68" width="116" height="6" rx="2" fill="#7b5029"/>' +
      /* paja */
      '<path d="M74 148 Q120 138 166 148 V153 H74Z" fill="#D9B45A"/>' +
      /* pesebre (cuna) */
      '<path d="M108 126 H134 L131 141 H111Z" fill="#7b5029"/><path d="M110 141 L106 150 M132 141 L136 150" stroke="#5a3a1c" stroke-width="2.4" stroke-linecap="round"/>' +
      '<path d="M107 126 Q121 118 135 126 Q121 131 107 126Z" fill="#E7C35E"/>' +
      '<ellipse cx="121" cy="124" rx="9" ry="4.4" fill="#fff"/>' +
      '<circle cx="121" cy="119.5" r="4.6" fill="#F0C9A0"/>' +
      '<circle cx="121" cy="119.5" r="8.5" fill="none" stroke="#FFE9A8" stroke-width="1" opacity=".8"/>' +
      /* María */
      '<path d="M86 150 Q86 124 98 116 Q110 124 110 150Z" fill="#2f5fb5"/>' +
      '<path d="M91 146 Q98 128 104 146" fill="#fff" opacity=".18"/>' +
      '<circle cx="99" cy="108" r="6.2" fill="#F0C9A0"/>' +
      '<path d="M91.5 109 Q91 98 99 98 Q107 98 106.5 109 Q104 103.5 99 103.5 Q94 103.5 91.5 109Z" fill="#F3EEE2"/>' +
      '<path d="M91 112 Q90 98 99 97 Q108 98 107 112 Q107 100 99 100 Q91 100 91 112Z" fill="#2f5fb5"/>' +
      '<circle cx="99" cy="108" r="10.5" fill="none" stroke="#FFE9A8" stroke-width="1" opacity=".55"/>' +
      '<path d="M104 128 Q110 129 113 126" stroke="#2f5fb5" stroke-width="5" stroke-linecap="round" fill="none"/>' +
      /* José */
      '<path d="M138 150 Q140 118 152 110 Q164 118 166 150Z" fill="#8a5a2b"/>' +
      '<path d="M152 112 Q158 128 156 150" stroke="#6a4220" stroke-width="2" fill="none" opacity=".7"/>' +
      '<circle cx="152" cy="102" r="6.2" fill="#E9BC92"/>' +
      '<path d="M146 103 Q146 96 152 96 Q158 96 158 103 Q156 99.5 152 99.5 Q148 99.5 146 103Z" fill="#4a3220"/>' +
      '<path d="M147.5 105 Q152 114 156.5 105 Q152 108 147.5 105Z" fill="#4a3220"/>' +
      '<circle cx="152" cy="102" r="10.5" fill="none" stroke="#FFE9A8" stroke-width="1" opacity=".4"/>' +
      '<path d="M168 150 V96" stroke="#5a3a1c" stroke-width="2.4" stroke-linecap="round"/><path d="M168 96 q4 -1 4 4" stroke="#5a3a1c" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
      '<path d="M138 128 Q130 127 127 124" stroke="#8a5a2b" stroke-width="5" stroke-linecap="round" fill="none"/>' +
      /* ovejas */
      '<g><ellipse cx="38" cy="146" rx="12" ry="7.4" fill="#F4F1EA"/><circle cx="26.5" cy="144" r="4.2" fill="#3a2d24"/><g stroke="#3a2d24" stroke-width="2" stroke-linecap="round"><path d="M31 152 v5"/><path d="M44 152 v5"/></g></g>' +
      '<g><ellipse cx="204" cy="148" rx="10.5" ry="6.6" fill="#F4F1EA"/><circle cx="214" cy="146.5" r="3.8" fill="#3a2d24"/><g stroke="#3a2d24" stroke-width="2" stroke-linecap="round"><path d="M198 154 v4.5"/><path d="M209 154 v4.5"/></g></g>' +
    '</g>' +
    '<rect x="1" y="1" width="238" height="168" rx="15.5" fill="none" stroke="' + T.a + '" stroke-width="2"/>' +
    '</svg>';
  }


  /* guirnalda de pino con luces y bolas (se repite a lo ancho) */
  function guirnaldaURI(){
    var g = T.swag, g2 = T.swag2;
    function pt(t){ var x = 2*(1-t)*t*100 + t*t*200, y = (1-t)*(1-t)*4 + 2*(1-t)*t*50 + t*t*4; return [x, y]; }
    var luces = '', cols = [T.l1, T.l2, '#FFFFFF', T.l1, T.l2, '#FFFFFF'];
    [0.10,0.22,0.36,0.64,0.78,0.90].forEach(function(t, i){ var p = pt(t); luces += '<circle cx="' + p[0].toFixed(1) + '" cy="' + (p[1] + 6).toFixed(1) + '" r="3.1" fill="' + cols[i] + '"/><circle cx="' + p[0].toFixed(1) + '" cy="' + (p[1] + 6).toFixed(1) + '" r="6" fill="' + cols[i] + '" opacity=".28"/>'; });
    var bayas = ''; [0.30,0.70].forEach(function(t){ var p = pt(t); bayas += '<circle cx="' + p[0].toFixed(1) + '" cy="' + (p[1] - 1).toFixed(1) + '" r="3.2" fill="' + g2 + '"/><circle cx="' + (p[0] + 5).toFixed(1) + '" cy="' + (p[1] + 1).toFixed(1) + '" r="2.6" fill="' + g2 + '"/>'; });
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="58" viewBox="0 0 200 58">' +
      '<path d="M-2 4 Q100 50 202 4" fill="none" stroke="' + g + '" stroke-width="10" stroke-linecap="round"/>' +
      '<path d="M-2 4 Q100 50 202 4" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="7" stroke-dasharray="1.6 3.2"/>' +
      '<path d="M-2 6 Q100 52 202 6" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="3" stroke-dasharray="3 4"/>' +
      luces + bayas +
      '<path d="M100 28 V41" stroke="' + T.a + '" stroke-width="1.4"/>' +
      '<circle cx="100" cy="48" r="8" fill="' + g2 + '"/><ellipse cx="97" cy="45" rx="2.4" ry="3.2" fill="#fff" opacity=".55"/><rect x="96.5" y="38.6" width="7" height="3.6" rx="1" fill="' + T.a + '"/>' +
      '<path d="M0 4 L0 2 M200 4 L200 2" stroke="' + g + '" stroke-width="3"/>' +
    '</svg>';
    return 'url("data:image/svg+xml;utf8,' + encodeURIComponent(svg) + '")';
  }

  /* corona de guirnalda con moño */
  function corona(cls, estiloPos){
    var g = T.swag, g2 = T.swag2;
    var bolas = '', pos = [[50,10,'#E5303F'],[84,30,T.a],[88,66,'#E5303F'],[62,90,T.a],[24,80,'#E5303F'],[12,46,T.a],[28,18,'#fff']];
    pos.forEach(function(p){ bolas += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="' + p[2] + '"/><circle cx="' + (p[0]-1.6) + '" cy="' + (p[1]-1.6) + '" r="1.4" fill="#fff" opacity=".65"/>'; });
    return '<svg class="nv-corona ' + cls + '" viewBox="0 0 100 108" style="' + estiloPos + '" aria-hidden="true">' +
      '<circle cx="50" cy="50" r="36" fill="none" stroke="#0f4a2b" stroke-width="17"/>' +
      '<circle cx="50" cy="50" r="36" fill="none" stroke="' + g + '" stroke-width="14"/>' +
      '<circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,.30)" stroke-width="11" stroke-dasharray="1.8 3.4"/>' +
      '<circle cx="50" cy="50" r="42" fill="none" stroke="' + g + '" stroke-width="3" stroke-dasharray="5 6"/>' +
      bolas +
      '<path d="M50 84 L30 106 L40 108 L50 94 L60 108 L70 106Z" fill="#B3202D"/>' +
      '<path d="M50 90 C30 74 22 92 38 96 C44 97 48 94 50 90Z" fill="#E5303F"/><path d="M50 90 C70 74 78 92 62 96 C56 97 52 94 50 90Z" fill="#E5303F"/>' +
      '<circle cx="50" cy="90" r="5.5" fill="#B3202D"/>' +
    '</svg>';
  }

  /* gorrito de Papá Noel */
  var GORRO = '<svg class="nv-gorro" viewBox="0 0 84 66" aria-hidden="true">' +
    '<defs><linearGradient id="gcono" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0404E"/><stop offset=".55" stop-color="#C8101F"/><stop offset="1" stop-color="#8F0A16"/></linearGradient>' +
    '<linearGradient id="gpiel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E4E7EE"/></linearGradient></defs>' +
    '<path d="M10 44 C8 24 22 8 42 6 C56 5 66 12 72 24 C76 32 74 42 70 50 C64 40 56 34 46 32 C36 32 24 36 10 44Z" fill="url(#gcono)"/>' +
    '<path d="M14 40 C16 26 26 14 42 11" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2.4" stroke-linecap="round"/>' +
    '<path d="M70 50 C76 44 80 40 82 44 C84 50 80 58 72 58Z" fill="url(#gcono)"/>' +
    '<circle cx="78" cy="58" r="7" fill="url(#gpiel)"/><circle cx="75.5" cy="55.5" r="2.2" fill="#fff"/>' +
    '<path d="M2 46 C2 38 14 34 38 34 C58 34 72 38 72 46 C72 56 58 60 38 60 C16 60 2 56 2 46Z" fill="url(#gpiel)"/>' +
    '<path d="M6 50 C18 55 58 55 68 50" fill="none" stroke="#C9CEDA" stroke-width="1.8" stroke-linecap="round"/>' +
    '<g fill="#fff"><circle cx="8" cy="42" r="4.2"/><circle cx="20" cy="37" r="4.6"/><circle cx="38" cy="35" r="4.8"/><circle cx="56" cy="37" r="4.6"/><circle cx="68" cy="42" r="4.2"/></g>' +
  '</svg>';

  /* arbolito de Navidad con luces, bolas y regalos (para la ruleta) */
  function arbolito(cls){
    var rojo = '#E5303F', oro = T.a;
    var bolas = [[80,44,rojo],[66,70,oro],[96,72,'#fff'],[56,104,rojo],[84,102,oro],[110,108,rojo],[40,140,oro],[70,138,'#fff'],[100,142,rojo],[126,146,oro]], b = '';
    bolas.forEach(function(p, i){ b += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4.6" fill="' + p[2] + '"/><circle cx="' + (p[0]-1.5) + '" cy="' + (p[1]-1.5) + '" r="1.3" fill="#fff" opacity=".7"/>'; });
    var luces = [[72,56],[90,58],[60,86],[78,90],[104,88],[48,122],[68,120],[92,124],[118,126],[30,152],[56,154],[84,156],[112,158],[134,156]], l = '';
    luces.forEach(function(p, i){ l += '<circle class="nv-luz' + (i % 2) + '" cx="' + p[0] + '" cy="' + p[1] + '" r="2.4" fill="' + (i % 3 === 0 ? '#FFF1A8' : i % 3 === 1 ? '#7FE3A8' : '#FFB3B8') + '"/>'; });
    return '<svg class="' + cls + '" viewBox="0 0 160 196" role="img" aria-label="Arbolito de Navidad con regalos">' +
      '<defs><linearGradient id="abv" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0d4f2c"/><stop offset=".5" stop-color="#1f9157"/><stop offset="1" stop-color="#0d4f2c"/></linearGradient>' +
      '<radialGradient id="abh" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFE9A0" stop-opacity=".55"/><stop offset="1" stop-color="#FFE9A0" stop-opacity="0"/></radialGradient></defs>' +
      '<ellipse cx="80" cy="96" rx="78" ry="92" fill="url(#abh)"/>' +
      '<ellipse cx="80" cy="182" rx="68" ry="9" fill="#000" opacity=".28"/>' +
      '<rect x="72" y="160" width="16" height="18" rx="2" fill="#6b4423"/>' +
      '<polygon points="80,84 144,166 16,166" fill="url(#abv)"/><polygon points="80,84 144,166 118,166 80,110" fill="#000" opacity=".12"/>' +
      '<polygon points="80,48 128,124 32,124" fill="url(#abv)"/><polygon points="80,48 128,124 106,124 80,74" fill="#000" opacity=".12"/>' +
      '<polygon points="80,18 114,80 46,80" fill="url(#abv)"/><polygon points="80,18 114,80 98,80 80,40" fill="#000" opacity=".12"/>' +
      '<path d="M50 78 Q80 92 110 78 M38 122 Q80 140 122 122 M24 162 Q80 182 136 162" fill="none" stroke="' + oro + '" stroke-width="3" stroke-linecap="round" opacity=".95"/>' +
      l + b +
      '<g class="nv-estrella"><circle cx="80" cy="14" r="15" fill="#FFE58A" opacity=".35"/><path d="M80 2 L84 11 L94 12 L86.6 18.6 L89 28 L80 23 L71 28 L73.4 18.6 L66 12 L76 11Z" fill="' + oro + '" stroke="#fff3b0" stroke-width=".8"/></g>' +
      '<g><rect x="20" y="158" width="30" height="24" rx="2" fill="#C8101F"/><rect x="32" y="158" width="6" height="24" fill="' + oro + '"/><rect x="20" y="167" width="30" height="5" fill="' + oro + '"/><path d="M35 158 q-8 -10 -12 -3 q4 6 12 3 q8 3 12 -3 q-4 -7 -12 3Z" fill="' + oro + '"/></g>' +
      '<g><rect x="108" y="162" width="30" height="20" rx="2" fill="#1f7a4d"/><rect x="120" y="162" width="6" height="20" fill="#E5303F"/><rect x="108" y="170" width="30" height="5" fill="#E5303F"/><path d="M123 162 q-7 -9 -11 -2 q4 5 11 2 q7 3 11 -2 q-4 -7 -11 2Z" fill="#E5303F"/></g>' +
      '<g><rect x="90" y="168" width="20" height="14" rx="2" fill="' + oro + '"/><rect x="98" y="168" width="4" height="14" fill="#C8101F"/></g>' +
    '</svg>';
  }

  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function(){
    document.body.classList.add('nv-on', 'nv-e' + estilo);
    var foto = document.querySelector('.hero-key-photo');
    if (foto) foto.src = 'assets/hero-llave-nav' + estilo + (oscuro ? 'd' : '') + '.webp';
    if (T.dark) document.body.classList.add('nv-dark');

    /* días que faltan para Navidad */
    var hoy = new Date(), navidad = new Date(hoy.getFullYear(), 11, 25), dias = Math.ceil((navidad - new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())) / 86400000);
    var textoDias = dias > 1 ? '<b>' + dias + '</b><small>días para Navidad</small>' : dias === 1 ? '<b>1</b><small>día para Navidad</small>' : dias === 0 ? '<b>¡Hoy!</b><small>Feliz Navidad</small>' : '<b>2027</b><small>Próspero año nuevo</small>';

    /* cinta superior */
    var cinta = document.createElement('div'); cinta.className = 'nv-cinta';
    cinta.innerHTML = '<b>Feliz Navidad</b>Keys Cars Motos &amp; House te desea paz, salud y un hogar seguro';
    document.body.insertBefore(cinta, document.body.firstChild);

    /* luces bajo la cabecera */
    var hd = document.querySelector('header');
    if (hd){ hd.insertAdjacentHTML('afterend', '<div class="nv-luces" aria-hidden="true"></div>'); document.querySelector('.nv-luces').style.backgroundImage = guirnaldaURI(); }
    /* gorrito sobre la llave del logo */
    var br = document.querySelector('.brand'); if (br) br.insertAdjacentHTML('afterbegin', GORRO);

    /* nieve suave */
    var N = document.createElement('div'); N.className = 'nv-nieve'; N.setAttribute('aria-hidden', 'true');
    var h = '';
    for (var i = 0; i < 26; i++){
      var s = (2 + (i * 7) % 4) + 'px', left = Math.round(2 + i * 3.8), t = (9 + (i * 5) % 9) + 's', dl = '-' + ((i * 1.7) % 14).toFixed(1) + 's', x = ((i % 2) ? 36 : -36) + 'px';
      h += '<i style="left:' + left + '%;--s:' + s + ';--t:' + t + ';--d:' + dl + ';--x:' + x + '"></i>';
    }
    N.innerHTML = h; document.body.appendChild(N);

    /* banda del pesebre, en el lugar del carrete de ofertas */
    var sec = document.createElement('section'); sec.className = 'nv-banda'; sec.setAttribute('aria-label', 'Navidad en Keys Cars');
    sec.innerHTML = '<div class="nv-banda-in"><div class="nv-marco">' + pesebre('A', 'nv-escena') + corona('', 'width:92px;left:-26px;top:-30px') + '</div>' +
      '<div class="nv-texto"><span class="nv-kicker">Navidad en Keys Cars</span>' +
      '<h2>Que tu hogar esté <span>seguro y en paz</span> esta Navidad</h2>' +
      '<p>Llaves, cerraduras, candados y controles para cuidar lo que más quieres. Cotiza por WhatsApp y te atendemos en el local.</p></div>' +
      '<div class="nv-lado"><div class="nv-dias">' + textoDias + '</div>' +
      '<a class="nv-b1" href="#catalogo">Ver catálogo</a>' +
      '<a class="nv-b2" id="nvWa" href="https://wa.me/584226377050" target="_blank" rel="noopener">Cotizar por WhatsApp</a></div></div>';
    var ref = document.getElementById('catalogo'); if (ref && ref.parentNode) ref.parentNode.insertBefore(sec, ref);
    try{ if (typeof WHATSAPP_NUMBER !== 'undefined') document.getElementById('nvWa').href = 'https://wa.me/' + WHATSAPP_NUMBER; }catch(e){}

    /* pesebre pequeño en la ruleta */
    var panel = document.querySelector('.game-panel');
    if (panel) panel.insertAdjacentHTML('afterbegin', corona('', 'width:62px;right:6px;top:10px') + '<div style="text-align:center"><span class="nv-badge">★ Edición Navidad</span></div>' + arbolito('nv-ruleta'));

    /* selector de estilo (solo en la vista previa) */
    if (window.NV_VISTA){
      var sel = document.createElement('div'); sel.className = 'nv-sel';
      var tq = oscuro ? '&tono=oscuro' : '';
      sel.innerHTML = [['1','1 · Azul'],['2','2 · Rojo'],['3','3 · Dorado'],['4','4 · Verde']].map(function(o){
        return '<a class="' + (o[0] === estilo ? 'on' : '') + '" href="?navidad=1&estilo=' + o[0] + tq + '">' + o[1] + '</a>';
      }).join('') + '<span style="width:100%;height:0"></span>' +
      '<a class="' + (!oscuro ? 'on' : '') + '" href="?navidad=1&estilo=' + estilo + '">☀ Claro</a><a class="' + (oscuro ? 'on' : '') + '" href="?navidad=1&estilo=' + estilo + '&tono=oscuro">☾ Oscuro</a>';
      document.body.appendChild(sel);
    }
  });
})();
