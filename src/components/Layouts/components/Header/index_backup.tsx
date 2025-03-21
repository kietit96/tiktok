
import images from '@/assets/images'
import { autoUpdate, flip, FloatingFocusManager, FloatingPortal, size, useDismiss, useFloating, useInteractions, useListNavigation, useRole } from '@floating-ui/react'
import { faEllipsisVertical, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyButton from '@layoutcomps/Button'
import SearchPopper from '@layoutcomps/Popper/Searchs'
import { useRef, useState } from 'react'
import { NavLink } from 'react-router'
import style from './style.module.scss'

export default function Header() {
  const [valueSearch, setValueSearch] = useState<string>('')
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchResult, setSearchResult] = useState<any>([1, 2, 3])
  const listRef = useRef<Array<HTMLElement | null>>([])
  const { refs, context, floatingStyles } = useFloating({
    placement: 'bottom',
    open: isOpenSearch,
    onOpenChange: setIsOpenSearch,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      size({
        apply({ elements, availableHeight, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        }
      })
    ]
  })
  const role = useRole(context, { role: 'dialog' })
  const dismiss = useDismiss(context)
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  })
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    role, dismiss, listNav,
  ])
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
          <div className={style.search}>
            <div className={style.search_form}>
              <div className={style.search_input}>
                <input className={style.input} placeholder='searching'
                  {...getReferenceProps({
                    ref: refs.setReference,
                    onChange: changeValueInput,
                  })}
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
          {isOpenSearch && (
            <FloatingPortal>
              <FloatingFocusManager
                context={context}
                initialFocus={-1}
                visuallyHiddenDismiss>
                <div
                  {
                  ...getFloatingProps({
                    ref: refs.setFloating,
                    style: {
                      ...floatingStyles
                    }
                  })
                  }
                >
                  <div className={style.search_inner}>
                    <SearchPopper />
                    <p className={style.search_result_input}>
                      {valueSearch && `Searching for "${valueSearch}"`}
                    </p>
                  </div>
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
          <div className={style.buttons_list}>
            <MyButton frame="text" to='/upload'>Upload</MyButton>
            &nbsp;
            <MyButton frame="primary">Log in</MyButton>
            &nbsp;
            <button className={style.button_settings}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
