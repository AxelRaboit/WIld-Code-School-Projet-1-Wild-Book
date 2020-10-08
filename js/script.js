let name = 0
function togglePopup(name) {
  switch (name) {
    case 1:
      document.getElementById("popup-1").classList.toggle("active");
      break
    case 2:
      document.getElementById("popup-2").classList.toggle("active");
      break
    case 3:
      document.getElementById("popup-3").classList.toggle("active");
      break
    case 4:
      document.getElementById("popup-4").classList.toggle("active");
      break
    case 5:
      document.getElementById("popup-5").classList.toggle("active");
      break
    case 6:
      document.getElementById("popup-6").classList.toggle("active");
      break
    case 7:
      document.getElementById("popup-7").classList.toggle("active");
      break
    case 8:
      document.getElementById("popup-8").classList.toggle("active");
      break
    case 9:
      document.getElementById("popup-9").classList.toggle("active");
      break
    case 10:
      document.getElementById("popup-10").classList.toggle("active");
      break
    case 11:
      document.getElementById("popup-11").classList.toggle("active");
      break
    case 12:
      document.getElementById("popup-12").classList.toggle("active");
      break
    case 13:
      document.getElementById("popup-13").classList.toggle("active");
      break
    case 14:
      document.getElementById("popup-14").classList.toggle("active");
      break
    case 15:
      document.getElementById("popup-15").classList.toggle("active");
      break
    case 16:
      document.getElementById("popup-16").classList.toggle("active");
      break
    case 17:
      document.getElementById("popup-17").classList.toggle("active");
      break
    case 18:
      document.getElementById("popup-18").classList.toggle("active");
      break
    case 19:
      document.getElementById("popup-19").classList.toggle("active");
      break
    case 20:
      document.getElementById("popup-20").classList.toggle("active");
      break
    case 21:
      document.getElementById("popup-21").classList.toggle("active");
      break
    case 22:
      document.getElementById("popup-22").classList.toggle("active");
      break
    case 23:
      document.getElementById("popup-23").classList.toggle("active");
      break
    case 24:
      document.getElementById("popup-24").classList.toggle("active");
      break
    case 25:
      document.getElementById("popup-25").classList.toggle("active");
      break
  }
}

function copyToClipboard(event) {
  event.preventDefault()

  const data = event.target.getAttribute('dataCopy')

  const tmpTextarea = document.createElement('textarea')
  tmpTextarea.value = data

  document.body.appendChild(tmpTextarea)

  tmpTextarea.select()
  document.execCommand('copy')

  document.body.removeChild(tmpTextarea)

}


// document.querySelector('.logo-email').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email2').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email3').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email2').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email4').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email5').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email6').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email7').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email8').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email9').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email10').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email11').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email12').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email13').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email14').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email15').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email16').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email17').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email18').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email19').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email20').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email21').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email22').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email23').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email24').addEventListener('click', copyToClipboard)
// document.querySelector('.logo-email25').addEventListener('click', copyToClipboard)


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
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
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
    altPortrait: "Portrait Adrien Thouve",
    name: "Adrien THOUVENIN",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
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
    altPortrait: "Portrait Adeline Beaufils",
    name: "Christopher PERSINET",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
  },
  
  {
    portrait: "img/pictures-profile/charlie.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Charlie GNIADZIK",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
  },

  {
    portrait: "img/pictures-profile/damien.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Damien LAMBERT",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
  },

  {
    portrait: "img/pictures-profile/denis.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Denis CÎRLAN",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
  },

  {
    portrait: "img/pictures-profile/enzo.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Enzo GAUDRY",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
  },
  
  {
    portrait: "img/pictures-profile/ilyes.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Ilyes RAHIM",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
  },

  {
    portrait: "img/pictures-profile/leandre.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Léandre GADEN",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
  },

  {
    portrait: "img/pictures-profile/morgane.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Morgane JUMEL",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
  },

  {
    portrait: "img/pictures-profile/massintha.jpg",
    altPortrait: "Portrait Adeline Beaufils",
    name: "Massintha AIT BRAHAM",
    position: "Développeus web",
    mobility: "30 minutes en voiture autour de Reim, 15 minutes autour de la gare de l'Est",
    linkLinkedin: "https://www.linkedin.com/in/adeline-beaufils-6382b61b8/",
    linkEmail: "adeline.beaufils@gmail.com",
    linkGitHub: "https://github.com/Adeline-BEAUFILS",
    beforeWcsDesc: "Approvisionneuse, Logisticienne",
    goal: "S'épanouir dans sa reconversion",
    character: "Curieuse, Polyvalente, Atypique", 
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
  },

  {
    portrait: "img/pictures-profile/romain.jpg",
    altPortrait: "Portrait Romain GUILLEMOT",
    name: "Romain GUILLEMOT",
    position: "Formateur",
    linkLinkedin: "https://www.linkedin.com/in/rguillemot/",
    linkEmail: "wasthishelpful@gmail.com",
    linkGitHub: "https://github.com/rocambille",
    /* Definir Description popup */ 
  },
  
  {
    portrait: "img/pictures-profile/clement.jpg",
    altPortrait: "Portrait Clément BECHETOILLE",
    name: "Clément BECHETOILLE",
    position: "Campus Manager",
    linkLinkedin: "https://www.linkedin.com/in/clementbechetoille/?locale=fr_FR",
    linkEmail: "clement.bechetoille@wildcodeschool.com",
    /* Definir Description popup */
  }
  ]

  for (i = 0; i < people.length; i++) {
    const peopleData = people[i]

    const article = template.content.cloneNode(true)

    article.querySelector('.portrait').src = peopleData.portrait
    article.querySelector('.portrait').alt = peopleData.altPortrait
    article.querySelector('.name').textContent = peopleData.name
    article.querySelector('.name').id = 'hello'
    article.querySelector('.position').textContent = peopleData.position
    article.querySelector('.mobility').textContent = peopleData.mobility
    article.querySelector('.linkedin').href = peopleData.linkLinkedin
    article.querySelector('.logoLinkedin').src = logoLinkedin
    article.querySelector('.logoLinkedin').alt = altLinkedin
    article.querySelector('.logoEmail').dataCopy = peopleData.linkEmail
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

    // article.querySelector('p').addEventListener('click', function(event) {alert(peopleData.name)})

    document.querySelector(".container").appendChild(article)
  }
}

//Notyf Part: Function to add an event when we click on the email button

/* function notyfCopyOnClick() {

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
} */