import './styles.scss'

type Props ={
    text: string
}

export default function LargeButton({text} : Props) {

    return (
        <button className='ec-newsletter-form-button' >{text}</button>

    );
}