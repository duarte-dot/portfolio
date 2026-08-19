/* CV file served for each language */
const CV_FILES = {
  pt: "/assets/pdf/gabrieldvr_cv.pdf",
  en: "/assets/pdf/gabrieldvr_cv_en.pdf",
};

let traducoes = {
  greetings: {
    pt: "Olá, eu sou Gabriel",
    en: "Hi, i'm Gabriel",
  },
  "fullstack-developer": {
    pt: "Desenvolvedor Fullstack",
    en: "Fullstack developer",
  },
  description: {
    pt: "Desenvolvedor Fullstack Pleno. Trabalho com Angular, React, Node.js/NestJS e Java, criando interfaces interativas, APIs RESTful e integrações entre sistemas.",
    en: "Mid-level Fullstack Developer. I work with Angular, React, Node.js/NestJS and Java, building interactive interfaces, RESTful APIs and system integrations.",
  },
  contactme: {
    pt: "Entre em contato",
    en: "Contact me",
  },
  aboutme: {
    pt: "Sobre mim",
    en: "About me",
  },
  about: {
    pt: '<i class="uil uil-user nav__icon"></i> Sobre mim',
    en: '<i class="uil uil-user nav__icon"></i> About',
  },
  /* the original repeated the home greeting almost word for word, and "a bit
     about my journey" was pure filler */
  "aboutme-subtitle": {
    pt: "Trajetória, código e café",
    en: "Journey, code and coffee",
  },
  "about-role": {
    pt: "Desenvolvedor Fullstack Pleno",
    en: "Mid-level Fullstack Developer",
  },
  "about-location": {
    pt: "Rio de Janeiro, Brasil",
    en: "Rio de Janeiro, Brazil",
  },
  "about-availability": {
    pt: "Aberto a oportunidades remotas",
    en: "Open to remote work",
  },
  "about-offclock": {
    pt: "Fora do código",
    en: "Off the clock",
  },
  "about-img-alt": {
    pt: "Gabriel Duarte segurando seu gato",
    en: "Gabriel Duarte holding his cat",
  },
  /* Told as a timeline rather than a list of adjectives. The <strong> marks the
     places, which are what someone skimming actually looks for. */
  "aboutme-p-1": {
    pt: "Comecei a estudar programação em 2021, num curso de um ano na <strong>Trybe</strong>. A primeira vaga veio em 2023: entrei como trainee na <strong>Crase Sigma</strong> e fui efetivado como Junior lá mesmo, mexendo em app mobile, APIs Laravel e dados presos em COBOL.",
    en: "I started learning to code in 2021, on a one-year course at <strong>Trybe</strong>. The first job came in 2023: I joined <strong>Crase Sigma</strong> as a trainee and was promoted to Junior there, working on a mobile app, Laravel APIs and data locked inside COBOL.",
  },
  "aboutme-p-2": {
    pt: "No fim de 2024 a <strong>Solution TI</strong> apareceu com uma chance de crescer e eu não deixei passar. Pouco depois entrei também na <strong>MJV</strong>, consultoria pela qual atendo um cliente grande do setor de seguros, focado nos sistemas internos que os próprios desenvolvedores usam. Em paralelo, curso Sistemas de Informação na <strong>UVA</strong>.",
    en: "At the end of 2024 <strong>Solution TI</strong> came with a chance to step up and I took it. Not long after I also joined <strong>MJV</strong>, the consultancy through which I serve a large insurance client, focused on the internal systems the developers themselves use. Alongside that, I’m studying Information Systems at <strong>UVA</strong>.",
  },
  /* the old opener ("se não me encontrar codando") repeated what the card title
     already says, so it went */
  "aboutme-p-3": {
    pt: "Café na Starbucks ☕️, tempo com a família 👩🏻‍❤️‍👨🏻 e academia 💪. Também sou pai de gato, como a foto entrega.",
    en: "Coffee at Starbucks ☕️, time with my family 👩🏻‍❤️‍👨🏻 and the gym 💪. Also a cat dad, as the photo gives away.",
  },
  "years-exp": {
    pt: "3+ anos",
    en: "3+ years",
  },
  "devops-tools": {
    pt: "DevOps e Ferramentas",
    en: "DevOps & Tools",
  },
  "my-technical-level": {
    pt: "Minhas habilidades",
    en: "My skills",
  },

  /* ===== EXPERIENCE ===== */
  experience: {
    pt: "Experiência",
    en: "Experience",
  },
  "experience-nav": {
    pt: '<i class="uil uil-briefcase nav__icon"></i> Experiência',
    en: '<i class="uil uil-briefcase nav__icon"></i> Experience',
  },
  "experience-subtitle": {
    pt: "Minha trajetória profissional",
    en: "My professional journey",
  },
  "mjv-role": {
    pt: "Desenvolvedor Fullstack Pleno",
    en: "Mid-level Fullstack Developer",
  },
  "mjv-date": {
    pt: "Julho de 2025 - Atual",
    en: "July 2025 - Present",
  },
  /* Bullets written in the XYZ formula: result (X), how it is measured (Y), what
     was done (Z). No invented numbers: the only percentage anywhere in the
     section is the one that was already documented (crase-3).
     <strong> marks the technologies and the one hard metric. It survives the
     translation pass because traduzirSite() assigns innerHTML, and it is kept to
     a couple of terms per bullet so the emphasis still means something. */
  "mjv-1": {
    pt: "Reduzi o acoplamento entre regras de negócio e integrações externas, permitindo substituir dependências sem reescrever o domínio e ampliando a cobertura de testes unitários, ao estruturar as aplicações em <strong>arquitetura hexagonal</strong> com portas e adaptadores.",
    en: "Cut coupling between business rules and external integrations, making dependencies replaceable without rewriting the domain and widening unit test coverage, by structuring the applications around <strong>hexagonal architecture</strong> with ports and adapters.",
  },
  "mjv-2": {
    pt: "Acelerei a entrega de novas telas nas aplicações do time, eliminando código de estado e de interface duplicado entre projetos, ao criar e manter bibliotecas <strong>Angular</strong> compartilhadas com <strong>NGRX</strong> dentro de um monorepo <strong>NX</strong>.",
    en: "Sped up the delivery of new screens across the team's applications, removing state and UI code duplicated between projects, by building and maintaining shared <strong>Angular</strong> libraries with <strong>NGRX</strong> inside an <strong>NX</strong> monorepo.",
  },
  "mjv-3": {
    pt: "Aumentei a resiliência e o tempo de resposta dos serviços, evitando que falhas de dependências externas derrubassem fluxos críticos, ao implementar backends <strong>Node.js/NestJS</strong> com cache e filas em <strong>Redis</strong> e <strong>circuit breakers</strong> nas integrações.",
    en: "Improved service resilience and response times, keeping external dependency failures from taking down critical flows, by implementing <strong>Node.js/NestJS</strong> backends with <strong>Redis</strong> caching and queues and <strong>circuit breakers</strong> on the integrations.",
  },
  "mjv-4": {
    pt: "Centralizei a documentação e o catálogo de serviços da engenharia em um único portal, com acesso controlado por time, ao desenvolver uma plataforma <strong>Backstage</strong> integrada a <strong>GitHub</strong> e <strong>Bitbucket</strong>, com plugins próprios e <strong>RBAC</strong>.",
    en: "Centralized engineering documentation and the service catalogue in a single portal with per-team access, by developing a <strong>Backstage</strong> platform integrated with <strong>GitHub</strong> and <strong>Bitbucket</strong>, with custom plugins and <strong>RBAC</strong>.",
  },
  "mjv-5": {
    pt: "Eliminei o processo manual de publicação dos aplicativos móveis, removendo o retrabalho e os erros de envio a cada release, ao automatizar as entregas para Play Store e App Store com <strong>Fastlane</strong>.",
    en: "Eliminated the manual mobile release process, removing rework and submission errors on every release, by automating Play Store and App Store delivery with <strong>Fastlane</strong>.",
  },
  "solution-role": {
    pt: "Desenvolvedor Fullstack Junior",
    en: "Junior Fullstack Developer",
  },
  "solution-date": {
    pt: "Dezembro de 2024 - Atual",
    en: "December 2024 - Present",
  },
  "solution-1": {
    pt: "Entreguei novas funcionalidades do sistema de emplacamento digital de veículos, atendendo às regras exigidas pelo sistema oficial do <strong>DETRAN</strong>, ao construir páginas dinâmicas e otimizadas com <strong>React</strong>.",
    en: "Delivered new features for the digital vehicle registration system, meeting the rules enforced by the official <strong>DETRAN</strong> system, by building dynamic and optimized pages with <strong>React</strong>.",
  },
  "solution-2": {
    pt: "Assumi como <strong>responsável técnico</strong> o sistema de transferência digital de veículos do Mato Grosso, mantendo o serviço estável e em conformidade com as plataformas do <strong>DETRAN-MT</strong>, ao conduzir sua manutenção e evolução.",
    en: "Took <strong>technical ownership</strong> of the digital vehicle transfer system for Mato Grosso, keeping the service stable and compliant with <strong>DETRAN-MT</strong> platforms, by running its maintenance and evolution.",
  },
  "solution-3": {
    pt: "Garanti comunicação segura entre frontend e backend em um sistema de uso público, evitando quebras de contrato entre as camadas, ao implementar integrações em <strong>Java</strong> apoiadas em <strong>padrões de projeto</strong> consolidados.",
    en: "Secured communication between front-end and back-end in a public-facing system, preventing contract breaks between layers, by implementing <strong>Java</strong> integrations backed by established <strong>design patterns</strong>.",
  },
  "solution-4": {
    pt: "Padronizei os ambientes de desenvolvimento e produção, removendo divergências de configuração entre as máquinas do time, ao containerizar as aplicações com <strong>Docker</strong>.",
    en: "Standardized development and production environments, removing configuration drift between the team's machines, by containerizing the applications with <strong>Docker</strong>.",
  },
  "solution-5": {
    pt: "Mantive o time alinhado e as entregas dentro do prazo, dando visibilidade do andamento de cada tarefa, ao participar das cerimônias do <strong>Scrum</strong> (dailies, plannings e reviews) e acompanhar o fluxo no <strong>Jira</strong>.",
    en: "Kept the team aligned and deliveries on schedule, giving visibility into the status of every task, by taking part in <strong>Scrum</strong> ceremonies (dailies, plannings and reviews) and tracking the flow in <strong>Jira</strong>.",
  },
  "crase-role": {
    pt: "Desenvolvedor Fullstack Junior",
    en: "Junior Fullstack Developer",
  },
  "crase-date": {
    pt: "Setembro de 2023 - Dezembro de 2024",
    en: "September 2023 - December 2024",
  },
  "crase-1": {
    pt: "Mantive o desempenho do aplicativo mobile Crase Sigma consistente entre <strong>Android</strong> e <strong>iOS</strong>, sem regressões entre as plataformas, ao otimizar a base em <strong>Ionic</strong> com <strong>Angular</strong> e corrigir gargalos de renderização.",
    en: "Kept the Crase Sigma mobile app performing consistently across <strong>Android</strong> and <strong>iOS</strong>, with no regressions between platforms, by optimizing the <strong>Ionic</strong> with <strong>Angular</strong> codebase and fixing rendering bottlenecks.",
  },
  "crase-2": {
    pt: "Viabilizei o uso de dados legados em <strong>COBOL</strong> nos sistemas modernos da empresa, sem interromper a operação existente, ao criar fluxos contínuos de migração e integração compatíveis com os sistemas antigos.",
    en: "Made legacy <strong>COBOL</strong> data usable by the company's modern systems without interrupting the existing operation, by building continuous migration and integration flows compatible with the older systems.",
  },
  "crase-3": {
    pt: "Reduzi a latência das APIs em <strong>mais de 30%</strong>, ao projetar e implementar endpoints <strong>RESTful</strong> em <strong>Laravel</strong> com estratégias de cache e otimização de consultas.",
    en: "Cut API latency by <strong>more than 30%</strong>, by designing and implementing <strong>RESTful</strong> endpoints in <strong>Laravel</strong> with caching strategies and query optimization.",
  },
  "crase-4": {
    pt: "Sustentei aplicações web em alta disponibilidade, reduzindo indisponibilidades e a exposição a falhas de configuração, ao administrar servidores <strong>Apache2</strong> com ajustes de desempenho e reforço de segurança.",
    en: "Kept web applications highly available, reducing downtime and exposure to misconfiguration, by administering <strong>Apache2</strong> servers with performance tuning and security hardening.",
  },
  "crase-5": {
    pt: "Aumentei a eficiência do time no versionamento, reduzindo conflitos e retrabalho de merge, ao estruturar o fluxo de branches no <strong>Git</strong> e implementar pipelines de <strong>CI/CD</strong>.",
    en: "Improved the team's versioning efficiency, reducing merge conflicts and rework, by structuring the <strong>Git</strong> branching flow and implementing <strong>CI/CD</strong> pipelines.",
  },

  /* ===== PROJECTS ===== */
  projects: {
    pt: "Projetos",
    en: "Projects",
  },
  "projects-nav": {
    pt: '<i class="uil uil-briefcase-alt nav__icon"></i> Projetos',
    en: '<i class="uil uil-briefcase-alt nav__icon"></i> Projects',
  },
  "contactme-nav": {
    pt: '<i class="uil uil-envelope nav__icon"></i> Contato',
    en: '<i class="uil uil-envelope nav__icon"></i> Contact me',
  },
  "check-more": {
    pt: 'Você pode ver mais no meu <a target="_blank" rel="noopener noreferrer" href="https://github.com/duarte-dot">GitHub</a>!',
    en: 'You can check more on my <a target="_blank" rel="noopener noreferrer" href="https://github.com/duarte-dot">GitHub</a>!',
  },
  trybetunes: {
    pt: "Pesquise por álbuns de seus artistas favoritos e escute previews de suas músicas! Feito com React e Itunes API",
    en: "Search for albums by your favorite artists and listen to previews of their songs! Made with React and Itunes API",
  },
  "contact-me": {
    pt: "Entre em contato",
    en: "Contact-me",
  },
  "get-in-touch": {
    pt: "Me manda uma mensagem!",
    en: "Get in touch",
  },
  location: {
    pt: "Localização",
    en: "Location",
  },
  "call-me": {
    pt: "Meu número",
    en: "Call me",
  },
  "phone-number": {
    pt: "21 99575-7262",
    en: "+55 21 99575-7262",
  },
  name: {
    pt: "Nome",
    en: "Name",
  },
  email: {
    pt: "Seu Email",
    en: "Your Email",
  },
  message: {
    pt: "Mensagem",
    en: "Message",
  },
  "rj-br": {
    pt: "Rio de Janeiro - Brasil",
    en: "Rio de Janeiro - Brazil",
  },
  "send-message": {
    pt: "Enviar mensagem",
    en: "Send message",
  },
  forum: {
    pt: "Página de Fórum",
    en: "Forum page",
  },
  soon: {
    pt: "Em breve",
    en: "Soon",
  },
  "piratas-lanches-description": {
    pt: "Piratas Lanches é um cardápio online que criei para o lanchonete do meu pai, com um design temático de pirata, categorias organizadas e uma interface simples para que os clientes possam explorar rapidamente os sanduíches, bebidas e outros itens diretamente do celular.",
    en: "Piratas Lanches is an online menu I built for my father’s snack bar, with a pirate-themed design, organized categories, and a simple interface so customers can quickly explore sandwiches, drinks, and other items directly from their phone.",
  },
  "forum-description": {
    pt: "Página de fórum com frontend. Feito em React e Laravel",
    en: "Forum page. Made with React and Laravel",
  },
  "lovu-app-description": {
    pt: "É uma plataforma onde você pode criar um site personalizado para o seu parceiro romântico. Adicione fotos, músicas, vídeos e mensagens sinceras que representem sua história e os momentos especiais que vocês compartilharam. Uma forma única e digital de celebrar o amor e criar memórias inesquecíveis.",
    en: "It’s a platform where you can create a personalized website for your romantic partner. Add photos, music, videos, and heartfelt messages that represent your story and the special moments you’ve shared. A unique and digital way to celebrate love and create unforgettable memories.",
  },
  "chats-app-description": {
    pt: "App de Chat. Feito em Next com Upstash Redis",
    en: "Chat app. Made with Next and Upstash Redis",
  },
  "trybe-wallet-description": {
    pt: "Aplicativo de carteira virtual para monitorar seus gastos. Feito em React e Redux",
    en: "Virtual wallet app to monitorate your expenses. Made with React and Redux",
  },
  "duck-zelda-description": {
    pt: "Jogo estilo zelda com pato. Feito em Java (descontinuado)",
    en: "Duck zelda styled game. Made in Java (discontinued)",
  },
  "pong-game-description": {
    pt: "Jogo de pong. Feito em Java",
    en: "Pong game. Made in Java",
  },
  "fitclub-description": {
    pt: "Projeto frontend de um Fitclub. Feito com React",
    en: "Fitclub frontend project. Made with React",
  },
  "coming-soon": {
    pt: "Vem aí",
    en: "Coming soon",
  },
  "coming-soon-description": {
    pt: "Mais projetos estão por vir!",
    en: "More projects are coming soon!",
  },
  "thank-you": {
    pt: "obrigado",
    en: "thank you",
  },
  "thank-you-subtitle": {
    pt: "entrarei em contato",
    en: "i will be in touch",
  },
  "go-back": {
    pt: "voltar",
    en: "go back",
  },
  "download-cv": {
    pt: "Baixar CV",
    en: "Download CV",
  },
  "try-it": {
    pt: "Experimente!",
    en: "Try it!",
  },

  /* ===== SPOTIFY ===== */
  "spotify-now-playing": {
    pt: "Ouvindo agora",
    en: "Now playing",
  },
  "spotify-last-played": {
    pt: "Ouvi por último",
    en: "Last played",
  },
};

