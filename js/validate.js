function listenForValidation() {
	const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
	PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {

	const NAME = e.target.name.value;
	const SONG_ARTIST = e.target["song-artist"].value;
	const URL_SONG = e.target["url-song"].value;

	let valid = true;

	if (!NAME) {
		document.getElementById("form-name").style.visibility = "visible";
		valid = false;
	} else document.getElementById("form-name").style.visibility = "hidden";

	if (!SONG_ARTIST) {
		document.getElementById("form-song-artist").style.visibility = "visible";
		valid = false;
	} else document.getElementById("form-song-artist").style.visibility = "hidden";

	if (!URL_SONG) {
		document.getElementById("form-url-song").style.visibility = "visible";
		valid = false;
	} else document.getElementById("form-url-song").style.visibility = "hidden";

	if (!valid) {
		e.preventDefault();
	} else {
		saveData(NAME, SONG_ARTIST, URL_SONG);
	}
}

function saveData(name, songArtist, urlSong) {
	localStorage.setItem("name", name);
	localStorage.setItem("song-artist", songArtist);
	localStorage.setItem("url-song", urlSong);
}

listenForValidation();