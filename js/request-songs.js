function showData(){
    const NAME = localStorage.getItem("name");
    document.getElementById("name").innerHTML = NAME;
  
    const SONGARTIST = localStorage.getItem("song-artist");
    document.getElementById("song-artist").innerHTML = SONGARTIST;
  
    const URLSONG = localStorage.getItem("url-song");
    document.getElementById("url-song").innerHTML = URLSONG;
  }
  
  showData();