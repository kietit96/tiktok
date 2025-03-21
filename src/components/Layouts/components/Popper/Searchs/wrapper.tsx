import style from './wrapper.module.scss'
interface IProps {
    children: React.ReactNode
}
export default function Wrapper({children}: IProps) {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}
