import './styles.scss'

type Props ={
    text: string;
}


export default function MediumButton({text} : Props) {

    return (

        <>
            <div className='ec-button-secondary'>
                <button>{text}</button>
            </div>
        </>
    );

}