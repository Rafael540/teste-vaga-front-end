import { useState } from "react";
import type { Product } from "../../types/product";
import x from '../../assets/X.svg'



interface ModalProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    product: Product | null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Modal = ({ isOpen, setOpen, product }: ModalProps) => {

    if (!isOpen) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);

    function handleIncrease() {

        const soma = count + 1;
        setCount(soma)


    }
    function handleDecrease() {
        if (count != 0) {
            const soma = count - 1;
            setCount(soma)
        }


    }

    return (

        <div style={{
            position: 'fixed', width: '100%', height: '100%', top: '0', left: '0',
            background: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', justifyContent: 'center',
            alignItems: 'center', color: 'white', fontSize: '2rem'
        }} // fecha ao clicar fora
        >
            {/*Card*/}
            <div className="modal-content" style={{
                width: "769px", height: '300px', backgroundColor: 'white', color: 'black', padding: '16px',
                borderRadius: '8px', display: 'flex', gap: '20px'
            }} onClick={e => e.stopPropagation()}>

                {/*Imagem*/}
                <div style={{ flex: "0 0 auto", float: "right", marginTop: "40px", marginLeft:'40px' }}>
                    <img src={product?.photo} alt={product?.productName} style={{ maxWidth: "247px", height: "192.199px", borderRadius: "8px" }}
                    />
                </div>

               

                {/*Div descrição*/}
                <div style={{ 
                    flex: "1", float: "left", width: "328px", height: "198px", marginLeft: "87px",
                    marginTop: "40px"
                }}>
                    {/*Descrição*/}
                    <div>
                        <p style={{
                            height: "16.86px", alignSelf: "stretch",
                            fontSize: "20px", width: "300px", textTransform: "uppercase", marginBottom: '16px'
                        }}> {product?.descriptionShort}</p>
                        {/*Preço*/}
                        <p style={{ height: "17px", width: "328px", fontSize: "20px", fontWeight: 600, marginBottom: "32px", color: '#3F3F40' }}>R$ {product?.price} </p>

                    </div>

                    {/*Detalhes*/}
                    <div style={{ width: '300px', marginBottom: '32px' }}>
                        <p style={{ fontSize: '10px', alignSelf: "strech", width: "290px", height: '30px', marginBottom: "18px", color: '#9F9F9F' }}>  Many desktop publishing packages and web page editors now many desktop publishing </p>

                        <p style={{ height: '10px', fontSize: '11px', color: "#3442B5", fontWeight: 600 }}>Veja mais detalhes do produto </p>
                    </div>

                    {/*Botões*/}
                    <div style={{ width: '310px', height: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>

                        {/*Quantidade*/}
                        <div style={{
                            width: "110px", height: "36px", display: 'flex', alignItems: "center", border: '1px solid #D9D9D9',
                            justifyContent: "space-between", borderRadius: '4px', boxSizing: 'border-box', paddingRight: '12px'
                        }}>
                            <button style={{ backgroundColor: "#fff", width: "20.308px", height: "19.636px", marginLeft: '12px', border: 'none' }} onClick={handleDecrease}> -</button>
                            <p style={{ fontSize: '16px', }}>{count}</p>
                            <button style={{ backgroundColor: "#fff", width: "20.308px", height: "19.636px", border: 'none' }} onClick={handleIncrease} > +</button>
                        </div>

                        {/*Botão comprar*/}
                        <div style={{ alignItems: "center", marginLeft: '12px', marginBottom: '8px', }}>
                            <button style={{
                                width: '188px', height: "36px", justifyContent: 'center', textTransform: 'uppercase',
                                alignItems: 'center', borderRadius: '6px', border: "none", gap: '10px', backgroundColor: '#F7CA11',
                                fontSize: '14px', fontWeight: '700', textAlign: 'center', marginBottom: '4px'

                            }}>Comprar</button>
                        </div>
                        
                    </div>
                    
                </div>
                 <div style={{height:'260px',width:'22px', marginRight:'44px', justifyContent:'top'}}>
                    <button onClick={() => setOpen(false)}  style={{border:'none', backgroundColor:'#fff'}}><img src={x} alt="Exit"  style={{marginBottom:'24px',width:'15px', height:'13px'}}/></button>
                </div>
            </div>
        </div>
    );
};
