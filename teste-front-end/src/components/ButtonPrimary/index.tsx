import './styles.scss'

type Props ={
    text:  string;
}

export default function ButtonPrimary({text} : Props) {

    return (
        <div className='ec-button-primary'>
            <button> {text}</button>
        </div>
    );
}