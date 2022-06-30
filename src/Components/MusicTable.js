

function MusicTable(props) {

    //map through the songs from props and display info

  
    return (
      <div >
          {console.log(props.color)}
            <p>Music Table's return</p>
        {props.name}
      </div>
    );
  }
  
  export default MusicTable;