function traduzirSite(idioma) {
  var elementos = document.querySelectorAll("[translation]");

  elementos.forEach((el) => {
    var chave = el.getAttribute("translation");
    var entrada = traducoes[chave];

    /* a missing key used to throw and stop the whole translation pass */
    if (!entrada || entrada[idioma] === undefined) {
      console.warn(`[translations] missing "${idioma}" translation for key "${chave}"`);
      return;
    }

    var traducao = entrada[idioma];
    const icon = el.querySelector(".button__icon");

    if (icon) {
      // troca apenas o texto antes do ícone
      // se houver texto, fica assim: "Texto traduzido <i class=...>"
      el.innerHTML = traducao + " ";
      el.appendChild(icon); // recoloca o ícone no final
    } else {
      // elementos normais seguem como antes
      el.innerHTML = traducao;
    }
  });

  /* alt text cannot ride on innerHTML, so images opt in through their own
     attribute and go through the same dictionary */
  document.querySelectorAll("[translation-alt]").forEach((el) => {
    var chaveAlt = el.getAttribute("translation-alt");
    var entradaAlt = traducoes[chaveAlt];

    if (!entradaAlt || entradaAlt[idioma] === undefined) {
      console.warn(`[translations] missing "${idioma}" alt translation for key "${chaveAlt}"`);
      return;
    }

    el.setAttribute("alt", entradaAlt[idioma]);
  });

  /* keep the document language in sync for screen readers and SEO */
  document.documentElement.lang = idioma === "pt" ? "pt-br" : "en";
}

