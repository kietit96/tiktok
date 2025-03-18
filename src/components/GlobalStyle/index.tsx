import { ReactNode } from "react";
import './globalstyle.scss'
interface PropsChildren {
    children: ReactNode
}
export default function GlobalStyle({ children }: PropsChildren) {
    return (
        children
    )
}