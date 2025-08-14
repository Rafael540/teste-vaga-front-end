
import '../Hero/styles.scss'

export default function Hero() {


    return (
        <>
            <section className="hero ">
                <div className="hero-content ">
                    <h1>Venha conhecer nossas promoções</h1>
                    <p>
                        <span className="highlight">50% Off</span> nos produtos
                    </p>
                    <button className='ec-hero-button'>Ver produto</button>
                </div>
            </section>
        </>
    );
}