import logo from '../../teste-front-end/src/assets/Logo (1).jpg'
import search from '../../teste-front-end/src/assets/MagnifyingGlass.svg'
import box from '../../teste-front-end/src/assets/Box.svg'
import heart from '../../teste-front-end/src/assets/Heart.svg'
import profile from '../../teste-front-end/src/assets/UserCircle.svg'
import cart from '../../teste-front-end/src/assets/ShoppingCart.svg'
import shield from '../../teste-front-end/src/assets/ShieldCheck.svg'
import truck from '../../teste-front-end/src/assets/Truck.svg'
import card from '../../teste-front-end/src/assets/CreditCard.svg'

export default function App() {


  return (
    <header className="ec-container">


      <nav  >
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
          <div className="ec-search-bar">
            <input
              type="text"
              placeholder="O que voce esta buscando?"
              className="ec-search-input"
            />
            <button type="submit" className="ec-search-button">
              <img src={search} alt="Buscar" />
            </button>
          </div>

          <div className='ec-search-icons'>
            <img className='ec-icons' src={box} alt="" />
            <img className='ec-icons' src={heart} alt="" />
            <img className='ec-icons' src={profile} alt="" />
            <img src={cart} alt="" />
          </div>
        </div>






      </nav>

    </header >
  );


}
