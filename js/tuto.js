// *********************API**************************************

document.querySelector("#cp").addEventListener('input', function(){
    if(this.value.length == 5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;

   fetch(url).then(response => response.json().then(data => {
       console.log(data);
        let affichage = '<ul>';
        for(let ville of data){
            affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} hab</li>`
        }
        affichage += '</ul>';
        document.querySelector("#villes").innerHTML = affichage;
    }) 
    ).catch(err => console.log('Erreur : ' + err));
    }
});
// *********************functions**************************************
// const maFunction = function(){};
// const laFunctionFleche = () => {};

//création function avec param optionel
// const message = function(texte = "rien par défaut"){
//     alert(texte);
// };

// message("je suis là");
// message();

//création function flechee

const somme = (a,b) => {
    console.log(a + "+" + b +" = " + (a + b));
}
somme(11,5);

// *********************boucles**************************************
for(let i = 0; i < 3; i++){
    console.log('tour: ' + i)
}
//parcourir un tab
console.log('---- FOR ----');
let tab = ['pommes','fraises','poires'];
for(let i = 0; i < tab.length; i++){
    console.log(i + " = " + tab[i]);
}

console.log('---- WHILE ----');
let j = 0;
while(j<tab.length){
    console.log(j + " = " + tab[j]);
    j += 1;
}

console.log('---- DO WHILE ----');
let k = 0;
do{
console.log(k + " = " + tab[k]);
k += 1;
}
while(k < tab.length);

//FOR IN itérer sur les clés d un objet
console.log('---- FOR IN----');
let voiture = {
    marque: 'peugeot',
    moteur: 'essence'
};
for(let l in voiture){
    console.log(l);
}
//FOR OF iterer sur valeur tab
console.log('---- FOR OF----');
let couleurs = ['rouge','vert','bleu'];


for(let n of couleurs){
    console.log(n);
}

// *********************challenge**************************************
//questionnaire
console.log('---- CHALLENGE----');
const questions = [
    // {
    //     question:
    //     "A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart",
    //     reponse: 2
    // },
    // {
    //     question:
    //     "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Viens",
    //     reponse: 1
    // },
    // {
    //     question:
    //     "Quel organe est perturbé par les acouphènes ?\n1. Les pieds\n2. Les oreilles",
    //     reponse: 2
    // },
    {
        question:
        "Quel est le numéro de département du Cantal ?",
        reponseA: 13,
        reponseB: 14,
        reponseC: 15,
        bonneReponse: 15,
    },
    {
        question:
        "Quel est le numéro de département de l'île de la Réunion ?",
        reponseA: 974,
        reponseB: 975,
        reponseC: 976,
        bonneReponse: 974,
    },
    {
        question:
        "Quel est le département le moins peuplé de France ?",
        reponseA: "Creuse",
        reponseB: "Lozère",
        reponseC: "Haute Vienne",
        bonneReponse: "Lozère",
    }
    
];
//***********************début jeu**************************** */


let score = 0;

let affichageQuestion = '<h1>Jeu de Questions</h1><h2>Réponds aux questions suivantes</h2><form name="lesQuestions">';
console.log(questions.length);


for(let i = 0; i < questions.length; i++){
    let liste = '<h3>' + questions[i].question + '</h3>' +
                                '<ul><li><input type="checkbox"  name="choix1" value="reponseA"><label for="reponseA">' + questions[i].reponseA + '</label></li>' +
                                '<li><input type="checkbox"  name="choix2" value="reponseB"><label for="reponseB">' + questions[i].reponseB + '</label></li>' +
                                '<li><input type="checkbox"  name="choix3" value="reponseC"><label for="reponseC">' + questions[i].reponseC + '</label></li>';  
                                 + '</ul>';
                                 
                                affichageQuestion += liste;                               
}

document.querySelector("#divQuestions").innerHTML = affichageQuestion;
affichageQuestion += '</form>';


document.querySelector("button").addEventListener('click', function(){
console.log("coucou");
console.log(document.forms["lesQuestions"].choix3[0].checked);
if(document.forms["lesQuestions"].choix3[0].checked == true && document.forms["lesQuestions"].choix1[1].checked == true && document.forms["lesQuestions"].choix2[2].checked){
    score = 3;
    alert(`BRAVO ! 😎 ${score} bonnes réponses sur ${questions.length} questions`);
}else{
    if(document.forms["lesQuestions"].choix3[0].checked == true){
        score++;
    }
    if(document.forms["lesQuestions"].choix1[1].checked == true){
        score++;
    }
    if(document.forms["lesQuestions"].choix2[2].checked == true){
        score++;
    }
    if(score <= 1){
        alert(`Il y a des erreurs ! ${score} bonne réponse sur ${questions.length} questions`);
        }else{
            alert(`Il y a des erreurs ! 🙄 ${score} bonnes réponses sur ${questions.length} questions`);
        }
}
});



//*************************************************** */

// let score = 0;

// for(let i = 0; i < questions.length; i+=1){
//     let reponseJoueur = prompt(questions[i].question);
//     if (reponseJoueur == questions[i].reponse){
//         alert('bonne réponse !😎');
//         score += 1;
//     }else{
//         alert('mauvaise réponse !😑');
//     }
// }

// if(score <= 1){
//     alert(`Vous avez ${score} bonne réponse sur ${questions.length}`)
// }else{
// alert(`Vous avez ${score} bonnes réponses sur ${questions.length}`)
// }

//*************************************************** */
