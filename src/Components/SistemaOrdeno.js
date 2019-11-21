import React, {Component} from 'react';
import img from '../assets/DSC_0325.jpg'
class SistemaOrdeno extends Component{
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
                    <section title='Descripción de la hacienda' className = 'flex flex-row justify-between max-h-screen mb-8 mt-32'>
                        
                    <div title='imagen' className='flex flex-row w-1/2 pr-16' >
                            <img src={img} className='object-contain h-full w-full object-right' title='Imagen de arbol hacienda'/>
                        </div>
    
                        <div className='flex flex-column justify-center w-1/2'>
                        <div title='texto de la descripción' className=' p-20 pl-0 pr-24 center '>
                            <h2 className='text-left font-sans font-bold text-5xl'>SISTEMA</h2>
                            <h2 className='mb-5 text-left font-sans font-bold text-5xl'>DE ORDEÑO</h2>
                            <p className='mb-3 text-justify'>
                                Nuestro sistema de ordeño es atípico a nivel del suroccidente colombiano, pues esta labor la desarrollamos directamente en los potreros sin desplazar a los animales hasta una sala de ordeño, evitando así el desgaste físico y merma de producción a causa de extensas caminatas que se deberían hacer diariamente.
                            </p>
                            <p className='mb-3 text-justify'>
                                Para cumplir con esta labor, se estableció una red de tubería enterrada que cubre todos los potreros destinados a la producción de leche, por dicha tubería se transporta el vacío necesario para realizar la labor del ordeño mecánico en módulos o establos portátiles para un total de 12 puestos de ordeño de leche se entrega a cantina, las cuales son transportadas en carretilla tirada por caballo hasta los tanques de enfriamiento, así mismo, se movilizan las cantinas y el alimento.   
                            </p>
                            <p className='mb-3 text-justify'>
                               La bomba o maquinaría para producir el vacío se encuentra estacionada en la zona de máquinas.
                            </p>
                        </div>  
                        </div>
                        
                    </section>
                </div>
            )
        }
        else{
            return(
                <div>
                    <section title='Descripción de la hacienda' className = 'flex flex-col justify-between max-h-screen mb-8 mt-24'>
                        
                    
    
                        <div className='flex flex-column items-center w-full'>
                        <div title='texto de la descripción' className=' center w-4/5 '>
                            <h2 className='text-center font-sans font-bold text-5xl'>SISTEMA</h2>
                            <h2 className='mb-5 text-center font-sans font-bold text-5xl'>DE ORDEÑO</h2>
                            <p className='mb-3 text-justify'>
                                Nuestro sistema de ordeño es atípico a nivel del suroccidente colombiano, pues esta labor la desarrollamos directamente en los potreros sin desplazar a los animales hasta una sala de ordeño, evitando así el desgaste físico y merma de producción a causa de extensas caminatas que se deberían hacer diariamente.
                            </p>
                            <p className='mb-3 text-justify'>
                                Para cumplir con esta labor, se estableció una red de tubería enterrada que cubre todos los potreros destinados a la producción de leche, por dicha tubería se transporta el vacío necesario para realizar la labor del ordeño mecánico en módulos o establos portátiles para un total de 12 puestos de ordeño de leche se entrega a cantina, las cuales son transportadas en carretilla tirada por caballo hasta los tanques de enfriamiento, así mismo, se movilizan las cantinas y el alimento.   
                            </p>
                            <p className='mb-3 text-justify'>
                               La bomba o maquinaría para producir el vacío se encuentra estacionada en la zona de máquinas.
                            </p>
                        </div>  
                        </div>
                        <div title='imagen' className='flex flex-row w-7/8 pr-2 pl-2 ' >
                            <img src={img} className='object-contain h-full w-full object-right' title='Imagen de arbol hacienda'/>
                        </div>
                    </section>
                </div>
            )
        }
       
    }
}

export default SistemaOrdeno