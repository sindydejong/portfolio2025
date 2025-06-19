export interface Project {
  name: string
  image: string
  video?: string
  video2?: string
  title: string
  category: string
  hoofdzaak: string
  vak: string
  duur: string
  datum: string
  skills: string[]
  opdracht: string
  proces?: string
  proces_img1?: string
  proces_img1_beschrijving?: string
  proces_img2?: string
  proces_img2_beschrijving?: string
  proces_img3?: string
  proces_img3_beschrijving?: string
  proces_video?: string
  eindproduct: string
  eindproduct_link?: string
  eindproduct_img?: string
  eindproduct_video?: string
}

export const projects: Project[] = [
 
   {
    name: 'Grid & Kleur',
    image: '/assets/images/neo.png',
    video: 'https://www.youtube-nocookie.com/embed/e0EmUWmckbA?si=2JJsj-AjDEpYgUyH',
    title: 'Grid & Kleur: NEO - Genderneutrale kleding',
    category: 'DESIGN',
    hoofdzaak: 'Visual Interface Design, UX/UI Design, Brand Design, Prototyping',
    vak: 'Grid & Kleur',
    duur: '4 weken',
    datum: '12 maart 2025',
    skills: ['Figma', 'Adobe Illustrator', 'UX/UI', 'Mockup', 'Prototyping'],
    opdracht:
      'Voor deze opdracht ontwierp ik een desktopwebsite rond het thema hernieuwde waarde: hoe kan iets een andere waarde krijgen. Ik koos voor de invalshoek inclusiviteit en sociale waarden en richtte mij op het onderwerp genderneutrale kleding. Met dit ontwerp wil ik laten zien hoe kleding bevrijd kan worden van traditionele gendernormen, en zo een inclusievere modewereld mogelijk maakt. De focus lag op een krachtig visueel ontwerp, waarbij ik met kleurgebruik, typografie, compositie en grid een duidelijke, persoonlijke boodschap overbracht. Het eindresultaat is een digitaal prototype dat esthetiek en inhoud combineert tot een visuele ervaring met betekenis.',
    proces:
      'Tijdens het proces heb ik verschillende stappen doorlopen, waaronder een kleuronderzoek, producten gezocht, een moodboard gemaakt en onderzoek gedaan naar creatieve navigaties en filtermanieren. Daarnaast heb ik alle visuals die te zien zijn in het prototype zelf ontworpen. Elke sticker, mockup, label en logo.',
    proces_img1: '/assets/images/neo/moodboard.png',
    proces_img1_beschrijving:
      'Mijn moodboard geeft een visuele representatie van de sfeer en stijl die ik wilde bereiken met de website. De kleuren paars en oranje vallen meteen op. Ik heb ervoor gekozen om paars te combineren met oranje voor een frisse, unieke en krachtige uitstraling. Beide kleuren staan voor creativiteit en originaliteit. Het rustige en diepe van de kleur paars samen met het speelse en vrolijke van oranje lijken mij de perfecte uitstraling te vormen.',
    proces_img2: '/assets/images/neo/neo_front1.png',
    proces_img2_beschrijving:
      'De afbeelding toont de main afbeelding van de hoofdpagina. Dit is een beeld dat ik zelf heb samengesteld. Het staat voor spelen met gender, alles kan en mag door elkaar. Ik vind dit beeld een sterkte visuele vertaling van de merkidentiteit.',
    proces_img3: '/assets/images/neo/Sticker_01.png',
    proces_img3_beschrijving:
      'De naam en het logo van Neo heb ik zelf ontworpen. Het logo bestaat uit NEO in een sterk capitaal lettertype. Door het logo heen gaan een soort vallende sterren met hun sporen. Neo staat voor nieuw, waardoor ik dit perfect vind passen bij de vallende sterren. die voelen als een nieuw begin.',
    eindproduct:
      'Mijn eindproduct is een digitale interactieve prototype van de website, gepresenteerd in Figma. Dit prototype laat de gebruikerservaring en de visuele elementen van de website zien.',
    eindproduct_link: 'https://www.figma.com/proto/gI1pxWWKL5Uf52a6DZqdL4/Neo?page-id=0%3A1&node-id=13-2&p=f&viewport=464%2C199%2C0.06&t=YoE1lyUcePMwDvzr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=13%3A2'
  },
    {
    name: 'Beweging & Interactie',
    image: '/assets/images/beweging.png',
    video: '',
    title: 'Beweging & Interactie: Animatie van mijzelf',
    category: 'DESIGN',
    hoofdzaak: 'Visual Interface Design, Vector drawing, Animatie',
    vak: 'Beweging & Interactie',
    duur: '2 weken',
    datum: '20 mei 2025',
    skills: ['Adobe Illustrator', 'Adobe After Effects'],
    opdracht:
      `<p>In dit vak heb ik mij verdiept in animatie en motion design als essentieel onderdeel van interactieve interfaces. Ik leerde hoe animatie niet alleen informatie ondersteunt, maar ook interacties vloeiender, begrijpelijker en aantrekkelijker maakt. Tijdens werkcolleges werkte ik aan praktische oefeningen en opdrachten waarbij ik kennismaakte met animatieprincipes, storyboardtechnieken, dynamische iconensets en verschillende tools, waaronder nieuwe AI-tools.</p>
      <br>
      <p>De nadruk lag op creatieve ontwikkeling, stijl, en het maken van doordachte keuzes in techniek en vorm. Het einddoel was het realiseren van een animated interface of interactieve animatie met een sterk visueel concept, gepresenteerd als prototype. </p>`,
       proces:
      `<p>Mijn concept is dat ik mijzelf namaak in animatie-vorm. De acties die ik uitvoer weerspiegelen mijn skills binnen mijn vakgebied en mijn persoonlijkheid. Hier kies ik voor omdat ik mijn animaties graag in mijn portfolio zou willen gebruiken. <p>
      <br>
      <ul>
        <li>Actie 1: Zwaaien</li>
        <li>Actie 2: Pen flippen</li>
        <li>Actie 3: Laptop balanceren</li>
      </ul>
      <br>
      <p>Ik heb gekozen voor een kleine twist op de acties zoals de pen flippen en laptop balanceren, omdat ik wil laten zien dat ik ook een speelse kant heb. Dit wil ik graag terug laten komen in mijn eindproduct. </p>
      <br>
      <p> Naast de animaties heb ik ook iconen en een loader ontworpen en geanimeerd, transities gemaakt en geluiden toegevoegd. Alles is gemaakt in Adobe Illustrator en geanimeerd in Adobe After Effects door middel van rigging</p>
      `,
    proces_img1: '/assets/Animatie_zwaaien_final.gif',
    proces_img1_beschrijving:
      'Zwaaien is een actie die ik vaak uitvoer, bijvoorbeeld als ik iemand begroet of gedag zeg. Het is een eenvoudige maar herkenbare beweging die ook in animatie goed tot zijn recht komt.',
    proces_img2: '/assets/Animatie_penflip2_sneller.gif',
    proces_img2_beschrijving:
      'Pen flippen is een actie die ik gebruik om mijn creativiteit en speelsheid te tonen. Het is een dynamische beweging die goed past bij mijn stijl.',
    proces_img3: '/assets/Animatie_balans.gif',
    proces_img3_beschrijving:
      'Laptop balanceren is een actie die mijn vaardigheden in multitasking en coördinatie benadrukt. Het is een leuke en uitdagende beweging om te animeren.',
    eindproduct:
      'Als eindproduct heb ik de animaties weergegeven in een gameboy, waarin het geanimeerde personage (ikzelf) de drie acties uitvoert. Een gameboy leek mij een leuk omhulsel voor mijn animaties, omdat het bijdraagt aan het speelse gevoel. Daarnaast hou ik zelf ook van gamen en vind ik het leuk om een animatie van mij zelf op deze manier te presenteren.',
    eindproduct_video: 'https://www.youtube.com/embed/Dr9z8JcuJYY?si=HOLl3vXevRss560P',
    eindproduct_link: 'https://www.figma.com/proto/rVaVX2HZNU9ZGnahxSbl1V/animatie?page-id=0%3A1&node-id=35-133&p=f&viewport=173%2C277%2C0.64&t=VqAgfCkyozNFswDn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A133'
  },
  {
    name: 'red_hot_chili_peppers',
    image: '/assets/images/rhcp.webp',
    video: '',
    title: 'Red Hot Chili Peppers: Screenreader friendly',
    category: 'FRONT-END',
    hoofdzaak: 'Front-end development, toegankelijkheid en responsiveness',
    vak: 'Front-end development',
    duur: '6 weken',
    datum: '15 december 2023',
    skills: ['HTML', 'CSS', 'Javascript'],
    opdracht: ` Kies een bestaande website en codeer hiervan minimaal 2 pagina's na voor mobiel. Gebruik hiervoor nette HTML, CSS en Javascript. Verbeter de toegankleijkheid van de website. 
    <section> 
   <br>
    Verdere criteria waren: 
<ul>
<li> Diverse content </li>
<li> Voeg minimaal 1 micro-interactie toe </li>
<li> Toegankelijkheid: screenreader friendly </li>
<li> Professionele vormgeving: huisstijl & custom properties </li>
</ul>
    </section> 
Daarna konden wij kiezen om extra aandacht aan de surface laag te besteden of om de site helemaal responsive te maken. `,

    eindproduct: ` Als website heb ik de website van de Red Hot Chili Peppers (redhotchilipeppers.com) gekozen. Dit is een van mijn favoriete bands en hun website zag er interessant uit, maar het was al snel duidelijk dat er ook veel aan te verbeteren viel.
     
    <section>
    Mijn eindproduct is een volledig responsive uitwerking van de homepagina, tourpagina en een verkooppagina van een merchitem, waarbij er is gedacht aan de toegankelijkheid. 
    
    <ul>
    <li>  De pagina's zijn screenreader-friendly, responsive en reduced motion-friendly. </li>
    <li>  Alle items zijn focussable en bevatten een beschrijvende alt of title. </li>
    <li>  Ook heb ik animaties toegevoegd.  </li>
    <li>  Op de merchpagina is een werkende quantity-selector die is gekoppeld aan een micro-animatie in het winkelwagen icoon. </li>
    <ul>
    <section>`,

    eindproduct_link: 'https://sindydejong.github.io/FED/'
  },
  {
    name: 'magic_8ball',
    image: '/assets/images/8ball.webp',
    video: 'https://www.youtube-nocookie.com/embed/p1J3UeUW74w?si=Rty6eYxkpXvkMucj',
    title: 'Magic 8-Ball: interactieve applicatie',
    category: 'JAVASCRIPT',
    hoofdzaak: 'Front-end development, interactie design',
    vak: 'Inleiding programmeren',
    duur: '6 weken',
    datum: '4 juni 2022',
    skills: ['Javascript', 'CSS', 'HTML', 'Adobe Illustrator'],
    opdracht:
      'Een zelfgemaakte interactieve Javascript applicatie ontwikkelt zonder het gebruik van libraries of frameworks. Het bevat verschillende type interactiemethoden en een complexe serie aan input en output tussen de gebruiker en de computer. Tijdens een mondeling moest ik de werking goed kunnen uitleggen.',
    eindproduct:
      'Mijn concept heet de Magic 8-Ball. Dit is een interactieve applicatie waarbij de gebruiker kan kiezen of de bal een random antwoord geeft of een random getal. Als er wordt gekozen voor een getal dan kan de gebruiker het bereik van de cijfers aangeven, zoals een getal tussen de 0 en 99. Het kost mana om de bal te gebruiken. Je kunt de mana opladen door op een maantje te klikken. ',
    eindproduct_link: 'https://sindydejong.github.io/Magicball/'
  },
  {
    name: 'jamties',
    image: '/assets/images/jamties.webp',
    video: 'https://www.youtube-nocookie.com/embed/hzGr8m0BfvA?si=ZYdhdQEDsgymztoW"',
    video2: 'https://www.youtube-nocookie.com/embed/A61T92TfQ68?si=-vf6280KcGcaf2O8',
    title: 'JamTies: Muziekaal interactief spel',
    category: 'DESIGN',
    hoofdzaak: 'De wereld verbeteren door mensen met elkaar te verbinden met behulp van muziek',
    vak: 'Passie project',
    duur: '3 weken',
    datum: '30 juni 2022',
    skills: ['Adobe XD', 'Adobe Illustrator', 'Product development', 'Interactie design'],
    opdracht: 'Voor dit project moest ik gedurende 3 weken met een groepje aan de slag gaan om een digitaal en/of fysiek product te ontwikkelen die bijdraagt aan een betere wereld. Wij werden op basis van onze gezamenlijke passie, muziek, bij elkaar in de klas gezet en mochten zelf trios vormen.  ',
    eindproduct: 'JamTies is een interactief muzikaal kletsspel dat spelers aanmoedigt om hun interesses en gevoelens te delen. Voor nu is JamTies gericht om op een festivalsetting gespeeld te worden. Denk hierbij aan festivalgangers die tussen optredens door tijd hebben voor leuke activiteiten en spelletjes.',
    eindproduct_link: '',
  },
    {
    name: 'Beeldtaal',
    image: '/assets/images/beeldtaal.png',
    video: '',
    title: 'Beeldtaal: Semiotiek, gestalt en retorica',
    category: 'DESIGN',
    hoofdzaak: 'Visual Interface Design',
    vak: 'Beeldtaal',
    duur: '2 weken',
    datum: '3 april 2025',
    skills: ['Adobe Photoshop'],
    opdracht:
      `<p>Voor deze opdracht ontwierp ik een ethisch verantwoorde poster voor een bewustwordingscampagne, gericht op een specifieke doelgroep. Het doel was om visueel bewustzijn te creëren rond een maatschappelijk relevant thema. </p> 
      <br> 
      <p> Het ontwerp is gebaseerd op theorieën uit de lessen Semiotiek, Retorica en Gestalt. Door deze theorieën strategisch toe te passen, heb ik een poster ontwikkeld die niet alleen visueel aanspreekt, maar ook overtuigend communiceert. Denk hierbij aan het gebruik van symboliek, contrast, typografische hiërarchie en beeldcompositie om de boodschap kracht bij te zetten. </p>
      <br>
      <p> De boodschap en doelgroep zijn zorgvuldig gekozen op basis van persoonlijke betrokkenheid en maatschappelijk belang. In het ontwerp staan empathie, herkenbaarheid en visuele helderheid centraal, met als doel: aanzetten tot reflectie en gesprek. </p>`,
    eindproduct:
      'Mijn poster draait om zelfexpressie en het recht om jezelf te zijn. Hoewel dit een mensenrecht is, wordt het in de samenleving nog steeds niet altijd geaccepteerd. De visual laat zien hoe een man, gekleed in een jurk en in een pak, uiteenlopende reacties oproept, wat de bestaande maatschappelijke norm over "goede" en "foute" zelfexpressie weerspiegelt.',
    eindproduct_img: '/assets/images/beeldtaal.png'
  },
  {
    name: 'Meesterproef VID',
    image: '/assets/images/meesterproef.png',
    video: '',
    title: 'Meesterproef VID: Interactieve ervaring drogeren',
    category: 'DESIGN',
    hoofdzaak: 'Visual Interface Design, Storytelling, Animeren',
    vak: 'Visual Interface Design',
    duur: '4 weken',
    datum: '16 juni 2025',
    skills: ['Figma', 'Adobe Illustrator', 'Adobe After Effects'],
    opdracht:
      `<p>Voor deze opdracht ontwikkelde ik een visuele en interactieve interface rondom een zelfgekozen casus (tekst, beeld, geluid of video). Het doel was om op een persoonlijke en experimentele manier een verhaal te vertalen naar een digitale ervaring. Ik koos zelf hoe ik mijn visie op de inhoud vormgaf en welke middelen ik gebruikte om deze te bemiddelen.</p>
      <br>
      <p>De interface mocht functioneel of juist experimenteel zijn, zolang het ontwerp een duidelijke interpretatie liet zien. Geluid speelde een rol in de beleving. Ook integreerde ik kennis uit eerdere vakken in zowel de vormgeving als de interactie van de interface.</p>`,
    eindproduct:
       `<p>Voor mijn meesterproef heb ik gekozen om aandacht te geven aan een onderwerp dat mij persoonlijk raakt: drogering in het nachtleven. Na eigen ervaringen en verhalen van vriendinnen, realiseerde ik me hoe onzichtbaar én alledaags dit gevaar is en hoe weinig mensen echt weten wat er gebeurt als het je overkomt.</p>
      <br>
      <p>Ik wilde daarom geen statisch informatief ontwerp, maar een gevoelsmatige ervaring die dichtbij komt. Door middel van horizontale interactie, videobeelden, geluid en typografie, reconstrueer ik stap voor stap een avond uit die eindigt in verwarring, controleverlies en gevaar. Mijn doel is om bewustzijn te vergroten en tegelijkertijd tips meegeven.</p>
      <br>
      <p> De interface voelt in eerste instantie bijna "gewoon" of herkenbaar, net als het uitgaansleven zelf. Juist daardoor grijpt de omslag naar gevaar je extra aan. Ik geloof dat design niet alleen moet informeren, maar ook moet voelen en dat bewustwording begint met het kunnen inleven. </p>`,  
    eindproduct_video: '',
    eindproduct_link: 'https://www.figma.com/proto/VK2EgoCNi1CzFlD5RWsKx1/Meesterproef?page-id=0%3A1&node-id=98-95&viewport=-2685%2C-1114%2C0.24&t=oYg75ObE3GYCwcXz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=98%3A95&hotspot-hints=0'
  },
      {
    name: 'Typografie',
    image: '/assets/images/typespecimen.png',
    video: '',
    title: 'Typografie: Type Specimen Broadway font',
    category: 'DESIGN',
    hoofdzaak: 'Visual Interface Design, typografie',
    vak: 'Typografie',
    duur: '4 weken',
    datum: '9 maart 2025',
    skills: ['Figma', 'UX', 'UI'],
    opdracht:
      'Een typografie project waarbij ik een type specimen heb gemaakt voor het Broadway font. Dit omvatte het ontwerpen van verschillende typografische elementen en het presenteren van het font in een visueel aantrekkelijke manier.',
    eindproduct:
      'Mijn eindproduct is een digitale interactieve typespecimen waarin het Broadway font op verschillende manieren wordt gepresenteerd. Ik vergelijk het gebruik van vroeger met het gebruik van nu. Dit laat de veelzijdigheid van het font zien en bevat voorbeelden van gebruik in verschillende contexten.',
    eindproduct_link: 'https://www.figma.com/proto/aQmIdTPCiTE9ey1NLvqdST/Typo?page-id=0%3A1&node-id=97-2&viewport=912%2C57%2C0.07&t=BFebCToSnNdNLI0i-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A2&hide-ui=1'
  },

]
