import PropTypes from 'prop-types';

const Card = ({card,HandelSelectedPlayer}) => {
 
    const {name,image,country,role,battingType,bowlingType ,biddingPrice,playerId}= card

    return (
        <div className='mt-5'>
           <div className='space-y-3 border p-3 rounded-lg'>
           <img className='w-full h-[300px]' src={image} alt="" />
           <h1 className='font-semibold text-xl'><i className="fa-solid fa-user"></i> {name}</h1>
          <div className='flex justify-between'>
          <p className='text-gray-400'><i className="fa-solid fa-flag"></i> {country}</p>
          <p className='font-bold btn '>{role}</p>
          </div>
           <hr />
           <p className='font-bold'>Rating</p>
           <div className='flex justify-between'>
           <p className='font-bold'>{battingType}</p>
           <p className='font-bold'>{bowlingType}</p>
           </div>
           
          <div className='flex justify-between items-center'>
          <p className='font-bold'>{biddingPrice}</p>
          <button onClick={() =>HandelSelectedPlayer(card)} className='text-gray-400 border p-2 rounded-lg'>Choose Player</button>
          </div>
           </div>
        </div>
    );
};
Card.propTypes={
    card:PropTypes.object.isRequired,
    HandelSelectedPlayer:PropTypes.func.isRequired
}
export default Card;