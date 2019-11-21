import React, {Component} from 'react';
import img from '../assets/DSC_0184.jpg'
class Sobre extends Component{
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
            <div>
                <section title='Descripción de la hacienda' className = 'flex flex-row justify-between  mt-40'>
                    <div title='imagen' className='flex flex-row w-1/2' >
                        <img src={img} alt='' className='object-contain h-full pr-12' title='Imagen de arbol hacienda'/>
                    </div>
                    <div title='texto de la descripción' className='w-1/2 p-20 pl-0 pr-24'>
                        <h2 className='text-left font-sans font-bold text-5xl'>SOBRE</h2>
                        <h2 className='mb-5 text-left font-sans font-bold text-5xl'>NOSOTROS</h2>
                        <p className='mb-3 text-justify'>La hacienda La Dominguera inicio trabajos de mejoramiento genético especializado en la producción de leche hace más de 35 años y para esto, inicialmente se adquirieron animales de raza Holstein puro con registro y se inicio cruzamiento con otras razass como Jersey y Rojo sueco; esto con el fin de desarrollar una vaca eficiente, funcional y adaptada a nuestras condiciones topográficas y climáticas.</p>
                        <p className='mb-3 text-justify'>
                            Estos cruces nos proporcionan vigor híbrido, fortaleza, resistencia, adaptación al pastores y regulación de tamaño, pues consideramos que una de las condiciones fenotípicas primordiales es la estructura o tamaño del animal, el cual debe ser de tamaño mediano y debe tener la piel bien pigmentada, bien estructurado y de patas fuertes, así como longevidad y alta producción. Todo este proceso se ha desarrollado a través de la transferencia de embriones y la inseminación artificial utilizando semen de los mejores toros del mundo de cada raza.
                        </p>
                        <p className='mb-3 text-justify'>
                        Actualmente, de acuerdo a las exigencias y evolución del mercado estamos incorporando a estos cruces la razas Gyr lechero y Pardo suizo.
                       </p>
                    </div>
                </section>
            </div>
        )}
        else{
            return(
                <div>
                    <section title='Descripción de la hacienda' className = 'flex flex-col justify-between  mt-24'>
                        
                        <div title='texto de la descripción' className='w-full pl-4 pr-4'>
                            <h2 className='text-center font-sans font-bold text-3xl mb-5'>SOBRE NOSOTROS</h2>
                            <p className='mb-3 text-justify'>La hacienda La Dominguera inicio trabajos de mejoramiento genético especializado en la producción de leche hace más de 35 años y para esto, inicialmente se adquirieron animales de raza Holstein puro con registro y se inicio cruzamiento con otras razass como Jersey y Rojo sueco; esto con el fin de desarrollar una vaca eficiente, funcional y adaptada a nuestras condiciones topográficas y climáticas.</p>
                            <p className='mb-3 text-justify'>
                                Estos cruces nos proporcionan vigor híbrido, fortaleza, resistencia, adaptación al pastores y regulación de tamaño, pues consideramos que una de las condiciones fenotípicas primordiales es la estructura o tamaño del animal, el cual debe ser de tamaño mediano y debe tener la piel bien pigmentada, bien estructurado y de patas fuertes, así como longevidad y alta producción. Todo este proceso se ha desarrollado a través de la transferencia de embriones y la inseminación artificial utilizando semen de los mejores toros del mundo de cada raza.
                            </p>
                            <p className='mb-3 text-justify'>
                            Actualmente, de acuerdo a las exigencias y evolución del mercado estamos incorporando a estos cruces la razas Gyr lechero y Pardo suizo.
                           </p>
                        </div>
                        <div title='imagen' className='flex flex-row w-full  mb-12' >
                            <img src={img} alt='' className='object-contain h-full lg:pl-8 lg:pr-8 md:pl-6 md:pr-6 pl-2 pr-2' title='Imagen de arbol hacienda'/>
                        </div>
                    </section>
                </div>
            )
        }
    }
}

export default Sobre