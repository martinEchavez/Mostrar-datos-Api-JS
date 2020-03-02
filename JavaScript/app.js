const contenido = document.querySelector('#contenido')
const urlPrueba = 'https://jsonplaceholder.typicode.com/users';
const urlGit = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
const hoy = new Date();
const formulario = document.querySelector('#formulario')
const boton = document.querySelector('#boton')

const listar = () => {
 fetch(urlGit)
 .then(res => res.json())
 .then(data => {
  pintarGit(data)
  filtrar(data)
 })
}

const pintarPrueba = (data) => {
 var personas = data
  personas.map((persona) => {
   contenido.innerHTML += `
   <div class="card m-1" >
    <div class="card-body">
     <div class="row">
      <div class="col-3">${persona.name}</div>
      <div class="col-3">${persona.username}</div>
      <div class="col-3">${persona.email}</div>
      <div class="col-2">${persona.address.city}</div>
     </div>
    </div>
   </div>
   `
  })
}

const pintarGit = (data) => {
  data.map((commit) => {
  contenido.innerHTML += `
  <div class="card m-1" >
    <div class="card-body">
      <div class="row">
        <div class="col-2">
          <img src="${commit.author.avatar_url}" class="img-fluid rounded-circle " style='max-width: 40%'>
        </div>
        <div class="col-3 pt-4">Nombre: ${commit.commit.author.name}</div>
        <div class="col-3 pt-4">Email: ${commit.commit.committer.email}</div>
        <div class="col-3 pt-2">Edad: 20 Años</div>
      </div>
    </div>
  </div>
  `
  })
}
