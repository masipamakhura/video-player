
export function  VideoItem(props){

    return (
        <div className="video__item container">
            <ul className="list-group">
      { 
        props.videos.length > 0 ? props.videos.map((arr_element ,index)=> <li key={arr_element.id + index} className="list-group-item">{arr_element.snippet.title}</li>) : "No Video requested"
      }
    </ul>
        </div>
    )
}