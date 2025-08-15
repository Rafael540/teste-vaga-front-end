import ButtonPrimary from "../ButtonPrimary";

import mobile from '../../assets/mobile.jpg'
export default function CardProducts() {

    return (
        <>
            <div className='ec-relate-card-produts'>
                <img src={mobile} alt="" />
                <div className='ec-relate-card-text'>
                    <p className='ec-relate-card-text-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='ec-relate-card-text-little-price'>R$ 30,90</p>
                    <h2 className='ec-relate-card-text-price'>R$ 28,90</h2>
                    <p className='ec-relate-card-text-fees'>ou 2x de R$ 49,95 sem juros</p>
                    <p className='ec-relate-card-text-delivery'> Frete grátis</p>
                </div>
                <ButtonPrimary text={'comprar'} />
            </div>
        </>

    );
}