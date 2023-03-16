import { useEffect } from 'react'

import './App.css'
import * as C from './App.styles'
import { Character } from './components/Character' 
import { useCaracter } from './hooks/useCharacter'

const App = () => {

  const dpm =  useCaracter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  },[])

  const handleKeyDown = (e: KeyboardEvent) =>{
    switch(e.code){

      case 'KeyA':
      case 'ArrowLeft':
        dpm.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        dpm.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        dpm.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        dpm.moveDown();
      break;
    }
  }

  return (
    <C.Conteiner>
      <C.Map>
        <Character x={dpm.x} y={dpm.y} side={dpm.side}/>
      </C.Map>
    </C.Conteiner>
  )
}

export default App;
