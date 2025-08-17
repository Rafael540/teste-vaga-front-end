import CardParceiros from "../../../components/CardParceiros";
import ComprarCategoria from "../../../components/ComprarCategoria";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";
import NaveguePorMarcas from "../../../components/NaveguePorMarcas";
import NewsLetters from "../../../components/NewsLetters";
import ProdutosRelacionados from "../../../components/ProdutosRelacionados";
import ProdutosRelacionados2 from "../../../components/ProdutosRelacionados2";

export default function Home() {

    return (
        <>
            <main>
                <Hero />
                <ComprarCategoria />
                <ProdutosRelacionados />
                <CardParceiros />
                <ProdutosRelacionados2 />
                <CardParceiros />
                <NaveguePorMarcas />
                <ProdutosRelacionados2 />
                <NewsLetters />
                <Footer/>


            </main>
        </>
    );

}