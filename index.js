function getCharactersByName(name, done) {
    const result = fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      result
        .then(response => response.json())
        .then(data =>{
          done(data)
        });
  }
  function listar(){
    const main = document.querySelector("main");
    main.innerHTML = "";
    getCharactersByName("", data => {
        data.results.forEach(personaje => {
          const article = document.createRange().createContextualFragment(
            `
            <div class="card" style="width: 18rem;">
                <img src="${personaje.image}" class="card-img-top" alt="Personajes">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">${personaje.status}</p>
                </div>
            </div>
            `
          );

          main.append(article);
          
        });
        console.log(data);
      });
  }

  

  function filtrar(){

    const main = document.querySelector("main");

    main.innerHTML = "";

    let nombreson = document.getElementById('filtrado')

    getCharactersByName(nombreson.value, data => {
        data.results.forEach(personaje => {
          const article = document.createRange().createContextualFragment(
            `
            <div class="card" style="width: 18rem;">
                <img src="${personaje.image}" class="card-img-top" alt="Personajes">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">${personaje.status}</p>
                </div>
            </div>
            `
          );
          const main = document.querySelector("main");
          main.append(article);
        });
        console.log(data);
      });
  }

  function populateDropdown(characters) {

    select.appendChild(optionTodos);

    characters.forEach(character => {
      const option = document.createElement("option");
      option.value = character.name;
      option.textContent = character.name;
    
      option.addEventListener("click", event => {
        event.preventDefault();
        getCharactersByName(character.name, data => {
          clearCharacters();
          data.results.forEach(personaje => {
            const article = document.createRange().createContextualFragment(
              `
              <article>
                <div class="image-container">
                  <img src="${personaje.image}" alt="Personajes">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
              </article>
              `
            );
            const main = document.querySelector("main");
            main.append(article);
          });
        });
      });
    
      select.appendChild(option);
    });
  }
  
  /*fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      populateSelect(characters);
    });*/
  
  function getCharactersByName(name, done) {
    const result = fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    result
      .then((response) => response.json())
      .then((data) => {
        done(data);
      });
  }
  
// Creamos el select y el primer option fuera de la función
const select = document.getElementById("select-filtrado");
const option = document.createElement("option");
option.text = "Selecciona un personaje";
option.value = "Selecciona un personaje";
select.add(option);

const listadoDe20Personajes= () => {
  for (let i = 1; i <= 20; i++) {
    fetch(`https://rickandmortyapi.com/api/character/${i}`)
      .then(response => response.json())
      .then(data => {
        const option = document.createElement("option");
        option.text = data.name;
        option.value = data.name;
        select.add(option);
      })
      .catch(error => console.error(error));
  }
}

// Llamamos a la función y esperamos a que se resuelva la promesa.
listadoDe20Personajes()
  
function filtrarList(){

  const main = document.querySelector("main");

  main.innerHTML = "";

  let nombreson = document.getElementById('select-filtrado').value

  getCharactersByName(nombreson, data => {
      data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(
          `
          <div class="card" style="width: 18rem;">
              <img src="${personaje.image}" class="card-img-top" alt="Personajes">
              <div class="card-body">
                  <h5 class="card-title">${personaje.name}</h5>
                  <p class="card-text">${personaje.status}</p>
              </div>
          </div>
          `
        );
        const main = document.querySelector("main");
        main.append(article);
      });
      console.log(data);
    });
}



