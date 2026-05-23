/* Veross — Shared Nav + Footer Component */
(function () {
  var p = window.location.pathname;
  var inSub = /\/solucoes\//.test(p);
  var b = inSub ? '../' : '';

  var svgLI = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>';
  var svgIG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>';

  var navHTML = '<nav id="main-nav"><div class="nav-i"><a href="' + b + 'index.html" class="nav-logo"><img src="' + b + 'logo-veross.svg" alt="Veross" height="72"></a><ul class="nav-links"><li><a href="' + b + 'sobre.html">A Veross</a></li><li><a href="' + b + 'index.html#metodo">M\u00e9todo</a></li><li><a href="' + b + 'index.html#cases">Cases</a></li><li class="nav-has-drop"><a href="' + b + 'solucoes.html" class="nav-drop-trigger">Solu\u00e7\u00f5es <svg class="nav-caret" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a><div class="nav-dropdown"><a href="' + b + 'solucoes/educacao-comercial.html" class="nd-item"><span class="nd-icon">\u25ce</span><span><strong>Educa\u00e7\u00e3o Comercial</strong><em>Academia Veross \u00b7 Immers\u00e3o \u00b7 Mentoria</em></span></a><a href="' + b + 'solucoes/tecnologia-comercial.html" class="nd-item"><span class="nd-icon">\u25c8</span><span><strong>Tecnologia Comercial</strong><em>AlessIA Flow \u00b7 Scraper AI \u00b7 Agentes IA</em></span></a><a href="' + b + 'solucoes/operacao-comercial.html" class="nd-item"><span class="nd-icon">\u25c7</span><span><strong>Opera\u00e7\u00e3o Comercial</strong><em>VMND \u00b7 Ecossistema B2B</em></span></a><div class="nd-sep"></div><a href="' + b + 'solucoes.html" class="nd-all">Ver todas as solu\u00e7\u00f5es \u2192</a></div></li></ul><button class="nav-cta" id="nav-cta-btn">Diagn\u00f3stico Gratuito</button><button class="ham" id="ham" aria-label="Menu"><span></span><span></span><span></span></button></div></nav><div class="mob" id="mob"><a href="' + b + 'sobre.html" onclick="cm()">A Veross</a><a href="' + b + 'index.html#metodo" onclick="cm()">M\u00e9todo</a><a href="' + b + 'index.html#cases" onclick="cm()">Cases</a><a href="' + b + 'solucoes.html" onclick="cm()">Solu\u00e7\u00f5es</a><a href="' + b + 'solucoes/educacao-comercial.html" onclick="cm()" style="font-size:clamp(18px,4.5vw,28px)">\u21b3 Educa\u00e7\u00e3o Comercial</a><a href="' + b + 'solucoes/tecnologia-comercial.html" onclick="cm()" style="font-size:clamp(18px,4.5vw,28px)">\u21b3 Tecnologia Comercial</a><a href="' + b + 'solucoes/operacao-comercial.html" onclick="cm()" style="font-size:clamp(18px,4.5vw,28px)">\u21b3 Opera\u00e7\u00e3o Comercial</a><button class="mob-cta" id="mob-cta-btn">Diagn\u00f3stico Gratuito</button></div>';

  var footerHTML = '<footer><div class="fv2"><div><div class="footer-logo" style="margin-bottom:20px"><img src="' + b + 'logo-veross.svg" alt="Veross" height="52"></div><p class="fv2-desc">Estruturamos como empresas B2B vendem \u2014 com m\u00e9todo, previsibilidade e resultados replic\u00e1veis.</p><div class="fv2-subscribe"><input type="email" placeholder="Seu e-mail" class="fv2-email"><button class="fv2-sub-btn">Assinar</button></div><div class="fv2-social"><a href="https://linkedin.com/company/veross" class="fv2-soc" target="_blank" aria-label="LinkedIn">' + svgLI + '</a><a href="#" class="fv2-soc" aria-label="Instagram">' + svgIG + '</a></div></div><div class="fv2-links"><div class="fv2-col"><div class="fv2-col-head">M\u00e9todo</div><a href="' + b + 'index.html#metodo">MHMA</a><a href="' + b + 'index.html#metodo">2EOGM</a><a href="' + b + 'index.html#cta">Diagn\u00f3stico Gratuito</a><a href="' + b + 'index.html#cases">Cases</a></div><div class="fv2-col"><div class="fv2-col-head">Solu\u00e7\u00f5es</div><a href="' + b + 'solucoes/educacao-comercial.html">Educa\u00e7\u00e3o Comercial</a><a href="' + b + 'solucoes/tecnologia-comercial.html">Tecnologia Comercial</a><a href="' + b + 'solucoes/operacao-comercial.html">Opera\u00e7\u00e3o Comercial</a><a href="' + b + 'solucoes.html">Ver todas</a></div><div class="fv2-col"><div class="fv2-col-head">Recursos</div><a href="https://linkedin.com/company/veross" target="_blank">LinkedIn</a><a href="#">Newsletter</a><a href="#">Materiais</a><a href="#">Blog</a></div><div class="fv2-col"><div class="fv2-col-head">Empresa</div><a href="' + b + 'sobre.html">Sobre a Veross</a><a href="#">Synexus Group</a><a href="mailto:contato@veross.com.br">Contato</a><a href="#">Privacidade</a></div></div></div><div class="fv2-bottom"><span class="footer-copy">\u00a9 2026 Veross \u00b7 Todos os direitos reservados \u00b7 Synexus Group</span><span style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(174,138,86,.28)">Arquitetura Comercial B2B</span></div></footer>';

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
