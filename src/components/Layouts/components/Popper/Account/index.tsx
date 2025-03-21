import images from '@/assets/images'
import style from './item.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function AccountItem() {
  return (
    <div className={style.account_items}>
      <div className={style.image}>
        <img src={images.notfound} alt='notfound' />
      </div>
      <div className={style.title}>
        <h6>Nguyễn Văn A <FontAwesomeIcon className={style.icon} icon={faCheckCircle} /></h6>
        <p>Mô tả</p>
      </div>
    </div>
  )
}
