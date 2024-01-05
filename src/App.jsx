import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "./Note";
import Cards from "./Cards";



function noteCard (note) {
   return ( <Cards
    key={note.key}
    title = {note.title}
    content = {note.content}
    
    />)
}


function App() {
    return<div>
        <Header></Header>
        {notes.map(noteCard)}
        <Footer></Footer>
    </div>;
}

export default App;
