import CategoriasProdutos from '../CategoriasProdutos';
import './styles.scss'
import CardProducts from '../CardProducts';



export default function ProdutosRelacionados() {

    return (
        <>
            <section className='ec-container'>
                <div className='ec-relate-product'>
                    <div className="ec-relate-products-title">
                        <h1>Produtos relacionados</h1>
                    </div>
                    <CategoriasProdutos />
                    <div className='ec-relate-cards'>
                        <CardProducts/>
                        <CardProducts/>
                        <CardProducts/>
                        <CardProducts/>
                    </div>
                </div>

            </section>

        </>
    );

}