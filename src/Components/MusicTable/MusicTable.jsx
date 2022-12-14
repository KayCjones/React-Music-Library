import React from "react";
import { useState } from "react";
import './MusicTable.css'

const MusicTable = (props) => {
  //map through the songs from props and display info

const [filter, setFilter] = useState([]);


function handleSubmit(event) {
  event.preventDefault();
  // let resuilts = props.userEntries.filter(function(element){
  //   if(element.title == filter)
  //   {
  //     return true
  //   }
  // })
   props.filterSongs(filter)
}



  return (
    <div>
      <form className="filter" onSubmit={handleSubmit}>
      <button type='submit' >Filter</button>
        <input type="text" value={filter} onChange = {(event) => setFilter(event.target.value)} />  
      </form>
      <table className="display-form">
        <thead className="header">
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {props.userEntries.map((song) => {
            return (
            <tr className="rows">
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.release_date}</td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    );
}
  
export default MusicTable;