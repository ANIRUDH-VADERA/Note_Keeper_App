import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Welcome from "./Welcome.jsx";

function App() {
    
    const [array,setarray]=React.useState([]);
    
    function Add(note)
    {
        setarray((prevValue)=>{
            return [...prevValue,note];
        });
    }
    
        
    function deleteItem(id)
    {
        setarray((prevItems)=>{
            return prevItems.filter((item,index)=>{
                return index!==id;
            });
        });
    }


    return (
    <Router>
    <div>
      <Header />
        <Switch>
            <Route exact path="/">
                <CreateArea addItem={Add}/>
                {array.map((item,index)=><Note key={index+1} id={index} title={item.title} content={item.content} onClickdel={deleteItem} />)}
            </Route>
            <Route path="/Welcome">
                <Welcome />
            </Route>
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;