
import images from '@/assets/images'
import style from './style.module.scss'
import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return (
    <div className={style.wrapper}>
      <div className='container'>
        <div className={style.row}>
          <div className={style.logo}>
            <NavLink to='/'><img src={images.logo} alt='Tiktok' className={style.logo_image} /></NavLink>
          </div>
          <div className={style.search}>
            <div className={style.search_form}>
              <div className={style.search_input}>
                <input className={style.input} placeholder='searching' />
                {/* <button className={style.search_button_close}>
                  <FontAwesomeIcon className={`${style.icon} ${style.icon_close}`} icon={faTimes} />
                </button> */}
                {/* <div className={style.search_button_loading}>
                  <FontAwesomeIcon className={`${style.icon} ${style.icon_close}`} icon={faSpinner} spin />
                </div> */}
              </div>
              <button className={style.search_button}>
                <FontAwesomeIcon className={`${style.icon} ${style.icon_search}`} icon={faSearch} />
              </button>
            </div>
          </div>
          <div className={style.buttons_list}>
            <FontAwesomeIcon className={style.icon} icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  )
}
