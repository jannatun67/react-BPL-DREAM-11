// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'


import CardContainer from './Components/CardContainer/CardContainer'

import Header from './Components/Header/Header'

function App() {
  const [selectedPlayer, setSelectedPlayer]= useState([])

  const [isActive, setIsActive]= useState({
    Available:true,
    Status:'active'
  })
  const HandelIsActiveState= (status) =>{
    if (status == 'Available') {
      setIsActive({
         Available:true,
          Status:'active'
      })
    }else{
      setIsActive({
         Available:false,
          Status:'active'
      })
    }
  }

 
  const HandelSelectedPlayer= (Player) =>{
    const isExist=selectedPlayer.find((p) => p.playerId == Player.playerId)
   

  if (isExist) {
    // toast.warn("Wow so easy!");
    alert('isExist')
  }else{
    const newSelectedPlayer = [...selectedPlayer, Player ]
    setSelectedPlayer(newSelectedPlayer)
  }
  }
  
  const [add , setAdd]= useState(true)
  const addMorePlayer=()=>{
    setAdd(add)
    console.log(add);

  }
 
 
  return (
    <>
      <div className='w-11/12 mx-auto p-4'>
      {/* header */}
      <Header></Header>
    
     
      {/* Available Player */}
     <div>
     <CardContainer addMorePlayer={addMorePlayer} selectedPlayer={selectedPlayer} HandelSelectedPlayer={HandelSelectedPlayer} isActive={isActive} HandelIsActiveState={HandelIsActiveState}></CardContainer>
    
     </div>
     {/* <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> */}
      </div>
    </>
  )
}

export default App
