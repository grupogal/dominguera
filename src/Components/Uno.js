import React, {Component} from 'react';
import './style.css'
import Slider from './Slider'
import Empresa from './Empresa'
import img from '../assets/HOME/EMPRESA/Vaca_1.png'
import footer from '../assets/HOME/FOOTER/Vaca_3.png'
import Genetico from './Genetico'
import Produccion from './Produccion'
import NuestraRep from './NuestraRep'
class Uno extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    render(){
        return(<div>
                <Slider />
                <Empresa />
                <div className='w-full'>
                    <img src={img} className='w-full h-screen'/>
                </div>
                <Genetico />
                <Produccion/>
                <NuestraRep />
                <div className='w-full'>
                    <img src={footer} className='footer'/>
                </div>
             </div>)
    }
}


export default Uno