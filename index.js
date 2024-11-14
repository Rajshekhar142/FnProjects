async function fetchData (pokename = 'psyduck'){

    const front = document.querySelector('#front');
    const back = document.querySelector('#back');
    
    try{
        const rawdata = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        if(!rawdata.ok){
            throw new Error('pokemon not found');
        }
        const data = await rawdata.json();
        const fsource = data.sprites.front_default;
        const bsource = data.sprites.back_default;
        front.src = fsource;
        back.src = bsource;

        front.style.display = 'block';
        back.style.display = 'block';
        

    }
    catch(error){
        console.log(error)
    }
}
const inp = document.querySelector('#pokename');
inp.addEventListener('change', () => {
    const pokename = inp.value;
    fetchData(pokename);
})

//fetchData();

// clearly the code gets broken down once the pokemon is not available use error handling to save the code from breaking
// down..
// i pass...

// i challenge you to generate the async version of same..
// well i pass... 

// now that you know dom and fetching try to print the image of the pokemon.
// finally did it 🤘🤘🤘