 //import search from '../movieFunctions'
const data = fetch('https://api.stoplight.io/v1/versions/9WaNJfGpnnQ76opqe/export/oas.json')
//const searchValue= document.getElementById('inputSearch').value

const searchValue = () =>{
  const searchValue= document.getElementById('inputSearch').value
  console.log(searchValue)
  console.log(data)
}

export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Home</h2>`;

  const btnKids = document.createElement('a')
  btnKids.setAttribute('href','#/Kids')
  btnKids.innerHTML= 'ir a kids'
  const btnAdult = document.createElement('a')
  btnAdult.setAttribute('href','#/Adult')
  btnAdult.innerHTML= 'ir a Adult'
 
  // PARTE DEL NAVV
  const nav= document.createElement('nav') //navegador
  const divContainerNav = document.createElement('div') //div container
  const navBarHeader = document.createElement('div')//div header del nav
  const info = document.createElement('a')
  info.innerHTML = "movieinfo"
  info.setAttribute('href', "#/Adult")
  //almacena el nav
  navBarHeader.appendChild(info)
  divContainerNav.appendChild(navBarHeader)
  nav.appendChild(divContainerNav)

  //DIV CONTAINERR
  const inputSearch = document.createElement('input')  //input de la busqueda
  inputSearch.setAttribute('placeholder','search')
  inputSearch.setAttribute('id','inputSearch')

  const btnSearch = document.createElement('button')
  btnSearch.innerHTML = 'buscar'
  btnSearch.addEventListener('click', () => (searchValue()))
  const formSearch = document.createElement('form')  //form que contiene el input
  
  const textSearch = document.createElement('h3')   //texto sobre el search
  textSearch.innerHTML= "Search For Any Movie"

  const divJumbo = document.createElement('div')      //div que contiene el texto y el form
  const divContainerSearch = document.createElement('div')  //div container que que guarda el div (k contiene el textoy form)
  
  formSearch.appendChild(inputSearch)
  formSearch.appendChild(btnSearch)
  divJumbo.appendChild(textSearch)
  divJumbo.appendChild(formSearch)
  divContainerSearch.appendChild(divJumbo)

  const divContainerMovies = document.createElement('div') // div container movies
  const divMovies = document.createElement('div')          //div que almacena los movies
  divMovies.innerHTML = "aqui van las peliculas"
  divContainerMovies.appendChild(divMovies)


  const divElemt = document.createElement('div');  //div que guarda TOODO y lo muestra
  

  divElemt.innerHTML = viewHome;
  divElemt.appendChild(btnKids)
  divElemt.appendChild(btnAdult)
  divElemt.appendChild(nav)
  divElemt.appendChild(divContainerSearch)
  divElemt.appendChild(divContainerMovies)
  // divElemt.innerHTML= divSearch
  return divElemt;

  
};

// export default () => {
//   `<div>
//     <h1> Hola soy el home </h1>
//
//     <button href='#/Kids'>  </button>
//     <button href='#/Adultsids'>  </button>
//     </div>`
// }
