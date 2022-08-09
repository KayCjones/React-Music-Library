import React, { useState } from "react";
import './AddEntryForm.css'
import axios from "axios";


const AddEntryForm = (props) => {
    
    const [title, setTitle] = useState([]);
    const [artist, setArtist] = useState([]);
    const [album, setAlbum] = useState([]);
    const [genre, setGenre] = useState([]);
    const [releaseDate, setReleaseDate] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        createSong()
    }

    async function createSong(){
        let newSong = {
            title: title,
            artist: artist,
            album: album, 
            genre: genre,
            release_date: releaseDate
        }
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
        
        props.createSongs();
        console.log("yee")
        
    }


           
        
    
    
    return ( 
        <div>
            <h2 className="adding-header">Add Song</h2>
        <form className="entry-form" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' value={title} onChange = {(event) => setTitle(event.target.value)} />
            <label>Artist</label>
            <input type='text' value={artist} onChange = {(event) => setArtist(event.target.value)} />
            <label>Album</label>
            <input type='text' value={album} onChange = {(event) => setAlbum(event.target.value)} />
            <label>Genre</label>
            <input type='text' value={genre} onChange = {(event) => setGenre(event.target.value)} />
            <label>Release Date</label>
            <input type='date' value={releaseDate} onChange = {(event) => setReleaseDate(event.target.value)} />
            <button className="button" type='submit' >Add Song</button>
        </form>
        </div>
    );
}
 
export default AddEntryForm;