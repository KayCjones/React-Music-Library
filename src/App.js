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

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    setSongs(response.data);
  }


  return (
    <div className='container-fluid'>
      <NavBar />
      <MusicTable userEntries={songs} />
      <AddEntryForm  />
    </div>
  );
}

export default App;
