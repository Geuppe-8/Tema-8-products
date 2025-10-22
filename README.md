# Tema-8-products

# Teknisk dokumentation for Tema 8 gruppeprojekt

Når man arbejder flere sammen om et fælles projekt, er det vigtigt at have klare retningslinjer for struktur, navngivning og samarbejde. Dette dokument beskriver vores fælles standarder og retningslinjer, så projektet forbliver overskueligt, konsistent og nemt at arbejde videre med for alle i gruppen.

## Projektstruktur:

Vores HTML-filer ligger i projektets rodmappe og hedder:

index.html (forside med produktoversigt)

produktliste.html (visning af flere produkter)

produkt.html (detaljevisning af ét produkt)

CSS-filer ligger også i projektets rodmappe og matcher sidernes navne:

index.css

produktliste.css

produkt.css

JavaScript-filer ligger også i projektets rodmappe og matcher sidernes navne:

index.js

produktliste.js

produkt.js

Billeder ligger i mappen /img.

Google Fonts hentes via link i <head> i HTML-filerne.

Vores css er linket i vores head og vores js er linket i bunden af body.

## Navngivning:

Alle filer og mapper har navngivet med små bogstaver, uden mellemrum, og med bindestreg (-) som separator. Hvis nødvendigt.

HTML-, CSS- og JavaScript-filer der hører sammen, får samme navn, så man nemt kan se sammenhængen.

## Link til scripts:

CSS-filer linkes i <head>:

<link rel="stylesheet" href="css/produktliste.css">

JavaScript-filer linkes nederst i <body>

<script src="js/produktliste.js"></script>

## Git branches:

Hver person i gruppen har arbejdet i sin egen branch, navngivet efter fornavn:

Så det ville være: Alma, Humira, Chaima og Batul

Når arbejdet var testet og færdigt, blev branchen merget til main.

Alle merges blev lavet via pull requests, så ændringer kunne gennemgås af gruppen først.

## Arbejdsflow:

For at undgå konflikter har hver person arbejdet på forskellige filer eller sektioner af projektet.

Vi har lavet vores commit beskeder med korte og beskrivende navne som kunne være:

Justering af css på produkt side eller filtrer funktion tilføjet

Når vi laver nye ændringer merges til main, kommunikere vi det i gruppen, så alle kan hente de nyeste ændringer via pull.

## Kode:

Vi skriver vores JavaScript-funktioner med function keyword, da det gør koden overskuelig og let at læse.

Vi bruger classes som fx (.ikoner) som selectors i både CSS og JavaScript.

CSS bruges til styling (fx .product-container, .card).

JavaScript bruges til at hente elementer (fx document.querySelector(".buttons button")).

Nogle gange kommenterer vi kort i vores kode for at forklare, hvad funktioner og sektioner gør.

# Funktionalitet

Vores website henter data fra API’et https://dummyjson.com/products
og viser produkterne dynamisk på siden.

Brugeren kan:

Se en liste over produkter på produktliste.html.

Klikke på et produkt og se detaljevisning på produkt.html.

Filtrere produkter efter kategori som tasker, sko, tøj osv

Produkterne hentes og vises dynamisk i HTML via JavaScript.

# API endpoints

Vi har brugt følgende endpoint:

https://dummyjson.com/products

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
