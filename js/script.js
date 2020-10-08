function togglePopup(event){
  document.querySelector(".popup[data-index='" + event.target.dataset.index + "']").classList.toggle("active");
}


function copyToClipboard(event) {
  event.preventDefault()

  const data = event.target.dataset.copy

  const tmpTextarea = document.createElement('textarea')
  tmpTextarea.value = data

  document.body.appendChild(tmpTextarea)

  tmpTextarea.select()
  document.execCommand('copy')

  document.body.removeChild(tmpTextarea)

}



function card() {
  
  const template = document.querySelector('#cards')
  const logoLinkedin = "img/cards/linkedin-logo-e1407144392549.png"
  const altLinkedin = "Logo Linkedin"
  const logoEmail = "img/cards/At_sign.svg.png"
  const altEmail = "Logo Email"
  const logoGitHub = "img/cards/githubicon.png"
  const altGitHub = "Logo GitHub"
  const wcs = "Avant la WCS :"
  const future = "Objectif futur"
  const titleCharacter = "Traits de caractère"

  const people = [{
    portrait: "img/pictures-profile/adeline.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Adeline BEAUFILS",
    position: "Développeuse web",
    mobility: "30 minutes en voiture autour de Reims, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique",
  },

  {
    portrait: "img/pictures-profile/axelc.jpg",
    altPortrait: "Portrait Axel Croizé",
    name: "Axel CROIZE",
    position: "Développeur web",
    mobility: "Reims et ses alentours.",
    linkLinkedin: "https://www.linkedin.com/in/axel-croiz%C3%A9-8402ab1b8/",
    linkEmail: "axelcroizepro@gmail.com",
    linkGitHub: "https://github.com/Tolexia/",
    beforeWcsDesc: "Mécanicien rafale dans l'Armée de l'air.",
    goal: "S'épanouir dans un métier stimulant avec de multiples facettes.",
    character: "Curieux, Intègre, Bienveillant.", 
  },

  {
    portrait: "img/pictures-profile/axelr.jpg",
    altPortrait: "Portrait Axel Raboit",
    name: "Axel RABOIT",
    position: "Développeur Web FullStack",
    mobility: "Alentours Reims, étudie toute proposition pour la France entière ou l'étranger.",
    linkLinkedin: "https://www.linkedin.com/in/axel-raboit/",
    linkEmail: "axel.raboit@gmail.com",
    linkGitHub: "https://github.com/AxelRaboit",
    beforeWcsDesc: "Camionneur International USA/CAN.",
    goal: "Intégrer une équipe motivée, avec beaucoup d'ambition.",
    character: "Motivé, Travailleur, Impliqué.", 
  },

  {
    portrait: "img/pictures-profile/alice.jpg",
    altPortrait: "Portrait Alice Petitjean",
    name: "Alice PETITJEAN",
    position: "Community Manager",
    mobility: "Reims, Paris",
    linkLinkedin: "https://www.linkedin.com/in/alice-petitjean-36729419b/",
    linkEmail: "alice.petitjean.19@neoma-bs.com",
    linkGitHub: "https://github.com/alicepetitjean",
    beforeWcsDesc: "Etudiante à NEOMA Business School.",
    goal: "Travailler en équipe avec des gens motivés et pouvoir se rapprocher du domaine de l'évènementiel.",
    character: "Curieuse, motivée, à l'écoute.", 
  },

  {
    portrait: "img/pictures-profile/alexandre.jpg",
    altPortrait: "Portrait Alexandre Corrette",
    name: "Alexandre CORRETTE",
    position: "Développeur Web FullStack",
    mobility: "France entière et au delà.",
    linkLinkedin: "https://www.linkedin.com/in/alexandre-corrette-818a9533/",
    linkEmail: "alexandrecorrette@gmail.com",
    linkGitHub: "https://github.com/Alexcorrette2A",
    beforeWcsDesc: "Commercial puis chef de cuisine.",
    goal: "Développer ses compétences rapidement pour le compte d'une entreprise puis travailler à son compte.",
    character: "Curieux, résilient, motivé.", 
  },

  {
    portrait: "img/pictures-profile/baptiste.jpg",
    altPortrait: "Portrait Baptiste Vayssie",
    name: "Baptiste VAYSSIE",
    position: "Développeur Web Back End PHP/Synfony",
    mobility: "Reims et ses environs",
    linkLinkedin: "https://www.linkedin.com/in/baptiste-vayssi%C3%A9-0a62b71b8/",
    linkEmail: "vayssie.web@gmail.com",
    linkGitHub: "https://github.com/Vayssie-web",
    beforeWcsDesc: "Educateur Spécialisé",
    goal: "Intégrer une équipe dynamique et s'épanouir dans la voie du développement.",
    character: "Calme, curieux, ayant un bon esprit d'équipe.", 
  },

  {
    portrait: "img/pictures-profile/adrien.jpg",
    altPortrait: "Portrait Adrien THOUVENIN",
    name: "Adrien THOUVENIN",
    position: "Développeur Web Back End PHP/Symfony",
    mobility: "Reims, Epernay, Châlons-en-Champagne, Paris (à étudier), véhiculé.",
    linkLinkedin: "https://www.linkedin.com/in/adrien-thouvenin-a42b101a2/",
    linkEmail: "adaura51@gmail.com",
    linkGitHub: "https://github.com/AdThouv",
    beforeWcsDesc: "Boucher / Charcutier / Traiteur en grande surface.",
    goal: "Intégrer une entreprise pour s'épanouir dans les métiers de Développement. Réaliser des projets variés.",
    character: "Dynamique, investi , joyeux.", 
  },

  {
    portrait: "img/pictures-profile/bruno.jpg",
    altPortrait: "Portrait Bruno Lagasse",
    name: "Bruno LAGASSE",
    position: "Développeur Web",
    mobility: "Reims et ses alentours",
    linkLinkedin: "https://www.linkedin.com/in/bruno-lagasse-8a699716a/",
    linkEmail: "brlagasse@gmail.com",
    linkGitHub: "https://github.com/BrunoLagasse",
    beforeWcsDesc: "Boucher / Équipier polyvalent restau rapide.",
    goal: "Entreprendre une nouvelle vie et de nouvelles perspectives grâce à son futur métier de développeur",
    character: "Enthousiaste, travail d'équipe, polyvalent", 
  },

  {
    portrait: "img/pictures-profile/christophe.jpg",
    altPortrait: "Portrait Christophe Chapleau",
    name: "Christophe CHAPLEAU",
    position: "Développeur Web FullStack",
    mobility: "Reims et alentours",
    linkLinkedin: "https://www.linkedin.com/in/christophe-chapleau-0b92b51b8/",
    linkEmail: "ch.chapleau@gmail.com",
    linkGitHub: "https://github.com/cchapleau",
    beforeWcsDesc: "Responsable financier",
    goal: "Devenir Web developper Full Stack et en faire son métier",
    character: "Motivé, professionnel, à l'écoute, curieux, esprit d'équipe", 
  },
  
  {
    portrait: "img/pictures-profile/christopher.jpg",
    altPortrait: "Portrait Christopher PERSINET",
    name: "Christopher PERSINET",
    position: "Développeur Web Back End PHP/Synfony",
    mobility: "Peux déménager s'il le faut.",
    linkLinkedin: "https://www.linkedin.com/in/christopher-persinet/",
    linkEmail: "christopherpersinet@gmail.com",
    linkGitHub: "https://github.com/Christopher-persinet",
    beforeWcsDesc: "ELS/vendeur à boulanger.",
    goal: "ELS/vendeur à boulanger.",
    character: "Motivé, Bienveillant, Travailleur.", 
  },
  
  {
    portrait: "img/pictures-profile/charlie.jpg",
    altPortrait: "Portrait Charlie GNIADZIK",
    name: "Charlie GNIADZIK",
    position: "Développeur web",
    mobility: "Chalons en Champagne; 50km max. alentours.",
    linkLinkedin: "https://www.linkedin.com/in/charlie-g-384b651b6/",
    linkEmail: "gnidzik.charlie@gmail.com",
    linkGitHub: "https://github.com/Machou",
    beforeWcsDesc: "Père au foyer.",
    goal: "Devenir développeur web confirmé dans une entreprise du CAC40.",
    character: "Joyeux, intègre, curieux.", 
  },

  {
    portrait: "img/pictures-profile/damien.jpg",
    altPortrait: "Portrait Damien LAMBERT",
    name: "Damien LAMBERT",
    position: "Développeur web",
    mobility: "Reims et 50km aux alentours, véhiculé.",
    linkLinkedin: "https://www.linkedin.com/in/damien-lambert-98b2b01b8/",
    linkEmail: "damien.lambert999@gmail.com",
    linkGitHub: "https://github.com/Damien008",
    beforeWcsDesc: "Vendeur technique en hypermarché.",
    goal: "Pouvoir intégrer une entreprise en tant que développeur web.",
    character: "Ponctuel, motivé, joyeux.", 
  },

  {
    portrait: "img/pictures-profile/denis.jpg",
    altPortrait: "Portrait Denis CÎRLAN",
    name: "Denis CÎRLAN",
    position: "Développeur Web FullStack",
    mobility: "Reims et ses alentours, Paris, l'étranger potentiellement, véhiculé.",
    linkLinkedin: "https://www.linkedin.com/in/denis-c%C3%AErlan-9732aa1b8/",
    linkEmail: "kirlan@hotmail.fr",
    linkGitHub: "https://github.com/dcirlan",
    beforeWcsDesc: "Agent de sécurité incendie.",
    goal: "Démarrer un nouveau chapitre: enfin trouver un métier qui lui plaît, et apporter de la stabilité dans sa vie.",
    character: "Curieux, polyvalent, à l'écoute, stable", 
  },

  {
    portrait: "img/pictures-profile/enzo.jpg",
    altPortrait: "Portrait Enzo GAUDRY",
    name: "Enzo GAUDRY",
    position: "Développeur web",
    mobility: "Reims et ses alentours.",
    linkLinkedin: "https://www.linkedin.com/in/enzogaudry/",
    linkEmail: "enzogaudry1@gmail.com",
    linkGitHub: "https://github.com/EnzoGaudry",
    beforeWcsDesc: "Intérimaire.",
    goal: "Trouver un job en tant que développeur web et refaire 42",
    character: "Curieux, motivé, patient.", 
  },
  
  {
    portrait: "img/pictures-profile/Ilyes.jpg",
    altPortrait: "Portrait Ilyes RAHIM",
    name: "Ilyes RAHIM",
    position: "Développeur Web FullStack",
    mobility: "Reims et ses alentours.",
    linkLinkedin: "https://www.linkedin.com/in/ilyes-rahim-aa30291b6/",
    linkEmail: "ilyesrahimdev@gmail.com",
    linkGitHub: "https://github.com/lyesi",
    beforeWcsDesc: "Etait au lycée en filière scientifique",
    goal: "Être développeur web FullStack avec une bonne équipe.",
    character: "Plein de ressources, bienveillant, à l'écoute des autres.", 
  },

  {
    portrait: "img/pictures-profile/leandre.jpg",
    altPortrait: "Portrait Léandre Gaden",
    name: "Léandre GADEN",
    position: "Chef de projet-création de produit",
    mobility: "Reims, Strasbourg.",
    linkLinkedin: "https://www.linkedin.com/in/l%C3%A9andre-gaden-2913ba19b/",
    linkEmail: "leandre.gaden@gmail.com",
    linkGitHub: "https://github.com/Mortaag",
    beforeWcsDesc: "Etudiant à NEOMA Business School.",
    goal: "Intégrer une grande entreprise.",
    character: "Motivé, impliqué, sérieux.", 
  },

  {
    portrait: "img/pictures-profile/morgane.jpg",
    altPortrait: "Portrait Morgane JUMEL",
    name: "Morgane JUMEL",
    position: "Développeuse web",
    mobility: "Marne et Île-de-France pour le moment, véhiculée",
    linkLinkedin: "https://www.linkedin.com/in/morgane-jumel-7b86041b5/",
    linkEmail: "jumel.morgane@gmail.com",
    linkGitHub: "https://github.com/MorganeJumel",
    beforeWcsDesc: "Divers métiers dans le tourisme (agent d'escale, réceptionniste)",
    goal: "Trouver un métier enrichissant qui m'apporterait une certaine stabilité.",
    character: "Sérieuse, empathique, travail en équipe.", 
  },

  {
    portrait: "img/pictures-profile/massintha.jpg",
    altPortrait: "Portrait Massintha AIT BRAHAM",
    name: "Massintha AIT BRAHAM",
    position: "Développeur web",
    mobility: "France et alentours.",
    linkLinkedin: "https://www.linkedin.com/in/massinta-ait-braham-016198172/",
    linkEmail: "massinta.ait-braham@gmail.com",
    linkGitHub: "https://github.com/MassintaAitBraham",
    beforeWcsDesc: "Educateur sportif",
    goal: "intégrer une équipe afin de commencer le travail.",
    character: "motivé, curieux, travail d'équipe.", 
  },
  
  {
    portrait: "img/pictures-profile/nathan.jpg",
    altPortrait: "Portrait Nathan MACHROUX",
    name: "Nathan MACHROUH",
    position: "Développeur web",
    mobility: "Chalons-en-Champagne et ses alentours pour le moment",
    linkLinkedin: "https://www.linkedin.com/in/nathan-machrouh-ba95521b2/",
    linkEmail: "machrouh.nathan@gmail.com",
    linkGitHub: "https://github.com/NathanMachrouh",
    beforeWcsDesc: "Médiateur interculture.",
    goal: "Aquérir plus d'expérience en intégrant une bonne équipe pour devenir freelance par la suite.",
    character: "Curieux, ambitieux, polyvalent.", 
  },

  {
    portrait: "img/pictures-profile/olivier.jpg",
    altPortrait: "Portrait Olivier PREAUX",
    name: "Olivier PREAUX",
    position: "Développeur Web Back End PHP/Symfony",
    mobility: "Disponible à travers le monde.",
    linkLinkedin: "https://www.linkedin.com/in/olivier-preaux-b492b31b8/",
    linkEmail: "olivier.prx@gmail.com",
    linkGitHub: "https://github.com/Olivier-Preaux",
    beforeWcsDesc: "Commandant Adjoint d'une Brigade Territoriale de Gendarmerie.",
    goal: "Trouver une nouvelle voie épanouissante.",
    character: "Droit, curieux et bienveillant.", 
  },

  {
    portrait: "img/pictures-profile/steve.jpg",
    altPortrait: "Portrait Steve CREPIN",
    name: "Steve CREPIN",
    position: "Développeur Web FullStack [PHP/JavaScript]",
    mobility: "Marseille et ses alentours.",
    linkLinkedin: "https://www.linkedin.com/in/steve-crepin-38588a16b/",
    linkEmail: "steve.crepin@gmail.com",
    linkGitHub: "https://github.com/Schyzofrania",
    beforeWcsDesc: "Commercial.",
    goal: "Determiné à s'épanouir dans un métier d'avenir.",
    character: "Ponctuel, dynamique, esprit d'équipe.", 
  },
  
  {
    portrait: "img/pictures-profile/thomas.jpg",
    altPortrait: "Portrait Thomas GILLET",
    name: "Thomas GILLET",
    position: "Développeur web",
    mobility: "Disponible dans toute la France.",
    linkLinkedin: "https://www.linkedin.com/in/thomas-gillet-59ba851a1/",
    linkEmail: "thomasglt08@gmail.com",
    linkGitHub: "https://github.com/thomasgillet-dev",
    beforeWcsDesc: "Année en prepa Web à WEBSTART de Lille.",
    goal: "Être à son compte et pouvoir libérer sa créativité avec son équipe.",
    character: "Motivé, patient, à l'écoute.", 
  },

  {
    portrait: "img/pictures-profile/victor.jpg",
    altPortrait: "Portrait Victor BIJOT",
    name: "Victor BIJOT",
    position: "Développeur web",
    mobility: "Les Mesneux, véhiculé",
    linkLinkedin: "https://www.linkedin.com/in/victor-bijot-423b151a0/",
    linkEmail: "victorbijot@gmail.com",
    linkGitHub: "https://github.com/BijotVictor",
    beforeWcsDesc: "Etudiant à NEOMA Business School.",
    goal: "Finir ses études de commerce et rejoindre une grande entreprise.",
    character: "Curieux, bienveillant et ambitieux.", 
  }
  ]

  for (i = 0; i < people.length; i++) {
    const peopleData = people[i]

    const article = template.content.cloneNode(true)

    article.querySelector('.portrait').src = peopleData.portrait
    article.querySelector('.portrait').alt = peopleData.altPortrait
    article.querySelector('.name').textContent = peopleData.name
    article.querySelector(".info").addEventListener("click", togglePopup)
    article.querySelector(".info").dataset.index = i
    article.querySelector('.close-btn').addEventListener("click", togglePopup)
    article.querySelector(".close-btn").dataset.index = i
    article.querySelector('.logoEmail').setAttribute("onclick", `notyfCopyOnClick()`)
    article.querySelector('.position').textContent = peopleData.position
    article.querySelector('.mobility').textContent = peopleData.mobility
    article.querySelector('.linkedin').href = peopleData.linkLinkedin
    article.querySelector('.logoLinkedin').src = logoLinkedin
    article.querySelector('.logoLinkedin').alt = altLinkedin
    article.querySelector('.logoEmail').dataset.copy = peopleData.linkEmail
    article.querySelector('.logoEmail').src = logoEmail
    article.querySelector('.logoEmail').alt = altEmail
    article.querySelector('.github').href = peopleData.linkGitHub
    article.querySelector('.github').src = peopleData.linkGitHub
    article.querySelector('.logoGithub').src = logoGitHub
    article.querySelector('.logoGithub').alt = altGitHub
    article.querySelector('.popupTitleWCS').textContent = wcs
    article.querySelector('.beforeWcs').textContent = peopleData.beforeWcsDesc
    article.querySelector('.popupTitleFuture').textContent = future
    article.querySelector('.goal').textContent = peopleData.goal
    article.querySelector('.popupTitleCharactere').textContent = titleCharacter
    article.querySelector('.character').textContent = peopleData.character
    article.querySelector(".popup").dataset.index = i

    article.querySelector('.logoEmail').addEventListener('click', copyToClipboard)
    document.querySelector(".container").appendChild(article)
  }
}

//Notyf Part: Function to add an event when we click on the email button

function notyfCopyOnClick() {

  const notyf = new Notyf({
    duration: 4000,
    position: {
      x: 'right',
      y: 'top',
    }
  })

  notyf.success({
    message: 'Email copié',
    duration: 3000,
  })
}


document.querySelector(".infoRomain").addEventListener('click', togglePopup)
document.querySelector('.close-btn').addEventListener("click", togglePopup)
document.querySelector(".infoClement").addEventListener('click', togglePopup)
document.querySelector('.test').addEventListener("click", togglePopup)
