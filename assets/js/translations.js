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
    pt: "Desenvolvedor Fullstack Pleno na MJV Tecnologia. Trabalho com Angular, React, Node.js/NestJS e Java, criando interfaces interativas, APIs RESTful e integrações entre sistemas.",
    en: "Mid-level Fullstack Developer at MJV Tecnologia. I work with Angular, React, Node.js/NestJS and Java, building interactive interfaces, RESTful APIs and system integrations.",
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
  "aboutme-subtitle": {
    pt: "Olá, meu nome é Gabriel Duarte",
    en: "Hi, my name is Gabriel Duarte",
  },
  "aboutme-p-1": {
    pt: "Sou um Desenvolvedor Fullstack. Crio interfaces interativas e responsivas, integro APIs, implemento lógica de negócios, gerencio servidores e otimizo o desempenho de sistemas, sempre com atenção a versionamento eficiente e qualidade de código.",
    en: "I’m a Fullstack Developer. I build interactive and responsive interfaces, integrate APIs, implement business logic, manage servers and tune system performance, always caring about clean versioning and code quality.",
  },
  "aboutme-p-2": {
    pt: "Atuo profissionalmente desde 2023, passando de Junior a Pleno. Nesse caminho entreguei aplicações seguindo arquitetura hexagonal, monorepos NX com Angular e NGRX, backends Node.js/NestJS com Redis para cache e filas, APIs RESTful com Laravel e frontends React integrados a sistemas públicos como o DETRAN. Em paralelo, curso Sistemas de Informação na Universidade Veiga de Almeida (UVA).",
    en: "I’ve been working professionally since 2023, moving from Junior to Mid-level. Along the way I’ve shipped applications following hexagonal architecture, NX monorepos with Angular and NGRX, Node.js/NestJS backends with Redis for caching and queues, RESTful APIs with Laravel, and React front-ends integrated with government systems such as DETRAN. Alongside that, I’m studying Information Systems at Veiga de Almeida University (UVA).",
  },
  "aboutme-p-3": {
    pt: "Se não me encontrar codando, provavelmente me encontrará tomando um cafézinho em alguma starbucks ☕️, aproveitando um tempo com a minha família 👩🏻‍❤️‍👨🏻, ou na academia 💪.",
    en: "If you don’t find me coding, you’ll probably find me enjoying a coffee at Starbucks ☕️, spending time with my family 👩🏻‍❤️‍👨🏻, or at the gym 💪.",
  },
  "years-of-code": {
    pt: "Anos <br> codando",
    en: "Years <br> coding",
  },
  "years-of-experience": {
    pt: "Anos de <br> experiência",
    en: "Years of <br> experience",
  },
  "projects-done": {
    pt: "Projetos <br> feitos",
    en: "Projects <br> done",
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
  "mjv-1": {
    pt: "Desenvolvi e mantive aplicações seguindo a arquitetura hexagonal, promovendo maior desacoplamento e testabilidade do código.",
    en: "Built and maintained applications following hexagonal architecture, improving decoupling and testability.",
  },
  "mjv-2": {
    pt: "Trabalhei em projetos monorepo com NX, criando e gerenciando bibliotecas reutilizáveis em Angular com NGRX para gerenciamento de estado escalável e consistente.",
    en: "Worked on NX monorepos, creating and maintaining reusable Angular libraries with NGRX for scalable state management.",
  },
  "mjv-3": {
    pt: "Implementei backends em Node.js com NestJS, integrando Redis para cache e filas de mensagens, além de configurar circuit breakers para maior resiliência dos serviços.",
    en: "Implemented Node.js/NestJS backends with Redis for caching and message queues, plus circuit breakers for service resilience.",
  },
  "mjv-4": {
    pt: "Trabalhei no desenvolvimento de uma plataforma Backstage: integração com GitHub e Bitbucket, implementação de plugins e configuração de RBAC.",
    en: "Developed a Backstage platform: GitHub and Bitbucket integration, custom plugins and RBAC configuration.",
  },
  "mjv-5": {
    pt: "Participei de um projeto de automatização do deploy de aplicativos nas lojas (Play Store e Apple Store) utilizando Fastlane.",
    en: "Automated mobile app deployment to the Play Store and Apple Store using Fastlane.",
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
    pt: "Desenvolvi novas funcionalidades para o sistema de emplacamento digital de veículos, integrado ao sistema oficial do DETRAN, criando páginas dinâmicas e otimizadas com React.",
    en: "Built new features for the digital vehicle registration system integrated with DETRAN, creating dynamic and optimized pages with React.",
  },
  "solution-2": {
    pt: "Fiquei responsável pelo sistema de transferência digital de veículos do Mato Grosso, totalmente integrado às plataformas do DETRAN-MT, garantindo sua manutenção, evolução e estabilidade.",
    en: "Owned the digital vehicle transfer system for Mato Grosso, fully integrated with DETRAN-MT platforms, handling its maintenance, evolution and stability.",
  },
  "solution-3": {
    pt: "Implementei integrações robustas entre frontend e backend utilizando Java e padrões de projeto consolidados, garantindo comunicação segura e eficiente entre os sistemas.",
    en: "Implemented robust frontend/backend integrations using Java and established design patterns, ensuring secure and efficient communication between systems.",
  },
  "solution-4": {
    pt: "Configurei e gerenciei containers Docker, criando ambientes isolados e escaláveis para desenvolvimento e produção.",
    en: "Configured and managed Docker containers, creating isolated and scalable environments for development and production.",
  },
  "solution-5": {
    pt: "Participei das cerimônias ágeis do Scrum (dailies, plannings e reviews) e acompanhei as tarefas no Jira, contribuindo para o alinhamento da equipe e entregas dentro do prazo.",
    en: "Took part in Scrum ceremonies (dailies, plannings and reviews) and tracked work in Jira, keeping the team aligned and deliveries on schedule.",
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
    pt: "Otimizei e mantive o aplicativo mobile Crase Sigma, desenvolvido com Ionic e Angular, garantindo desempenho consistente entre dispositivos Android e iOS.",
    en: "Maintained and optimized the Crase Sigma mobile app, built with Ionic and Angular, keeping performance consistent across Android and iOS.",
  },
  "crase-2": {
    pt: "Migrei e integrei dados legados provenientes de sistemas em COBOL para ecossistemas modernos, criando fluxos de dados contínuos e compatíveis com sistemas antigos.",
    en: "Migrated and integrated legacy COBOL data into modern ecosystems, building continuous data flows compatible with the older systems.",
  },
  "crase-3": {
    pt: "Projetei e implementei APIs RESTful com Laravel, utilizando técnicas de cache e otimização de consultas que reduziram a latência em mais de 30%.",
    en: "Designed and implemented RESTful APIs with Laravel, using caching and query optimization that cut latency by more than 30%.",
  },
  "crase-4": {
    pt: "Configurei e gerenciei servidores Apache2 para aplicações web de alta disponibilidade, realizando ajustes de desempenho e reforço de segurança.",
    en: "Configured and managed Apache2 servers for high-availability web applications, with performance tuning and security hardening.",
  },
  "crase-5": {
    pt: "Estruturei fluxos de trabalho com Git, incluindo criação de branches, resolução de conflitos e implementação de pipelines de CI/CD para aumentar a eficiência do time.",
    en: "Set up Git workflows including branching, conflict resolution and CI/CD pipelines to improve team efficiency.",
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
    pt: "Jogo estilo zelda com pato. Feito em Java (ainda em progresso)",
    en: "Duck zelda styled game. Made in Java (still in progress)",
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
var downloadCVButton = document.getElementById("cv-button");

function aplicarIdioma(idioma) {
  traduzirSite(idioma);
  changeLanguage.innerHTML = idioma === "en" ? "🇧🇷" : "🇺🇸";
  if (downloadCVButton) downloadCVButton.href = CV_FILES[idioma];
}

changeLanguage.addEventListener("click", function () {
  language = language === "en" ? "pt" : "en";
  aplicarIdioma(language);

  // Salva a linguagem escolhida no localStorage
  localStorage.setItem("language", language);
});

// Aplica a tradução inicial com base na linguagem salva
aplicarIdioma(language);
