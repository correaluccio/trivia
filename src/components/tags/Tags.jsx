import React from 'react'
import './tags.css'

const Tags = ({elegirCategoria}) => {

  function generarLetra(){
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero = (Math.random()*15).toFixed(0);
    return letras[numero];
  }
    
  function colorHEX(){
    var coolor = "";
    for(var i=0;i<6;i++){
      coolor = coolor + generarLetra() ;
    }
    return "#" + coolor;
  }

  const tags = ['Sport & Leisure','Film & TV','Music',
  'Art','Science','Food & Drink','General Knowledge','Society & Culture','Geography','History']

  return (
    <div className="tags__container">
      {tags.map((e)=>(<p onClick={()=>elegirCategoria(e)} style={{'background-color':'#1aa686'}} className='tag'>{e}</p>))}
    </div>
  )
}

export default Tags