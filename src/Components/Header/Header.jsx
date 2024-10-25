import { useState } from 'react';
import banner from '../../assets/image/banner-main.png'
import profile from '../../assets/image/logo.png'
import './Header.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const[coin, setCoin]= useState(0)

    const HandelCoinBtn = () => {
        setCoin(coin + 800000000)
        // toast("Wow so easy!");
    }
    
 
    return (
        
        <div>
            <div className=" flex justify-between items-center text-center mb-10">
            <div >
                <img  src={profile} alt="" />
                </div>
            <div className="flex gap-3 items-center">
                <ul className="text-gray-500  gap-9 hidden md:flex"> 
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <button  className="border px-4 py-2 font-bold rounded-xl text-gray-900">{coin} coin <i className="fa-solid fa-coins"></i></button>
            </div>
            </div>
            <main>
            <div className=" banner flex flex-col items-center justify-center space-y-5 mb-10 p-2 md:p-7 rounded-xl">
           <div>
            <img src={banner} alt="" />
           </div>
           <div className='space-y-2'>
           <h1 className='md:text-4xl text-xl font-extrabold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
           <p className='text-center font-medium text-gray-500'>Beyond Boundaries Beyond Limits</p>
           </div>
           <div>
            <button  onClick={HandelCoinBtn} className='bg-yellow-300 px-4 py-2 rounded-xl btn'>Claim Free Credit</button>
           </div>
        </div>
        {/* <ToastContainer /> */}
            </main>
        </div>
       
    );
};

export default Header;