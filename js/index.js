//animazione  menù allo scorrimento della pagina
let menuHidden = document.getElementsByClassName('menu');

window.onscroll = function () {
    if (window.pageYOffset >= 150) {
        menuHidden[0].style.backgroundColor = 'rgba(0, 0, 0, 0.900)';
        menuHidden[0].style.transition = 'all 0.6s ease-in';
        menuHidden[0].style.borderBottom = ' 2px solid yellow'

    } else {
        menuHidden[0].style.backgroundColor = 'black';
        menuHidden[0].style.transition = 'all 1s ease-out';
        menuHidden[0].style.border = 'none';

    }

};


//recupero il testo 'su di me' dal file json
p = document.getElementById('sudime')
pFormazione = document.getElementById('formazione-text')

fetch('../text/sudime.json')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        p.innerHTML = json.introduzione.join("")
    })



fetch('../text/sudime.json')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        pFormazione.innerHTML = json.introduzione2.join("");
    })


// creo le professioni
// creo una classe Professione con un suo costruttore
class Professione {
    constructor(azienda, annoInizio, annoFine, mansione, descrizione, logo) {
        this.azienda = azienda,
            this.annoInizio = annoInizio,
            this.annoFine = annoFine,
            this.mansione = mansione,
            this.descrizione = descrizione
        this.logo = logo
    }
    professioneSingola = () => {
        return `
  
      <div class='article' >
        <h1> ${this.azienda} </h1>
        <h3> ${this.mansione} </h3>
        <h3> ${this.annoInizio}  ${this.annoFine}</h3>
        <p> ${this.descrizione}</p>
        </div>
        <img class='logo-esperienza' src='${this.logo}'>
    
        `
    }
}
// creo nello specifico le mie esperienze lavorative

let esperienzeLavorative = [
    professioneCoop = new Professione('Coop alleanza 3.0', 'dal ' + 2005, 'al ' + 2018, 'Addetto alle vendite - Caporeparto', `Ricoprendo un ruolo di rilevanza, mi occupavo non solo della gestione logistica e del rifornimento del punto vendita, ma anche della gestione degli orari dei dipendenti, della formazione dei nuovi addetti, delle aperture dei nuovi punti vendita e della ristrutturazione dei più datati. `, '../img/coop_logo.png'),
    professioneTiger = new Professione('Flying  Tiger Copenhagen', 'dal ' + 2018, 'al ' + 2020, 'Magazziniere', `Oltre alla gestione del magazzino e dell’inventario dei singoli punti
    vendita, ho avuto la possibilità di entrare in contatto con differenti strutture, gestendo anche il rifornimento dei differenti punti vendita.
    `, '../img/tiger.png'),
    professionePepito = new Professione('Pepito Produzioni s.r.l', 'dal ' + 10 + '/' + 2020, 'al ' + 02 + '/' + 2021, 'Runner', `Mi occupo di tutto quello che riguarda la produzione cinematografica,  dal ricevimento attori all’aiuto effettivo sul set cinematografico (aiuto macchinisti, supporto alla segreteria, assicurarsi  i silenzi durante le scene)
    `, '../img/LOGO-PEPITO-PRODUZIONI.png'),
    professioneInnFlex = new Professione('Inn-Flex', 'dal ' + 03 + '/' + 2021, 'al ' + 06 + '/' + 2021, 'Capomacchina', `Sono responsabile della macchina di produzione, mi occupo della sua gestione e manutenzione, lavoro fianco a fianco con un addetto di produzione che, insieme a me, si occupa di valutare la qualità del prodotto finale.`, '../img/logo2-innflex-1.png'),
    professioneTorneo = new Professione('Torneo Delle Nazioni', 'dal ' + 03 + '/' + 2021, '- in corso', 'Webmaster', 'Mi occupo di curare, aggiornare e gestire il sito del torneo di calcio "Torneo Delle Nazioni" di Gradisca d\'Isonzo,il sito è scritto in wordpress e il mio ruolo è quello di renderlo sempre aggiornato con news, immagini e risultati sportivi', '../img/torneo.png')
]




// itero tutte le posizioni lavorative create
for (esperienza of esperienzeLavorative) {
    elencoProfessioni = document.getElementById('professioni-elenco');
    const divPadre = elencoProfessioni.appendChild(document.createElement("div"));
    divPadre.className = 'professione-singola';
    divPadre.setAttribute("data-aos", "zoom-in");
    divPadre.setAttribute("data-aos-duration", "2000");
    divPadre.innerHTML = esperienza.professioneSingola();


}



/*
attribuisco la classe .active al menu
*/

const ul = document.querySelector('ul');
const li = document.getElementsByClassName('item')
const arrayLi = Array.from(li)


arrayLi.forEach(el => {
    el.addEventListener('click', function () {
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active')
    })
})



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (photo of img) {
    photo.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}










