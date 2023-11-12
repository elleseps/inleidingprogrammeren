// Er wordt een bericht naar de console gestuurd om te checken of de javascript goed gelinked is met de html
console.log("Hallloo Werellddddd");

// Variables
  // Maakt een variabele aan genaamd imgElGlas. Vanuit de html wordt het Id glas opgehaald om deze te koppelen aan de variabele imgElGlas
  // Eerst wordt er een nieuwe Audio gemaakt door middel van de new Audio().
  // Maakt een variabele aan voor het body element genaamd bodyElement. 
  var imgElGlas = document.getElementById("glas");
  var audioElIngredients = new Audio();
  var bodyElement = document.querySelector("body");

  // Array van glassStateImages die bestaat uit 5 png's. Het zijn de verschillende ingredienten van de koffie.
  // Met deze array kunnen de afbeeldingen makkelijk worden verkregen en gemanipuleerd worden om bijvoorbeeld de afbeelding van het lege glas te wijzigen.
  var glassStateImages = [
    'images/strawinglas.png',
    'images/strawinglasmetkoffie.png',
    'images/strawglaskoffieijsklontjes.png',
    'images/strawglaskoffievanille.png',
    'images/glasslagroom.png',
  ]

  // Array van glassSouns die bestaat uit 5 audiobestanden. Het zijn verschillende audiofragmenten die passen bij de ingredienten van de koffie.
  // Met deze array kunnen de audiofragmenten makkelijk worden verkregen en gemanipuleerd worden om bijvoorbeeld audiofragmenten toe te voegen aan events.
  var glassSounds = [
    'audio/audiorietje.mp3',
    'audio/koffie.mp3',
    'audio/ijsklontjes.mp3',
    'audio/siroop.mp3',
    'audio/slagroom.mp3'
  ]

//Straw
  // Variables straw
  // Maakt twee variabele aan voor het rietje. imgElStraw voor het enkele rietje die vanuit de html wordt opgehaald door middel van een Id.
  // glasWithStraw voor het glas met het rietje erin die wordt opgehaald vanuit de images folder.
  var imgElStraw = document.getElementById('straw');
  var glassWithStraw = 'images/strawinglas.png';

  // Eventlisteners Straw
  // Deze eventlistener reageert op het dragstart event voor de afbeelding met de Id imgElStraw.
  // Wanneer het dragstart event optreedt, wordt de bijbehorende functie uitgevoerd. Deze functie logt eerst het event object in de console.
  // Vervolgens wordt de clearData() methode aangeroepen op het dataTransfer object van het event. Dit zorgt ervoor dat eventuele eerder opgeslagen gegevens van een eerder drag-and-drop proces worden verwijderd.
  // Daarna wordt de setData() methode aangeroepen op het dataTransfer object van het event, met als parameters de naam van de gegevens ("index") en de waarde (0). 
  // Dit zorgt ervoor dat de waarde 0 wordt opgeslagen als gegevens die later kunnen worden opgehaald in de drop event handler, om te weten welke afbeelding is gedropt als er meerdere afbeeldingen beschikbaar zijn.
  // Deze eventlistener wordt gebruikt om de gegevens over de afbeelding te behouden terwijl deze wordt gesleept en neergezet met de drop eventlistener.
  imgElStraw.addEventListener("dragstart", function(event) {
    console.log(event);
    event.dataTransfer.clearData();
    event.dataTransfer.setData("index", 0);
  });

//Koffie
  // Variables Koffie
  // Maakt twee variabele aan voor de koffie. imgElKoffie voor de koffiebonen die vanuit de html worden opgehaald door middel van een Id.
  // glassKoffie voor het glas met het rietje en de koffie erin die wordt opgehaald vanuit de images folder.
  var imgElKoffie = document.getElementById('koffie');
  var glassKoffie = 'images/strawinglasmetkoffie.png';

  // Eventlisteners Koffie
  // Deze code voegt een eventlistener toe aan een HTML-afbeeldingselement met de Id imgElKoffie. De listener reageert op het dragstart event voor het element.
  // Wanneer het dragstart event optreedt, wordt de bijbehorende functie uitgevoerd. Deze functie verwijdert eerst alle eerder opgeslagen gegevens met de clearData() methode.
  // Vervolgens wordt de setData() methode aangeroepen op het dataTransfer object van het event, met als parameters de naam van de gegevens ("index") en de waarde (1). 
  // Dit zorgt ervoor dat de waarde 1 wordt opgeslagen als gegevens die later kunnen worden opgehaald in de drop event handler, om te weten welke afbeelding is gedropt als er meerdere afbeeldingen beschikbaar zijn.
  imgElKoffie.addEventListener("dragstart", function(event) {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("index", 1);
  });

