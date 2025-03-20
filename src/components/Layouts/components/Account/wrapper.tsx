import React from "react"
import style from "./wrapper.module.scss"
interface IProps {
    children: React.ReactNode
}
export default function Wrapper({ children }: IProps) {
    return (
        <div className={style.wrapper}>
            <h4 className={style.title}>Account</h4>
            {children}
        </div>
    )
}
