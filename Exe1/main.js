

//document.querySelector("button").classList.add("indiquant"); 
//document.getElementById()
const V_BTN = document.getElementById('verifier');
const INPUT_ANNEE = document.getElementById('annee');
const P_ERROR = document.getElementById('error');
const MESSAGE = document.getElementById('message1');

V_BTN.addEventListener("click", () => {

    let annee = INPUT_ANNEE.valueAsNumber;//.trim();
    //P_ERROR.textContent = "";
    MESSAGE.textContent = "";
    //annee = parseInt(annee);
    if (annee == "" || isNaN(annee)) {
        MESSAGE.textContent = 'Veuillez entrer une année valide.';
        MESSAGE.style.color = "red";

        return;

    }

    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        MESSAGE.textContent = `L'année ${annee} est bissextile.`;
        MESSAGE.style.color = "green";
    } else {
        MESSAGE.textContent = `L'année ${annee} n'est pas bissextile.`;
        MESSAGE.style.color = "orange";
    }
});

const BUT_NIVEAU = document.querySelectorAll('.niveau');
const VIES_TEXT = document.getElementById('vies');
const INIDICATION = document.getElementById('indication');
const INPUT_PROPOS = document.getElementById('proposition');
const VALIDE_BTN = document.getElementById('valider');
const MESSAGE2 = document.getElementById('message2');
let nombreMystere;
let vies = 0;
let max = 0;
let jeuEnCours = false;



BUT_NIVEAU.forEach(buton => {
    buton.addEventListener('click', () => {
        let niveau = buton.textContent.toLowerCase();
        // console.log(niveau);
        
        switch (niveau) {
            case 'facile':
                max = 10; 
                vies = 4; 
                VIES_TEXT.innerText=''.padEnd(vies*2,'🐄');
                break;
            case 'moyen':
                max = 100; 
                vies = 10;
                 VIES_TEXT.innerText=''.padEnd(vies*2,'🐄'); 
                break;
            case 'difficile':
                max = 1000; 
                vies = 20;
                 VIES_TEXT.innerText=''.padEnd(vies*2,'🐄');
                break;
        }
         
          VALIDE_BTN.disabled=true;
           VALIDE_BTN.disabled=false;
        // console.log(max);
        // console.log(vies);
        // nombreMystere = Math.random() //0.000000.. & 0.9999999...
        //nombreMystere = Math.random() + 1 //1.000000.. & 1.9999999...
        //nombreMystere = Math.random() * max + 1 //1.000000.. & 10.9999999...
        nombreMystere = Math.floor(Math.random() * max + 1) //1 & 10
        // console.log(nombreMystere);
        INIDICATION.textContent=`Deviner le nombre entre 1 et ${max}`;
        MESSAGE2.textContent="";
        
        VALIDE_BTN.addEventListener('click', ()=>{
            // if(!jeuEnCours){
            //    INIDICATION.textContent=`Choisi difficulté` ;
            //     return;
            // }
             const inputPrice=INPUT_PROPOS.value;
             console.log(nombreMystere);

            if (niveau) {
              
              if(inputPrice<nombreMystere){
                MESSAGE2.innerText=`C'est plus grand que ${inputPrice}`;
                vies--;
                 VIES_TEXT.innerText=''.padEnd(vies*2,'🐄');

              }else if(inputPrice>nombreMystere){
                MESSAGE2.innerText=`C'est moins que ${inputPrice}`;
                vies--;
                 VIES_TEXT.innerText=''.padEnd(vies*2,'🐄');
                 //VIES_TEXT.innerText=''.padEnd(vies*2,'🐄');
              }else{
                MESSAGE2.innerText=`🏆Felicitaion! C'est bien ${inputPrice}`;
                
                return;
              }
              //VIES_TEXT.innerText=''.padEnd(vies*2,'🐄');
              if (vies<=0) {
                MESSAGE2.innerText=`😔Perdu! Le nombre ${nombreMystere}`;
              }
               
            } 
            if (isNaN(inputPrice)||inputPrice<1 || inputPrice>max ) {
                    MESSAGE2.innerText=`⛔Entrée invalide : choisis un nombre entre 1 et ${max}`;
                    INPUT_PROPOS.style.border = "3px solid red";
                    return;
                }
                else{
                    INPUT_PROPOS.style.border = "1px solid #ccc";
                }
        })
        
    }
)
 INPUT_PROPOS.value = "";
})