//Ijsklontjes
  // Variables Ijsklontjes
  // Maakt twee variabele aan voor het ijsklontje. imgElIjsklontjes voor de ijsklontjes die vanuit de html worden opgehaald door middel van een Id.
  // glassIjsklontjes voor het glas met het rietje, koffie en ijsklontjes erin die wordt opgehaald vanuit de images folder.
  var imgElIjsklontjes = document.getElementById('ijsklontjes');
  var glassIjsklontjes = 'images/strawglaskoffieijsklontjes.png';

  // Eventlisteners Ijsklontjes
  // Deze code voegt een eventlistener toe aan een HTML-afbeeldingselement met de Id imgElIjsklontjes. De listener reageert op het dragstart event voor het element.
  // Wanneer het dragstart event optreedt, wordt de bijbehorende functie uitgevoerd. Deze functie verwijdert eerst alle eerder opgeslagen gegevens met de clearData() methode.
  // Vervolgens wordt de setData() methode aangeroepen op het dataTransfer object van het event, met als parameters de naam van de gegevens ("index") en de waarde (2). 
  // Dit zorgt ervoor dat de waarde 2 wordt opgeslagen als gegevens die later kunnen worden opgehaald in de drop event handler, om te weten welke afbeelding is gedropt als er meerdere afbeeldingen beschikbaar zijn.
  imgElIjsklontjes.addEventListener("dragstart", function(event) {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("index", 2);
  });

//Siroop
  // Variables Siroop
  // Maakt twee variabele aan voor de siroop. imgElSiroop voor de siroop die vanuit de html worden opgehaald door middel van een Id.
  // glassSiroop voor het glas met het rietje, koffie, ijsklontje en siroop erin die wordt opgehaald vanuit de images folder.
  var imgElSiroop = document.getElementById('siroop');
  var glassSiroop = 'images/strawglaskoffievanille.png';

  // Eventlisteners Siroop
  // Deze code voegt een eventlistener toe aan een HTML-afbeeldingselement met de Id imgElSiroop. De listener reageert op het dragstart event voor het element.
  // Wanneer het dragstart event optreedt, wordt de bijbehorende functie uitgevoerd. Deze functie verwijdert eerst alle eerder opgeslagen gegevens met de clearData() methode.
  // Vervolgens wordt de setData() methode aangeroepen op het dataTransfer object van het event, met als parameters de naam van de gegevens ("index") en de waarde (3). 
  // Dit zorgt ervoor dat de waarde 3 wordt opgeslagen als gegevens die later kunnen worden opgehaald in de drop event handler, om te weten welke afbeelding is gedropt als er meerdere afbeeldingen beschikbaar zijn.
  imgElSiroop.addEventListener("dragstart", function(event) {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("index", 3);
  });

//Slagroom
  // Variables Slagroom
  // Maakt twee variabele aan voor de slagroom. imgElSlagroom voor de slagroom die vanuit de html worden opgehaald door middel van een Id.
  // glassSlagroom voor het glas met het rietje, koffie, ijsklontje, siroop en slagroom erin die wordt opgehaald vanuit de images folder.
  var imgElSlagroom = document.getElementById('slagroom');
  var glassSlagroom = 'images/glasslagroom.png';

  // Eventlisteners Slagroom
  // Deze code voegt een eventlistener toe aan een HTML-afbeeldingselement met de Id imgElSlagroom. De listener reageert op het dragstart event voor het element.
  // Wanneer het dragstart event optreedt, wordt de bijbehorende functie uitgevoerd. Deze functie verwijdert eerst alle eerder opgeslagen gegevens met de clearData() methode.
  // Vervolgens wordt de setData() methode aangeroepen op het dataTransfer object van het event, met als parameters de naam van de gegevens ("index") en de waarde (4). 
  // Dit zorgt ervoor dat de waarde 4 wordt opgeslagen als gegevens die later kunnen worden opgehaald in de drop event handler, om te weten welke afbeelding is gedropt als er meerdere afbeeldingen beschikbaar zijn.
  imgElSlagroom.addEventListener("dragstart", function(event) {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("index", 4);
  });

// Reset
  // Variables Reset
  // Maakt een variabele aan voor de resetknop. imgElReset voor de resetknop die vanuit de html wordt opgehaald door middel van een Id.
  var imgElReset = document.getElementById('reset');

  // Function Reset
  // Deze code definieert een functie met de naam resetGlass() die wordt gebruikt om een afbeeldingselement met de ID imgElGlas te resetten naar een specifieke afbeelding.
  // Wanneer de functie wordt aangeroepen, wordt de src attribuut van het afbeeldingselement ingesteld op leegglas.png, uit de images folder.
  // audioElIngredients.pause(); zorgt ervoor dat de audio stopt op het moment dat de resetknop wordt ingedrukt.
  // bodyElement.classlist.remove zorgt ervoor dat de confetti van de achtergrond verdwijnt en de oorspronkelijke achtergrond terugkeerd.
  function resetGlass() {
    imgElGlas.src = 'images/leegglas.png';
    audioElIngredients.pause();
    bodyElement.classList.remove("confetti");
  }

  // Eventlistener Reset
  // Wanneer er op de afbeelding wordt geklikt, wordt de bijbehorende functie resetGlass() uitgevoerd. Dit betekent dat de functie wordt aangeroepen wanneer de gebruiker op de resetknop klikt.
  // De functie resetGlass() reset de afbeelding van het glas naar de beginwaarde door de src attribuut van het afbeeldingselement in te stellen op leegglas.png.
  // Dit betekent dat wanneer de gebruiker op de resetknop klikt, de afbeelding van het glas wordt gereset naar een leeg glas, zodat de gebruiker een nieuwe actie kan uitvoeren.
  imgElReset.addEventListener('click', resetGlass);

