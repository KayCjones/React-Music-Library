

const MusicTable = (props) => {
  //map through the songs from props and display info
  return (
    <div >
      <h1>Music Library</h1>
      <table>
        <thead>
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
        {console.log(props.userEntries)}
    </div>
    );
}
  
export default MusicTable;