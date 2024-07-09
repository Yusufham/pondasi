import React, {useState} from 'react';
import ButtonGroup from './Components/ButtonGroup';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3'
import './App.css'

const buttons = [
  "Cara Daftar", "Cara isi deposit"
]

const RenderComponents = ({index}) =>{
  switch (index) {
    case 0: return <Comp1 />
      break;
    case 1: return <Comp2 />
      break;
    default:
    break;
  }
}
function App() {
  const [isSelected, setIsSelected] = useState(0)
  return (
    <div>
      <div className='navbar'>   
        <ButtonGroup buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      <div>
        <RenderComponents index={isSelected} />
      </div>
    </div>
  )
}
export default App;
