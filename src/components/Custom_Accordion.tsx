'use client'
import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function AccordionAlwaysOpen_Mine({data}) {
    const [show, setShow] = useState({
        collapse1: false,
        collapse2: false,
        collapse3: false,
    });

    const toggleShow = (value: object) => {
        setShow({ ...show, ...value });
    };


    const renderAccordion = ({title = 'No Data', description = 'No Data'}) => {
        return (
            <div className="border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="headingOne">
                    <button
                        className={`${
                            show.collapse1 &&
                            `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                        } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                        type="button"
                        onClick={() =>
                            toggleShow({ ...show, collapse1: !show.collapse1 })
                        }
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        {title}
                        <span
                            className={`${
                                show.collapse1
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529]  dark:fill-white`
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
                <TECollapse
                    show={show.collapse1}
                    className="!mt-0 !rounded-b-none !shadow-none"
                >
                    <div className="px-5 py-4 text-black">
                        {description}
                    </div>
                </TECollapse>
            </div>
        )
    }


    return (
        <>
            <div className={'rounded-2xl bg-white py-4'}>
                {data.map(renderAccordion)}
            </div>
        </>
    );
}