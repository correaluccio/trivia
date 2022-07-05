import React, { useContext, useEffect, useState } from 'react'
import Options from '../options/Options'
import './trivia.css'
import { getQuestions } from '../../functions/getQuestions'
import Tags from '../../components/tags/Tags'


const Trivia = ({category}) => {


  

  const [answered, setAnswered] = useState(false)
   
  const answer = () =>{
    setAnswered(true)
  }

  const [indice, setIndice] = useState(0)
  const cambiarIndice = () =>{
    setIndice ( indice + 1)
    setAnswered(false)
  }

 

  useEffect(()=>{ 
    getQuestions(setChoices,category)
    setAnswered(false) },[indice,category])
  

  const mezclarArreglo = arreglo => {
    for (let i = arreglo.length - 1; i > 0; i--) {
      let indiceAleatorio = Math.floor(Math.random() * (i + 1));
      let temporal = arreglo[i];
      arreglo[i] = arreglo[indiceAleatorio];
      arreglo[indiceAleatorio] = temporal;
    }
  }



  
  const [choices, setChoices] = useState(null)
  const [prueba, setPrueba] = useState(null)

  let options = []
  useEffect(()=>{if(choices != null){
    options=[]
    choices[0].incorrectAnswers.forEach(element => {
      options.push({"question":element, "isTrue":false})
    });
    options.push({"question":choices[0].correctAnswer, "isTrue": true})
    mezclarArreglo(options)
    setPrueba(options)
  }},[choices])


  

  return (
    <>
    
    <div className="trivia__container">
    
      {choices != null ? <p className='question'>{choices[0].question}</p> : ''}
      {category != '' ? <h2>Category: {category}</h2> : '' }
      
      {prueba != null  
      ?
        (<div className='choices__container'> {prueba.map((e)=>(<Options choice={e.question} isTrue={e.isTrue} handleClick={answer} answered={answered}/>))} </div>)
                          
      : ''}
    

        <button onClick={cambiarIndice} className={answered ? 'btn__siguiente' : 'none'}>Siguiente pregunta</button>
    </div>
    </>
  )
}

export default Trivia