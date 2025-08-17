import './styles.scss'

import logo from '../../assets/Logo (1).jpg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import line from '../../assets/Line.png'


export default function Footer() {

    return (
        <>
            <div className='ec-footer-background'>
                <nav className='ec-container '>
                    <div className='ec-footer-box'>
                        <div className='ec-footer-logo'>
                            {/*Title logo*/}
                            <div className='ec-footer-logo-title'>
                                <img src={logo} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            {/*Logo Social Media*/}
                            <div className='ec-footer-logo-social'>
                                <a href="#"> <img src={instagram} alt="" /></a>
                                <a href="#"> <img src={facebook} alt="" /></a>
                                 <a href="#"> <img src={linkedin} alt="" /></a>

                            </div>

                        </div>
                        <div className='ec-footer-line'>
                            <img src={line} alt="" />

                        </div>

                        <div className='ec-footer-nav'>
                            <div className='ec-footer-nav-institucion'>
                                <p>Institucional</p>
                                <ul>
                                    <a href="">Sobre Nós</a>
                                    <a href="">Movimento</a>
                                    <a href="">Trabalhe conosco</a>
                                </ul>
                            </div>
                             <div className='ec-footer-nav-help'>
                                <p>Ajuda</p>
                                <ul>
                                    <a href="">Suporte</a>
                                    <a href="">Fale Conosco</a>
                                    <a href="">Perguntas Frequentes</a>
                                </ul>
                            </div>
                             <div className='ec-footer-nav-terms'>
                                <p>Termos</p>
                                <ul>
                                    <a href="">Termos e Condições</a>
                                    <a href="">Política de Privacidade</a>
                                    <a href="">Troca e Devolução</a>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
                    
            </div>
            <div className='ec-copyright'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
             </div>
            </>
            );
}

//<div className='ec-footer-box'>
             
//
//                          </div>
//
//                      </div>
//                    <div className='ec-footer-div'>
//                      <img src={line} alt="" />
//                </div>
//              <div className='ec-footer-nav'>
//
//                      </div>




//</div>

//}