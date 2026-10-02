/* CV file served for each language */
const CV_FILES = {
  pt: "/assets/pdf/gabrieldvr_cv.pdf",
  en: "/assets/pdf/gabrieldvr_cv_en.pdf",
};

let traducoes = {
  greetings: {
    pt: "Olá, eu sou Gabriel",
    en: "Hi, I'm Gabriel",
  },
  "fullstack-developer": {
    pt: "Desenvolvedor Fullstack",
    en: "Fullstack developer",
  },
  description: {
    pt: "Sou dev fullstack pleno e gosto de Platform Engineering e Developer Experience: deixar mais fácil o dia a dia de quem desenvolve.",
    en: "I'm a mid-level fullstack developer who enjoys Platform Engineering and Developer Experience: making day-to-day development easier for other developers.",
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
    pt: "No fim de 2024 a <strong>Solution TI</strong> apareceu com uma chance de crescer e eu não deixei passar. Pouco depois entrei também na <strong>MJV</strong>, uma consultoria. Por ela atendo um cliente grande do setor de seguros, cuidando dos sistemas internos que os desenvolvedores de lá usam. Em paralelo, curso Sistemas de Informação na <strong>UVA</strong>.",
    en: "At the end of 2024 <strong>Solution TI</strong> offered me a chance to step up and I took it. Not long after, I also joined <strong>MJV</strong>, a consultancy. Through them I work for a large insurance company, on the internal systems its developers use. I'm also studying Information Systems at <strong>UVA</strong>.",
  },
  /* the old opener ("se não me encontrar codando") repeated what the card title
     already says, so it went */
  "aboutme-p-3": {
    pt: "Café na Starbucks ☕️, tempo com a família 👩🏻‍❤️‍👨🏻 e academia 💪. Também sou pai de gato, como a foto entrega.",
    en: "Coffee at Starbucks ☕️, time with my family 👩🏻‍❤️‍👨🏻 and the gym 💪. Also a cat dad, as the photo gives away.",
  },
  "skills-daily": {
    pt: "No dia a dia",
    en: "Day to day",
  },
  "skills-past": {
    pt: "Já trabalhei com",
    en: "Also worked with",
  },
  "devops-tools": {
    pt: "DevOps e ferramentas",
    en: "DevOps & tools",
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
    pt: "Onde já trabalhei",
    en: "Where I've worked",
  },
  "mjv-role": {
    pt: "Desenvolvedor Fullstack Pleno",
    en: "Mid-level Fullstack Developer",
  },
  "mjv-date": {
    pt: "Julho de 2025 - Atual",
    en: "July 2025 - Present",
  },
  /* Each bullet says what was done, then what changed because of it, in plain
     sentences instead of one long "result, by doing X" formula. No invented
     numbers: every figure (day → minutes, 15+ projects, crase-3's 30%) was
     confirmed by Gabriel. Unconfirmed metrics were dropped, not estimated.
     MJV is ordered for Platform/DevEx roles: Fastlane and Backstage first.
     Wording is deliberate: the GitHub Actions workflow itself wasn't his (only
     the Fastlane lanes), and the Backstage portal was a team rebuild.
     <strong> marks the main technology and the hard metrics only; the full
     stack is in the tags below each job. It survives the translation pass
     because traduzirSite() assigns innerHTML. */
  "mjv-1": {
    pt: "Desenvolvi as lanes de <a href='https://fastlane.tools' target='_blank' rel='noopener noreferrer'><strong>Fastlane</strong></a>, rodando em GitHub Actions, que aplicam o DexProtector e publicam os apps tanto para teste, no Firebase e no TestFlight, quanto nas lojas, na App Store e na Google Play. Levar um build mobile até teste caiu de <strong>quase um dia de trabalho para minutos</strong>, e os devs deixaram de fazer a proteção e a distribuição à mão.",
    en: "Built the <a href='https://fastlane.tools' target='_blank' rel='noopener noreferrer'><strong>Fastlane</strong></a> lanes, running on GitHub Actions, that apply DexProtector and ship the apps both to testing, through Firebase and TestFlight, and to the stores, on the App Store and Google Play. Getting a mobile build into testing went from <strong>almost a full working day to minutes</strong>, and developers no longer do the hardening and distribution by hand.",
  },
  "mjv-2": {
    pt: "Reconstruí com o time o portal <a href='https://backstage.io' target='_blank' rel='noopener noreferrer'><strong>Backstage</strong></a>, integrado ao GitHub e ao Bitbucket, com plugins próprios e RBAC. É nele que <strong>milhares de devs</strong> criam projetos, encontram serviços e documentação e gerenciam os acessos de cada time.",
    en: "Rebuilt the <a href='https://backstage.io' target='_blank' rel='noopener noreferrer'><strong>Backstage</strong></a> portal with the team, integrated with GitHub and Bitbucket, with custom plugins and RBAC. It's where <strong>thousands of developers</strong> create projects, find services and docs, and manage access for each team.",
  },
  "mjv-3": {
    pt: "Criei e mantive bibliotecas <strong>Angular</strong> compartilhadas, com NgRx, num monorepo Nx. Elas tiraram o código de estado e de interface que estava duplicado em <strong>mais de 15 projetos</strong>.",
    en: "Built and maintained shared <strong>Angular</strong> libraries with NgRx in an Nx monorepo. They removed state and UI code duplicated across <strong>15+ projects</strong>.",
  },
  "mjv-4": {
    pt: "Implementei backends em <strong>Node.js/NestJS</strong> com cache e filas no Redis e circuit breakers nas integrações. O tempo de resposta caiu, falhas em dependências externas pararam de derrubar fluxos críticos e o time passou a ter menos incidentes.",
    en: "Implemented <strong>Node.js/NestJS</strong> backends with Redis caching and queues, plus circuit breakers on the integrations. Response times dropped, external dependency failures stopped taking down critical flows, and the team now deals with fewer incidents.",
  },
  "mjv-5": {
    pt: "Estruturei as aplicações em <strong>arquitetura hexagonal</strong>, com portas e adaptadores. Assim o time troca uma integração externa sem reescrever regra de negócio, e a cobertura de testes unitários subiu.",
    en: "Structured the applications around <strong>hexagonal architecture</strong> (ports and adapters), so the team can swap an external integration without rewriting business rules. Unit test coverage went up as well.",
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
    pt: "Entreguei funcionalidades novas no sistema de emplacamento digital de veículos, com páginas em <strong>React</strong> que seguem as regras exigidas pelo sistema oficial do DETRAN.",
    en: "Shipped new features for the digital vehicle registration system, building <strong>React</strong> pages that follow the rules enforced by the official DETRAN system.",
  },
  "solution-2": {
    pt: "Assumi como <strong>responsável técnico</strong> o sistema de transferência digital de veículos do Mato Grosso. Cuido da manutenção e da evolução dele e mantenho o serviço estável e em conformidade com as plataformas do DETRAN-MT.",
    en: "Took <strong>technical ownership</strong> of Mato Grosso's digital vehicle transfer system. I maintain and extend it, and keep it stable and compliant with DETRAN-MT's platforms.",
  },
  "solution-3": {
    pt: "Implementei em <strong>Java</strong> as integrações entre frontend e backend de um sistema de uso público, usando padrões de projeto para manter a comunicação segura e o contrato entre as camadas sem quebras.",
    en: "Implemented the front-end to back-end integrations in <strong>Java</strong> for a public-facing system, using design patterns to keep communication secure and the contract between layers from breaking.",
  },
  "solution-4": {
    pt: "Containerizei as aplicações com <strong>Docker</strong>. Desenvolvimento e produção passaram a usar o mesmo ambiente, sem diferença de configuração entre as máquinas do time.",
    en: "Containerized the applications with <strong>Docker</strong>, so development and production share the same environment and config no longer drifts between the team's machines.",
  },
  "solution-5": {
    pt: "Participo das cerimônias de <strong>Scrum</strong> (dailies, plannings e reviews) e acompanho as tarefas no Jira, o que deixa o andamento visível para o time e ajuda a manter as entregas no prazo.",
    en: "Take part in <strong>Scrum</strong> ceremonies (dailies, plannings and reviews) and track tasks in Jira, which keeps progress visible to the team and helps keep deliveries on schedule.",
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
    pt: "Otimizei a base do app mobile da Crase Sigma, feito em <strong>Ionic</strong> com Angular, e corrigi gargalos de renderização. O app manteve o mesmo desempenho no Android e no iOS, sem regressão em nenhuma das duas plataformas.",
    en: "Optimized the Crase Sigma mobile app's <strong>Ionic</strong>/Angular codebase and fixed rendering bottlenecks, so it performed the same on Android and iOS with no regressions on either.",
  },
  "crase-2": {
    pt: "Criei fluxos contínuos de migração e integração para os sistemas novos da empresa usarem dados legados em <strong>COBOL</strong>. Os fluxos continuam compatíveis com os sistemas antigos, e a operação não precisou parar.",
    en: "Built continuous migration and integration flows so the company's newer systems could use legacy <strong>COBOL</strong> data. The flows stayed compatible with the old systems, and operations never had to stop.",
  },
  "crase-3": {
    pt: "Projetei e implementei endpoints REST em <strong>Laravel</strong> com cache e consultas otimizadas, o que reduziu a latência das APIs em <strong>mais de 30%</strong>.",
    en: "Designed and built REST endpoints in <strong>Laravel</strong> with caching and optimized queries, cutting API latency by <strong>more than 30%</strong>.",
  },
  "crase-4": {
    pt: "Administrei servidores <strong>Apache2</strong>, ajustando desempenho e segurança. As aplicações web passaram a ficar menos tempo fora do ar e menos expostas a erros de configuração.",
    en: "Administered <strong>Apache2</strong> servers, tuning performance and hardening security. The web apps had less downtime and less exposure to misconfiguration.",
  },
  "crase-5": {
    pt: "Organizei o fluxo de branches no <strong>Git</strong> e implementei pipelines de CI/CD, o que diminuiu os conflitos e o retrabalho de merge no time.",
    en: "Set up the team's <strong>Git</strong> branching flow and implemented CI/CD pipelines, which cut down on merge conflicts and rework.",
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
    pt: 'Tem mais no meu <a target="_blank" rel="noopener noreferrer" href="https://github.com/duarte-dot">GitHub</a>!',
    en: 'There\'s more on my <a target="_blank" rel="noopener noreferrer" href="https://github.com/duarte-dot">GitHub</a>!',
  },
  trybetunes: {
    pt: "Pesquise álbuns dos seus artistas favoritos e ouça prévias das músicas. Feito com React e a API do iTunes.",
    en: "Search albums by your favorite artists and listen to song previews. Built with React and the iTunes API.",
  },
  "contact-me": {
    pt: "Entre em contato",
    en: "Contact me",
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
    pt: "Seu e-mail",
    en: "Your email",
  },
  message: {
    pt: "Mensagem",
    en: "Message",
  },
  "rj-br": {
    pt: "Rio de Janeiro, Brasil",
    en: "Rio de Janeiro, Brazil",
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
    pt: "Cardápio online que fiz para a lanchonete do meu pai. Tem tema de pirata e categorias organizadas, para o cliente achar rápido os sanduíches, as bebidas e o resto direto do celular.",
    en: "An online menu I built for my dad's snack bar. It has a pirate theme and organized categories, so customers can quickly find sandwiches, drinks and everything else from their phone.",
  },
  "forum-description": {
    pt: "Página de fórum feita com React e Laravel.",
    en: "Forum page built with React and Laravel.",
  },
  "lovu-app-description": {
    pt: "Plataforma para criar um site personalizado para quem você ama, com fotos, músicas, vídeos e mensagens sobre a história de vocês.",
    en: "A platform for building a personalized website for your partner, with photos, music, videos and messages about your story together.",
  },
  "chats-app-description": {
    pt: "App de chat feito com Next.js e Upstash Redis.",
    en: "Chat app built with Next.js and Upstash Redis.",
  },
  "trybe-wallet-description": {
    pt: "Carteira virtual para acompanhar seus gastos. Feita com React e Redux.",
    en: "Virtual wallet to keep track of your expenses. Built with React and Redux.",
  },
  "duck-zelda-description": {
    pt: "Jogo no estilo Zelda com um pato. Feito em Java (descontinuado).",
    en: "A Zelda-style game starring a duck. Made in Java (discontinued).",
  },
  "pong-game-description": {
    pt: "Pong feito em Java.",
    en: "Pong, made in Java.",
  },
  "fitclub-description": {
    pt: "Frontend do projeto Fitclub, feito com React.",
    en: "Frontend for the Fitclub project, built with React.",
  },
  "coming-soon": {
    pt: "Vem aí",
    en: "Coming soon",
  },
  "coming-soon-description": {
    pt: "Enquanto isso, o resto está no GitHub.",
    en: "In the meantime, the rest is on GitHub.",
  },
  "thank-you": {
    pt: "obrigado",
    en: "thank you",
  },
  "thank-you-subtitle": {
    pt: "logo te respondo",
    en: "i'll get back to you soon",
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
