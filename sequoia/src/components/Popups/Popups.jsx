import { useState, useEffect } from 'react'

import './Popups.scss'

import PopupConnect from './PopupConnect/PopupConnect'
import PopupMint from './PopupMint/PopupMint'

const Popups = () => {
    const [ fixScroll, setFixScroll ] = useState(false)

    useEffect(() => {
        scrollControl.toggleScrollAccessibility(fixScroll)
    }, [fixScroll])

    return (
        <>
            <PopupConnect scroll={(state) => setFixScroll(state)}/>
            <PopupMint scroll={(state) => setFixScroll(state)}/>
        </>
    )
}

const scrollControl = {
    toggleScrollAccessibility(fixScroll) {
        if (fixScroll) {
          this.disableScroll()
          return
        }
        this.enableScroll()
      },

      toggleHtmlScrollbarVisibillity(fixScroll) {
        if (fixScroll) {
          document.querySelector('html').classList.add('popuped')
          return
        }
        document.querySelector('html').classList.remove('popuped')
      },

      disableScroll() {
        console.log('Disabled scroll')
        window.addEventListener('wheel', this.preventDefault, { passive: false })
        window.addEventListener('mousewheel', this.preventDefault, { passive: false })
        document.addEventListener('mousewheel', this.preventDefault, { passive: false })
        window.addEventListener('touchmove', this.preventDefault, { passive: false })
        document.addEventListener('keydown', this.preventDefaultForScrollKeys, { passive: false })
      },

      enableScroll() {
        console.log('Enabled scroll')
        window.removeEventListener('wheel', this.preventDefault)
        window.removeEventListener('mousewheel', this.preventDefault)
        document.removeEventListener('mousewheel', this.preventDefault)
        window.removeEventListener('touchmove', this.preventDefault)
        document.removeEventListener('keydown', this.preventDefaultForScrollKeys)
      },

      preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;  
      },

      preventDefaultForScrollKeys(e) {
        if (this.keyboardKeys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
      },
}

export default Popups