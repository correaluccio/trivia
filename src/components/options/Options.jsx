
import './options.css'

const Options = ({choice, isTrue, handleClick, answered}) => {

  let clase = null
  if(isTrue){clase = 'correct option'}
    else{
      clase = 'false option'
    }

  return (
    <div className={answered ? clase : 'option'} onClick={handleClick}>
      <p className='choice__p'>{choice}</p>
    </div>
  )
}

export default Options