
import './styles.scss'
import CardProducts from '../CardProducts';



export default function ProdutosRelacionados2() {

    return (
        <>
            <section className='ec-container'>
                <div className='ec-relate-product'>
                    <div className="ec-relate-products-title">
                        <h1>Produtos relacionados</h1>
                    </div>
                    <div className="ec-relate-products-subtitle">
                        <p>Ver todos</p>
                    </div>
                    <div className='ec-relate-cards'>
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                    </div>
                </div>

            </section>

        </>
    );

}