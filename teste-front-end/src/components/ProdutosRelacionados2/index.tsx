
import './styles.scss'
import CardProducts from '../CardProducts';
import line2 from '../../assets/Line 26.svg'


export default function ProdutosRelacionados2() {

    return (
        <>
            <section className='ec-container'>
                <div className='ec-relate-product'>
                    <div className="ec-relate-products-title">
                        <div> <img src={line2} alt="" /></div>
                        <div><h1>Produtos relacionados</h1></div>
                        <div> <img src={line2} alt="" /></div>
                    </div>
                    <div className="ec-relate-products-subtitle">
                        <p>Ver todos</p>
                    </div>

                    <div className='ec-relate-cards'>

                        <CardProducts />

                    </div>

                </div>



            </section>

        </>
    );

}