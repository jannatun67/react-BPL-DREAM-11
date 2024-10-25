

const Selected = ({selectedPlayer,addMorePlayer}) => {
    console.log(selectedPlayer);
    return (
        <div className="mt-7">
            {
                selectedPlayer.map((Player) =>(
                    <div>
                       <div className="border rounded-lg p-3 flex justify-between items-center">
                        <div className="flex gap-5 items-center">
                        <img className="h-[200px] rounded-xl" src={Player.image} alt="" />
                       <div> 
                        <p>{Player.name}</p>
                        <p>{Player.biddingPrice}</p>
                        <p>{Player.country}</p>
                        <p>{Player.role}</p>
                        <p>{Player.bowlingType}</p>
                        <p>{Player.biddingPrice}</p>
                        </div>
                        </div>
                        <div>
                            <button className="text-5xl"><i class="fa-solid fa-trash"></i></button>
                        </div>
                       </div>
                    </div>
                ))
            }
            <div className="mt-5">
            <button onClick={addMorePlayer} className='bg-yellow-300 px-4 py-2 rounded-xl btn'>Add More Player</button>
            </div>
        </div>
    );
};

export default Selected;