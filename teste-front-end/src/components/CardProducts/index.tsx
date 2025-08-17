import ButtonPrimary from "../ButtonPrimary";
import { useEffect, useState, useRef } from "react";
import left from "../../assets/chevron left.svg"
import right from "../../assets/chevron right.svg"

export default function CardProducts() {

    const [data, setData] = useState([]);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch("/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
            .then((res) => res.json())
            .then((data) => setData(data.products))
            .catch((err) => console.error("Erro:", err));
    }, []);

    const handleLeftClick = () => {
        if (carousel.current) {
            carousel.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    }

    const handleRightClick = () => {
        if (carousel.current) {
            carousel.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    }

    if (!data || !data.length) return null;

    return (
        <>

            <div className='ec-buttons'>
                <button onClick={handleLeftClick} className="arrow-right"><img src={left} alt="Scroll Right" /></button>
            </div>
            <div ref={carousel}
                style={{
                    display: "flex",
                    overflowX: "hidden",
                    gap: "16px",
                    scrollBehavior: "smooth",
                    zIndex: 1,
                
                }}>

                {data.map((item) => {
                    const { productName, photo, price, descriptionShort } = item;
                    return (
                        <div className='ec-relate-card-produts' key={productName}>

                            <img src={photo} alt={productName} />
                            <div className='ec-relate-card-text'>
                                <p className='ec-relate-card-text-title'>{descriptionShort}</p>
                                <p className='ec-relate-card-text-little-price'>R$ 30,90</p>
                                <h2 className='ec-relate-card-text-price'>R$ {price}</h2>
                                <p className='ec-relate-card-text-fees'>ou 2x de R$ 49,95 sem juros</p>
                                <p className='ec-relate-card-text-delivery'> Frete grátis</p>
                            </div>
                            <ButtonPrimary text={'comprar'} />
                        </div>

                    );
                })}
            </div>
            <div className='ec-buttons'>
                <button onClick={handleRightClick} className="arrow-right"><img src={right} alt="Scroll Right" /></button>
            </div>
        </>

    );
}