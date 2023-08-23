import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Note from './Note';
import Input from './input';



function App() {

   const [notes, setNotes] = useState([]); // Initialize an empty array to store notes

   function deleteNote(id) {
      setNotes((prevNotes) => {
         return prevNotes.filter((item, index) => {
            return index !== id;
         });
      });
   }




   return <div>


      <Header />
      <Input data={setNotes} />
      {notes.map((item, index) => (
         <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={deleteNote}
         />
      ))}
      <Footer />
   </div>
}

export default App;