// DICHIARO L'ARRAY
const name_list = ["Jayden Mora", "Rohan Harris", "Susie Mayer", "Mary Mccarty", "Raheem Diaz"]



// DICHIARO LA VARIABILE  
let fullname = prompt("inserisci il tuo nome")


// VARIABILE DI CONTROLLO
let name_found = false;


for(let i = 0; i < name_list.length; i++){
    if(name_list[i] === fullname){
        name_found = true;
    }
}
if (name_found === true ){
    document.getElementById('name-message').innerHTML = "Sei presente nella lista"
}
else{
    document.getElementById('name-message').innerHTML = "Non sei presente nella lista"
}

