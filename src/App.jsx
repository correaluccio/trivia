import './App.css'
import Trivia from './components/trivia/Trivia'
import Tags from './components/tags/Tags'
import { useState } from 'react'


function App() {

  const [category, setCategory] = useState('')

  const elegirCategoria = (e)=>{
    setCategory(e)
    console.log(e)
  }


  return (
    <div className="App">
      <Tags elegirCategoria={elegirCategoria}/>
      <Trivia category={category}/>
    </div>
  )
}

export default App
