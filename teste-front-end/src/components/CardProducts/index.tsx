/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState, useRef } from "react";
import left from "../../assets/chevron left.svg";
import right from "../../assets/chevron right.svg";

import "./styles.scss";
import { TestModal } from "../Modal/TestModal";


export default function CardProducts() {
    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

    const carousel = useRef<HTMLDivElement>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        fetch("/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data.products);
                setIsInitialized(true);
            })
            .catch((err) => console.error("Erro:", err));
    }, []);

    useEffect(() => {
        if (isInitialized && carousel.current) {
            carousel.current.scrollLeft = 0;
        }
    }, [isInitialized]);

    const handleLeftClick = () => {
        if (carousel.current) {
            carousel.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const handleRightClick = () => {
        if (carousel.current) {
            carousel.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    if (!data || !data.length) return null;

    return (
        <>
            <section className="ec-container">
                <div
                    ref={carousel}
                    className="ec-carousel"
                    style={{
                        display: "flex",
                        overflowX: "hidden",
                        gap: "18px",
                        justifyContent: "space-between",
                        scrollBehavior: "smooth",
                        paddingLeft: "16px",
                        height: "503px",
                    }}
                >
                    <div className="ec-buttons ec-pdlf">
                        <button onClick={handleLeftClick} className="arrow-right">
                            <img src={left} alt="Scroll Left" />
                        </button>
                    </div>

                    {data.map((item) => {
                        const { productName, photo, price, descriptionShort } = item;
                        return (
                            <div className="ec-product" key={productName}>
                                <div className="ec-product-box">
                                    <img className="ec-product-img" src={photo} alt={productName} />

                                    <div className="ec-product-el">
                                        <p className="ec-product-dsc">{descriptionShort}</p>
                                        <p className="ec-product-lp">R$ 30,90</p>
                                        <h2 className="ec-product-p">R$ {price}</h2>
                                        <p className="ec-product-fees">ou 2x de R$ 49,95 sem juros</p>
                                        <p className="ec-product-dl">Frete grátis</p>

                                        <div className="ec-button-primary">
                                            <button onClick={() => handleProductClick(item)}>
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <div className="ec-buttons ec-pdrg">
                        <button onClick={handleRightClick} className="arrow-right">
                            <img src={right} alt="Scroll Right" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedProduct && (
                <TestModal isOpen={open} setOpen={setOpen} product={selectedProduct}
                />
            )}
        </>
    );
}
