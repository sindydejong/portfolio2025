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
}

export const projects: Project[] = [
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
    image: './assets/images/8ball.webp',
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
    image: './assets/images/jamties.webp',
    video: 'https://www.youtube-nocookie.com/embed/hzGr8m0BfvA?si=ZYdhdQEDsgymztoW"',
    video2: 'https://www.youtube-nocookie.com/embed/A61T92TfQ68?si=-vf6280KcGcaf2O8',
    title: 'JamTies: Muziekaal interactief spel',
    category: 'DESIGN',
    hoofdzaak: 'De wereld verbeteren door mensen met elkaar te verbinden met behulp van muziek',
    vak: 'Passie project',
    duur: '3 weken',
    datum: '30 juni 2022',
    skills: ['Adobe XD', 'Adobe Illustrator', 'New product development', 'Fysiek prorotype maken', 'Interactie design'],
    opdracht: 'Voor dit project moest ik gedurende 3 weken met een groepje aan de slag gaan om een digitaal en/of fysiek product te ontwikkelen die bijdraagt aan een betere wereld. Wij werden op basis van onze gezamenlijke passie, muziek, bij elkaar in de klas gezet en mochten zelf trios vormen.  ',
    eindproduct: 'JamTies is een interactief muzikaal kletsspel dat spelers aanmoedigt om hun interesses en gevoelens te delen. Voor nu is JamTies gericht om op een festivalsetting gespeeld te worden. Denk hierbij aan festivalgangers die tussen optredens door tijd hebben voor leuke activiteiten en spelletjes.',
    eindproduct_link: '',
  },
    {
    name: 'Typografie',
    image: './assets/images/typespecimen.png',
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
  {
    name: 'Grid & Kleur',
    image: './assets/images/neo.png',
    video: 'https://www.youtube-nocookie.com/embed/e0EmUWmckbA?si=2JJsj-AjDEpYgUyH',
    title: 'Grid & Kleur: Neo - Genderneutrale kleding',
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
    name: 'Beeldtaal',
    image: './assets/images/beeldtaal.png',
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
    eindproduct_link: '',
    eindproduct_img: '/assets/images/beeldtaal.png'
  },
]
