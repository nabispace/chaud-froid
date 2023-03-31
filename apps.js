const inp = document.getElementById('proposition');
const essais = document.getElementById('ess');
const nbessais = document.getElementById('nbe');
const soluce = document.getElementById('sol');

let aa = Math.random();
let b = aa * 100;
let a=Math.ceil(b);

console.log(a,aa,b);

let i=0;
let tabi=[];


function tentative()
{
    if(inp.value != a)
    {
        i++;
        tabi.push(inp.value);
        essais.innerHTML = tabi;
        nbessais.innerHTML = i;

        if(inp.value > a)
        {
            soluce.innerHTML = 'C\'est plus petit'; 
        }

        if(inp.value < a)
        {
            soluce.innerHTML = 'C\'est plus grand'; 
        }
    }
    if(inp.value==a)
    {
        alert('Bravo champion, tu as trouvé le bon résultat !');
        soluce.innerHTML = `Bravo, la solution était bien ${a}`;
        inp.classList.add('disable');
    }
        
    console.log(tabi);
    essais.innerHTML = tabi;
    nbessais.innerHTML = i;
}
