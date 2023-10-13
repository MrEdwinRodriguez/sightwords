import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import SightwordList from './features/sightwords/SightwordList';
import HomePage from './features/menu/HomePage';

function App() {
	return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/sightwords' element={<SightwordList />} />
            </Routes>
        </div>
    );
}

export default App;
