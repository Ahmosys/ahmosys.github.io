$(document).ready(function() {
  // Initialize a new instance of the typed object according to the name of the page
  if (window.location.pathname.split("/").pop() == "index_fr.html") {
    var typedFr = new Typed("#typedFr", {
      strings: ["Étudiant en développement IT", "Développement d'<b>Application</b>", "Développement <b>Web</b>", "Développement <b>Backend</b>"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 1000,
      showCursor: true
    });
  } else {
    var typedEn = new Typed("#typedEn", {
      strings: ["Student in IT development", "<b>Application</b> Development", "<b>Web</b> Development", "<b>Backend</b> development"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 1000,
      showCursor: true
    });
  }
});