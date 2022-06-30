import React, { useEffect, useState } from "react";
import MusicTable from "./Components/MusicTable";
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);
  //pass 'songs' into MusicTable component as props
  
  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    setSongs(response.data);
  }

  return (
    <div >
      <p>App return</p>
      <MusicTable song= />
    </div>
  );
}

export default App;
