const inp = document.getElementById('proposition');
const essais = document.getElementById('ess');
const nbessais = document.getElementById('nbe');
const soluce = document.getElementById('sol');
//const btndif = document.getElementById()

let Nbrandom = Math.ceil(Math.random()* 100);

console.log(Nbrandom);

let i=0;
let essaismax = 10;
let tabi=[];


function tentative(difficulty)
{
    if(i < essaismax)
    {
        if(inp.value != Nbrandom)
        {
            i++;
            tabi.push(inp.value);
            essais.innerHTML = tabi;
            nbessais.innerHTML = i;

            if(inp.value > Nbrandom)
            {
                soluce.innerHTML = 'C\'est plus petit'; 
            }

            if(inp.value < Nbrandom)
            {
                soluce.innerHTML = 'C\'est plus grand'; 
            }
        }
        if(inp.value==Nbrandom)
        {
            alert('Bravo champion, tu as trouvé le bon résultat !');
            soluce.innerHTML = `Bravo, la solution était bien ${Nbrandom}`;
            inp.classList.add('disable');
        }
    }
    else
    {
        alert('Dommage, c\'est perdu!');
        soluce.innerHTML = `Dommage, nombre d'essais maximum atteint, la solution était ${Nbrandom}`;
        inp.classList.add('disable');
    }
        
    console.log(tabi);
    essais.innerHTML = tabi;
    nbessais.innerHTML = i;
}
