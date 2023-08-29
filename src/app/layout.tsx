import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from "react";
import Image from "next/image";
import background from "/public/background.png";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import IconsFooter from "@/components/IconsFooter";
import "tw-elements/dist/css/tw-elements.min.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/SideNav";
import styles from "./utils.module.css"

const Header = dynamic(() => import("../components/Header"), {
    ssr: false,
});


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
    <html lang="en" className={'bg-white'}>
      <body className={roboto.className}>
      {children}
          {/*<Header/>*/}
          {/*/!*Div just to move navbar a little down*!/*/}
          {/*<div className={'h-[54px] bg-white'}/>*/}
          {/*<Navbar/>*/}
          {/*<div className={'h-[54px] bg-white'}/>*/}

          {/*<div className={`${styles.content}`}>*/}
          {/*    {children}*/}
          {/*</div>*/}
          {/*<IconsFooter/>*/}
      </body>
    </html>
  )
}

// Border into div
//border-x-8 border-b-8 border-slate-600