// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const friends = [];

//Función para agregar amigos a la lista de sorteo
function agregarAmigos() {
    const input = document.getElementById('friend');
    const nombre = input.value.trim();

    // Esta es una expresión regular que permite validar nombres y apellidos en el input  
    const nombreRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    //de no cumplir con la expresión regular, se mostrará un alert
    if (!nombre || !nombreRegex.test(nombre)) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    //Se agrega el nombre a la lista de amigos y se limpia el input
    friends.push(nombre);
    input.value = '';
    actualizarListaAmigos();
}

 //Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const list = document.getElementById('listaAmigos');
    list.innerHTML = '';
    //Uso un forEach para recorrer el array 'friends' y agregar cada amigo a la lista ya que es más sencillo que usar un for
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        list.appendChild(li);
    });
}

//Función para sortear el amigo secreto
function sortearAmigo() {
    //Para el sorteo deben existir como mínimo 2 amigos en la lista
    if (friends.length < 2) {
        alert('Debes ingresar al menos dos amigos para el sorteo.');
        return;
    }
    //Para el sorteo se seleccionará un amigo al azar usando el índice del array 'friends'
    const indiceAleatorio = Math.floor(Math.random() * friends.length);
    const amigoSecreto = friends[indiceAleatorio];
    
    const resultadoSorteo = document.getElementById('resultado');
    resultadoSorteo.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultadoSorteo.appendChild(li);
}