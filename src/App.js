import React, { useState } from 'react';
import './App.css';


function App() {
  const [students,setstudents] = useState(['Manoj','Aslam','Sanjay','Vishnu'
  

]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (student) => {
    if (favorites.includes(student)) {
      setFavorites(favorites.filter((fav) => fav !== student));
    } else {
      setFavorites([...favorites, student]);
    }
  };

  const [newstu,setnewstu] = useState("")
  function handlechange(evt)
  {
    setnewstu(evt.target.value)
  }

  function add()
  {
    setstudents([...students,newstu])
  }
  
  return (
    <div className="app-container">
        <nav className='nav flex gap-20 bg-red-500'>
            <h1>Student List</h1>
            <h1>Favourite Student List</h1>
        </nav>
        <div className="input">
            <input value={newstu} onChange={handlechange} type="text" />
            <button onClick={add}>Add</button>
        </div>
      <div className="list-container">
        
        <ul>
          {students.map((student, index) => (
            <li key={student} className="student-item">
             
              <span className="student-name">{index + 1}.{student}</span>
              <div className='add'>
              <button id='one'
                onClick={() => toggleFavorite(student)}
                className={favorites.includes(student) ? 'remove-btn' : 'add-btn'}
              >
                {favorites.includes(student) ?'Added to Favorite' : 'Add to Favorite'}
              </button>
              
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="favorite-container">
        
        <ul>
          {favorites.map((student, index) => (
            <li key={student} className="student-item">
             
              <span className="student-name">{index + 1}.{student}</span>
              <button
                onClick={() => toggleFavorite(student)}
                className="remove-btn"
              >
                Remove from Favourite
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;