import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  
    const [note,Setnote]=React.useState({
        title: "",
        content: ""
    });

    const [isEmpty,setEmpty]=React.useState(false);

    function handleClick(event)
    {
        props.addItem(note);
        Setnote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleClick2()
    {
        setEmpty(true);
    }

    function handleChange(event)
    {
        const {value,name}=event.target;
        Setnote((prevValue)=>{
            return({
                ...prevValue,
                [name]:value
            });
        })
    }

    return (
    <div>
      <form className="create-note">
        {isEmpty ? <input name="title" placeholder="Title" onChange={handleChange} value={note.title} /> : null}
        <textarea onClick={handleClick2} name="content" placeholder="Take a note..." rows={isEmpty ? 3 : 1} onChange={handleChange} value={note.content} />
        <Zoom in={isEmpty}>
        <Fab onClick={handleClick} aria-label="add">
            <AddIcon color="action"/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;