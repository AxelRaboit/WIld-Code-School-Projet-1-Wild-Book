let name=0
function togglePopup(name){
  switch (name){
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

// COPY TO CLIPBOARD

function copyToClipboard(event) {
  event.preventDefault()

  const data = event.target.getAttribute('data-copy')

  const tmpTextarea = document.createElement('textarea')
  tmpTextarea.value = data

  document.body.appendChild(tmpTextarea)

  tmpTextarea.select()
  document.execCommand('copy')

  document.body.removeChild(tmpTextarea)

}


document.querySelector('.email').addEventListener('click', copyToClipboard)
document.querySelector('.email2').addEventListener('click', copyToClipboard)
document.querySelector('.email3').addEventListener('click', copyToClipboard)
document.querySelector('.email2').addEventListener('click', copyToClipboard)
document.querySelector('.email4').addEventListener('click', copyToClipboard)
document.querySelector('.email5').addEventListener('click', copyToClipboard)
document.querySelector('.email6').addEventListener('click', copyToClipboard)
document.querySelector('.email7').addEventListener('click', copyToClipboard)
document.querySelector('.email8').addEventListener('click', copyToClipboard)
document.querySelector('.email9').addEventListener('click', copyToClipboard)
document.querySelector('.email10').addEventListener('click', copyToClipboard)
document.querySelector('.email11').addEventListener('click', copyToClipboard)
document.querySelector('.email12').addEventListener('click', copyToClipboard)
document.querySelector('.email13').addEventListener('click', copyToClipboard)
document.querySelector('.email14').addEventListener('click', copyToClipboard)
document.querySelector('.email15').addEventListener('click', copyToClipboard)
document.querySelector('.email16').addEventListener('click', copyToClipboard)
document.querySelector('.email17').addEventListener('click', copyToClipboard)
document.querySelector('.email18').addEventListener('click', copyToClipboard)
document.querySelector('.email19').addEventListener('click', copyToClipboard)
document.querySelector('.email20').addEventListener('click', copyToClipboard)
document.querySelector('.email21').addEventListener('click', copyToClipboard)
document.querySelector('.email22').addEventListener('click', copyToClipboard)
document.querySelector('.email23').addEventListener('click', copyToClipboard)
document.querySelector('.email24').addEventListener('click', copyToClipboard)
document.querySelector('.email25').addEventListener('click', copyToClipboard)

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
    message: 'Email copied',
    duration: 3000,
  })
}