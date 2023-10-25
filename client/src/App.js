import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import SightwordList from './features/sightwords/test/SightwordList';
import SightWordPractice from './features/sightwords/practice/SightWordPractice';
import MatchingGame from './features/alphabet/matching/MatchingGame';
import BiggerNumberGame from './features/biggerNumber/BiggerNumberGame';
import HomePage from './features/menu/HomePage';
import Header from './components/Header';

function App() {
	return (
        <div className='App'>
			<Header/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/alphabet' element={<MatchingGame />} />
                <Route path='/biggernumbergame' element={<BiggerNumberGame />} />
                <Route path='/sightwords' element={<SightwordList />} />
                <Route path='/sightwords/practice' element={<SightWordPractice />} />
            </Routes>
        </div>
    );
}

export default App;
