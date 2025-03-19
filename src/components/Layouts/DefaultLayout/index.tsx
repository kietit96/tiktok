import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "@layoutcomps/Header";
import style from "./style.module.scss";
interface Props {
    children: ReactNode;
}
export default function DefaultLayout({ children }: Props) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className={style.row}>
                    <div className={style.sidebar_container}>
                        <Sidebar />
                    </div>
                    <div className={style.content_ajax}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
