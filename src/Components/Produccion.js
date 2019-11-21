import React, {Component} from 'react';
import img from '../assets/DSC01224.jpg'
class Produccion extends Component{
    constructor(props){
        super(props)
        this.props = props 
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    render(){
        if(this.state.width >= 1280){
        return(
            <div >
                <div className='flex flex-row h-auto max-w-full'>
                <section className = 'w-1/2 flex flex-col justify-center p-24'>
                    <h2 className = 'text-left font-sans font-bold text-5xl'>PRODUCCIÓN</h2>
                    <h2 className= 'text-left font-sans font-bold text-5xl mb-5'>DE LECHE</h2>
                    <p className='mb-3 text-justify'>En la medida que utilizamos el cruce de razas por excelencia altamente productoras de leche como los son las holstein, jersey, rojo sueco y pardo suizo, hemos obtenido híbridos muy resistentes, fuertes en estructura y altamente productoras de leche de alta calidad con alto contenido de sólidos, grasa y proteína</p>
                </section>    
                    <section title='Descripción de la hacienda' className = 'w-1/2 flex flex-col justify-center'>
                    <img src={img} className='object-contain p-20 xl:p-8 lg:p-20 md:p-20 sm:p-20'/>
                </section>
                </div>
        </div>
        )}
        else{
            return(
                <div >
                    <div className='flex flex-col h-auto max-w-full mb-12'>
                    <section className = 'w-full flex flex-col justify-center xl:pl-0 xl:pr-0 lg:pl-32 lg:pr-32 md:pl-24 md:pr-24 pl-8 pr-8'>
                        <h2 className= 'text-center font-sans font-bold text-3xl mb-5'>PRODUCCIÓN DE LECHE</h2>
                        <p className='mb-3 text-justify'>Iniciamos con vacas criollas de promedio de producción de leche de 8 litros día por vaca y en la actualidad de acuerdo a mejoramiento genético por inseminación y transplante de embriones, tenemos vacas de alta producción que en sus picos están por encima de 40 litros.</p>
                    </section>    
                        <section title='Descripción de la hacienda' className = 'w-full flex flex-col justify-center lg:pl-8 lg:pr-8 md:pl-6 md:pr-6 pl-2 pr-2'>
                        <img src={img} className='object-contain p-8 xl:p-8 lg:p-20 md:p-20 sm:p-8'/>
                    </section>
                    </div>
            </div>
            )
        }
    }
}

export default Produccion