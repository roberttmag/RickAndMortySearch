const url = "https://rickandmortyapi.com/api/character"; // Defina a URL fora da função
const urlLocation ="https://rickandmortyapi.com/api/location";
const urlEpisode ="https://rickandmortyapi.com/api/episode";


        function fetchCharacters() {
            axios.get(url)
                .then(response => {
                    this.characters = response.data.results;
                })
                .catch(error => console.log(error));
        }

function fetchEpisodes() {
            axios.get(urlEpisode)
                .then(response => {
                    this.characters = response.data.results;
                })
                .catch(error => console.log(error));
}

   


/*
const newUser = {
        name:"Rick",
        avatar:"http://lorempixel.com.br/200/200",
        city:"Earth",
}
const userUpdated = {
    name:"Thomas",
    avatar:"http://lorempixel.com.br/200/200",
    city:"Mars",
}


function getUser(){ //user pq está trabalhando com usuario
    axios.get(url) //get para pegar dados da api
    .then(response =>{
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
//getUser()

function addNewUser(){//
    axios.post(url, newUser) //post envia os dados para url
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//addNewUser()

function updateUser(){
    axios.put(`${url}/2`, userUpdated) //fazendo update do id 2 da API "`$url/numero da documentacao da api` = template string"
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//updateUser()

function deleteUser(){
    axios.delete(`${url}/2`) //deletar usuario
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//deleteUser()

function getOneUser(){ //escolher qual usuario da api eu quero ver no html
    axios.get(`${url}/1`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    } )
    .catch(error => console.log(error))
}
getOneUser()*/