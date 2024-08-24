import React from 'react'
import Collage from './Collage'
import sir1 from '../../assets/Sir1.png'
import sir2 from '../../assets/VShah.png'
import '../Teamspage/teams.css'
import ujjwalS from '../../assets/ujjalSir.png'
import Map from "../../components/GoogleMapComponent"
import Pic from "./pic.jsx"
import TextBox from "./TextBox.jsx"
import DD from "./dropDown.jsx"

function Teamspage() {
    return (
        <>

        






            <div className=' p-10 hero-2'>
                <div className='p-1'> <h3 className='text-xl flex justify-center mt-8 font-semibold mb-4'><span className='bg-yellow-300 pt-2 pb-2 pl-4'>Your  </span>  Waste is Precious</h3>
                    <h2 className='text-2xl font-bold mb-4 '>Pick-Up Service</h2>

                </div>
                <div className='flex flex-container m-8'>
                    
                        <div className='prof flex flex-col justify-center align-items'>
                            
                            <div className='text m-0 flex align-center text-center'>
                                <div className='flex flex-col'>
                                <p className='text-center'>How old is your gold (e-Kachra)</p>
                               
                                </div>
                                
                            </div>
                            <TextBox/>

                            <div className='text pt-8 m-0 flex align-center text-center'>
                                <div className='flex flex-col'>
                                <p className='text-center'>Type of e-Kachra</p>
                                
                                </div>
                                
                            </div>
                            <DD/>

                            <div className='text pt-8 m-0 flex flex-col align-center text-center'>
                                <div className='flex'>
                                <p className='text-center'>Upload the picture</p>
                                
                                </div>
                                <div className='left-0'>
                                <Pic/> 
                                </div>
                            </div>
                            
                            
                            
                        </div>
                        

                    
                    
                </div>
                
                
                <div className='columns'>
                    <div className='p-1'>
                        <h2 className='text-2xl font-bold mt-16 mb-8'>Find Our Nearest KUDAPETI</h2>
                    </div>
                    
                </div>
                <div className='flex justify-center'>
                <Map/>
                </div>
            </div>
        </>
    )
}

export default Teamspage