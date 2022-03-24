function charactersData(characters) {
    const characterQueryString = characters.join(',')
    fetch(`https://rickandmortyapi.com/api/character/${characterQueryString}`)
        .then(response => response.json())
        .then(function(data) {
            const content = document.querySelector('#content')

            data.map(function(results) {
                content.innerHTML+=`
                    <div class="characters">
                        <img src= ${results.image} >
                        <div class="characters-results">
                            <p>Nome: <strong>${results.name}</strong> </p>
                            <p>Status: <strong>${results.status}</strong> </p>
                            <p>Cidade: <strong>${results.location.name}</strong> </p>
                            <a href= ${results.episode[0]} target="_blank">Episódio do personagem</a>
                        </div>
                    </div>
                `
            })
        })
}

charactersData([1,17])