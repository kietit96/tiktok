
import images from '@/assets/images'
import { faCircleQuestion, faEarth, faEllipsisVertical, faKeyboard, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyButton from '@layoutcomps/Button'
import SearchPopper from '@layoutcomps/Popper'
import SettingsMenu, { IMenu } from '@layoutcomps/Popper/Settings'
import { default as WrapperInner } from '@layoutcomps/Popper/wrapper'
import Tippy from '@tippyjs/react/headless'
import { useRef, useState } from 'react'
import { NavLink } from 'react-router'
import style from './style.module.scss'

const MENU_SETTINGS: IMenu[] = [
    { icon: <FontAwesomeIcon icon={faEarth} />, title: 'English' },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' }
]
export default function Header() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [valueSearch, setValueSearch] = useState<string>('')
    const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)
    const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<unknown>([1, 2, 3])

    const changeValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setValueSearch(value)
        if (value) {
            setIsOpenSearch(true)
            return
        }
        setIsOpenSearch(false)
    }
    return (
        <div className={style.wrapper}>
            <div className='container'>
                <div className={style.row}>
                    <div className={style.logo}>
                        <NavLink to='/'><img src={images.logo} alt='Tiktok' className={style.logo_image} /></NavLink>
                    </div>
                    <Tippy
                        interactive={true}
                        visible={isOpenSearch}
                        popperOptions={{
                            modifiers: [
                                {
                                    name: 'setWidth',
                                    enabled: true,
                                    phase: 'beforeWrite',
                                    requires: ['computeStyles'],
                                    fn({ state }) {
                                        state.styles.popper.width = `${state.rects.reference.width}px`;
                                    },
                                },
                            ],
                        }}
                        render={attr => (
                            <div {...attr}>
                                <WrapperInner
                                    valueSearch={valueSearch}
                                >
                                    <SearchPopper />
                                </WrapperInner>
                            </div>)}>
                        <div className={style.search}>
                            <div className={style.search_form}>
                                <div className={style.search_input}>
                                    <input className={style.input} placeholder='searching'
                                        onChange={changeValueInput}
                                        ref={inputRef}
                                    />
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
                    </Tippy>
                    <div className={style.buttons_list}>
                        <MyButton frame="text" to='/upload'>Upload</MyButton>
                        &nbsp;
                        <MyButton frame="primary">Log in</MyButton>
                        &nbsp;
                        <SettingsMenu
                            menu={MENU_SETTINGS}
                            isOpen={isOpenSettings}>
                            <button className={style.button_settings} onClick={() => setIsOpenSettings(!isOpenSettings)}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </SettingsMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}
