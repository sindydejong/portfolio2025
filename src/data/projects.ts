import { projectOrder } from './projectOrder'

export interface Project {
  name: string
  image: string
  title: string
  category: string[]
  hoofdzaak: string
  vak: string
  duur: string
  datum: string
  skills: string[]
  opdracht: string
  opdracht_img1?: string | string[]
  opdracht_img1_beschrijving?: string
  opdracht_img2?: string | string[]
  opdracht_img2_beschrijving?: string
  proces?: string
  proces_img1?: string | string[]
  proces_img1_beschrijving?: string
  proces_img2?: string | string[]
  proces_img2_beschrijving?: string
  proces_img3?: string | string[]
  proces_img3_beschrijving?: string
  proces_video?: string
  eindproduct: string
  eindproduct_link?: string
  eindproduct_img?: string | string[]
  eindproduct_video?: string
  eindproduct_video2?: string
}

export const projects: Project[] = [
  {
    name: 'neo',
    image: '/assets/images/neo.png',
    title: 'Grid & Kleur: NEO - Genderneutrale kleding',
    category: ['DESIGN'],
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
    eindproduct_video: 'https://www.youtube-nocookie.com/embed/e0EmUWmckbA?si=2JJsj-AjDEpYgUyH',
    eindproduct_link:
      'https://www.figma.com/proto/gI1pxWWKL5Uf52a6DZqdL4/Neo?page-id=0%3A1&node-id=13-2&p=f&viewport=464%2C199%2C0.06&t=YoE1lyUcePMwDvzr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=13%3A2'
  },
  {
    name: 'beweging & interactie',
    image: '/assets/images/beweging.png',
    title: 'Beweging & Interactie: Animatie van mijzelf',
    category: ['DESIGN'],
    hoofdzaak: 'Visual Interface Design, Vector drawing, Animatie',
    vak: 'Beweging & Interactie',
    duur: '2 weken',
    datum: '20 mei 2025',
    skills: ['Adobe Illustrator', 'Adobe After Effects', 'Animeren', 'Vector drawing', 'Rigging'],
    opdracht: `<p>In dit vak heb ik mij verdiept in animatie en motion design als essentieel onderdeel van interactieve interfaces. Ik leerde hoe animatie niet alleen informatie ondersteunt, maar ook interacties vloeiender, begrijpelijker en aantrekkelijker maakt. Tijdens werkcolleges werkte ik aan praktische oefeningen en opdrachten waarbij ik kennismaakte met animatieprincipes, storyboardtechnieken, dynamische iconensets en verschillende tools, waaronder nieuwe AI-tools.</p>
      <br>
      <p>De nadruk lag op creatieve ontwikkeling, stijl, en het maken van doordachte keuzes in techniek en vorm. Het einddoel was het realiseren van een animated interface of interactieve animatie met een sterk visueel concept, gepresenteerd als prototype. </p>`,
    proces: `<p>Mijn concept is dat ik mijzelf namaak in animatie-vorm. De acties die ik uitvoer weerspiegelen mijn skills binnen mijn vakgebied en mijn persoonlijkheid. Hier kies ik voor omdat ik mijn animaties graag in mijn portfolio zou willen gebruiken. </p>
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
    eindproduct_link:
      'https://www.figma.com/proto/rVaVX2HZNU9ZGnahxSbl1V/animatie?page-id=0%3A1&node-id=35-133&p=f&viewport=173%2C277%2C0.64&t=VqAgfCkyozNFswDn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A133'
  },
  {
    name: 'red hot chili peppers',
    image: '/assets/images/rhcp.webp',
    title: 'Red Hot Chili Peppers: Screenreader friendly',
    category: ['FRONT-END'],
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
    title: 'Magic 8-Ball: Interactieve Applicatie',
    category: ['JAVASCRIPT'],
    hoofdzaak: 'Front-end development, Interactie Design',
    vak: 'Inleiding programmeren',
    duur: '6 weken',
    datum: '4 juni 2022',
    skills: ['Javascript', 'CSS', 'HTML', 'Adobe Illustrator'],
    opdracht:
      'Een zelfgemaakte interactieve Javascript applicatie ontwikkelt zonder het gebruik van libraries of frameworks. Het bevat verschillende type interactiemethoden en een complexe serie aan input en output tussen de gebruiker en de computer. Tijdens een mondeling moest ik de werking goed kunnen uitleggen.',
    eindproduct:
      'Mijn concept heet de Magic 8-Ball. Dit is een interactieve applicatie waarbij de gebruiker kan kiezen of de bal een random antwoord geeft of een random getal. Als er wordt gekozen voor een getal dan kan de gebruiker het bereik van de cijfers aangeven, zoals een getal tussen de 0 en 99. Het kost mana om de bal te gebruiken. Je kunt de mana opladen door op een maantje te klikken. ',
    eindproduct_video: 'https://www.youtube-nocookie.com/embed/p1J3UeUW74w?si=Rty6eYxkpXvkMucj',
    eindproduct_link: 'https://sindydejong.github.io/Magicball/'
  },
  {
    name: 'jamties',
    image: '/assets/images/jamties.webp',
    title: 'JamTies: Muziekaal interactief spel',
    category: ['DESIGN'],
    hoofdzaak: 'De wereld verbeteren door mensen met elkaar te verbinden met behulp van muziek',
    vak: 'Passie project',
    duur: '3 weken',
    datum: '30 juni 2022',
    skills: ['Adobe XD', 'Adobe Illustrator', 'Product development', 'Interactie design'],
    opdracht:
      'Voor dit project moest ik gedurende 3 weken met een groepje aan de slag gaan om een digitaal en/of fysiek product te ontwikkelen die bijdraagt aan een betere wereld. Wij werden op basis van onze gezamenlijke passie, muziek, bij elkaar in de klas gezet en mochten zelf trios vormen.  ',
    eindproduct:
      'JamTies is een interactief muzikaal kletsspel dat spelers aanmoedigt om hun interesses en gevoelens te delen. Voor nu is JamTies gericht om op een festivalsetting gespeeld te worden. Denk hierbij aan festivalgangers die tussen optredens door tijd hebben voor leuke activiteiten en spelletjes.',
    eindproduct_video: 'https://www.youtube-nocookie.com/embed/hzGr8m0BfvA?si=ZYdhdQEDsgymztoW',
    eindproduct_video2: 'https://www.youtube-nocookie.com/embed/A61T92TfQ68?si=-vf6280KcGcaf2O8'
  },
  {
    name: 'beeldtaal',
    image: '/assets/images/beeldtaal.png',
    title: 'Beeldtaal: Semiotiek, gestalt en retorica',
    category: ['DESIGN'],
    hoofdzaak: 'Visual Interface Design',
    vak: 'Beeldtaal',
    duur: '2 weken',
    datum: '3 april 2025',
    skills: ['Adobe Photoshop'],
    opdracht: `<p>Voor deze opdracht ontwierp ik een ethisch verantwoorde poster voor een bewustwordingscampagne, gericht op een specifieke doelgroep. Het doel was om visueel bewustzijn te creëren rond een maatschappelijk relevant thema. </p> 
      <br> 
      <p> Het ontwerp is gebaseerd op theorieën uit de lessen Semiotiek, Retorica en Gestalt. Door deze theorieën strategisch toe te passen, heb ik een poster ontwikkeld die niet alleen visueel aanspreekt, maar ook overtuigend communiceert. Denk hierbij aan het gebruik van symboliek, contrast, typografische hiërarchie en beeldcompositie om de boodschap kracht bij te zetten. </p>
      <br>
      <p> De boodschap en doelgroep zijn zorgvuldig gekozen op basis van persoonlijke betrokkenheid en maatschappelijk belang. In het ontwerp staan empathie, herkenbaarheid en visuele helderheid centraal, met als doel: aanzetten tot reflectie en gesprek. </p>`,
    eindproduct:
      'Mijn poster draait om zelfexpressie en het recht om jezelf te zijn. Hoewel dit een mensenrecht is, wordt het in de samenleving nog steeds niet altijd geaccepteerd. De visual laat zien hoe een man, gekleed in een jurk en in een pak, uiteenlopende reacties oproept, wat de bestaande maatschappelijke norm over "goede" en "foute" zelfexpressie weerspiegelt.',
    eindproduct_img: '/assets/images/beeldtaal.png'
  },
  {
    name: 'meesterproef vid',
    image: '/assets/images/meesterproef.png',
    title: 'Meesterproef VID: Interactieve ervaring drogeren',
    category: ['DESIGN'],
    hoofdzaak: 'Visual Interface Design, Storytelling, Animeren',
    vak: 'Visual Interface Design',
    duur: '4 weken',
    datum: '16 juni 2025',
    skills: ['Figma', 'Adobe Illustrator', 'Adobe After Effects'],
    opdracht: `<p>Voor deze opdracht ontwikkelde ik een visuele en interactieve interface rondom een zelfgekozen casus (tekst, beeld, geluid of video). Het doel was om op een persoonlijke en experimentele manier een verhaal te vertalen naar een digitale ervaring. Ik koos zelf hoe ik mijn visie op de inhoud vormgaf en welke middelen ik gebruikte om deze te bemiddelen.</p>
      <br>
      <p>De interface mocht functioneel of juist experimenteel zijn, zolang het ontwerp een duidelijke interpretatie liet zien. Geluid speelde een rol in de beleving. Ook integreerde ik kennis uit eerdere vakken in zowel de vormgeving als de interactie van de interface.</p>`,
    eindproduct: `<p>Voor mijn meesterproef heb ik gekozen om aandacht te geven aan een onderwerp dat mij persoonlijk raakt: drogering in het nachtleven. Na eigen ervaringen en verhalen van vriendinnen, realiseerde ik me hoe onzichtbaar én alledaags dit gevaar is en hoe weinig mensen echt weten wat er gebeurt als het je overkomt.</p>
      <br>
      <p>Ik wilde daarom geen statisch informatief ontwerp, maar een gevoelsmatige ervaring die dichtbij komt. Door middel van horizontale interactie, videobeelden, geluid en typografie, reconstrueer ik stap voor stap een avond uit die eindigt in verwarring, controleverlies en gevaar. Mijn doel is om bewustzijn te vergroten en tegelijkertijd tips meegeven.</p>
      <br>
      <p> De interface voelt in eerste instantie bijna "gewoon" of herkenbaar, net als het uitgaansleven zelf. Juist daardoor grijpt de omslag naar gevaar je extra aan. Ik geloof dat design niet alleen moet informeren, maar ook moet voelen en dat bewustwording begint met het kunnen inleven. </p>`,
    eindproduct_video: '',
    eindproduct_link:
      'https://www.figma.com/proto/VK2EgoCNi1CzFlD5RWsKx1/Meesterproef?page-id=0%3A1&node-id=98-95&viewport=-2685%2C-1114%2C0.24&t=oYg75ObE3GYCwcXz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=98%3A95&hotspot-hints=0'
  },
  {
    name: 'typografie',
    image: '/assets/images/typespecimen.png',
    title: 'Typografie: Type Specimen Broadway font',
    category: ['DESIGN'],
    hoofdzaak: 'Visual Interface Design, typografie',
    vak: 'Typografie',
    duur: '4 weken',
    datum: '9 maart 2025',
    skills: ['Figma', 'UX', 'UI'],
    opdracht:
      'Een typografie project waarbij ik een type specimen heb gemaakt voor het Broadway font. Dit omvatte het ontwerpen van verschillende typografische elementen en het presenteren van het font in een visueel aantrekkelijke manier.',
    eindproduct:
      'Mijn eindproduct is een digitale interactieve typespecimen waarin het Broadway font op verschillende manieren wordt gepresenteerd. Ik vergelijk het gebruik van vroeger met het gebruik van nu. Dit laat de veelzijdigheid van het font zien en bevat voorbeelden van gebruik in verschillende contexten.',
    eindproduct_link:
      'https://www.figma.com/proto/aQmIdTPCiTE9ey1NLvqdST/Typo?page-id=0%3A1&node-id=97-2&viewport=912%2C57%2C0.07&t=BFebCToSnNdNLI0i-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A2&hide-ui=1'
  },
  {
    name: 'springtracking',
    image: '/assets/images/springtracking.png',
    title: 'Springtracking 2.0: To the Stars and Beyond',
    category: ['DESIGN'],
    hoofdzaak: 'Visual Interface Design, User Experience Design',
    vak: 'Korte stage 2025',
    duur: '10 weken',
    datum: '18 juni 2024',
    skills: ['Figma', 'UX', 'UI', 'Klantcontact', 'Prototyping'],
    opdracht: `<p> Dit was een stageproject bij het bedrijf Nalta voor hun klant Springtracking, dat een onderdeel is van PostNL International. Hierbij ik de bestaande website heb geanalyseerd en verbeterd. Ik heb de gebruikerservaring geoptimaliseerd en de visuele elementen vernieuwd om de website gebruiksvriendelijker en aantrekkelijker te maken. Tussendoor heb ik direct met de business managers van PostNL International samengewerkt in feedbacksessies. </p>
      <br>
      Een aantal belangrijke eisen waren: 
      <br>
      <ul>
      <li> Het ontwerp moet responsief zijn, omdat gebruiker de site op zowel telefoon als desktop bezoeken. </li>
      <li> Er moet worden vastgehouden aan het 'ruimte' thema, omdat dit de rode draad is van de website. Zo moeten bijvoorbeeld de kleuren en de iconen terugkomen. </li>
      <li> Bij het ontwerp moet er rekening worden gehouden met hoe bezorging bij een pick-up point eruit ziet. </li>
      </ul>
      `,
    opdracht_img1: [
      '/assets/images/springtracking/springtracking_1.png',
      '/assets/images/springtracking/springtracking_2.png'
    ],
    opdracht_img1_beschrijving: 'Dit is hoe Springtracking er nu uitziet. ',
    proces: `<p> Deze opdracht heb ik in drie delen aangepakt. </p>
      <br>
      <ul>
        <li>Deel 1: mobiel design </li>
        <li>Deel 2: desktop design </li>
        <li>Deel 3: bijpassend trader's portal </li>
      </ul>
      <br>
      <p> De uitdaging zat voor mij vooral in het maken van een design dat zowel op mobiel als op desktop goed werkt. Ik ben mobile-first gaan ontwerpen, omdat ik denk dat dit de beste manier is om een responsive interface te creëren. Als het lukt om veel informatie op een klein scherm te krijgen, dan lukt het sowieso ook op een groot scherm.  </p>
      <br>
      <p> Het ontwerpen van de stijl was een erg leuk en iteratief proces. Ik had natuurlijk al een rode draad vanuit de bestaande huisstijl, maar ik heb ook veel nieuwe elementen toegevoegd om het ontwerp fris en modern te maken. </p>
      `,
    proces_img1: [
      '/assets/images/springtracking/startd1.png',
      '/assets/images/springtracking/startd2.png',
      '/assets/images/springtracking/startd3.png',
      '/assets/images/springtracking/startd4.png',
      '/assets/images/springtracking/startd5.png'
    ],
    proces_img1_beschrijving:
      'Dit is de startpagina. Klik door de vorige versies heen om de verschillende iteraties van het ontwerp te zien. Al deze versies heb ik laten zien aan de klant en op basis van feedback heb ik het ontwerp verder verbeterd.',
    proces_img2: [
      '/assets/images/springtracking/progressbar1.png',
      '/assets/images/springtracking/progressbar2.png',
      '/assets/images/springtracking/progressbar3.png'
    ],
    proces_img2_beschrijving:
      'Dit is de tracking timeline. Het is een visuele weergave van de voortgang van een pakket, met iconen die de verschillende stadia van het verzendproces aangeven. De kleuren en iconen zijn ontworpen om een ruimte-thema te weerspiegelen, wat aansluit bij de identiteit van Springtracking. Klik door de variaties heen om de verschillende stadia van het proces te zien.',
    eindproduct: `<p>Dit uitdaagende en zeer leuke project heeft mij veel geleerd over responsive ontwerpen met meerdere eisen en aandachtspunten die in het ontwerp moeten komen. Ik heb veel geïtereerd en samengewerkt met collegas. Ook heb ik direct meeting gehad met de klant, waar ik erg veel heb geleerd. </p> 
      <br> <p> Mijn eindproduct is interactief Figma design met daarin de vernieuwde versie van de website. Deze heb ik mogen presenteren aan de klant en zij waren erg enthousiast over het resultaat. </p>`,
    eindproduct_img: [
      '/assets/images/springtracking/desktop/desk_1.png',
      '/assets/images/springtracking/desktop/desk_2.png',
      '/assets/images/springtracking/desktop/desk_3.png',
      '/assets/images/springtracking/desktop/desk_4.png',
      '/assets/images/springtracking/desktop/desk_5.png',
      '/assets/images/springtracking/desktop/desk_6.png',
      '/assets/images/springtracking/desktop/desk_7.png',
      '/assets/images/springtracking/mobile/mob_0.png',
      '/assets/images/springtracking/mobile/mob_1.png',
      '/assets/images/springtracking/mobile/mob_2.png',
      '/assets/images/springtracking/mobile/mob_3.png',
      '/assets/images/springtracking/mobile/mob_4.png',
      '/assets/images/springtracking/mobile/mob_4.1.png',
      '/assets/images/springtracking/mobile/mob_5.png',
      '/assets/images/springtracking/mobile/mob_7.png'
    ],
    eindproduct_video: 'https://www.youtube.com/embed/sJj7DfIxfig?si=q51ViAzcN28tH1Vl'
  },
  {
    name: 'fileshare',
    image: '/assets/images/fileshare.png',
    title: 'Fileshare: Sharing is Caring',
    category: ['DESIGN', 'FRONT-END'],
    hoofdzaak: 'Visual Interface Design, User Experience Design, Front-end development',
    vak: 'Bijbaan bij Nalta Software',
    duur: '6 maanden parttime',
    datum: '12 februari 2025',
    skills: ['Figma', 'UX', 'UI', 'Front-end development', 'VUE', 'Prototyping'],
    opdracht: `<p> Na mijn korte stage bij Nalta Software ben ik daar blijven werken als parttime designer/developer. Het bedrijf wilde graag een fileshare webapplicatie waarmee makkelijk en veilig bestanden met elkaar en klanten gedeeld konden worden. Deze webapplicatie heb ik ontworpen en ontwikkeld, met ondersteuning van een aantal kennisrijke collega's. </p>
      <br> 
    <p> De Fileshare applicatie was slecht één onderdeel van een groter project, namelijk de Nalta Client Portal. Dit is een platform waar klanten van Nalta Software hun projecten kunnen beheren en communiceren met de ontwikkelaars. De Fileshare applicatie is een van de belangrijkste onderdelen van dit platform, omdat het de mogelijkheid biedt om bestanden te delen en samen te werken aan projecten. </p>

      <br>
      <p> De applicatie moest voldoen aan de volgende eisen: </p>
      <ul>
        <li>Exclusief voor desktop </li>
        <li>Simpel en duidelijk design </li>
        <li>Werken vanuit een bepaalde data structuur  </li>
      </ul>
      `,
    proces: ` <p> Tijdens het ontwikkelingsproces heb ik gebruik gemaakt van Figma voor het ontwerpen van de interface en Vue.js voor de front-end ontwikkeling.</p>
      <br>
      <p> De uitdaging zat voor mij in het ontwerpen van een interface waarbij het duidelijk is dat je vanuit je project-keuze door kan navigeren naar verschillende applicaties, in plaats van binnen een applicatie steeds een project kiezen. </p>
      <br>
      <p> Binnen het developen van de applicatie was het uitdagende om data-gericht te ontwikkelen. De structuren zo leggen dat enkel nog de API's ingevuld moesten worden. Hiervoor heb ik gewerkt met componenten en mock-API's totdat de echte API's werkend waren.  </p>`,
    proces_img1: ['/assets/images/fileshare/fileshare_projects.png'],
    proces_img1_beschrijving:
      'Na het inloggen kom je op de Select Project pagina. Via een API worden de projecten opgehaald en weergegeven. Hier kan de gebruiker een project selecteren om verder te gaan.',
    proces_img2: [
      '/assets/images/fileshare/fileshare_nav_open.png',
      '/assets/images/fileshare/fileshare_nav_closed.png'
    ],
    proces_img2_beschrijving:
      'Bij het maken van de applicatie heb ik ervoor gekozen om een zijbalk te gebruiken voor de navigatie. Deze is altijd zichtbaar, maar kan ook worden ingeklapt. Dit zorgt voor een overzichtelijke interface en maakt het makkelijk om tussen verschillende onderdelen van de applicatie te navigeren.',
    proces_img3: '/assets/images/fileshare/fileshare_recipients.png',
    proces_img3_beschrijving:
      'Op de pagina waar je een bestand kunt delen, kun je een lijst van ontvangers zien. Deze ontvangers zijn gebruikers die toegang hebben tot het project. Oo hier wordt gebruik gemaakt van een API om de ontvangers op te halen en weer te geven.',
    eindproduct: ` <p> Het eindproduct is een werkende webapplicatie die gebruikers in staat stelt om bestanden te delen en samen te werken aan projecten. Daarnaast is de basis gezet om de applicatie uit te breiden met meerdere functionaliteiten, zoals projectbeheer en andere tools om uiteindelijk de Client Portal te realiseren. </p>
      <br>
      <p> Het was een uitdagend project dat mij in een korte tijd een boost in mijn front-end ontwikkeling heeft gegeven. Ik heb veel geleerd over het werken met Vue.js, hiërarchiën en datastructuren door het daarwerkelijk maken van een herbruikbare shell voor de volgende functionaliteiten, koppelen van API's aan de front-end tot aan een werkende applicatie. </p> 
    `,
    eindproduct_video: 'https://www.youtube.com/embed/CSPnTIkycmc?si=DtuZNXiRY4BLZ6vo',
    eindproduct_img: '/assets/images/fileshare/fileshare_styleguide.png'
  },
  {
    name: 'outsider originals',
    image: '/assets/images/outsider_originals.png',
    title: 'Outsider Originals: De Vlierefluiter',
    category: ['DESIGN'],
    hoofdzaak: 'Product development/design, Branding, Sales, Website design',
    vak: 'Minor Ondernemerschap',
    duur: '5 maanden',
    datum: '09-2024 tot 02-2025',
    skills: ['Product development/design', 'Branding', 'Sales', 'Marketing'],
    opdracht: `<p> In mijn derde jaar van de studie CMD heb ik gekozen om de minor ondernemerschap te volgen. Tijdens deze minor heb ik de kans gekregen om mijn eigen bedrijf te starten en te werken aan een echt product. Samen met een vriendin hadden wij het idee was om een eigen biermerk te ontwikkelen. Dit is uiteindelijk (na tig variaties) "Outsider Originals" geworden met het biertje "De Vlierefluiter". </p>
    <br>
    <p> Dit project omvatte het hele proces van productontwikkeling, branding, sales en het opzetten van een webshop. Dit avontuur heeft mij veel geleerd over ondernemerschap, productontwikkeling en de uitdagingen van het runnen van een bedrijf. </p>`,
    opdracht_img1: '/assets/images/vlierefluiter/vlier_1.avif',
    proces: `Het proces is kortgezegd in 3 stappen verlopen:
      <ul>
        <li>Product ontwikkeling </li>
        <li>Branding </li>
        <li>Sales</li>
      </ul>
<br>
    <p> Binnen het bedrijf deden wij veel samen, maar achters de schermen heeft iedereen zijn eigen verantwoordelijkheden. Waar ik volledig zelf de verantwoordelijkheid over had was  het maken van de website/webshop in Wixstudio. Ook was ik verantwoordelijk voor de boekhouding en het juridische. </p>
    <br>
      <p> Zo zijn wij stap voor stap met enorm veel iteraties tot een product, merkidentiteit en salesstrategie gekomen. Wij vinden dat het een uniek en herkenbaar merk is geworden. </p>
    `,
    proces_img1: [
      '/assets/images/vlierefluiter/product_1.jpg',
      '/assets/images/vlierefluiter/product_2.jpg',
      '/assets/images/vlierefluiter/product_3.jpg',
      '/assets/images/vlierefluiter/product_4.jpg'
    ],
    proces_img1_beschrijving:
      'De Vlierefluiter is een blond bier met een frisse, fruitige smaak. De smaken worden gevormd door biologische perensap, witte druivensap en vlierbloesem. Het is gebrouwen met liefde en aandacht voor detail. De naam "De Vlierefluiter" verwijst naar de speelse en zorgeloze sfeer die we wilden uitstralen met ons bier en natuurlijk met een V voor vlierbloesem.',
    proces_img2: [
      '/assets/images/vlierefluiter/branding_1.jpg',
      '/assets/images/vlierefluiter/branding_2.jpg',
      '/assets/images/vlierefluiter/branding_3.jpg'
    ],
    proces_img2_beschrijving:
      'Het merk "Outsider Originals" is ontstaan vanuit de gedachte dat wij onszelf niet willen conformeren aan de massa. Wij zijn niet het beeld wat je voor je ziet zodra je bierbrouwers hoort, maar dat maakt ons uniek. Het merk staat voor originaliteit, creativiteit en duurzaamheid. Wij laten daarom ook graag onze biologische ingrediënten zien en zijn trots op het feit dat het CO2-neutraal is gebrouwen. ',
    proces_img3: '/assets/images/vlierefluiter/webshop.png',
    proces_img3_beschrijving: ` <p> Sales hebben wij gedaan door middel van een webshop, waar wij de Vlierefluiter en andere merchandise verkopen. De webshop is gemaakt in Wixstudio, waar ik zelf de volledige verantwoordelijkheid over had. Het was een leerzaam proces om de webshop te bouwen en te optimaliseren voor een goede gebruikerservaring. </p>
    <br>
    <p> Nadat vrienden en familie waren los gegaan in de webshop, was het tijd om de Vlierefluiter ook aan de buitenwereld te presenteren. Dit hebben wij gedaan door simpel weg in onze thuissteden langs allerlei horeca/winkels te gaan. </p> `,
    eindproduct: ` <p> Met volle trots kijk ik terug op het avontuur. Ik heb nog nooit zoveel geleerd in zo'n korte tijd. Van niks naar drie maanden later meer dan 3300 flesjes van mijn eigen bier in handen te hebben. De Vlierefluiter is meer dan een drankje, het is een heel merk, bijna een soort club, geworden. </p>
    <p> 
    <br>
    Nu bijna een jaar later is de Vlierefluiter op 7 locaties te verkrijgen versprijd over half Nederland. Maar niet getreurd, want er is nog genoeg bier over! </p>
    <br>
    <p> Neem uit interesse vooral een kijkje op de <a href="https://www.instagram.com/outsideroriginals/" target="_blank">Instagram</a>! </p>`,
    eindproduct_video: 'https://www.youtube.com/embed/kjbdKZRpHSA?si=zhS8ucIqnBCmobky',
    eindproduct_link: 'https://www.outsideroriginals.nl/'
  },

  {
    name: 'Uit je dak!',
    image: '/assets/images/outsider_originals.png',
    title: 'Uit je dak!: Wereld Dakloze Mensen Dag 2025',
    category: ['FRONT-END'],
    hoofdzaak: 'Product development/design, Branding, Sales, Website design',
    vak: 'Stage leerjaar 4 CMD',
    duur: '5 maanden',
    datum: '09-2025 tot 02-2026',
    skills: ['Front-end Development', 'GSAP Animation', 'Wordpress'],
    opdracht: `<p> Tijdens mijn stage bij Pageking mocht ik meewerken aan de campagne rondom Wereld Dakloze Mensen Dag 2025. Deze dag staat in het teken van het zichtbaar maken van dakloosheid en het ervaren van de stad door de ogen van iemand zonder (t)huis. Samen met Pageking en designbureau MAAN heb ik gewerkt aan een one-pager website die het driedaagse programma in Breda presenteert op een visueel sterke en toegankelijke manier. </p>
    `,
    opdracht_img1: '/assets/images/vlierefluiter/vlier_1.avif',
    proces: `Ik ontwikkelde een volledig dynamische one-pager op basis van het visuele ontwerp van MAAN. Hierbij heb ik:
      <ul>
        <li>WordPress gebruikt als CMS, zodat de opdrachtgever eenvoudig alle content zelf kan beheren. </li>
        <li>Custom PHP-fields gebouwd, zodat de volledige website flexibel en dynamisch te vullen is met programma-items, afbeeldingen en teksten. </li>
        <li>Op maat geschreven front-end code gebruikt (HTML, CSS en JavaScript) om het ontwerp pixel-perfect tot leven te brengen.</li>
        <li> Eigen animaties ontworpen en ontwikkeld, om het visuele concept te versterken en het verhaal op een moderne, vloeiende manier te vertellen. </li>
        <li> Responsieve en toegankelijke UI gemaakt, zodat de website op alle apparaten goed werkt en toegankelijk is voor een brede doelgroep. </li>
      </ul>
<br>
    <p> Zo is het eindresultaat een moderne, creatieve one-pager geworden die het evenement op een warme, menselijke en creatieve manier presenteert en volledig in lijn is met het doel van de dag: de zichtbaarheid van dakloosheid vergroten door middel van kunst, verhalen en ontmoetingen. </p>
    `,
    proces_img1: [
      '/assets/images/vlierefluiter/product_1.jpg',
      '/assets/images/vlierefluiter/product_2.jpg',
      '/assets/images/vlierefluiter/product_3.jpg',
      '/assets/images/vlierefluiter/product_4.jpg'
    ],
    proces_img1_beschrijving:
      'De Vlierefluiter is een blond bier met een frisse, fruitige smaak. De smaken worden gevormd door biologische perensap, witte druivensap en vlierbloesem. Het is gebrouwen met liefde en aandacht voor detail. De naam "De Vlierefluiter" verwijst naar de speelse en zorgeloze sfeer die we wilden uitstralen met ons bier en natuurlijk met een V voor vlierbloesem.',
    proces_img2: [
      '/assets/images/vlierefluiter/branding_1.jpg',
      '/assets/images/vlierefluiter/branding_2.jpg',
      '/assets/images/vlierefluiter/branding_3.jpg'
    ],
    proces_img2_beschrijving:
      'Het merk "Outsider Originals" is ontstaan vanuit de gedachte dat wij onszelf niet willen conformeren aan de massa. Wij zijn niet het beeld wat je voor je ziet zodra je bierbrouwers hoort, maar dat maakt ons uniek. Het merk staat voor originaliteit, creativiteit en duurzaamheid. Wij laten daarom ook graag onze biologische ingrediënten zien en zijn trots op het feit dat het CO2-neutraal is gebrouwen. ',
    proces_img3: '/assets/images/vlierefluiter/webshop.png',
    proces_img3_beschrijving: ` <p> Sales hebben wij gedaan door middel van een webshop, waar wij de Vlierefluiter en andere merchandise verkopen. De webshop is gemaakt in Wixstudio, waar ik zelf de volledige verantwoordelijkheid over had. Het was een leerzaam proces om de webshop te bouwen en te optimaliseren voor een goede gebruikerservaring. </p>
    <br>
    <p> Nadat vrienden en familie waren los gegaan in de webshop, was het tijd om de Vlierefluiter ook aan de buitenwereld te presenteren. Dit hebben wij gedaan door simpel weg in onze thuissteden langs allerlei horeca/winkels te gaan. </p> `,
    eindproduct: ` <p> Met volle trots kijk ik terug op het avontuur. Ik heb nog nooit zoveel geleerd in zo'n korte tijd. Van niks naar drie maanden later meer dan 3300 flesjes van mijn eigen bier in handen te hebben. De Vlierefluiter is meer dan een drankje, het is een heel merk, bijna een soort club, geworden. </p>
    <p> 
    <br>
    Nu bijna een jaar later is de Vlierefluiter op 7 locaties te verkrijgen versprijd over half Nederland. Maar niet getreurd, want er is nog genoeg bier over! </p>
    <br>`,
    eindproduct_link: 'https://www.uit-je-dak.nl/'
  }
]

export const orderedProjects = projectOrder
  .map((name) => projects.find((p) => p.name === name))
  .filter((project): project is Project => project !== undefined)
