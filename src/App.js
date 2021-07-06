import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import { useCatPostsQuery } from './features/posts/postsSlice';

import './App.css';

function App() {

  const [numCats, setNumCats] = useState();
  const { data = [], isFetching } = useCatPostsQuery(numCats);

  return (
    <div className="App">
        <Counter />
        <div>
     <div>
          <p>Images to fetch:</p>
          <select value={numCats} onChange={(e) => setNumCats(Number(e.target.value))}>
            <option value="2">2</option>
            <option value="4">4</option>
          </select>
        </div>
        
        <div>
          <p>Number of items fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={100} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    </div>
  );
}

export default App;
