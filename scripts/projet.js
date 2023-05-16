var test = 1;

const projets = [
  {
    titre: "Boxxle",
    description: "Jeu en pure js où le but est de pousser les caisses sur les emplacements prévus à cet effet pour passer au niveau suivant.",
    image: "/assets/Projets/boxxle.png",
    github : "https://github.com/PortfolioGCS/Boxxle",
    jeux : "boxxle/index.html"
  },
  {
    titre: "Groupie Tracker",
    description: "Application web permettant de suivre les concerts de vos artistes préférés. Réalisée en golang.",
    image: "/assets/Projets/groupie.png",
    github : "https://github.com/PortfolioGCS/Groupie-Tracker",
    jeux : ""
  },
  {
    titre: "Bot Hyperplanning",
    description: "Bot discord en python permettant de connaître son cours du jour, le prochain, ou l'emploi du temps de la semaine.",
    image: "/assets/Projets/discord.png",
    github : "https://github.com/PortfolioGCS/Bot-Hyperplanning",
    jeux : ""
  },
  {
    titre: "Challenge 48",
    description: "Site de gestion de tickets avec un système de récompense, réalisé avec Symfony, Vue et js.",
    image: "/assets/Projets/chall.png",
    github : "",
    jeux : ""
  },
  {
    titre: "Ydays",
    description: "Site de gestion d'investissements avec génération de rapports et de fiches d'imposition.",
    image: "/assets/Projets/csim.png",
    github : "",
    jeux : "https://csim-finance.com/"
  },
  {
    titre: "Autre",
    description: "Mes autres projets sont disponibles sur mon Github.",
    image: "/assets/Projets/github.png",
    github : "https://github.com/GaspardCS",
    jeux : ""
  },
];

const projetsen = [
  {
    titre: "Boxxle",
    description: "A pure JavaScript game where the goal is to push boxes onto designated spots to advance to the next level.",
    image: "/assets/Projets/boxxle.png",
    github: "https://github.com/PortfolioGCS/Boxxle",
    jeux: "../boxxle/index.html"
  },
  {
    titre: "Groupie Tracker",
    description: "A web application for tracking your favorite artists' concerts. Built with Golang.",
    image: "/assets/Projets/groupie.png",
    github: "https://github.com/PortfolioGCS/Groupie-Tracker",
    jeux: ""
  },
  {
    titre: "Bot Hyperplanning",
    description: "A Python Discord bot for getting your daily class, the next one, or the weekly timetable.",
    image: "/assets/Projets/discord.png",
    github: "https://github.com/PortfolioGCS/Bot-Hyperplanning",
    jeux: ""
  },
  {
    titre: "Challenge 48",
    description: "A ticket management website with a reward system, built with Symfony, Vue, and JavaScript.",
    image: "/assets/Projets/chall.png",
    github: "",
    jeux: ""
  },
  {
    titre: "Ydays",
    description: "An investment management website with report generation and tax form support.",
    image: "/assets/Projets/csim.png",
    github: "",
    jeux: "https://csim-finance.com/"
  },
  {
    titre: "Other",
    description: "My other projects are available on my GitHub.",
    image: "/assets/Projets/github.png",
    github: "https://github.com/GaspardCS",
    jeux: ""
  },
];


const cv = [
  {
    titre: "À propos de moi",
    description: "mon cv",
  },
  {
    titre: "About me",
    description: "my resume",
  },
];

const home = [
  {
    titre: "Bienvenue sur mon portfolio",
    description: "Je m'appelle Cabecas Segura Gaspard et je suis etudiant en informatique a Ynov Lyon.",
  },
  {
    titre: "Welcome to my portfolio",
    description: "My name is Cabecas Segura Gaspard and I am a computer science student at Ynov Lyon.",
  },
];

const footer = [
  {
    phone : "Téléphone : +33 6 12 91 38 74",
  },
  {
    phone : "Phone : +33 6 12 91 38 74",
  },
];

const formulaire = [
  {
    titre : "Formulaire de contact",
    nom : "Nom",
    email : "Email",
    message : "Message",
    envoyer : "Envoyer",
  },
  {
    titre : "Contact form",
    nom : "Name",
    email : "Email",
    message : "Message",
    envoyer : "Send",
  },
];

  let currentIndex = 0;

  const projetTitle = document.querySelector('.projet-text h2');
  const projetDescription = document.querySelector('.projet-text p');
  const projetImage = document.querySelector('.projet-image img');
  const prevProjetButton = document.getElementById('prev-projet');
  const nextProjetButton = document.getElementById('next-projet');
  
  function updateProjet() {

    if (test == 1) {
      projet = projets[currentIndex];
    } else {
      projet = projetsen[currentIndex];
    }
    projetTitle.textContent = projet.titre;
    projetDescription.textContent = projet.description;
    projetImage.setAttribute('src', projet.image);
    projetImage.setAttribute('alt', `Illustration du ${projet.titre}`);
    document.querySelector('.git').setAttribute('href', projet.github);
    document.querySelector('.git').setAttribute('target', '_blank');

    if(projet.jeux == ''){
      document.querySelector('.jeux').style.display = 'none';
    }else{
      document.querySelector('.jeux').style.display = 'block';
      document.querySelector('.jeux').setAttribute('href', projet.jeux);
      document.querySelector('.jeux').setAttribute('target', '_blank');
    }

  }
  
  function prevProjet() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = projets.length - 1;
    }
    updateProjet();
  }
  
  function nextProjet() {
    currentIndex++;
    if (currentIndex >= projets.length) {
      currentIndex = 0;
    }
    updateProjet();
  }
  
  prevProjetButton.addEventListener('click', prevProjet);
  nextProjetButton.addEventListener('click', nextProjet);
  
  updateProjet();


  var slider = document.getElementById("lang-switch");

  // Ajoutez un écouteur d'événements 'change' à l'élément slider
  slider.addEventListener("change", function() {
      console.log(this.value);
      if(this.value == 0) {

          document.querySelector('.propos-text h1').textContent = cv[1].titre;
          document.querySelector('.oni').textContent = cv[1].description;

          document.querySelector('.accueil-text h1').textContent = home[1].titre;
          document.querySelector('.accueil-text p').textContent = home[1].description;

          document.querySelector('.tel').textContent = footer[1].phone;

          document.querySelector('.e').textContent = formulaire[1].email;
          document.querySelector('.n').textContent = formulaire[1].nom;
          document.querySelector('.m').textContent = formulaire[1].message;
          document.querySelector('.b').textContent = formulaire[1].envoyer;

          document.querySelector('.jeux').textContent = "Try";
          document.querySelector('.git').textContent = "go to GitHub";
  

          test = 0;

          updateProjet();
      


      } else if(this.value == 1) {

          document.querySelector('.propos-text h1').textContent = cv[0].titre;
          document.querySelector('.oni').textContent = cv[0].description;

          document.querySelector('.accueil-text h1').textContent = home[0].titre;
          document.querySelector('.accueil-text p').textContent = home[0].description;

          document.querySelector('.tel').textContent = footer[0].phone;
          
          document.querySelector('.e').textContent = formulaire[0].email;
          document.querySelector('.n').textContent = formulaire[0].nom;
          document.querySelector('.m').textContent = formulaire[0].message;
          document.querySelector('.b').textContent = formulaire[0].envoyer;

          document.querySelector('.jeux').textContent = "Essayer";
          document.querySelector('.git').textContent = "aller sur GitHub";

          test = 1;

          updateProjet();
      }
    
  });