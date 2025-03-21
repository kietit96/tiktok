import style from './style.module.scss'
interface IProps {
    children: React.ReactNode
    valueSearch?: string | undefined
    is_result?: boolean
}
export default function Wrapper(props: IProps) {
    const { valueSearch, children, is_result = true } = props
    return (
        <div className={style.search_inner}>
            {children}
            {is_result && <p className={style.search_result_input}>
                {valueSearch && `Searching for "${valueSearch}"`}
            </p>}
        </div>
    )
}
