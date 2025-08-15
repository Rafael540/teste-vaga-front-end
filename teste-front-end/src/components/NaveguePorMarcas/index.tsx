import './styles.scss'

import logo from '../../assets/Logo (1).jpg'

export default function NaveguePorMarcas() {

    return (

        <>
            <section className="ec-container">
                <div>
                    {/* Título*/}
                    <div className="ec-brand-text">
                        <h1>Navegue por nossas marcas</h1>
                    </div>

                    {/* Cards brands*/}
                    <div className='ec-brands-box'>
                        <div className='ec-brands-1'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='ec-brands'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='ec-brands'>
                            <img src={logo} alt="" />
                        </div>

                        <div className='ec-brands'>
                            <img src={logo} alt="" />
                        </div>

                        <div className='ec-brands'>
                            <img src={logo} alt="" />
                        </div>



                    </div>



                </div>

            </section>
        </>
    );
}