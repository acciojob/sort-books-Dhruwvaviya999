
import React from "react";
import './../styles/App.css';
import BookList from "./BookList";

function App() {

  return (
    <>
      <div className="App">
        <h1 className="text-2xl font-bold text-center my-6">Books List</h1>
        <BookList />
    </div>
    </>
  )
}

export default App

