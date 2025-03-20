import React from "react"
import style from './button.module.scss'
import { NavLink } from "react-router"
interface Iprops {
    href?: string
    to?: string
    primary?: boolean,
    size?: string,
    onClick?: () => unknown,
    children: React.ReactNode
}
interface I_attr {
    onClick?: () => unknown
    href?: string
}

export default function MyButton(props: Iprops) {
    const { href, to, primary, size = 'medium', children, onClick, ...restProps } = props
    const className: (string | undefined | false)[] = [
        style.wrapper,
        style[size],
        primary && style.primary,
    ]
    let Component: string | React.ElementType = 'button'
    const _attr: I_attr = {
        onClick,
        ...restProps
    }
    if (restProps?.disabled) delete _attr.onClick
    if (to) {
        return (
            <Link to={to} className={className}>{children}</Link>
        )
    }
    if (href) {
        Component = 'a' as React.ElementType
        _attr.href = href
    }
    return (
        <Component className={className.join(' ')} {..._attr}>
            <span>{children}</span>
        </Component>
    )
}
interface ILinkProps {
    children: React.ReactNode
    to: string,
    className?: (string | undefined | false)[]
}
function Link(props: ILinkProps) {
    const { children, to, className } = props

    return <NavLink to={to} className={className?.join(' ')}><span>{children}</span></NavLink>
}
