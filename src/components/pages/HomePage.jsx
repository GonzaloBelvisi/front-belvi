import { ComponentesCard } from "../common/ComponentesCard"
import Grafica from '../../assets/Images/Grafica.jpg'
import procesador from '../../assets/Images/Procesador.jpg'
import ram from '../../assets/Images/RAM.jpg'
import placa from '../../assets/Images/Placa.jpg'
import ssd from '../../assets/Images/SSD.jpg'
import fuente from '../../assets/Images/fuente.jpg'

export function HomePage() {
    return (
        <div className="App">
            <main>
                <div className='container-cover'>
                    <section className='banner'>
                        <a href="#componentes">
                            <h1>Componentes</h1>
                        </a>
                    </section>
                    <div className='blocks' id="componentes">
                        <ComponentesCard title="Grafica" img={Grafica} info="Una tarjeta gráfica es una tarjeta de expansión de la placa base del ordenador que se encarga de procesar los datos provenientes de la unidad central de procesamiento (CPU) y transformarlos en información comprensible y representable
                        en el dispositivo de salida (por ejemplo: monitor, televisor o proyector)" />
                        <ComponentesCard title="Procesador o CPU" img={procesador} info="La unidad central de procesamiento o procesador es el hardware dentro de un computador, teléfonos inteligentes y otros dispositivos programables. Su trabajo es interpretar las instrucciones de un programa informático mediante la realización
                        de las operaciones básicas aritméticas, lógicas y externas." />
                        <ComponentesCard title="RAM" img={ram} info="La memoria de acceso aleatorio se utiliza como memoria de trabajo de computadoras y otros dispositivos para el sistema operativo, los programas y la mayor parte del software. La memoria RAM pueden enlentecer tu computadora si no hay
                        cantidad suficiente para que el procesador realice las tareas que le solicitas." />
                    </div>
                    <div className='blocks'>
                        <ComponentesCard title="Placa Madre" img={placa} info="La placa base, también conocida como tarjeta madre, placa madre o placa principal, es una tarjeta de circuito impreso a la que se conectan los componentes que constituyen la computadora. Es una parte fundamental para montar cualquier
                        computadora personal de escritorio o portátil o algún dispositivo" />
                        <ComponentesCard title="SSD" img={ssd} info="Una memoria de estado sólido SSD es un dispositivo de almacenamiento, no volátil, fabricado exclusivamente con componentes electrónicos. Está pensado para utilizarse en equipos informáticos en sustitución de una unidad de disco duro
                        convencional, como memoria auxiliar o para crear unidades híbridas HHDD compuestas por SSD y disco duro." />
                        <ComponentesCard title="Fuente de alimentacion" img={fuente} info="En electrónica, la fuente de alimentación o fuente de potencia es el dispositivo que convierte la corriente alterna, en una o varias corrientes continuas, que alimentan los distintos circuitos del aparato electrónico al que se conecta." />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;


