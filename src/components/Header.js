import frontImg from '../image/front-img.jpg'

export default function Header() {
    return (
        <header>
            <img 
                src={frontImg} 
                alt="filip-zebrowski"
                width = '317px'
                className='header--front-image' />
            
        </header>
    )
}