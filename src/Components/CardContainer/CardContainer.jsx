
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import './cardcontainer.css'
import PropTypes from 'prop-types';


const CardContainer = ({HandelIsActiveState,isActive,HandelSelectedPlayer,selectedPlayer,addMorePlayer}) => {
   
  
    return (

        <div>
           <div  className='flex justify-between'>
           <h1 className="font-bold text-2xl"> {isActive.Available?"Available Players":`Selected Player(${selectedPlayer.length}/6)`}</h1>
          <div className='join'>
          <button onClick={()=>HandelIsActiveState('Available')} className={`btn join-item ${isActive.Available ?"active btn":"btn"}`} >Available</button>
          <button onClick={()=>HandelIsActiveState('Selected')} className={`btn join-item${isActive.Available ?"btn":"btn active"}`} >Selected ({selectedPlayer.length})</button>
          </div>
           </div>
         
            {isActive.Available?<Available HandelSelectedPlayer={HandelSelectedPlayer}></Available>:
            <Selected addMorePlayer={addMorePlayer} selectedPlayer={selectedPlayer}></Selected>}
            
        </div>
       
    );
};
CardContainer.propTypes = {
    HandelIsActiveState:PropTypes.func.isRequired,
    isActive:PropTypes.object.isRequired,
    HandelSelectedPlayer:PropTypes.func.isRequired
};

export default CardContainer;