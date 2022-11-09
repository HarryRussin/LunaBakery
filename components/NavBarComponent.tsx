import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function NavBarComponent({ isHome = false,selected }: { isHome?: Boolean,selected:string }) {

  //   HOMEPAGE SHIT
  const [hasBgOnScroll, sethasBgOnScroll] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    window.onscroll = function () {
      appearOnScrollHomepage()
    }
  }, [])

  function appearOnScrollHomepage() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      sethasBgOnScroll(true)
    } else {
      sethasBgOnScroll(false)
    }
  }

  return (
    <nav
      ref={navRef}
      className={`flex items-center transition-all duration-300 top-0 z-10 text-sm box-border justify-between py-4 font-mont px-20 ${
        isHome
          ? `fixed w-full  ${
              hasBgOnScroll
                ? 'text-black bg-white'
                : 'text-white text-xl bg-transparent mt-8'
            }`
          : 'sticky bg-white'
      }`}
    >
      {/* Left Nav */}
      <div className="flex w-1/4 justify-between">
        <Link replace href={'/'}><p className={`${selected==='home'&&hasBgOnScroll&&'font-semibold'} link`}>HOME</p></Link>
        <p></p>
      </div>

      {isHome && !hasBgOnScroll ? null : (
        <h3 className="text-4xl font-abril font-bold">LUNA</h3>
      )}

      {/* Right Nav */}
      <div className="flex w-1/4 justify-between items-center">
        <Link href={'/#about'}>
          <p className="link">ABOUT</p>
        </Link>
        <Link href={'/#contact'}>
          <p className="link">CONTACT</p>
        </Link>
        <Link href={'/shop'}>
          <p
            className={`${selected === 'shop' && 'font-semibold'} ${
              
              (isHome &&
                hasBgOnScroll  &&
                'border-2 rounded-full px-4 py-1 box-border hover:bg-accent-main hover:text-white transition-all border-accent-main text-accent-main text-center')
                
            } ${!isHome&&'border-2 rounded-full px-4 py-1 box-border hover:bg-accent-main hover:text-white transition-all border-accent-main text-accent-main text-center'}`}
          >
            SHOP
          </p>
        </Link>
      </div>
      {hasBgOnScroll&&<hr className='bg-black h-[2px] w-[94vw] absolute bottom-0 left-1/2 -translate-x-1/2'/>}
    </nav>
  )
}

export default NavBarComponent
