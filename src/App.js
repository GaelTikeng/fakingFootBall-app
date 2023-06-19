import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './pages/pronostics/home/header';
import SelectTeam from './components/teamsInput';
import TeamCart from './pages/pronostics/pronostics';
import { ContextProvider } from './utiles/Context';


function App() {
  const clubTeam1 = JSON.parse(localStorage.getItem('club1'));
  const clubTeam2 = JSON.parse(localStorage.getItem('club2'));
  const countryTeam1 = JSON.parse(localStorage.getItem('contry1'));
  const countryTeam2 = JSON.parse(localStorage.getItem('contry2'));
  const scoreCountry1 = JSON.parse(localStorage.getItem('score1'));
  const scoreCountry2 = JSON.parse(localStorage.getItem('score2'));
  const scoreClub1 = JSON.parse(localStorage.getItem('score3'));
  const scoreClub2 = JSON.parse(localStorage.getItem('score4'));



  return (
    <div className="App">
      <ContextProvider value = {{clubTeam1, clubTeam2, countryTeam1, countryTeam2, scoreCountry1, scoreCountry2, scoreClub1, scoreClub2}} >
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<SelectTeam/>} />
            <Route path='/TeamCart' element={<TeamCart/>} />
          </Routes>
          
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
