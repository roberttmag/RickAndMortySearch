const app = () => {
    return {
        fetchAllCharacters() {
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
                            self.characters = allCharacters;
                        }
                    })
                    .catch(error => console.error('Erro ao recuperar personagens:', error));
            }

            fetchCharactersByPage(1);
        },
        
        fetchAllEpisodes() {
            let allEpisodes = [];
            const self = this;

            function fetchEpisodesByPage(page) {
                axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
                    .then(response => {
                        const episodes = response.data.results;
                        allEpisodes = allEpisodes.concat(episodes);

                        if (response.data.info.next) {
                            const nextPage = page + 1;
                            fetchEpisodesByPage(nextPage);
                        } else {
                            self.Episodes = allEpisodes;
                        }
                    })
                    .catch(error => console.error('Erro ao recuperar episódios:', error));
            }

            fetchEpisodesByPage(1);
        }
    }
}

// Inicialize a aplicação
const myApp = app();

// Inicie a busca pelos personagens e episódios
myApp.fetchAllCharacters();
myApp.fetchAllEpisodes();

// Tornar as funções acessíveis globalmente, se necessário
window.fetchAllCharacters = myApp.fetchAllCharacters;
window.fetchAllEpisodes = myApp.fetchAllEpisodes;

