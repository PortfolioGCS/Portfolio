const projets = [
    {
      titre: "Boxxle",
      description: "jeux en pure js ou le but est de pousser les caisses sur les emplacements prévus à cet effet pour passer au niveau suivant. ",
      image: "/assets/Projets/boxxle.png",
    },
    {
      titre: "Projet 2",
      description: "Description du projet 2...",
      image: "image-projet-2.svg",
    },
    // Ajoutez d'autres projets ici
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