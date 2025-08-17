import LargeButton from '../LargeButton';
import './styles.scss'

export default function NewsLetters() {

    return (
        <>
            <div className='ec-background'>
                <section className="ec-container ">
                    <div className='ec-newsletter-box'>
                        {/*Title newsLetter */}
                        <div className='ec-newsletter '>
                            <h1 className='ec-newsletter-title'>Inscreva-se na nossa newsletter</h1>
                            <p className='ec-newsletter-subtitle'>Assine a nossa newsletter e receba as novidades e
                                conteúdos exclusivos da Econverse.</p>
                        </div>
                        {/*forms newsLetter */}
                        <div className='ec-newsletter-form'>

                            <form action="">
                                <input className='ec-newsletter-form-input' type="text" placeholder='Digite seu nome' />
                                <input className='ec-newsletter-form-input' type="text" placeholder='Digite seu email' />
                                <LargeButton text={"Inscrever"} />
                                <div className='ec-newsletter-form-box'>
                                    <input type="checkbox" />
                                    <p className='ec-newletter-form-box-title'>Aceito os termos e condições</p>                               </div>
                            </form>



                        </div>
                    </div>
                </section>
            </div>


        </>
    );

}