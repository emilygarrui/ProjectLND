document.getElementById('personal-data-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const NAME = document.getElementById('name').value;
    const SONGARTIST = document.getElementById('song-artist').value;
    const URLSONG = document.getElementById('url-song').value;

    const SONGDATA = {
        name: NAME,
        songArtist: SONGARTIST,
        urlSong: URLSONG
    };

    let songsList = JSON.parse(localStorage.getItem('songsList')) || [];

    songsList.push(SONGDATA);

    localStorage.setItem('songsList', JSON.stringify(songsList));

    window.location.href = 'request.html';
});
