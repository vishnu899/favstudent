import React, { useState } from 'react';
import './App.css';

function App() {
  const [students,setstudents] = useState(['Manoj', 'Sanjay', 'Aslam', 'Vishnu', 'Mike']);
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

   const[fav,setfav] = useState(true) 
   const[st,setst] = useState(true) 

function handleaddd()
{
  setfav(!fav)
  setst(!st)
}


function vishnu()
{
 setfav(fav)
  setst(st)
}

  
  
  return (
    <div className="app-container">
      <nav className='nav flex gap-20 bg-red-500'>
            <h1 id='st' onClick={vishnu}>Student List</h1>
            <h1 id='fa' onClick={handleaddd}>Favourite Student List</h1>
        </nav>
        <div className="input">
            <input value={newstu} onChange={handlechange} type="text" />
            <button onClick={add}>Add</button>
        </div>
      <div className="list-container" style={{display:st?"block":"none"}}>
        
        <ul>
          {students.map((student, index) => (
            <li key={student} className="student-item">
              <span className="student-number">{index + 1}.{student}</span>
              
              <button
                onClick={() => toggleFavorite(student)}
                className={favorites.includes(student) ? 'remove-btn' : 'add-btn'}
              >
                {favorites.includes(student) ? 'Added to  Favorite' : 'Add to Favorite'}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="favorite-container" style={{display:fav?"none":"block"}}>
        <h2>Favorite Students</h2>
        <ul>
          {favorites.map((student, index) => (
            <li key={student} className="student-item">
              <span className="student-number">{index + 1}.{student}</span>
              
              <button
                onClick={() => toggleFavorite(student)}
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );


}

export default App;