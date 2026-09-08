(function () {
  var STORAGE_KEY = "revela2-lang";
  var SUPPORTED = { es: true, en: true, pt: true };
  var APPLE = {
    es: "https://apps.apple.com/es/app/id6779723504",
    en: "https://apps.apple.com/app/id6779723504",
    pt: "https://apps.apple.com/br/app/id6779723504",
  };
  var TIKTOK = {
    es: "https://www.tiktok.com/@usalab.ia?lang=es",
    en: "https://www.tiktok.com/@usalab.ia?lang=en",
    pt: "https://www.tiktok.com/@usalab.ia?lang=pt-BR",
  };
  var BADGES = {
    apple: {
      es: "images/badges/apple-es.svg",
      en: "images/badges/apple-en.svg",
      pt: "images/badges/apple-pt.svg",
    },
    play: {
      es: "images/badges/play-es.png",
      en: "images/badges/play-en.png",
      pt: "images/badges/play-pt.png",
    },
  };

  var strings = {
    es: {
      "meta.home": "Revela2 — Verdades sin Filtro",
      "meta.terms": "Términos de Uso - Revela2",
      "meta.privacy": "Política de Privacidad - Revela2",
      "meta.delete": "Eliminar Cuenta - Revela2",
      "nav.terms": "Términos",
      "nav.privacy": "Privacidad",
      "nav.contact": "Contacto",
      "nav.open": "Abrir menú",
      "nav.close": "Cerrar menú",
      "lang.label": "Idioma",
      "hero.eyebrow": "VERDADES SIN FILTRO",
      "hero.title": "Preguntas que encienden la conversación",
      "hero.lede":
        "El juego de cartas para parejas y amigos. Elige un pack, saca una carta y deja que empiece la charla de verdad.",
      "store.app": "Consíguelo en el App Store",
      "store.play": "Consíguelo en Google Play",
      "phone.label": "Capturas de Revela2",
      "phone.role": "carrusel",
      "shot.1": "Pantalla de inicio de Revela2",
      "shot.2": "Pack clásico de Revela2",
      "shot.3": "Pack picante de Revela2",
      "shot.4": "Pack de pareja de Revela2",
      "shot.5": "Pack de grupo de Revela2",
      "packs.title": "Elige un pack",
      "packs.sub": "Cinco formas reales de jugar. Tú decides el tono de la noche.",
      "pack.classic": "Clásico",
      "pack.classicBody": "Preguntas para conectar más.",
      "pack.hot": "Picante",
      "pack.hotBody": "Lo más atrevido que te gustaría probar.",
      "pack.couple": "Pareja",
      "pack.coupleBody": "Debates y verdades para dos.",
      "pack.deep": "Profundas",
      "pack.deepBody": "Lo que importa de verdad en la relación.",
      "pack.group": "Grupo",
      "pack.groupBody": "¿Quién del grupo es más probable que...?",
      "faq.title": "Preguntas frecuentes",
      "faq.sub": "Lo esencial para empezar a jugar con confianza.",
      "faq.q1": "¿Cómo se juega?",
      "faq.a1":
        "Elige un pack, saca una carta y lee la pregunta en voz alta. Hablen, debatan y pasen a la siguiente cuando quieran.",
      "faq.q2": "¿Es solo para parejas?",
      "faq.a2":
        "Hay packs para parejas y también para grupos de amigos. El pack Grupo está pensado para noches con más de dos.",
      "faq.q3": "¿En qué idiomas está?",
      "faq.a3":
        "Revela2 está en español, inglés y portugués (Brasil). La app sigue el idioma de tu teléfono.",
      "faq.q4": "¿Hay suscripción?",
      "faq.a4":
        "Sí. Revela2 Pro desbloquea todos los packs. Puedes cancelar cuando quieras desde la tienda de tu dispositivo.",
      "faq.q5": "¿Qué pasa con mi privacidad?",
      "faq.a5":
        'No publicamos tus partidas. Si tienes dudas, escríbenos a <a href="mailto:usarevela2@gmail.com">usarevela2@gmail.com</a> o revisa la <a href="politica-de-privacidad.html">política de privacidad</a>.',
      "cta.title": "Descarga Revela2 y saca la primera carta",
      "cta.sub":
        "Disponible en iOS y Android. Elige un pack y empieza el debate esta noche.",
      "footer.privacy": "Privacidad",
      "footer.terms": "Términos",
      "footer.delete": "Eliminar cuenta",
      "footer.contact": "Contacto",
      "footer.copy": "Propiedad y operado por GGGAM Enterprises LLC",
      "delete.h1": "Eliminar Cuenta y Datos",
      "delete.updated": "Última actualización: 4 de febrero de 2026",
      "delete.h2request": "Solicitud de Eliminación de Cuenta",
      "delete.p1":
        "Si deseas eliminar tu cuenta de Revela2 y todos los datos asociados, puedes hacerlo siguiendo estos pasos:",
      "delete.h3steps": "Pasos para Eliminar tu Cuenta:",
      "delete.step1":
        '<strong>Envía un correo electrónico</strong> a <a href="mailto:usarevela2@gmail.com">usarevela2@gmail.com</a> con el asunto "Solicitud de Eliminación de Cuenta"',
      "delete.step2":
        "<strong>Incluye la siguiente información</strong> en tu solicitud:",
      "delete.liEmail": "Tu dirección de correo electrónico asociada a la cuenta",
      "delete.liConfirm":
        "Una confirmación de que deseas eliminar permanentemente tu cuenta y todos los datos asociados",
      "delete.step3":
        "<strong>Espera nuestra confirmación</strong> - Procesaremos tu solicitud dentro de 30 días hábiles",
      "delete.h2removed": "Datos que se Eliminarán",
      "delete.pRemoved":
        "Al eliminar tu cuenta, se eliminarán permanentemente los siguientes datos que guardamos:",
      "delete.liEmailData": "Tu dirección de correo electrónico",
      "delete.liName":
        "Tu nombre (si lo proporcionaste al registrarte o al iniciar sesión con Apple o Google)",
      "delete.liAuth": "Datos de autenticación y sesiones asociados a tu cuenta",
      "delete.h2kept": "Datos que se Pueden Retener",
      "delete.pKept":
        "Por razones legales y operativas, podemos retener cierta información por períodos específicos:",
      "delete.liTx":
        "<strong>Información de transacciones:</strong> Si realizaste compras o suscripciones en la app, podemos retener la información requerida por ley (por ejemplo, fines fiscales)",
      "delete.liSecurity":
        "<strong>Registros de seguridad:</strong> Podemos mantener registros mínimos de actividades sospechosas o fraudulentas para proteger nuestros servicios",
      "delete.liAnon":
        "<strong>Datos anonimizados:</strong> Podemos conservar datos agregados y anonimizados que no identifiquen personalmente a ningún usuario",
      "delete.h2period": "Período de Retención",
      "delete.pPeriod": "Después de recibir tu solicitud de eliminación:",
      "delete.li30":
        "Procesaremos la eliminación de tu cuenta y datos personales dentro de <strong>30 días hábiles</strong>",
      "delete.liLegal":
        "Los datos que debemos retener por razones legales se conservarán según lo requiera la ley aplicable",
      "delete.liGone": "Una vez eliminados, los datos no se pueden recuperar",
      "delete.h2more": "Información Adicional",
      "delete.pMore":
        "Si tienes preguntas sobre el proceso de eliminación de cuenta o sobre qué datos se eliminarán o retendrán, puedes contactarnos en:",
      "delete.email": "Email:",
      "delete.address": "Dirección:",
      "delete.warn":
        "<strong>⚠️ Importante:</strong> La eliminación de tu cuenta es permanente e irreversible. Asegúrate de que realmente deseas eliminar tu cuenta antes de enviar la solicitud.",
      "delete.cta": "Solicitar Eliminación de Cuenta",
      "delete.mailSubject": "Solicitud de Eliminación de Cuenta",
    },
    en: {
      "meta.home": "Revela2 — Unfiltered Truths",
      "meta.terms": "Terms of Use - Revela2",
      "meta.privacy": "Privacy Policy - Revela2",
      "meta.delete": "Delete Account - Revela2",
      "nav.terms": "Terms",
      "nav.privacy": "Privacy",
      "nav.contact": "Contact",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.label": "Language",
      "hero.eyebrow": "UNFILTERED TRUTHS",
      "hero.title": "Questions that spark the real conversation",
      "hero.lede":
        "The card game for couples and friends. Pick a pack, draw a card, and let the honest talk begin.",
      "store.app": "Download on the App Store",
      "store.play": "Get it on Google Play",
      "phone.label": "Revela2 screenshots",
      "phone.role": "carousel",
      "shot.1": "Revela2 home screen",
      "shot.2": "Revela2 classic pack",
      "shot.3": "Revela2 spicy pack",
      "shot.4": "Revela2 couple pack",
      "shot.5": "Revela2 group pack",
      "packs.title": "Pick a pack",
      "packs.sub": "Five real ways to play. You choose the tone of the night.",
      "pack.classic": "Classic",
      "pack.classicBody": "Questions to connect more deeply.",
      "pack.hot": "Spicy",
      "pack.hotBody": "The boldest thing you'd like to try.",
      "pack.couple": "Couple",
      "pack.coupleBody": "Debates and truths for two.",
      "pack.deep": "Deep",
      "pack.deepBody": "What really matters in the relationship.",
      "pack.group": "Group",
      "pack.groupBody": "Who in the group is most likely to...?",
      "faq.title": "Frequently asked questions",
      "faq.sub": "The essentials so you can start playing with confidence.",
      "faq.q1": "How do you play?",
      "faq.a1":
        "Pick a pack, draw a card, and read the question out loud. Talk, debate, and go to the next one whenever you want.",
      "faq.q2": "Is it only for couples?",
      "faq.a2":
        "There are packs for couples and for groups of friends. The Group pack is built for nights with more than two people.",
      "faq.q3": "What languages is it in?",
      "faq.a3":
        "Revela2 is in Spanish, English, and Portuguese (Brazil). The app follows your phone language.",
      "faq.q4": "Is there a subscription?",
      "faq.a4":
        "Yes. Revela2 Pro unlocks every pack. You can cancel anytime from your device store.",
      "faq.q5": "What about my privacy?",
      "faq.a5":
        'We don\'t publish your games. Questions? Email <a href="mailto:usarevela2@gmail.com">usarevela2@gmail.com</a> or read the <a href="politica-de-privacidad.html">privacy policy</a>.',
      "cta.title": "Download Revela2 and draw the first card",
      "cta.sub":
        "Available on iOS and Android. Pick a pack and start the debate tonight.",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.delete": "Delete account",
      "footer.contact": "Contact",
      "footer.copy": "Owned and operated by GGGAM Enterprises LLC",
      "delete.h1": "Delete Account and Data",
      "delete.updated": "Last updated: February 4, 2026",
      "delete.h2request": "Account Deletion Request",
      "delete.p1":
        "If you want to delete your Revela2 account and all associated data, follow these steps:",
      "delete.h3steps": "How to delete your account:",
      "delete.step1":
        '<strong>Send an email</strong> to <a href="mailto:usarevela2@gmail.com">usarevela2@gmail.com</a> with the subject "Account Deletion Request"',
      "delete.step2": "<strong>Include the following</strong> in your request:",
      "delete.liEmail": "The email address linked to the account",
      "delete.liConfirm":
        "Confirmation that you want to permanently delete your account and all associated data",
      "delete.step3":
        "<strong>Wait for our confirmation</strong> — we will process your request within 30 business days",
      "delete.h2removed": "Data we will delete",
      "delete.pRemoved":
        "When you delete your account, the following data we store is permanently removed:",
      "delete.liEmailData": "Your email address",
      "delete.liName":
        "Your name (if you provided it when signing up or signing in with Apple or Google)",
      "delete.liAuth": "Authentication data and sessions linked to your account",
      "delete.h2kept": "Data we may retain",
      "delete.pKept":
        "For legal and operational reasons, we may keep some information for specific periods:",
      "delete.liTx":
        "<strong>Transaction information:</strong> If you made purchases or subscriptions in the app, we may keep the information required by law (for example, for tax purposes)",
      "delete.liSecurity":
        "<strong>Security logs:</strong> We may keep minimal records of suspicious or fraudulent activity to protect our services",
      "delete.liAnon":
        "<strong>Anonymized data:</strong> We may keep aggregated, anonymized data that does not identify any user",
      "delete.h2period": "Retention period",
      "delete.pPeriod": "After we receive your deletion request:",
      "delete.li30":
        "We will delete your account and personal data within <strong>30 business days</strong>",
      "delete.liLegal":
        "Data we must keep for legal reasons will be retained as required by applicable law",
      "delete.liGone": "Once deleted, the data cannot be recovered",
      "delete.h2more": "More information",
      "delete.pMore":
        "If you have questions about the deletion process or which data is removed or retained, contact us at:",
      "delete.email": "Email:",
      "delete.address": "Address:",
      "delete.warn":
        "<strong>⚠️ Important:</strong> Account deletion is permanent and irreversible. Make sure you really want to delete your account before you send the request.",
      "delete.cta": "Request account deletion",
      "delete.mailSubject": "Account Deletion Request",
    },
    pt: {
      "meta.home": "Revela2 — Verdades sem Filtro",
      "meta.terms": "Termos de Uso - Revela2",
      "meta.privacy": "Política de Privacidade - Revela2",
      "meta.delete": "Excluir Conta - Revela2",
      "nav.terms": "Termos",
      "nav.privacy": "Privacidade",
      "nav.contact": "Contato",
      "nav.open": "Abrir menu",
      "nav.close": "Fechar menu",
      "lang.label": "Idioma",
      "hero.eyebrow": "VERDADES SEM FILTRO",
      "hero.title": "Perguntas que acendem a conversa",
      "hero.lede":
        "O jogo de cartas para casais e amigos. Escolha um pack, tire uma carta e deixe a conversa de verdade começar.",
      "store.app": "Baixar na App Store",
      "store.play": "Disponível no Google Play",
      "phone.label": "Capturas do Revela2",
      "phone.role": "carrossel",
      "shot.1": "Tela inicial do Revela2",
      "shot.2": "Pack clássico do Revela2",
      "shot.3": "Pack picante do Revela2",
      "shot.4": "Pack de casal do Revela2",
      "shot.5": "Pack de grupo do Revela2",
      "packs.title": "Escolha um pack",
      "packs.sub": "Cinco formas reais de jogar. Você decide o tom da noite.",
      "pack.classic": "Clássico",
      "pack.classicBody": "Perguntas para conectar mais.",
      "pack.hot": "Picante",
      "pack.hotBody": "A coisa mais ousada que você gostaria de tentar.",
      "pack.couple": "Casal",
      "pack.coupleBody": "Debates e verdades para dois.",
      "pack.deep": "Profundas",
      "pack.deepBody": "O que realmente importa no relacionamento.",
      "pack.group": "Grupo",
      "pack.groupBody": "Quem do grupo é mais provável de...?",
      "faq.title": "Perguntas frequentes",
      "faq.sub": "O essencial para começar a jogar com confiança.",
      "faq.q1": "Como se joga?",
      "faq.a1":
        "Escolha um pack, tire uma carta e leia a pergunta em voz alta. Conversem, debatam e passem para a próxima quando quiserem.",
      "faq.q2": "É só para casais?",
      "faq.a2":
        "Há packs para casais e também para grupos de amigos. O pack Grupo é feito para noites com mais de duas pessoas.",
      "faq.q3": "Em quais idiomas está?",
      "faq.a3":
        "O Revela2 está em espanhol, inglês e português (Brasil). O app segue o idioma do seu telefone.",
      "faq.q4": "Tem assinatura?",
      "faq.a4":
        "Sim. O Revela2 Pro destrava todos os packs. Você pode cancelar quando quiser na loja do seu dispositivo.",
      "faq.q5": "E a minha privacidade?",
      "faq.a5":
        'Não publicamos suas partidas. Dúvidas? Escreva para <a href="mailto:usarevela2@gmail.com">usarevela2@gmail.com</a> ou veja a <a href="politica-de-privacidad.html">política de privacidade</a>.',
      "cta.title": "Baixe o Revela2 e tire a primeira carta",
      "cta.sub":
        "Disponível no iOS e Android. Escolha um pack e comece o debate hoje à noite.",
      "footer.privacy": "Privacidade",
      "footer.terms": "Termos",
      "footer.delete": "Excluir conta",
      "footer.contact": "Contato",
      "footer.copy": "Propriedade e operação de GGGAM Enterprises LLC",
      "delete.h1": "Excluir Conta e Dados",
      "delete.updated": "Última atualização: 4 de fevereiro de 2026",
      "delete.h2request": "Pedido de exclusão de conta",
      "delete.p1":
        "Se quiser excluir sua conta do Revela2 e todos os dados associados, siga estes passos:",
      "delete.h3steps": "Como excluir sua conta:",
      "delete.step1":
        '<strong>Envie um e-mail</strong> para <a href="mailto:usarevela2@gmail.com">usarevela2@gmail.com</a> com o assunto "Pedido de exclusão de conta"',
      "delete.step2":
        "<strong>Inclua as seguintes informações</strong> no pedido:",
      "delete.liEmail": "O e-mail associado à conta",
      "delete.liConfirm":
        "Uma confirmação de que você deseja excluir permanentemente a conta e todos os dados associados",
      "delete.step3":
        "<strong>Aguarde nossa confirmação</strong> — processaremos o pedido em até 30 dias úteis",
      "delete.h2removed": "Dados que serão excluídos",
      "delete.pRemoved":
        "Ao excluir a conta, os seguintes dados que guardamos são removidos de forma permanente:",
      "delete.liEmailData": "Seu endereço de e-mail",
      "delete.liName":
        "Seu nome (se você informou ao se cadastrar ou ao entrar com Apple ou Google)",
      "delete.liAuth": "Dados de autenticação e sessões associados à sua conta",
      "delete.h2kept": "Dados que podem ser retidos",
      "delete.pKept":
        "Por razões legais e operacionais, podemos manter certas informações por períodos específicos:",
      "delete.liTx":
        "<strong>Informações de transação:</strong> Se você fez compras ou assinaturas no app, podemos reter as informações exigidas por lei (por exemplo, fins fiscais)",
      "delete.liSecurity":
        "<strong>Registros de segurança:</strong> Podemos manter registros mínimos de atividades suspeitas ou fraudulentas para proteger nossos serviços",
      "delete.liAnon":
        "<strong>Dados anonimizados:</strong> Podemos conservar dados agregados e anonimizados que não identifiquem nenhum usuário",
      "delete.h2period": "Período de retenção",
      "delete.pPeriod": "Depois de recebermos o pedido de exclusão:",
      "delete.li30":
        "Excluiremos sua conta e dados pessoais em até <strong>30 dias úteis</strong>",
      "delete.liLegal":
        "Os dados que precisamos reter por razões legais serão conservados conforme a lei aplicável",
      "delete.liGone": "Depois de excluídos, os dados não podem ser recuperados",
      "delete.h2more": "Informações adicionais",
      "delete.pMore":
        "Se tiver dúvidas sobre o processo de exclusão ou sobre quais dados serão removidos ou retidos, fale conosco em:",
      "delete.email": "E-mail:",
      "delete.address": "Endereço:",
      "delete.warn":
        "<strong>⚠️ Importante:</strong> A exclusão da conta é permanente e irreversível. Tenha certeza de que realmente deseja excluir a conta antes de enviar o pedido.",
      "delete.cta": "Solicitar exclusão da conta",
      "delete.mailSubject": "Pedido de exclusão de conta",
    },
  };

  function normalize(code) {
    var value = (code || "").toLowerCase();
    if (value.indexOf("pt") === 0) return "pt";
    if (value.indexOf("es") === 0) return "es";
    if (value.indexOf("en") === 0) return "en";
    return "";
  }

  function detect() {
    try {
      var params = new URLSearchParams(window.location.search);
      var fromQuery = normalize(params.get("lang"));
      if (SUPPORTED[fromQuery]) return fromQuery;
    } catch (e) {}

    try {
      var stored = normalize(window.localStorage.getItem(STORAGE_KEY));
      if (SUPPORTED[stored]) return stored;
    } catch (e2) {}

    var list =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || navigator.userLanguage];
    for (var i = 0; i < list.length; i++) {
      var match = normalize(list[i]);
      if (SUPPORTED[match]) return match;
    }
    return "es";
  }

  function t(lang, key) {
    return (strings[lang] && strings[lang][key]) || strings.es[key] || "";
  }

  function setText(el, value) {
    el.textContent = value;
  }

  function applyAttributes(el, lang) {
    var spec = el.getAttribute("data-i18n-attr");
    if (!spec) return;
    spec.split(",").forEach(function (part) {
      var bits = part.split(":");
      if (bits.length < 2) return;
      el.setAttribute(bits[0].trim(), t(lang, bits[1].trim()));
    });
  }

  function setScreenshots(lang) {
    document.querySelectorAll("[data-screenshot]").forEach(function (img) {
      var n = img.getAttribute("data-screenshot");
      var fallback = "images/screenshots/" + n + ".jpg";
      var localized = "images/screenshots/" + lang + "/" + n + ".jpg";
      if (lang === "es") {
        img.src = fallback;
        return;
      }
      var probe = new Image();
      probe.onload = function () {
        img.src = localized;
      };
      probe.onerror = function () {
        img.src = fallback;
      };
      probe.src = localized;
    });
  }

  function apply(lang) {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.documentElement.setAttribute("data-lang", lang);

    var page = document.documentElement.getAttribute("data-page") || "home";
    document.title = t(lang, "meta." + page);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      setText(el, t(lang, el.getAttribute("data-i18n")));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      applyAttributes(el, lang);
    });
    document.querySelectorAll("[data-store=apple]").forEach(function (el) {
      el.href = APPLE[lang] || APPLE.es;
    });
    document.querySelectorAll("[data-badge]").forEach(function (img) {
      var kind = img.getAttribute("data-badge");
      if (BADGES[kind] && BADGES[kind][lang]) img.src = BADGES[kind][lang];
    });
    document.querySelectorAll("[data-social='tiktok']").forEach(function (el) {
      el.href = TIKTOK[lang] || TIKTOK.es;
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var mailCta = document.querySelector("[data-delete-mail]");
    if (mailCta) {
      mailCta.href =
        "mailto:usarevela2@gmail.com?subject=" +
        encodeURIComponent(t(lang, "delete.mailSubject"));
    }

    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    if (header && toggle) {
      var open = header.classList.contains("is-open");
      toggle.setAttribute("aria-label", t(lang, open ? "nav.close" : "nav.open"));
    }

    setScreenshots(lang);
  }

  function setLang(lang) {
    if (!SUPPORTED[lang]) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url);
    } catch (e2) {}
    apply(lang);
  }

  var current = detect();
  try {
    window.localStorage.setItem(STORAGE_KEY, current);
  } catch (e3) {}

  window.Revela2 = {
    lang: function () {
      return current;
    },
    t: function (key) {
      return t(current, key);
    },
    setLang: function (lang) {
      current = lang;
      setLang(lang);
    },
  };

  apply(current);

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.Revela2.setLang(btn.getAttribute("data-set-lang"));
    });
  });
})();
