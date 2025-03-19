import logo from './logo.svg';
import search_icon from './magnifying-glass-solid.svg'
import close from './close.svg'
interface Iimages<T> {
    [key: string]: T
}

const images: Iimages<string> = {
    logo,
    search_icon,
    close
}

export default images;