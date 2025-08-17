import './styles.scss';

import computer from '../../assets/computer.png'
import supermarket from '../../assets/supermercados 1.png'
import bootle from '../../assets/bootle.png'
import tools from '../../assets/tools.png'
import health from '../../assets/health.png'
import fitness from '../../assets/fitness.png'
import dress from '../../assets/dressing.png'

export default function ComprarCategoria() {

    return (
        <>
            <section className="ec-container">
                <div className='ec-category-card'>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying ec-card-buying-white">
                            <img src={computer} alt=''></img>
                        </div>
                        <p><span>Tecnologia</span></p>
                    </div>
                    <div className='ec-card-content '>
                        <div className="ec-card-buying ec-card-buying-grey">
                            <img src={supermarket} alt=''></img>
                        </div>
                        <p>Supermercado</p>
                    </div>

                    <div className='ec-card-content '>
                        <div className="ec-card-buying ec-card-buying-grey">
                            <img src={bootle} alt=''></img>
                        </div>
                        <p>Bebidas</p>
                    </div>

                    <div className='ec-card-content '>
                        <div className="ec-card-buying ec-card-buying-grey">
                            <img src={tools} alt=''></img>
                        </div>
                        <p>Ferramentas</p>
                    </div>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying ec-card-buying-grey">
                            <img src={health} alt=''></img>
                        </div>
                        <p>Saúde</p>
                    </div>

                    <div className='ec-card-content '>
                        <div className="ec-card-buying ec-card-buying-grey">
                            <img src={fitness} alt=''></img>
                        </div>
                        <p>Esportes e Fitness</p>
                    </div>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying ec-card-buying-grey">
                            <img src={dress} alt=''></img>
                        </div>
                        <p>Moda</p>
                    </div>



                </div>
            </section>
        </>
    );
}