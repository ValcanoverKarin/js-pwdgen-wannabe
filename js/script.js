// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21

var nomeUtente = prompt('Inserisci il tuo nome');
console.log(nomeUtente);

var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

var coloreUtente = prompt('Qual è il tuo colore preferito');
console.log(coloreUtente);

var annoCorrente = '21';

var passwordUtente = nomeUtente + cognomeUtente + coloreUtente + annoCorrente;
console.log(passwordUtente);

document.getElementById('password').innerHTML = nomeUtente + cognomeUtente + coloreUtente + '21';