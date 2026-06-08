import { useState, useEffect } from 'react'
import './App.css'

import NavBar from './components/navbar.jsx';
import ContentBox from './components/contentbox.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [curState, setCurState] = useState('home');

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 10)
  }, [])

  return (
    <div id="app">
      <NavBar curState={curState} setCurState={setCurState}/>
      <div id="app-content">
        <ContentBox curState={curState} setCurState={setCurState}/>
        <Footer curState={curState} setCurState={setCurState}/>
      </div>
    </div>
  )
}

export default App
