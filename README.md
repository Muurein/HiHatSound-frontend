# Hi-HatSound - frontend
Projektet är en responsiv webbplats för företaget Hi-Hat Sound, som erbjuder tjänster som poddklippning. Applikationen presenterar företagets tjänster, ger besökaren information om företaget och visar en lista över poddar som företaget klippt samt ett galleri med bilder från event företaget har jobbat på. Poddarna och galleriet hämtas från en separat backend.

Projektet byggdes som examensarbetet för min utbildning och inom tidsramarna för detta kunde inte företagets egna texter, bilder eller poddar läggas in. Textinnehållet består av generella "Lorem ipsum"-texter, bilderna kommer från [pexels.com](https://www.pexels.com/sv-se/) och poddarna är påhittade. 

## Relaterade projekt
Backend: https://github.com/Muurein/HiHatSound-backend_admin/tree/dev 


## Tekniker
- Angular v.21
- Angular Router
- Angular Material
- TypeScript
- RxJS
- SCSS

## Funktioner
- Sex undersidor: hem, poddklippning, eventplanering, kurs, om mig och kontakt.
- Återanvändbara komponenter som header och footer.
- En lista över poddar samt ett galleri vars data hämtas från API:t i backend.
- TypeScript-modeller och services för API-datan.
- Styling med SCSS som använder variabler och mixins.

## Projektstruktur
Nedanstående mappar ligger i `src/app/`:
- `models`: TypeScript-interfaces för API-data
- `pages`: Komponenter på sidonivå.
- `partials`: Återanvändbara komponenter.
- `services`: Services som kommunicerar med backend
- `styles`: SCSS.

Nedanstående mapp ligger i rotmappen:
- `environments`: API-konfiguration 


## Kom igång med projektet
Backend behöver köras för att poddarna och galleriet ska kunna visas.

### Tekniska förutsättningar
- Node.js
- npm
- Angular v.21
- SCSS v.1.99

### Kommandon
- npm install: installera dependencies
- npm start: starta frontend


