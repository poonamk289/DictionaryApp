// src/components/Dictionary.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction } from './../redux/actions/fetchAction';
import "./../App.css";


const Dictionary = () => {
  const [word, setWord] = useState('');
  const dispatch = useDispatch();
//   const { loading, definition, error } = useSelector((state) => state.dictionary);
const {definition,error,loading}= useSelector(state=>state)
console.log(definition,error,loading);
const mean = definition[0];
console.log(mean);
  const handleFetchDefinition = () => {
    if (word.trim()) {
      dispatch(fetchAction(word));
    }
  };

  return (
    <div>
        <nav>
            <h1>Dictionary App</h1>
            
            <div className="route">
                <h3>Home</h3>
                <h3>History</h3>
            </div>
        </nav>
        <div  className='search'>
                <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
                <button onClick={handleFetchDefinition}>Search</button>
            </div>
     <div className='detail'>
            {loading && <p>Loading...</p>}
            {mean && (
                <div>
                    <h2>{mean.word}</h2>
                    
                    {mean.phonetics.map((phonetic)=>(
                        <div>
                             <p>{phonetic.text}</p>
                        <audio controls>
                           
                            <source src={phonetic.audio} type='audio/mpeg'/>
                        </audio>
                        </div>
                    ))}
                    <h4>Definations</h4>
                    <p>
                        
                        {mean.meanings.map((val)=>(
                            <div>
                                <b><p>{val.partOfSpeech}</p></b>
                                { val.definitions.map((def)=>(
                                    <p className='def-p'>{def.definition}</p>
                                ))}
                            </div>
                        ))}
                    </p>
                  
                  </div>  )
                }
            {/* <div>{definition.content}</div> */}
            {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default Dictionary;