// Verifica se já existe um valor salvo no localStorage
var language = localStorage.getItem("language");

// Caso não exista um valor salvo, define a linguagem padrão como 'en'
if (!language) {
  language = "en";
}

var changeLanguage = document.getElementById("change-language");
var languageOptions = changeLanguage
  ? changeLanguage.querySelectorAll(".lang-switch__option")
  : [];
var downloadCVButton = document.getElementById("cv-button");

function aplicarIdioma(idioma) {
  traduzirSite(idioma);

  if (changeLanguage) {
    /* drives the sliding highlight; the CSS reads this attribute */
    changeLanguage.setAttribute("data-active", idioma);

    /* aria-pressed doubles as the styling hook for the active label, so the
       visual state and the state announced to screen readers cannot drift */
    languageOptions.forEach(function (option) {
      var ativo = option.getAttribute("data-lang") === idioma;
      option.setAttribute("aria-pressed", ativo ? "true" : "false");
    });
  }

  if (downloadCVButton) downloadCVButton.href = CV_FILES[idioma];
}

if (changeLanguage) {
  /* delegated so the two options share one handler */
  changeLanguage.addEventListener("click", function (event) {
    var option = event.target.closest(".lang-switch__option");
    if (!option) return;

    var escolhido = option.getAttribute("data-lang");
    /* clicking the language already in use would rerun the whole translation
       pass for nothing */
    if (!escolhido || escolhido === language) return;

    language = escolhido;
    aplicarIdioma(language);

    // Salva a linguagem escolhida no localStorage
    localStorage.setItem("language", language);
  });
}

// Aplica a tradução inicial com base na linguagem salva
aplicarIdioma(language);
