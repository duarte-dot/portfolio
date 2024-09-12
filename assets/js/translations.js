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
    pt: "Atualmente focado em aprender engenharia de software, aprofundando meus conhecimentos nas melhores práticas de desenvolvimento, padrões de design e arquiteturas de sistemas.",
    en: "Currently focused on learning software engineering, deepening my knowledge in development best practices, design patterns, and system architectures.",
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
    pt: "Sou um desenvolvedor com experiência em diversas áreas. já me interessei por desenvolvimento de jogos, sites, software e mobile. Sei um pouco de tudo isso e sou apaixonado no que faço.",
    en: "I’m a developer of anything. I’ve been interested in game, website, software, and mobile development, knowing a bit about all of it and passionate about what I do.",
  },
  "aboutme-p-2": {
    pt: "Atualmente, estou focado em aprender engenharia de software, aprofundando meu conhecimento em boas práticas de desenvolvimento, padrões de design e arquiteturas de sistemas web e mobile. Estou estudando principalmente Java para aprimorar ainda mais minhas habilidades.",
    en: "Currently, I am focused on learning software engineering, deepening my knowledge of development best practices, design patterns, and web and mobile system architectures. I am primarily studying Java to enhance my skills further.",
  },
  "aboutme-p-3": {
    pt: "Se não me encontrar codando, provavelmente me encontrará tomando um cafézinho em alguma starbucks ☕️, aproveitando um tempo com a minha família 👩🏻‍❤️‍👨🏻, ou na academia 💪.",
    en: "If you don’t find me coding, you’ll probably find me enjoying a coffee at Starbucks ☕️, spending time with my family 👩🏻‍❤️‍👨🏻, or at the gym 💪.",
  },
  "years-of-code": {
    pt: "Anos <br> codando",
    en: "Years <br> coding",
  },
  "2-years": {
    pt: "2+ anos",
    en: "2+ years",
  },
  "projects-done": {
    pt: "Projetos <br> feitos",
    en: "Projects <br> done",
  },
  "my-technical-level": {
    pt: "Minhas habilidades",
    en: "My skills",
  },
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
    pt: 'Você pode ver mais no meu <a target="_blank" href="https://github.com/duarte-dot">GitHub</a>!',
    en: 'You can check more on my <a target="_blank" href="https://github.com/duarte-dot">GitHub</a>!',
  },
  trybetunes: {
    pt: "Pesquise por álbuns de seus artistas favoritos e escute previews de suas músicas! Feito com React e Spotify API",
    en: "Search for albums by your favorite artists and listen to previews of their songs! Made with React and Spotify API",
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
  "forum-description": {
    pt: "Página de fórum com frontend. Feito em React e Laravel",
    en: "Forum page. Made with React and Laravel",
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
};

function traduzirSite(idioma) {
  var elementos = document.querySelectorAll("[translation]");

  for (var i = 0; i < elementos.length; i++) {
    var chave = elementos[i].getAttribute("translation");
    elementos[i].innerHTML = traducoes[chave][idioma];
  }
}

// Verifica se já existe um valor salvo no localStorage
var language = localStorage.getItem("language");

// Caso não exista um valor salvo, define a linguagem padrão como 'en'
if (!language) {
  language = "en";
}

var changeLanguage = document.getElementById("change-language");

changeLanguage.addEventListener("click", function () {
  if (language === "en") {
    traduzirSite("pt");
    language = "pt";
    changeLanguage.innerHTML = "🇺🇸";
  } else {
    traduzirSite("en");
    language = "en";
    changeLanguage.innerHTML = "🇧🇷";
  }

  // Salva a linguagem escolhida no localStorage
  localStorage.setItem("language", language);
});

// Atualiza o texto do botão com base na linguagem atual
if (language === "en") {
  changeLanguage.innerHTML = "🇧🇷";
} else {
  changeLanguage.innerHTML = "🇺🇸";
}

// Aplica a tradução inicial com base na linguagem salva
traduzirSite(language);
