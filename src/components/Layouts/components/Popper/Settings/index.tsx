import Tippy from "@tippyjs/react/headless"
import style from './style.module.scss'
import { default as WrapperInner } from "@layoutcomps/Popper/wrapper";
import { ReactElement } from "react";
import MyButton from "@layoutcomps/Button";
interface Iprops {
    children: ReactElement;
    isOpen: boolean;
    menu: IMenu[];
}
export type IMenu = { icon: React.JSX.Element; title: string; to?: string; }
export default function SettingsMenu(props: Iprops) {
    const { children, isOpen, menu } = props
    return (
        <Tippy
            visible={isOpen}
            placement='bottom-end'
            interactive={true}
            render={attr => (
                <div {...attr}>
                    <WrapperInner
                        is_result={false}>
                        {<div className={style.listButtons}>
                            {
                                menu.map((item: IMenu, index: number) => (
                                    <Item item={item} key={index} />
                                ))
                            }
                        </div>}
                    </WrapperInner>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

const Item = (props: { item: IMenu, key: number }) => {
    const { item } = props
    return (
        <MyButton to={item.to} frame="text" size="small">{item.icon} {item.title}</MyButton>
    )
}