function displayResults(result) {
    resultArtist.classList.add("hidden");

    // Limpar o conteúdo anterior antes de exibir novos resultados
    resultArtist.innerHTML = '';

    result.forEach(element => {
        // Criar novos elementos para cada artista
        const artistContainer = document.createElement('div');
        artistContainer.classList.add('artist-container');

        const artistName = document.createElement('h2');
        artistName.innerText = element.name;

        const artistImage = document.createElement('img');
        artistImage.src = element.urlImg;

        // Adicionar os elementos criados ao contêiner
        artistContainer.appendChild(artistName);
        artistContainer.appendChild(artistImage);

        // Adicionar o contêiner à página
        resultArtist.appendChild(artistContainer);
    });

    resultArtist.classList.remove('hidden');
}