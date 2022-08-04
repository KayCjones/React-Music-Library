import React from "react";

const MusicTable = (props) => {
  //map through the songs from props and display info

  return (
    <div >
      <form>
      <button type='submit'>Search</button>
        <input type="text" />  
      </form>
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          <button>Filter</button>
        </tr>
        </thead>
        <tbody>
          {props.userEntries.map((song) => {
            return (
            <tr>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.releaseDate}</td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    );
}
  
export default MusicTable;