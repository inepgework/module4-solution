(function () {
  var names = [
    "Inne",
    "Jared",
    "Jason",
    "Jordan",
    "Elon",
    "Linus",
    "Thompson",
    "Dennis",
    "Louis",
    "Jackson",
  ];
  for (var name in names) {
    var firstLetter = names[name].charAt(0);
    if (firstLetter.toLowerCase() == "j") {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }
})();
