const fisicos = {
  "Isaac Newton": {
    imagem: "./img/isaac.jpg",
    texto: "Formulou as leis do movimento e a lei da gravitação universal, explicando como os objetos se atraem no universo.",
    video: "https://youtu.be/1JF61XCusWE"
  },
  "Albert Einstein": {
    imagem: "./img/einstein.jpg",
    texto: "Explicou o efeito fotoelétrico, mostrando que a luz também se comporta como partículas (fótons) um passo importante para a teoria quântica.",
    video: "https://youtu.be/gPSk0Xjz0og"
  },
  "Marie Curie": {
    imagem: "./img/maria.webp",
    texto: "Pioneira nos estudos sobre radioatividade e a única pessoa a ganhar o Prêmio Nobel em duas áreas diferentes: Física e Química.",
    video: "https://youtu.be/tDWeCwF-1dA"
  },
  "Galileu Galilei": {
    imagem: "./img/galileu.webp",
    texto: "Famoso por seus estudos sobre o movimento dos corpos, pelo aperfeiçoamento do telescópio e pela descoberta dos satélites de Júpiter.",
    video: "https://youtu.be/wo5xLYzqUmg"
  },
  "Max Planck": {
    imagem: "./img/max-planck.webp",
    texto: "Considerado o 'pai da física quântica' por propor que a energia é emitida em pacotes chamados 'quanta'.",
    video: "https://youtu.be/0pbftb68OVA"
  },
  "Niels Bohr": {
    imagem: "./img/niels bohr.jpg",
    texto: "Desenvolveu um modelo do átomo com níveis de energia quantizados, explicando como os elétrons ocupam órbitas específicas.",
    video: "https://youtu.be/4Syx6kJuaHQ"
  },
  "Werner Heisenberg": {
    imagem: "./img/Werner_Heisenberg.jpg",
    texto: "Criou o princípio da incerteza, que mostra que não é possível conhecer com precisão a posição e a velocidade de uma partícula ao mesmo tempo.",
    video: "https://youtu.be/mOfu0s5MvLk"
  },
  "Erwin Schrödinger": {
    imagem: "./img/Erwin_Schrödinger.jpg",
    texto: "Formulou a equação de Schrödinger, que descreve a evolução da função de onda de partículas quânticas — base da mecânica quântica.",
    video: "https://youtu.be/c3X9TLJnvJk"
  },
  "Paul Dirac": {
    imagem: "./img/Paul_Dirac.jpg",
    texto: "Desenvolveu a equação de Dirac, que uniu mecânica quântica e relatividade e previu a existência da antimatéria.",
    video: "https://youtu.be/rYQpzKDgv2s"
  },
  "Max Born": {
    imagem: "./img/Max_Born.jpg",
    texto: "Ajudou a desenvolver a interpretação probabilística da função de onda, essencial para entender o comportamento quântico.",
    video: "https://youtu.be/m6cKaiJYSjg"
  },
  "Stephen Hawking": {
    imagem: "./img/Stephen_Hawking.StarChild.jpg",
    texto: "Conhecido por suas teorias sobre buracos negros e o Big Bang, e pela descoberta da radiação de Hawking.",
    video: "https://youtu.be/uAs_QMIzGMY"
  }
};

function activate(el) {
  const isActive = el.classList.contains('active');

  // Remove "active" de todos os painéis e esconde os conteúdos
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.remove('active');
    const infoDiv = panel.querySelector('.panel-info');
    if (infoDiv) infoDiv.style.display = 'none';
  });

  // Ativa o painel clicado
  if (!isActive) {
    el.classList.add('active');

    const nome = el.querySelector('h2').innerText;
    const dados = fisicos[nome];

    if (dados) {
      let infoDiv = el.querySelector('.panel-info');
      
      // Se não existir, cria a div
      if (!infoDiv) {
        infoDiv = document.createElement('div');
        infoDiv.className = 'panel-info';
        el.appendChild(infoDiv);
      }

      infoDiv.innerHTML = `
        <img src="${dados.imagem}" alt="${nome}">
        <p>${dados.texto}</p>
        <p>Quer saber mais sobre <strong>${nome}</strong>? Veja este vídeo:</p>
        <a href="${dados.video}" target="_blank" rel="noopener noreferrer">${dados.video}</a>
      `;
      infoDiv.style.display = 'flex';
    }
  }
}
