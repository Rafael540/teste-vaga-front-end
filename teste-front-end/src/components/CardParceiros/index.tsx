import MediumButton from '../MediumButton';

import './styles.scss'

export default function CardParceiros() {

    return (

        <>
            <section className="ec-container">
                <div className='ec-partners-box'>
                    <div className="ec-partners mr13px">
                        <div className='ec-partners-text '>
                            <h1 className='ec-partners-text-title'>Parceiros</h1>
                            <p className='ec-partners-text-subtitle'>Lorem ipsum dolor sit amet, consectetur</p>
                            <MediumButton text={'Confira'} />
                        </div>
                    </div>

                    <div className="ec-partners">
                        <div className='ec-partners-text'>
                            <h1 className='ec-partners-text-title'>Parceiros</h1>
                            <p className='ec-partners-text-subtitle'>Lorem ipsum dolor sit amet, consectetur</p>
                            <MediumButton text={'Confira'} />
                        </div>
                    </div>
                </div>



            </section>
        </>
    );
}