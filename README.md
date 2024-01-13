# Dummy ecommerce

## Online deploy
[![Netlify Status](https://api.netlify.com/api/v1/badges/c559a836-03a9-4a3a-b9e8-b9a690ff7b05/deploy-status)](https://app.netlify.com/sites/euphonious-mochi-666b51/deploys)  
è possibile accedere ad un deploy pubblico a questo indirizzo:  
https://euphonious-mochi-666b51.netlify.app/

## Installazione ed avvio locale del progetto
Il progetto richiede node v18 o superiore.  
utilizzare i seguenti comandi per l'installazione e l'avvio.  
`npm install`  
`npm run dev`

aprire il browser all'indirizzo http://localhost:5173/ (verificare nella console che l'indirizzo non sia variato)

## Architettura
Il progetto utilizza vite come package manager, e parte da una base vuota per creare un progetto maggiormente personalizzato rispetto a controparti come nextJs.  
Per i componenti verrà utilizzato radix, che permette uno sviluppo slegato al design che verrà personalizzato in un secondo momento.  
Per lo styling verrà utilizzato tailwindcss.
Per la gestione delle API verrà utilizzato RTK Query, e verrà demandato ai singoli moduli la possibilità di gestire la propria parte di dati, questo rendereà la composizione più versatile.

Il sito verrà considerato in modalità "guest".  
La persistenza del carrello avverrà tramite local storage. i dati vengono gestiti solo tramite id, in modo da avere i dati prodotto sempre aggiornati (per es. potrebbe cambiare il prezzo)

# Richieste progetto

## Test frontend

Implementare una SPA che realizzi due pagine di un progetto ecommerce.

Una pagina di listing e-commerce con funzionalità di visualizzazione prodotti e aggiunta di prodotti
a carrello.

Una pagina che mostri il contenuto del carrello, con visualizzazione del totale e funzionalità di
rimozione dei prodotti dal carrello

## Requisiti
- Creare un progetto React
- Il progetto deve essere consegnato preferibilmente via github (in alternativa anche via zip
file)
- Il progetto deve essere corredato da tutte le informazioni necessarie al funzionamento.
- Creare una pagina di listing e-commerce con funzionalità di visualizzazione prodotti e
aggiunta di prodotti a carrello.

### Per ogni prodotto nella pagina di listing devono essere mostrati almeno i seguenti attributi/elementi:
  + Nome
  + Immagine
  + Prezzo
  + Bottone per aggiungere I prodotti al carrello

### Creare una pagina che mostri il contenuto del carrello, con visualizzazione del totale funzionalità di rimozione dei prodotti dal carrello
### Per ogni prodotto nella pagina del carrello devono essere mostrati almeno i seguenti attributi/elementi
  + Nome
  + Immagine
  + Prezzo
  + Bottone per rimuovere I prodotti dal carrello
### Tutto quello non specificato è a discrezione del candidato

## Verrà valutato
- L'uso di best practice (React)
- La gestione degli errori
- Responsiveness
- Struttura progetto
- Code style

## Note
È possibile utilizzare un servizio di API mockate a scelta (ad esempio https://dummyjson.com/ )  
La parte UI/UX è totalmente a piacere dell'utente (sono ammessi tool esterni e/o grafica già pronta disponibile in rete).  
Non vi è un tempo massimo poiché il tempo è legato strettamente al numero di API integrate e alla UI realizzata.  
Tuttavia, sarebbe consigliato un commit iniziale vuoto (con il solo readme) e l'ultimo commit deve essere eseguito a progetto terminato, verrà considerato il timespan.