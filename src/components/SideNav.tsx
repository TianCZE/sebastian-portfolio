'use client'
import React from "react";
import styles from "@/app/utils.module.css";
import Link from "next/link";
import {useSelectedLayoutSegment} from "next/navigation";


function Navbar() {
    const activeSegment = useSelectedLayoutSegment()

    const links = [
        {label: ' Home', path: '/', targetSegment: null},
        {label: ' About', path: '/about', targetSegment: 'about'},
    ];

    return (
        <div className={`${styles.sidebar}`}>
            {links.map ( (l, i) => {
                return <Link
                    key={i}
                    href={l.path}
                    // TODO: ADD HIGHLIGHT FOR SELECTED PAGE
                    style={{textDecoration: (activeSegment === l.targetSegment) ? 'back' : 'none'}}>
                    {l.label}
                </Link>
            })}
        </div>
    );
}
export default Navbar;
