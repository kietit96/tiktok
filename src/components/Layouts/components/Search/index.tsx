import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './item.module.scss'
export default function SearchItem() {
    return (
        <div className={style.item}>
            <p className={style.title}><FontAwesomeIcon icon={faSearch} /><span>Search .....</span></p>
        </div>
    )
}
