let traducoes = {
  greetings: {
     'pt': 'Olá, eu sou Gabriel',
     'en': "Hi, i'm Gabriel"
  },
  'fullstack-developer': {
    'pt': 'Desenvolvedor Fullstack',
    'en': 'Fullstack developer'
  },
  'description': {
     'pt': 'Sou um Desenvolvedor Web Fullstack com conhecimentos em Frontend e Backend, atualmente me aprofundando um pouco mais em ciência da computação.',
     'en': 'I am a Fullstack Web Developer with knowledge in Frontend and Backend, currently delving a little deeper into computer science.'
  },
  'contactme': {
     'pt': 'Entre em contato',
     'en': 'Contact me'
  },
  'aboutme': {
    'pt': 'Sobre mim',
    'en': 'About me'
  },
  'about': {
    'pt': '<i class="uil uil-user nav__icon"></i> Sobre mim',
    'en': '<i class="uil uil-user nav__icon"></i> About'
  },
  'aboutme-subtitle': {
    'pt': 'Olá, meu nome é Gabriel Duarte',
    'en': 'Hi, my name is Gabriel Duarte'
  },
  'aboutme-p-1': {
    'pt': 'Eu sou um Desenvolvedor Web Full Stack em busca de novas oportunidades para crescer profissionalmente. Atualmente, possuo conhecimento e experiência em diversas tecnologias e algumas metodologias ágeis.',
    'en': "I'm a Full Stack Web Developer looking for new opportunities to grow professionally. Currently, I have knowledge and experience in several technologies and some agile methodologies."
  },
  'aboutme-p-2': {
    'pt': "ADORO aprender mais sobre tudo relacionado à tecnologia e desenvolvimento web. Se você está procurando por um desenvolvedor júnior com paixão por aprender, sinta-se à vontade para <a href='#contact'>entrar em contato</a> comigo!",
    'en': "I LOVE learning more about everything related to technology and web development. If you're looking for a junior developer with a passion for learning, please feel free to <a href='#contact'>contact me!</a>"
  },'months-studying': {
    'pt': 'Meses <br> estudando',
    'en': 'Months <br> studying'
  },
  '1-year': {
    'pt': '1 ano',
    'en': '1 year'
  },
  '6-months': {
    'pt': '6 meses',
    'en': '6 months'
  },
  'projects-done': {
    'pt': 'Projetos <br> feitos',
    'en': 'Projects <br> done'
  },
  'my-technical-level': {
    'pt': 'Meu nível técnico',
    'en': 'My technical level'
  },
  'projects': {
    'pt': 'Projetos',
    'en': 'Projects'
  },
  'projects-nav': {
    'pt': '<i class="uil uil-briefcase-alt nav__icon"></i> Projetos',
    'en': '<i class="uil uil-briefcase-alt nav__icon"></i> Projects'
  },
  'contactme-nav': {
    'pt': '<i class="uil uil-envelope nav__icon"></i> Contato',
    'en': '<i class="uil uil-envelope nav__icon"></i> Contact me'
  },
  'check-more': {
    'pt': 'Você pode ver mais no meu <a target="_blank" href="https://github.com/duarte-dot">GitHub</a>!',
    'en': 'You can check more on my <a target="_blank" href="https://github.com/duarte-dot">GitHub</a>!',
  },
  'trybetunes': {
    'pt': 'Pesquise por álbuns de seus artistas favoritos e escute previews de suas músicas!',
    'en': 'Search for albums by your favorite artists and listen to previews of their songs'
  },
  'contact-me': {
    'pt': 'Entre em contato',
    'en': 'Contact-me'
  },
  'get-in-touch': {
    'pt': 'Me manda uma mensagem!',
    'en': 'Get in touch'
  },
  'location': {
    'pt': 'Localização',
    'en': 'Location'
  },
  'call-me': {
    'pt': 'Meu número',
    'en': 'Call me',
  },
  'name': {
    'pt': 'Nome',
    'en': 'Name'
  },
  'email': {
    'pt': 'Seu Email',
    'en': 'Your Email'
  },
  'message': {
    'pt': 'Mensagem',
    'en': 'Message'
  },
  'rj-br': {
    'pt': 'Rio de Janeiro - Brasil',
    'en': 'Rio de Janeiro - Brazil'
  },
  'send-message': {
    'pt': 'Enviar mensagem',
    'en': 'Send message'
  },
  'forum': {
    'pt': 'App de Fórum!',
    'en': 'Forum app!'
  },
  "soon": {
    'pt': 'Em breve',
    'en': 'Soon'
  },
  'forum-description': {
    'pt': 'App de fórum com frontend feito em React e backend em PHP/Laravel',
    'en': 'Forum app with React frontend and PHP/Laravel backend'
  },
  'coming-soon': {
    'pt': 'Vem aí',
    'en': 'Coming soon'
  },
  'coming-soon-description': {
    'pt': 'Mais projetos Front e Backend estão por vir!',
    'en': 'More Front and Backend projects are coming soon!'
  },
  'thank-you': {
    'pt': 'obrigado',
    'en': 'thank you'
  },
  'thank-you-subtitle': {
    'pt': 'entrarei em contato',
    'en': 'i will be in touch'
  },
  'go-back': {
    'pt': 'voltar',
    'en': 'go back'
  },
};

function traduzirSite(idioma) {
  var elementos = document.querySelectorAll('[translation]');

  for (var i = 0; i < elementos.length; i++) {
    var chave = elementos[i].getAttribute('translation');
    elementos[i].innerHTML = traducoes[chave][idioma];
  }
}

// Verifica se já existe um valor salvo no localStorage
var language = localStorage.getItem('language');

// Caso não exista um valor salvo, define a linguagem padrão como 'en'
if (!language) {
  language = 'en';
}

var changeLanguage = document.getElementById('change-language');

changeLanguage.addEventListener('click', function() {
  if (language === 'en') {
    traduzirSite('pt');
    language = 'pt';
    changeLanguage.innerHTML = '🇺🇸';
  } else {
    traduzirSite('en');
    language = 'en';
    changeLanguage.innerHTML = '🇧🇷';
  }

  // Salva a linguagem escolhida no localStorage
  localStorage.setItem('language', language);
});

// Atualiza o texto do botão com base na linguagem atual
if (language === 'en') {
  changeLanguage.innerHTML = '🇧🇷';
} else {
  changeLanguage.innerHTML = '🇺🇸';
}

// Aplica a tradução inicial com base na linguagem salva
traduzirSite(language);