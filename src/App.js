import React, { useEffect, useState } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import axios from 'axios';
import NavBar from "./Components/NavigationBar/NavigationBar";
import AddEntryForm from "./Components/AddEntryForm/AddEntryForm";
// import AddEntryForm from "./Components/AddEntryForm/AddEntryForm";


function App() {

  const [songs, setSongs] = useState([ ]);
  //pass 'songs' into MusicTable component as props
  
  useEffect(() => {
    getAllSongs();
  }, [])
  const filterSongs=(searchValue)=>{
    if(searchValue == ""){
      getAllSongs()
    }
    else{

    
    let results = songs.filter(el => el.title == searchValue || el.artist == searchValue || el.album == searchValue || el.genre == searchValue || el.release_date == searchValue)
    console.log(results)
    setSongs(results)
    }
    
  }
  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    setSongs(response.data);
  }


  return (
    <div>
      <NavBar />
      <MusicTable filterSongs ={filterSongs} userEntries={songs} />
      <AddEntryForm createSongs={getAllSongs} />
    </div>
  );
}

export default App;
