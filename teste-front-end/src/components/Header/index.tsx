import logo from '../../assets/Logo (1).jpg'
import search from '../../assets/MagnifyingGlass.svg'
import box from '../../assets/box.svg'
import heart from '../../assets/Heart.svg'
import profile from '../../assets/UserCircle.svg'
import cart from '../../assets/ShoppingCart.svg'
import shield from '../../assets/ShieldCheck.svg'
import truck from '../../assets/Truck.svg'
import card from '../../assets/CreditCard.svg'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import crown from '../../assets/CrownSimple.svg'

import '../Header/styles.scss'


export default function Header() {

    return (
        <header className="ec-container">
            <nav >

                <div className="ec-vantagens">
                    <div className="ec-shield">
                        <img src={shield} alt="shield" />
                        <p>Compra <span>100% segura</span> </p>
                    </div>
                    <div className="ec-truck">
                        <img src={truck} alt="truck" />
                        <p><span>Frete grátis</span> acima de R$ 200 </p>
                    </div>
                    <div className="ec-card">
                        <img src={card} alt="card" />
                        <p><span>Parcele </span>  suas compras </p>
                    </div>
                </div>

                <div className='ec-navbar'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='ec-search-box'>
                        <form className="ec-search-bar">
                            <input
                                type="text"
                                placeholder="O que voce esta buscando?"
                            />
                            <button type="submit"  >
                                <img src={search} alt="Buscar" />
                            </button>
                        </form>
                    </div>
                    <div className='ec-search-icons'>
                        <img className='ec-icons' src={box} alt="" />
                        <img className='ec-icons' src={heart} alt="" />
                        <img className='ec-icons' src={profile} alt="" />
                        <img src={cart} alt="" />
                    </div>

                </div>

                <div className='ec-category'>
                    <ul>
                            <a className='ec-category-link'   href="#">TODAS CATEGORIAS</a>
                      
                            <a className='ec-category-link'  href="#">SUPERMERCADO</a>
                       
                            <a className='ec-category-link' href="#">LIVROS</a>
                        
                            <a className='ec-category-link'  href="#">MODA</a>
                       
                            <a className='ec-category-link'  href="#">LANÇAMENTOS</a>
                      
                            <a className='ec-category-link' href="#"><span>OFERTAS DO DIA</span></a>

                            <a className='ec-category-link'  href="#"><img src={crown} alt="" />ASSINATURAS</a>
                    </ul>
                </div>






            </nav>

        </header >
    );

}