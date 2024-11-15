document.addEventListener('DOMContentLoaded', function() {
    const SONGSLIST = JSON.parse(localStorage.getItem('songsList')) || [];

    const DATACONTAINER = document.querySelector('.container-request');

    if (SONGSLIST.length > 0) {
        DATACONTAINER.innerHTML = '';

        SONGSLIST.forEach(song => {
            const SONGELEMENT = document.createElement('div');
            SONGELEMENT.classList.add('data-container');

            SONGELEMENT.innerHTML = `
                <p class="data-item"><strong>Nombre de la canción:</strong></p>
                <p class="data-value">${song.name}</p>
                <p class="data-item"><strong>Cantante:</strong></p>
                <p class="data-value">${song.songArtist}</p>
                <p class="data-item"><strong>URL de la canción (YouTube):</strong></p>
                <p class="data-value"><a href="${song.urlSong}" target="_blank">${song.urlSong}</a></p>
            `;

            DATACONTAINER.appendChild(SONGELEMENT);
        });
    } else {
        DATACONTAINER.innerHTML = '<p>No se ha recibido ninguna solicitud.</p>';
    }
});
