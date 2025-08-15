import ButtonCTA from '../ButtonCTA';
import './styles.scss'

export default function Hero() {
    return (
        <> <div className='ec-hero '>
            <section className='ec-container'>

                <div className='ec-box-hero'>

                    <h1>Venha conhecer nossas promoções</h1>
                    <p><span className='ec-highlight'>50% Off</span> nos produtos</p>
                    <ButtonCTA text={'Ver produto'}/>

                </div>




            </section >
        </div>

        </>
    );

}