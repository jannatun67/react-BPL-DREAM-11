
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Available = ({HandelSelectedPlayer}) => {
  const [cards,setCard]= useState([]);

  useEffect(() =>{
      fetch('Player.json')
      .then(res => res.json())
      .then(data => setCard(data))
      
  },[])
    return (
        <div className='mt-9'>
        
          <div className='md:grid md:grid-cols-3 gap-3'>
          {
            cards.map((card,index)=> <Card HandelSelectedPlayer={HandelSelectedPlayer} key={index} card={card}></Card>)
          }
          </div>
        </div>
    );
};
Available.propTypes ={
  HandelSelectedPlayer:PropTypes.func.isRequired
}

export default Available;