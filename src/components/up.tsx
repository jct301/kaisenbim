import { useEffect, useState } from 'react'

export function Up() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className='fixed bottom-10 right-4'>
      <button
        onClick={goToTop}
        type={'button'}
        className={`${
          showTopBtn ? 'opacity-100' : 'opacity-0'
        }     bg-kaisen hover:bg-blue-500 focus:ring-blue-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2'`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          focusable='false'
          fill='none'
          viewBox='0 0 24 24'
          className='h-6 w-6'>
          <path d='M4.5 15.75l7.5-7.5 7.5 7.5'></path>
        </svg>
      </button>
    </div>
  )
}
