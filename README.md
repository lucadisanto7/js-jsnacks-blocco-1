Ciao ragazzi,
nome repo di oggi: js-jsnacks-blocco-1
SNACK 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
SNACK 2:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell'array
SNACK 3:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
BONUS:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Create una sotto-cartella per ogni jsnack e riportate la consegna all'inizio del file js.
La struttura dei file dovrebbe essere la seguente:
`jsnack1 (cartella)
- index.html
- script.js
jsnack2 (cartella)
- index.html
- script.js`
e così via


SNACK: 1
Dichiaro una variabile contenente il nome
Ricavo il valore della variabile tramite un prompt
Creo un array contenente il nome che possono accedere
Creo un ciclo for dichiarando un contatore "i" che aumenta fino a che non verifica tutto l'array 
    SE
        il nome e' presente nella lista
    allora scrivi
        Sei presente nella lista
    altrimenti scrivi
        Non sei presente nella lista

SNACK 2:
Creo un array vuoto
creo un ciclo for dichiarando un contatore "i" che va da 0 a 5
e all'interno una variabile numero che ricava il valore attraverso 
un prompt.
    SE
        il resto del numero e' diverso da 0 
        inseriscilo nell'array tramite push
Stampa l'array

SNACK:3
Dichiaro una variabile contenente il numero a 4 cifre
Ricavo il valore tramite un prompt
    SE il numero non ha 4 cifre 
        stampera' per favore inserisci un numero valido
    ALTRIMENTI
        calcola la somma delle cifre
        Dichiaro una variabile cifre e la assegno a quella
        numero contenente le 4 cifre.split
        cosi' da creare un array contenente le cifre della 
        variabile numero
        dichiaro una variabile somma
        Creo un ciclo for dichiarando un contatore "i" che aumenta fino alla lunghezza delle cifre
        calcolo la somma delle cifre
        stampo la somma delle cifre