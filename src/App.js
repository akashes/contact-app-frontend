import './App.css';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import View from './pages/View';
import Edit from './pages/Edit';
import Add from './pages/Add';
import PageNotFound from './pages/PageNotFound';
function App() {
  const currentTheme=localStorage.getItem('currentTheme')
 
  const[theme,setTheme]=useState(currentTheme?currentTheme:'light')

  useEffect(()=>{
    localStorage.setItem("currentTheme",theme)

  },[theme])
  return (
    <div className={`main-container ${theme}`}>
      <Header setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/add' element={<Add/>} />
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
      <hr />
      <Footer/>
     
    </div>
  );
}

export default App;
