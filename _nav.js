/* Veross — Shared Nav + Footer Component */
(function () {
  var p = window.location.pathname;
  var inSub = /\/solucoes\//.test(p);
  var b = inSub ? '../' : '';

  var svgLI = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>';
  var svgIG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>';
  var svgYT = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>';

  var navHTML = '<nav id="main-nav"><div class="nav-i"><a href="' + b + 'index.html" class="nav-logo"><img src="' + b + 'img/logos/logo-veross.svg" alt="Veross" height="72"></a><ul class="nav-links"><li><a href="' + b + 'sobre.html">A Veross</a></li><li><a href="' + b + 'index.html#metodo">M\u00e9todo</a></li><li><a href="' + b + 'index.html#cases">Cases</a></li><li class="nav-has-drop"><a href="' + b + 'solucoes.html" class="nav-drop-trigger">Solu\u00e7\u00f5es <svg class="nav-caret" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a><div class="nav-dropdown"><a href="' + b + 'solucoes/educacao-comercial.html" class="nd-item"><span class="nd-icon">\u25ce</span><span><strong>Educa\u00e7\u00e3o Comercial</strong><em>Academia Veross \u00b7 Immers\u00e3o \u00b7 Mentoria</em></span></a><a href="' + b + 'solucoes/tecnologia-comercial.html" class="nd-item"><span class="nd-icon">\u25c8</span><span><strong>Tecnologia Comercial</strong><em>AlessIA Flow \u00b7 Scraper AI \u00b7 Agentes IA</em></span></a><a href="' + b + 'solucoes/operacao-comercial.html" class="nd-item"><span class="nd-icon">\u25c7</span><span><strong>Opera\u00e7\u00e3o Comercial</strong><em>VMND \u00b7 Ecossistema B2B</em></span></a><div class="nd-sep"></div><a href="' + b + 'solucoes.html" class="nd-all">Ver todas as solu\u00e7\u00f5es \u2192</a></div></li></ul><button class="nav-cta" id="nav-cta-btn">Diagn\u00f3stico Gratuito</button><button class="ham" id="ham" aria-label="Menu"><span></span><span></span><span></span></button></div></nav><div class="mob" id="mob"><a href="' + b + 'sobre.html" onclick="cm()">A Veross</a><a href="' + b + 'index.html#metodo" onclick="cm()">M\u00e9todo</a><a href="' + b + 'index.html#cases" onclick="cm()">Cases</a><a href="' + b + 'solucoes.html" onclick="cm()">Solu\u00e7\u00f5es</a><a href="' + b + 'solucoes/educacao-comercial.html" onclick="cm()" style="font-size:clamp(18px,4.5vw,28px)">\u21b3 Educa\u00e7\u00e3o Comercial</a><a href="' + b + 'solucoes/tecnologia-comercial.html" onclick="cm()" style="font-size:clamp(18px,4.5vw,28px)">\u21b3 Tecnologia Comercial</a><a href="' + b + 'solucoes/operacao-comercial.html" onclick="cm()" style="font-size:clamp(18px,4.5vw,28px)">\u21b3 Opera\u00e7\u00e3o Comercial</a><button class="mob-cta" id="mob-cta-btn">Diagn\u00f3stico Gratuito</button></div>';

  var footerHTML = '<footer><div class="fv2"><div class="fv2-brand"><div class="footer-logo" style="margin-bottom:20px"><img src="' + b + 'img/logos/logo-veross.svg" alt="Veross" height="52"></div><p class="fv2-desc">Estruturamos como empresas B2B vendem \u2014 com m\u00e9todo, previsibilidade e resultados replic\u00e1veis.</p><div class="fv2-subscribe"><input type="email" placeholder="Seu melhor e-mail" class="fv2-email" id="fv2WpEmail"><button class="fv2-sub-btn" onclick="goWhitePaper()">White Paper</button></div><div class="fv2-social"><a href="https://linkedin.com/company/verossbr" class="fv2-soc" target="_blank" rel="noopener" aria-label="LinkedIn">' + svgLI + '</a><a href="https://instagram.com/verossbr" class="fv2-soc" target="_blank" rel="noopener" aria-label="Instagram">' + svgIG + '</a><a href="https://www.youtube.com/@lucas.silvestre.veross" class="fv2-soc" target="_blank" rel="noopener" aria-label="YouTube">' + svgYT + '</a></div></div><div class="fv2-links"><div class="fv2-col"><div class="fv2-col-head">M\u00e9todo</div><a href="' + b + 'index.html#metodo">MHMA</a><a href="' + b + 'index.html#metodo">2EOGM</a><a href="' + b + 'index.html#cta">Diagn\u00f3stico Gratuito</a><a href="' + b + 'index.html#cases">Cases</a></div><div class="fv2-col"><div class="fv2-col-head">Solu\u00e7\u00f5es</div><a href="' + b + 'solucoes/educacao-comercial.html">Educa\u00e7\u00e3o Comercial</a><a href="' + b + 'solucoes/tecnologia-comercial.html">Tecnologia Comercial</a><a href="' + b + 'solucoes/operacao-comercial.html">Opera\u00e7\u00e3o Comercial</a></div><div class="fv2-col"><div class="fv2-col-head">Recursos</div><a href="https://substack.com/@lucassilvestrebr" target="_blank" rel="noopener">Newsletter</a><a href="' + b + 'materiais.html">Materiais</a><a href="https://whatsapp.com/channel/0029VbCiMTI7Noa6vXOSJx0f" target="_blank" rel="noopener">Comunidade WhatsApp</a></div><div class="fv2-col"><div class="fv2-col-head">Empresa</div><a href="' + b + 'sobre.html">Sobre a Veross</a><a href="https://linkedin.com/in/lucassilvestre" target="_blank" rel="noopener">Lucas Silvestre</a><a href="mailto:veross@veross.com.br">Contato</a></div></div></div><div class="fv2-bottom"><span class="footer-copy">\u00a9 2026 Veross \u00b7 Todos os direitos reservados \u00b7 Synexus Group</span><span style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(174,138,86,.28)">Arquitetura Comercial B2B</span></div></footer>';

  // Inject nav at top, footer before this script
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.currentScript.insertAdjacentHTML('beforebegin', footerHTML);

  // Nav behaviors
  var nav = document.getElementById('main-nav');
  var ham = document.getElementById('ham');
  var mob = document.getElementById('mob');

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  ham.addEventListener('click', function () {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });

  window.cm = function () {
    ham.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow = '';
  };

  mob.addEventListener('click', function (e) { if (e.target === mob) cm(); });

  function gotoCTA() {
    var el = document.getElementById('cta');
    if (el) { window.scrollTo({ top: el.offsetTop, behavior: 'smooth' }); }
    else { window.location.href = b + 'index.html#cta'; }
  }

  document.getElementById('nav-cta-btn').addEventListener('click', gotoCTA);
  document.getElementById('mob-cta-btn').addEventListener('click', function () { cm(); gotoCTA(); });

  // White Paper CTA (footer subscribe box)
  window.goWhitePaper = function () {
    var el   = document.getElementById('fv2WpEmail');
    var v    = el ? el.value.trim() : '';
    var dest = b + 'materiais.html' + (v ? ('?email=' + encodeURIComponent(v)) : '');
    if (v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      fetch('https://api.hsforms.com/submissions/v3/integration/submit/44513728/a725e3f4-98c5-45d2-bc96-737aac04470f', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [{ objectTypeId: '0-1', name: 'email', value: v }],
          context: { pageUri: window.location.href, pageName: document.title }
        })
      }).then(function () { window.location.href = dest; })
        .catch(function () { window.location.href = dest; });
    } else {
      window.location.href = dest;
    }
  };

  // ── WhatsApp Floating Button ──
  var waCSS = '#wa-float{position:fixed;bottom:28px;right:28px;z-index:9999;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.35);transition:transform .2s,box-shadow .2s;text-decoration:none}#wa-float:hover{transform:scale(1.08);box-shadow:0 8px 32px rgba(37,211,102,.45)}#wa-float svg{width:28px;height:28px}@media(max-width:768px){#wa-float{bottom:20px;right:16px;width:50px;height:50px}}';
  var waStyle = document.createElement('style');
  waStyle.textContent = waCSS;
  document.head.appendChild(waStyle);

  var waBtn = document.createElement('a');
  waBtn.id = 'wa-float';
  waBtn.href = 'https://wa.me/5512982519830?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Veross%20e%20gostaria%20de%20saber%20mais.';
  waBtn.target = '_blank';
  waBtn.rel = 'noopener';
  waBtn.setAttribute('aria-label', 'Fale com a Veross no WhatsApp');
  waBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  document.body.appendChild(waBtn);

  // Fade-in observer
  var fis = document.querySelectorAll('.fi');
  if (fis.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    fis.forEach(function (el) { obs.observe(el); });
  }
})();
