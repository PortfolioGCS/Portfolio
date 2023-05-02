const projets = [
    {
      titre: "Boxxle",
      description: "jeux en pure js ou le but est de pousser les caisses sur les emplacements prévus à cet effet pour passer au niveau suivant. ",
      image: "/assets/Projets/boxxle.png",
      github : "https://github.com/PortfolioGCS/Boxxle",
      jeux : "../boxxle/index.html"
    },
    {
      titre: "Groupie Tracker",
      description: "Application web permettant de suivre les concerts de vos artistes préférés. fait en golang ",
      image: "/assets/Projets/groupie.png",
      github : "https://github.com/PortfolioGCS/Groupie-Tracker",
      jeux : ""
    },
  ];

  let currentIndex = 0;

  const projetTitle = document.querySelector('.projet-text h2');
  const projetDescription = document.querySelector('.projet-text p');
  const projetImage = document.querySelector('.projet-image img');
  const prevProjetButton = document.getElementById('prev-projet');
  const nextProjetButton = document.getElementById('next-projet');
  
  function updateProjet() {
    const projet = projets[currentIndex];
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