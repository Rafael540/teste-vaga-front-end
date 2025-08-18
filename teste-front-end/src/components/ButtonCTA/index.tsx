import './styles.scss'
type Props = {
    text : string;
}

export default function ButtonCTA({text}: Props) {

    return (
        <div>
        <button className='ec-hero-button'>{text}</button>
        </div>
    );
}