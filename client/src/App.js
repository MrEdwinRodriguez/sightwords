import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import SightwordList from './features/sightwords/SightwordList';

function App() {
	return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<SightwordList />} />
            </Routes>
        </div>
    );
}

export default App;
