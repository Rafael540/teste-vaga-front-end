import './styles.scss'
type Props = {
    text : string;
}

export default function ButtonCTA({text}: Props) {

    return (

        <button className='ec-hero-button'>{text}</button>
    );
}