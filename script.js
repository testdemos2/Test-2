const translations = {
  en: {
    "nav.about":"ABOUT","nav.kino":"KINO","nav.contact":"CONTACT",
    "hero.kicker":"INDEPENDENT FILMMAKER · DIRECTOR · STORYTELLER",
    "hero.copy":"Independent films. Real stories. Dark ideas.",
    "hero.cta":"ENTER CHRIS STORM KINO","hero.more":"DISCOVER THE FILMMAKER ↓",
    "about.eyebrow":"ABOUT CHRIS STORM",
    "about.heading":"FILMS MADE<br><em>FROM THE GROUND UP.</em>",
    "about.p1":"My name is Kristijan Stojcevic. Under my artist name Chris Storm, I work as a director and filmmaker.",
    "about.p2":"I made my first films at the age of 16. Together with my cousins, I created small short films, including projects inspired by Jackie Chan movies. Those early productions were my entry into practical filmmaking.",
    "about.p3":"In my early twenties, I began working more intensively on film production, visual language, camera work, editing and visual design. Many of my projects started as private experiments where I could test new techniques, make mistakes and learn from them.",
    "about.p4":"I built most of my knowledge and skills independently and through hands-on practice. By continuously making my own projects, I developed experience across different parts of film production.",
    "about.p5":"My goal is to take an idea beyond the first concept and, whenever possible, carry it through to the finished film myself.",
    "profile.jobLabel":"ROLE","profile.job":"Director · Filmmaker · Video Editor · Videographer",
    "profile.workLabel":"APPROACH","profile.work":"Self-taught · Independent Production",
    "profile.skillsLabel":"SKILLS","profile.skills":"Screenwriting · Concept · Directing · Camera · Editing · Color Grading · VFX · Postproduction",
    "profile.otherLabel":"OTHER WORK","profile.other":"Documentary · Commercial · Sport · Social Media",
    "kino.eyebrow":"STREAMING ARCHIVE","kino.note":"Short films, documentaries and independent cinema.",
    "manifesto.quote":"HORROR<br>LIVES HERE.","manifesto.copy":"Short films, experiments and independent cinema — all in one place.",
    "contact.eyebrow":"CONTACT & BOOKING","contact.heading":"LET'S MAKE<br><em>SOMETHING.</em>",
    "contact.copy":"For directing, filmmaking, creative projects, collaborations and booking:",
    "contact.emailLabel":"EMAIL","contact.book":"BOOK CHRIS STORM",
    "gallery.eyebrow":"BEHIND THE CAMERA","gallery.heading":"THE FILM<br><em>STARTS HERE.</em>","gallery.copy":"From the first frame to the final cut — I build my films through practical work, experimentation and independent production.","footer.right":"INDEPENDENT CINEMA"
  },
  de: {
    "nav.about":"ÜBER MICH","nav.kino":"KINO","nav.contact":"KONTAKT",
    "hero.kicker":"UNABHÄNGIGER FILMEMACHER · REGISSEUR · STORYTELLER",
    "hero.copy":"Unabhängige Filme. Echte Geschichten. Dunkle Ideen.",
    "hero.cta":"CHRIS STORM KINO ÖFFNEN","hero.more":"DEN FILMEMACHER ENTDECKEN ↓",
    "about.eyebrow":"ÜBER CHRIS STORM",
    "about.heading":"FILME, DIE<br><em>VON GRUND AUF ENTSTEHEN.</em>",
    "about.p1":"Mein Name ist Kristijan Stojcevic. Unter meinem Künstlernamen Chris Storm arbeite ich als Regisseur und Filmemacher.",
    "about.p2":"Meine ersten eigenen Filme habe ich bereits im Alter von 16 Jahren gedreht. Gemeinsam mit meinen Cousins entstanden damals erste kleine Kurzfilme, unter anderem im Stil von Jackie-Chan-Filmen. Diese Projekte waren mein Einstieg in die praktische Filmproduktion.",
    "about.p3":"Mit Anfang 20 begann ich, mich intensiver mit Filmproduktion, Filmsprache, Kameraarbeit, Schnitt und visueller Gestaltung auseinanderzusetzen. Viele meiner Projekte entstanden zunächst privat und dienten dazu, neue Techniken auszuprobieren, Fehler zu machen und daraus zu lernen.",
    "about.p4":"Ich habe mir meine Kenntnisse und Fähigkeiten über die Jahre überwiegend selbstständig und autodidaktisch aufgebaut. Durch eigene Projekte, praktische Erfahrungen und die kontinuierliche Auseinandersetzung mit Filmproduktion habe ich mir Kenntnisse in unterschiedlichen Bereichen angeeignet.",
    "about.p5":"Mein Anspruch ist es, eine Idee nicht nur zu entwickeln, sondern sie möglichst selbstständig von der ersten Idee bis zum fertigen Film umzusetzen.",
    "profile.jobLabel":"BERUF","profile.job":"Regisseur · Filmemacher · Video Editor · Videograf",
    "profile.workLabel":"ARBEITSWEISE","profile.work":"Autodidaktisch · Independent Production",
    "profile.skillsLabel":"BEREICHE","profile.skills":"Drehbuch · Konzeption · Regie · Kamera · Schnitt · Color Grading · VFX · Postproduktion",
    "profile.otherLabel":"WEITERE ARBEITEN","profile.other":"Dokumentation · Commercial · Sport · Social Media",
    "kino.eyebrow":"STREAMING ARCHIV","kino.note":"Kurzfilme, Dokumentationen und unabhängiges Kino.",
    "manifesto.quote":"HORROR<br>LEBT HIER.","manifesto.copy":"Kurzfilme, Experimente und Independent Cinema — alles an einem Ort.",
    "contact.eyebrow":"KONTAKT & BUCHUNG","contact.heading":"LASS UNS<br><em>ETWAS MACHEN.</em>",
    "contact.copy":"Für Regie, Filmproduktionen, kreative Projekte, Kooperationen und Buchungen:",
    "contact.emailLabel":"E-MAIL","contact.book":"CHRIS STORM BUCHEN",
    "gallery.eyebrow":"HINTER DER KAMERA","gallery.heading":"DER FILM<br><em>BEGINNT HIER.</em>","gallery.copy":"Vom ersten Bild bis zum finalen Schnitt — meine Filme entstehen durch praktische Arbeit, Experimente und unabhängige Produktion.","footer.right":"UNABHÄNGIGES KINO"
  }
};

