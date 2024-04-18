function fetchAllCharacters() {
    let allCharacters = [];
    const self = this; 

    function fetchCharactersByPage(page) {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => {
                const characters = response.data.results;
                allCharacters = allCharacters.concat(characters);

                if (page < 42 && response.data.info.next) {
                    const nextPage = page + 1;
                    fetchCharactersByPage(nextPage); 
                } else {
                   
                    self.characters = allCharacters; // Usar o contexto correto aqui
                }
            })
            .catch(error => console.log(error));
    }

    fetchCharactersByPage(1); 

window.fetchAllCharacters = fetchAllCharacters;

function fetchEpisodes() {
            axios.get(urlEpisode)
                .then(response => {
                    this.episode = response.data.results;
                })
                .catch(error => console.log(error));
}

}