// Bestellen
  // Variables Bestel
  // Maakt een variabele aan genaamd imgElBestel door vanuit de html een id op te halen genaamd bestel.
  var imgElBestel = document.getElementById('bestel');

  // Function Bestel
  function bestelButton() {
    // Controleer of de huidige bron van het imgElGlas gelijk is aan de laatste index in de glassState array, die van de slagroom.
    if (imgElGlas.getAttribute("src") === glassStateImages[4]) {
      // toon het bericht dat de koffie klaar is.
      // De functie classList.add() voegt een CSS-klasse toe aan het element dat is geselecteerd met de querySelector-methode. 
      // In dit specifieke geval wordt de CSS-klasse "confetti" toegevoegd aan het body-element. 
      // Het resultaat is dat wanneer de klasse "confetti" wordt toegevoegd, er confetti op het scherm wordt weergegeven om aan te geven dat de koffie klaar is om te drinken.
      alert("Uw koffie is klaar!");
      bodyElement.classList.add("confetti");
    } else {
      // toon het bericht dat de koffie nog niet klaar is.
      alert("Wacht tot uw koffie klaar is.");
    }
  }

  // Eventlistener Bestel
  // Voegt een eventlistener toe aan het imgElBestel variabele waarbij er als er wordt geklikt de functie bestelButton wordt uitgevoerd.
  imgElBestel.addEventListener("click", bestelButton);

//Algemeen
  // Algemene functions
  // Deze code definieert een functie genaamd updateGlass die wordt gebruikt om de afbeelding en het geluid van een glas te updaten op basis van de indexwaarde die is meegegeven als parameter.
  // Wanneer de functie wordt aangeroepen, wordt de src attribuut van het afbeeldingselement met de ID imgElGlas ingesteld op de waarde van glassStateImages[index]. 
  // Dit betekent dat de afbeelding van het glas wordt vervangen door een andere afbeelding die is opgeslagen in de array glassStateImages, afhankelijk van de waarde van de indexparameter.
  // Vervolgens wordt de playSound functie aangeroepen met glassSounds[index] als parameter. Dit zorgt ervoor dat een geluid wordt afgespeeld dat overeenkomt met de afbeelding van het glas die zojuist is geüpdatet. 
  // De geluidsbron is afhankelijk van de waarde van de indexparameter en wordt opgeslagen in de array glassSounds.
  // Ten slotte wordt er een bericht gelogd naar de console met behulp van de console.log functie, waarin de bestandsnaam van de nieuwe afbeelding en het geluid worden weergegeven.
  function updateGlass(index) {
    console.log(glassStateImages[index], glassSounds[index])
    imgElGlas.src = glassStateImages[index];
    playSound(glassSounds[index]);
  }

  // Functie genaamd playSound gedefineerd die wordt gebruikt om een audio af te spelen op basis van de audioSrc parameter.
  // De wordt de src attribuut van deze audio ingesteld op de waarde van audioSrc. 
  // Dit betekent dat de audiobron wordt ingesteld op het pad en de bestandsnaam die is meegegeven als parameter.
  // Tot slot wordt de play() methode aangeroepen op de Audio. Dit zorgt ervoor dat het geluidsbestand wordt afgespeeld.
  function playSound(audioSrc) {
    audioElIngredients.src = audioSrc;
    audioElIngredients.play();
  }

  // Algemene eventlisteners
  // Toevoegen eventlistener aan imgElGlas" voor het "dragover" -evenement. Wanneer de gebruiker een drag-and-drop actie uitvoert en een object over dit element sleept, zal het "dragover" -evenement worden geactiveerd.
  // De functie gebruikt de event.preventDefault() om het standaardgedrag van de browser te voorkomen, namelijk het openen van het bestand in de browser wanneer het bestand wordt neergezet.
  // Dit betekent dat wanneer de gebruiker een bestand over het element sleept, het standaardgedrag van de browser niet zal worden uitgevoerd en het bestand niet in de browser wordt geopend. 
  imgElGlas.addEventListener('dragover', function (event) {
    event.preventDefault();
  });

  // Deze code voegt een "drop" event listener toe aan "imgElGlas". Wanneer een "drop" event plaatsvindt op dit element, wordt de bijbehorende functie uitgevoerd.
  // Binnen de functie wordt eerst de waarde van "index" opgehaald uit de "dataTransfer" eigenschap van het "event" object. Dit is de waarde die eerder is ingesteld door de "dragstart" event listener.
  // Vervolgens wordt deze "index" waarde gelogd naar de console.
  // Ten slotte wordt de functie "updateGlass(index)" aangeroepen, waarbij de waarde van "index" als argument wordt doorgegeven. Deze zorgt voor het veranderen van het glas.
  imgElGlas.addEventListener("drop", function(event) {
    var index = event.dataTransfer.getData("index");
    console.log(index);
    updateGlass(index);
  });