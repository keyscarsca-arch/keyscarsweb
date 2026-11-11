/* Tema de Navidad de Keys Cars (borrador para elegir estilo).
   Fechas previstas: del 28 de noviembre (cuando termina Black Friday) al 6 de enero. Las confirma la dueña.
   Para probar: ?navidad=1 (forzar) o ?navidad=0 (apagar). Estilo: ?estilo=1 (noche navideña), 2 (rojo clásico), 3 (dorado y negro) o 4 (verde y rojo).
   Es solo decoración: no toca el catálogo ni los datos. Para quitarlo del todo: borrar este archivo y su línea <script> en index.html. */
(function(){
  var q, estilo;
  try{
    var p = new URLSearchParams(location.search);
    q = p.get('navidad'); estilo = p.get('estilo');
    var d = new Date(), m = d.getMonth(), day = d.getDate();
    var enFecha = (m === 10 && day >= 28) || m === 11 || (m === 0 && day <= 6);
    if (q === '0' || (q !== '1' && !enFecha)) return;
  }catch(e){ return; }
  if (['2','3','4'].indexOf(estilo) < 0) estilo = '1';

  /* paletas de los tres estilos */
  var T = {
    '1': {dark:true,  a:'#FFD43B', a2:'#F5B400', head:'#0A1530', cinta:'#07102a', hero:'linear-gradient(105deg,#050b1d 0%,#0a1a40 38%,#0b2a5c 64%,#0e2a58 100%)', band:'linear-gradient(180deg,#0b1a3a,#10244f 60%,#0a1630)', bg:'#070b18', bg2:'#0a1226', l1:'#FFD43B', l2:'#FFFFFF', sky1:'#0b1a3d', sky2:'#1d3f80', ink:'#0A1530', panel:'', swag:'#1f7a4d', swag2:'#E5303F'},
    '2': {dark:false, a:'#FFD43B', a2:'#F5B400', head:'#9E1B26', cinta:'#7a1019', hero:'linear-gradient(105deg,#5a0a13 0%,#98192a 40%,#8a1824 64%,#78151f 100%)', band:'linear-gradient(100deg,#b3202d 0%,#8a1420 55%,#6e0f19 100%)', bg:'#FBF7F0', bg2:'#F3ECDF', l1:'#FF4655', l2:'#FFE9A8', sky1:'#4a0a12', sky2:'#8a1c28', ink:'#6e0f19', panel:'linear-gradient(160deg,#a51f2c 0%,#7d1019 55%,#5a0a13 100%)', swag:'#1f7a4d', swag2:'#FFD43B'},
    '3': {dark:true,  a:'#FFD21F', a2:'#F5B400', head:'#0B0B0D', cinta:'#000', hero:'linear-gradient(105deg,#030303 0%,#0b0b0b 50%,#161513 100%)', band:'linear-gradient(180deg,#151515,#0a0a0a)', bg:'#080808', bg2:'#101010', l1:'#FFD21F', l2:'#FFF4C2', sky1:'#0a0a0b', sky2:'#26241f', ink:'#0B0B0D', panel:'linear-gradient(180deg,#171717,#050505)', swag:'#E8B800', swag2:'#FFF1B0'},
    '4': {dark:false, a:'#FFD43B', a2:'#F5B400', head:'#0d5a33', cinta:'#9E1B26', hero:'linear-gradient(105deg,#052e19 0%,#0b5530 42%,#116a3b 68%,#0f5f35 100%)', band:'linear-gradient(100deg,#0e5a35 0%,#0b4a2b 52%,#8a1420 100%)', bg:'#F7FAF5', bg2:'#EAF1E7', l1:'#FF4655', l2:'#4FD18E', sky1:'#082b18', sky2:'#1b6b44', ink:'#06331d', panel:'linear-gradient(160deg,#0e5a35 0%,#07391f 55%,#8a1420 130%)', swag:'#1b7a49', swag2:'#E5303F'}
  }[estilo];

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
  '.hero-key-photo{-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 40%),radial-gradient(ellipse 80% 78% at 58% 50%,#000 45%,rgba(0,0,0,.6) 65%,transparent 90%)!important;-webkit-mask-composite:source-in!important;mask-image:linear-gradient(90deg,transparent 0%,#000 40%),radial-gradient(ellipse 80% 78% at 58% 50%,#000 45%,rgba(0,0,0,.6) 65%,transparent 90%)!important;mask-composite:intersect!important;}' +
  '.hero h1{background:linear-gradient(100deg,#FFC62E 0%,#FFE27A 22%,#FFF8DC 34%,#FFD54A 48%,#FFC62E 60%,#FFE27A 74%,#FFF8DC 86%,#FFD54A 100%)!important;background-size:220% 100%!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;}' +
  /* cinta superior */
  '.nv-cinta{background:' + T.cinta + ';color:#fff;border-bottom:1px solid rgba(255,255,255,.12);font:700 13px/1 Inter,sans-serif;letter-spacing:.04em;text-align:center;padding:9px 16px;}' +
  '.nv-cinta b{color:' + T.a + ';font-family:"Plus Jakarta Sans",Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;margin-right:10px;}' +
  /* luces colgantes */
  '.nv-luces{height:58px;background-color:' + T.head + ';background-repeat:repeat-x;background-position:center top;background-size:200px 58px;pointer-events:none;border-bottom:3px solid ' + T.a + ';}' +
  '.nv-marco{position:relative;}' +
  '.nv-corona{position:absolute;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45));z-index:3;}' +
  '.nv-gorro{position:absolute;pointer-events:none;z-index:6;width:46px;left:-6px;top:-16px;transform:rotate(-14deg);filter:drop-shadow(0 2px 3px rgba(0,0,0,.5));}' +
  '.brand{position:relative;}' +
  '@media(max-width:700px){.nv-gorro{width:36px;left:-5px;top:-13px}}' +
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
  '.nv-ruleta{display:block;width:100%;max-width:230px;margin:2px auto 8px;filter:drop-shadow(0 6px 14px rgba(0,0,0,.4));}' +
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
  var GORRO = '<svg class="nv-gorro" viewBox="0 0 70 60" aria-hidden="true">' +
    '<path d="M6 44 C6 20 22 8 46 8 C56 8 62 14 64 24 C54 20 46 24 44 34 C43 40 42 44 42 46 Z" fill="#D8202F"/>' +
    '<path d="M6 44 C14 30 26 18 46 10" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="2.2" stroke-linecap="round"/>' +
    '<path d="M2 46 C16 38 36 38 50 47 C52 55 40 58 26 56 C10 56 0 52 2 46Z" fill="#fff"/>' +
    '<path d="M6 49 C18 45 34 46 46 50" fill="none" stroke="#DCDCE6" stroke-width="1.6" stroke-linecap="round"/>' +
    '<circle cx="63" cy="23" r="7.4" fill="#fff"/><circle cx="60" cy="20.4" r="2.2" fill="#E8E8F2"/>' +
  '</svg>';

  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function(){
    document.body.classList.add('nv-on', 'nv-e' + estilo);
    var foto = document.querySelector('.hero-key-photo');
    if (foto) foto.src = 'assets/hero-llave-nav' + estilo + '.webp';
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
    if (panel) panel.insertAdjacentHTML('afterbegin', corona('', 'width:62px;right:6px;top:10px') + '<div style="text-align:center"><span class="nv-badge">★ Edición Navidad</span></div>' + pesebre('B', 'nv-ruleta'));

    /* selector de estilo (solo en la vista previa) */
    if (window.NV_VISTA){
      var sel = document.createElement('div'); sel.className = 'nv-sel';
      sel.innerHTML = [['1','1 · Noche navideña'],['2','2 · Rojo clásico'],['3','3 · Dorado y negro'],['4','4 · Verde y rojo']].map(function(o){
        return '<a class="' + (o[0] === estilo ? 'on' : '') + '" href="?navidad=1&estilo=' + o[0] + '">' + o[1] + '</a>';
      }).join('');
      document.body.appendChild(sel);
    }
  });
})();
