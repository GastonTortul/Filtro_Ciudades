const contenedor_cards = document.getElementById("contenedor_cards");

const inputBusqueda = document.getElementById('buscar');

let ciudadesFiltrados = [];

let templateCard ="";
fetch("cities.json")
    .then (res => res.json())
    .then (ciudades =>
        {
            console.log(ciudades);
            crearTarjetas (ciudades);

            //Guardamos las ciudades en una variable
            ciudadesFiltrados = ciudades;
        }
    );
function crearTarjetas(ciudades)
{
    for (const ciudad of ciudades)
    {
        templateCard += `
        <div class= "card">
            <img src= "${ciudad.imagen}" alt= "${ciudad.ciudad} ${ciudad.id}">
            <p>${ciudad.ciudad} </p>
            <a calss = "btn btn-danger" href="#"> Mas info </a> 
        </div>`;
    }
   
    contenedor_cards.innerHTML = templateCard;
}

inputBusqueda.addEventListener ('input', () =>{
    const inputValue = inputBusqueda.value;

    crearTarjetasInput();

    if (ciudadesFiltradosInput.length === 0)
    {
        contenedor_cards.innerHTML = "<h2> Sin Resultados </h2>";
    }

    console.log(ciudadesFiltradosInput);

    let labelBuscar = document.getElementById ("labelBuscar");
    labelBuscar.innerHTML = inputValue;
    console.log(inputValue);
});

function crearTarjetasInput(){
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    ciudadesFiltradosInput = ciudadesFiltrados.filter(ciudad => ciudad.ciudad.toLowerCase().includes(textoBusqueda));

    templateCard = "";

    for (const ciudad of ciudadesFiltradosInput)
        {
            templateCard += `
            <div class= "card">
                <img src= "${ciudad.imagen}" alt= "${ciudad.ciudad} ${ciudad.id}">
                <p>${ciudad.ciudad} </p>
                <button class= "btn btn-danger" href="#"> Mas info </a> 
            </div>`;
        }

    contenedor_cards.innerHTML = templateCard;
}


