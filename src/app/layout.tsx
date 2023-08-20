import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from "react";
import Image from "next/image";
import background from "/public/background.png";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import IconsFooter from "@/components/IconsFooter";
import "tw-elements/dist/css/tw-elements.min.css";


const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      {/*Background*/}
      <Breadcrumbs/>
      <div className={'flex flex-col items-center justify-between'}>
          <div className={'relative w-full'}>
              <div className={'fixed object-cover blur-sm -z-10'}>
                  <Image
                      src={background}
                      alt={'Picture of background'}
                      priority={true}
                      placeholder={'blur'}
                  />
              </div>
          </div>
          <div className={'bg-gray-800 h-auto w-full drop-shadow-2xl border-x-8 border-b-8 border-slate-600 items-center'}>
            {children}
              <IconsFooter/>
          </div>
      </div>
      </body>
    </html>
  )
}
