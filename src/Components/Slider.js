import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../assets/banners/Vaca_2.png'
import img2 from '../assets/banners/Vaca_4.png'
import img3 from '../assets/banners/Vaca_introspectiva.png'
import img4 from '../assets/banners/Vaca_5.png'
import img5 from '../assets/banners/Vaca_6.png'
import img6 from '../assets/banners/Vaca_7.png'

class Slider extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    render(){
        return(
            <div className = 'max-h-1/2 xl:max-h-full lg:max-h-full md:max-h-3/4 sm:max-h-1/2 mb-4'>
                 <Carousel showArrows = {true} showThumbs = {false} showStatus = {false} autoPlay={true}>
                <div className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen'>
                    <img className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen' src={img} />
                </div>
                <div className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen'>
                    <img className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen' src={img2} />
                </div>
                <div className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen'>
                    <img className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen' src={img3} />
                </div>
                <div className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen'>
                    <img className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen' src={img4} />
                </div>
                <div className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen'>
                    <img className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen' src={img5} />
                </div>
                <div className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen'>
                    <img className='h-halfScreen xl:h-screen lg:h-screen md:h-halfScreen sm:h-halfScreen' src={img6} />
                </div>
            </Carousel>
            </div>
        )
    }
}

export default Slider