const films = [
  {
    title:"KILL THE BOOGEYMAN", year:"2025 · ca. 40 Min.", type:{en:"HORROR FILM",de:"HORRORFILM"},
    id:"tKlETFiQpdA",
    desc:{
      en:"Approx. 40-minute horror film and the largest released film project so far. Produced over roughly one year and released on YouTube.",
      de:"Rund 40-minütiger Horrorfilm und bisher umfangreichstes veröffentlichtes Filmprojekt. Produktion über ungefähr ein Jahr; veröffentlicht auf YouTube."
    }
  },
  {
    title:"HALLOWEEN", year:"2023", type:{en:"FAN FILM",de:"FAN FILM"},
    id:"pPvz3jh9_xI",
    desc:{
      en:"A horror film focused on a more complete short-film production. Released on YouTube and reaching around 50,000 views.",
      de:"Stärker auf eine vollständige Kurzfilmproduktion ausgerichteter Horrorfilm. Auf YouTube veröffentlicht und rund 50.000 Aufrufe erreicht."
    }
  },
  {
    title:"I WANT TO BELIEVE", year:"2022 · ca. 18 Min.", type:{en:"DOCUMENTARY",de:"DOKUMENTATION"},
    id:"PAT3wTM-Xy0",
    desc:{
      en:"An approximately 18-minute documentary and an early step toward independently producing longer documentary content.",
      de:"Rund 18-minütige Dokumentation und Einstieg in die eigenständige Produktion längerer dokumentarischer Inhalte."
    }
  },
  {
    title:"ROOM 237", year:"2020", type:{en:"SHORT FILM",de:"KURZFILM"},
    id:"A59MfZ2HjjY",
    desc:{
      en:"Black-and-white short film and the first independently made film released online.",
      de:"Schwarz-Weiß-Kurzfilm und erster online veröffentlichter eigener Film."
    }
  },
  {
    title:"Green Fireballs: Das UFO-Rätsel von New Mexico",
    year:"2026 · SIGNAL NULL", type:{en:"DOCUMENTARY",de:"DOKUMENTATION"},
    id:"sMLgfzniKLk",
    desc:{
      en:"A documentary project about mysterious UFO/UAP files and the Green Fireballs phenomenon in New Mexico.",
      de:"Dokumentarisches Projekt über mysteriöse UFO-/UAP-Akten und die Green-Fireballs-Thematik von New Mexico."
    }
  }
];

let language = "en";

const filmGrid = document.getElementById("filmGrid");
const modal = document.getElementById("playerModal");
const frame = document.getElementById("playerFrame");
const title = document.getElementById("playerTitle");
const meta = document.getElementById("playerMeta");
const description = document.getElementById("playerDescription");
const languageToggle = document.getElementById("languageToggle");
const languageLabel = document.getElementById("languageLabel");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key] !== undefined) el.innerHTML = translations[language][key];
  });
  languageLabel.textContent = language === "en" ? "DE" : "EN";
  renderFilms();
}

function renderFilms() {
  filmGrid.innerHTML = films.map(film => `
    <article class="card" data-id="${film.id}">
      <div class="thumb" style="background-image:linear-gradient(180deg,transparent 35%,#000c),url('https://i.ytimg.com/vi/${film.id}/hqdefault.jpg')"></div>
      <div class="card-body">
        <div class="badge">${film.type[language]}</div>
        <h3>${film.title}</h3>
        <div class="card-year">${film.year}</div>
      </div>
    </article>
  `).join("");

  filmGrid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const film = films.find(item => item.id === card.dataset.id);
      openPlayer(film);
    });
  });
}

function openPlayer(film) {
  frame.src = `https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0`;
  title.textContent = film.title;
  meta.textContent = `${film.type[language]} · ${film.year}`;
  description.textContent = film.desc[language];
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closePlayer() {
  frame.src = "";
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

languageToggle.addEventListener("click", () => {
  language = language === "en" ? "de" : "en";
  applyLanguage();
});

menuButton.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  mobileMenu.setAttribute("aria-hidden", String(!open));
});

mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden","true");
}));

document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closePlayer));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePlayer();
});

applyLanguage();
