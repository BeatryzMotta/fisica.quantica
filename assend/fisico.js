const fisicos = {
  "Isaac Newton": {
    imagem: "./img/isaac.jpg",
    texto: "Formulou as leis universais do movimento e a lei da gravitação universal, explicando como objetos no universo se atraem.",
    video: "https://youtu.be/1JF61XCusWE"
  },
  "Albert Einstein": {
    imagem: "./img/einstein.jpg",
    texto: " Explicou o efeito fotoelétrico, demonstrando que a luz se comporta como partículas (fótons), o que foi um passo fundamental para a teoria quântica.",
    video: "https://youtu.be/gPSk0Xjz0og"
  },
  "Maria Curie": {
    imagem: "./img/maria.webp",
    texto: "Pioneira nos estudos sobre radioatividade e a única pessoa a ganhar o Prêmio Nobel em duas áreas científicas diferentes (Física e Química).",
    video: "https://youtu.be/tDWeCwF-1dA"
  },
  "Galileu Galilei": {
    imagem: "./img/galileu.webp",
    texto: "Conhecido por seus estudos sobre o movimento dos corpos, o aperfeiçoamento do telescópio e a descoberta dos satélites de Júpiter.",
    video: "https://youtu.be/wo5xLYzqUmg"
  },
  "Max Planck": {
    imagem: "./img/max-planck.webp",
    texto: "Considerado o 'pai da física quântica' por introduzir a ideia de que a energia é emitida em pacotes discretos, ou 'quanta', para resolver o problema da radiação de corpo negro.",
    video: "https://youtu.be/0pbftb68OVA"
  },
  "Niels Bohr": {
    imagem: "./img/niels bohr.jpg",
    texto: " Formulou um modelo do átomo que incorporava a quantização de energia, explicando que os elétrons orbitam o núcleo em níveis de energia específicos.",
    video: "https://youtu.be/4Syx6kJuaHQ"
  },
  "Werner Heisenberg": {
    imagem: "./img/Werner_Heisenberg.jpg",
    texto: " Desenvolveu o princípio da incerteza, que estabelece os limites fundamentais da precisão com que certas propriedades de uma partícula (como posição e momento) podem ser conhecidas simultaneamente.",
    video: "https://youtu.be/mOfu0s5MvLk"
  },
  "Erwin Schrödinger": {
    imagem: "./img/Erwin_Schrödinger.jpg",
    texto: " Formulou a equação que descreve a evolução da função de onda de uma partícula quântica, um pilar da mecânica quântica.",
    video: "https://youtu.be/c3X9TLJnvJk"
  },
  "Paul Dirac": {
    imagem: "./img/Paul_Dirac.jpg",
    texto: "Desenvolveu a equação de Dirac, que unificou a mecânica quântica e a relatividade especial, e contribuiu para a eletrodinâmica quântica.",
    video: "https://youtu.be/rYQpzKDgv2s"
  },
  "Max Born": {
    imagem: "./img/Max_Born.jpg",
    texto: "Contribuiu significativamente para a mecânica quântica, incluindo a interpretação probabilística da função de onda.",
    video: "https://youtu.be/m6cKaiJYSjg"
  },
  "Stephen Hawking": {
    imagem: "./img/Stephen_Hawking.StarChild.jpg",
    texto: "conhecido por suas contribuições para as teorias sobre buracos negros e o Big Bang, incluindo a Radiação de Hawking",
    video: "https://youtu.be/uAs_QMIzGMY"
  }
};

function activate(el) {
  const isActive = el.classList.contains('active');

  document.querySelectorAll('.panel').forEach(f => {
    f.classList.remove('active');
    const info = f.querySelector('.panel-info');
    if (info) info.style.display = 'none';
  });

  if (!isActive) {
    el.classList.add('active');

    const nome = el.querySelector('h2').innerText;
    const dados = fisicos[nome];

    if (dados) {
      const infoDiv = el.querySelector('.panel-info');
      infoDiv.innerHTML = `
        <img src="${dados.imagem}" alt="${nome}">
        <p>${dados.texto}</p>
        <p>Quer saber mais sobre o <strong>${nome}</strong>, veja este vídeo:</p>
        <a href="${dados.video}" target="_blank">${dados.video}</a>
      `;
      infoDiv.style.display = 'flex';
    }
  }
}