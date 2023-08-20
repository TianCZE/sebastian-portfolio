"use client";
import { TERipple } from 'tw-elements-react';
import Image from "next/image";
import Link from "next/link";


export default function Card({id = "", title = 'err', description = 'err desc', image = '/Owl.png'}) {
    return (
        <div
            className="relative self-center object-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-w-[500px] dark:bg-neutral-700">
            <div className="relative rounded-t-lg overflow-hidden bg-cover bg-no-repeat max-h-[500px] place-items-center">
                <TERipple>
                    <Image
                        className={'aspect-square'}
                        src={image}
                        alt={description}
                        width={500}
                        height={500}
                        style={{objectFit: 'cover'}}
                    />
                    <Link href={'projects/' + id}>
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </Link>
                </TERipple>
            </div>
            <div className="p-6 h-[230px]">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {description}
                </p>
            </div>
        </div>
    )
}
