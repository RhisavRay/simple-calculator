import { useRef, useState } from 'react';
import './App.css';

function App()
{
  const inputRef = useRef(null)
  const resultRef = useRef(null)
  const [result, setResult] = useState(0)
  var Input = document.getElementById('input')

  function plus(e)
  {
    e.preventDefault()
    setResult((result) => result + Number(inputRef.current.value))
    inputRef.current.value = null
    Input.placeholder = 'Type a number...'
  }
  
  function minus(e)
  {
    e.preventDefault()
    setResult((result) => result - Number(inputRef.current.value))
    inputRef.current.value = null
    Input.placeholder = 'Type a number...'
  }

  function mul(e)
  {
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value))
    inputRef.current.value = null
    Input.placeholder = 'Type a number...'
  }

  function div(e)
  {
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
    inputRef.current.value = null
    Input.placeholder = 'Type a number...'
  }

  function resetInput(e)
  {
    e.preventDefault()
    inputRef.current.value = null
    Input.placeholder = 'Type a number...'
  }

  function resetResult(e)
  {
    e.preventDefault()
    setResult((prevVal) => prevVal = 0)
  }

  return(
    <div className='App'>
      <div>
        <h1>Simple Working Calculator</h1>
        <p>Remember, these calculations are done keeping in mind that the first input of 0 is already given</p>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
        id='input'
        pattern='[0-9]'
        ref={inputRef}
        type='number'
        placeholder='Type a number...'/>
        <br></br>
        <button className='b' onClick={plus}>Add</button>
        <button className='b' onClick={minus}>Subtract</button>
        <button className='b' onClick={mul}>Multiply</button>
        <button className='b' onClick={div}>Divide</button>
        <button className='bs' onClick={resetInput}>Reset Input</button>
        <button className='bs' onClick={resetResult}>Reset Result</button>
      </form>
      <p className='footer'>Made by Rhisav Ray</p>
    </div>
  )
}

export default App;