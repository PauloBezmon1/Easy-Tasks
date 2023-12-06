import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom";

function Header () {
  
    return(
        <header className="sticky top-0 z-50 flex flex-wrap w-full text-sm md:justify-start md:flex-nowrap ">
        <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-md mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto h-full ">
        <Fade cascade damping={1e-1} direction='down' triggerOnce={true}>

          <div className="flex items-center justify-between">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 27 27" fill="none">
              <path d="M13.5 1L26 22.9699L22.3226 26L15.3108 21.0762H19.3784L13.5 10.4699L7.6402 21.0762H11.6639L4.67737 26L1 22.9699L13.5 1Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
            </svg>

            <a className="flex text-xl font-bold" href="#">EasyTask</a>

            {/* BOTÃO DO MENU QUE APARECE ABAIXO DOS 768PX */}
            <div className="md:hidden">
              <button type="button" className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-gray-800 border border-gray-200 rounded-full hs-collapse-toggle hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="flex-shrink-0 w-4 h-4 hs-collapse-open:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="flex-shrink-0 hidden w-4 h-4 hs-collapse-open:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>


          </div>
          <div className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block">
            <Link to='login'>
              <div className="flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                <a className="flex items-center font-medium gap-x-2 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 " href="#">
                  Log in
                </a>
              </div>
            </Link>
          </div>
          </Fade>

        </nav>

      </header>

    );
}

export default Header