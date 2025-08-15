import './styles.scss';

import computer from '../../assets/image.jpg'
import supermarket from '../../assets/supermarket.jpg'
import bootle from '../../assets/bootle.jpg'
import tools from '../../assets/tools.jpg'
import health from '../../assets/health.jpg'
import fitness from '../../assets/fitness.jpg'
import dress from '../../assets/dressing.jpg'

export default function ComprarCategoria() {

    return (
        <>
            <section className="ec-container">
                <div className='ec-category-card'>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying">
                            <img src={computer} alt=''></img>
                        </div>
                        <p><span>Tecnologia</span></p>
                    </div>
                    <div className='ec-card-content'>
                        <div className="ec-card-buying">
                            <img src={supermarket} alt=''></img>
                        </div>
                        <p>Supermercado</p>
                    </div>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying">
                            <img src={bootle} alt=''></img>
                        </div>
                        <p>Bebidas</p>
                    </div>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying">
                            <img src={tools} alt=''></img>
                        </div>
                        <p>Ferramentas</p>
                    </div>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying">
                            <img src={health} alt=''></img>
                        </div>
                        <p>Saúde</p>
                    </div>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying">
                            <img src={fitness} alt=''></img>
                        </div>
                        <p>Esportes e Fitness</p>
                    </div>

                    <div className='ec-card-content'>
                        <div className="ec-card-buying">
                            <img src={dress} alt=''></img>
                        </div>
                        <p>Moda</p>
                    </div>



                </div>
            </section>
        </>
    );
}