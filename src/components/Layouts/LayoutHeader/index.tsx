import { Ichildren } from "@/types";
import Header from "@layoutcomps/Header";

export default function LayoutHeader({ children }: Ichildren) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content-ajax">
                    {children}
                </div>
            </div>
        </div>
    )
}
