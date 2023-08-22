'use client'

import {useEffect} from "react";


export default function Header() {

    useEffect(() => {
        const init = async () => {
            const {Dropdown, initTE} = await import('tw-elements')
            initTE({ Dropdown });
        };
        init();
    }, []);

    return (
        <nav
            className="relative bg-orange-400 flex w-full flex-wrap items-center justify-between py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className=" relative ml-3" data-te-dropdown-ref>
                    <a
                        className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false">
                        <div
                            className="bg-white rounded-full h-10 w-10"/>
                        <span className="w-2 pl-1">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-5 w-5">
                              <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"/>
                          </svg>
                        </span>
                    </a>


                    <ul
                        className="absolute left-0 right-auto z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2"
                        data-te-dropdown-menu-ref>
                        <li>
                            <a
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                href="/"
                                data-te-dropdown-item-ref
                            >Home</a
                            >
                        </li>
                        <li>
                            <a
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                href="/about"
                                data-te-dropdown-item-ref
                            >About</a
                            >
                        </li>
                        <li>
                            <a
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                href="#"
                                data-te-dropdown-item-ref
                            >Logout</a
                            >
                        </li>
                    </ul>
                </div>
                {/*TODO Horrendous please fix!*/}
                <h1 className={' text-black text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} >Sebastián Novák</h1>
            </div>
        </nav>
    )
}
