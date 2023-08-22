'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";

const TECollapse = dynamic(() =>
    import("tw-elements-react").then((res) => res.TECollapse)
);


export default function AccordionAlwaysOpen(): JSX.Element {
    const [show, setShow] = useState({
        collapse1: false,
        collapse2: false,
        collapse3: false,
    });

    const toggleShow = (value: object) => {
        setShow({ ...show, ...value });
    };

    const title1 = 'What school was I in?'
    const description1 =
        'I studied at Purkyňovo Gymnasium Strážnice. ' +
        'Now I attend Collage at Masaryk`s University, Faculty of Informatics (MUNI FI)' +
        ' where I am in my second year of Programming and App development program.'

    const title2 = 'What do I like?'
    const description2 =
        'I am really passionate about porgramming, game development and 3d design.' +
        'I have found my way to these think trough my love of gaming.' +
        'When I am not sitting at a computer I am usually away with my friends or family travelling.'

    const title3 = 'More'
    const description3 =
        'I would like to thank my sister for designing this portfolio <3'


    return (
        <>
            <div className=" my-5 rounded-b-lg bg-cyan-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${
                            show.collapse1
                                ? `text-black [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                        } group relative flex w-full items-center rounded-t-[15px] bg-cyan-800 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                        type="button"
                        onClick={() => toggleShow({ ...show, collapse1: !show.collapse1 })}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        {title1}
                        <span
                            className={`${
                                show.collapse1
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
                    </button>
                </h2>
                <TECollapse show={show.collapse1} className="!mt-0 !shadow-none !bg-cyan-900">
                    <div className="px-5 py-4 text-black">
                        {description1}
                    </div>
                </TECollapse>
            </div>

            <div className=" my-5 rounded-b-lg bg-cyan-800 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${
                            show.collapse2
                                ? `text-black [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                        } group relative flex w-full items-center rounded-t-[15px] bg-cyan-800 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                        type="button"
                        onClick={() => toggleShow({ ...show, collapse2: !show.collapse2 })}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        {title2}
                        <span
                            className={`${
                                show.collapse2
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
                    </button>
                </h2>
                <TECollapse show={show.collapse2} className="!mt-0 !shadow-none !bg-cyan-900">
                    <div className="px-5 py-4 text-black">
                        {description2}
                    </div>
                </TECollapse>
            </div>

            <div className=" my-5 rounded-b-lg bg-cyan-800 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${
                            show.collapse3
                                ? `text-black [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                        } group relative flex w-full items-center rounded-t-[15px] bg-cyan-800 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                        type="button"
                        onClick={() => toggleShow({ ...show, collapse3: !show.collapse3 })}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        {title3}
                        <span
                            className={`${
                                show.collapse3
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
                    </button>
                </h2>
                <TECollapse show={show.collapse3} className="!mt-0 !shadow-none !bg-cyan-900">
                    <div className="px-5 py-4 text-black">
                        {description3}
                    </div>
                </TECollapse>
            </div>
        </>
    );
}