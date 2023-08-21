import React from "react";


export default function SideNav({children}: {
    children: React.ReactNode
}) {
    return (
        <div className={'bg-white text-black '}>
            Test
            {children}
        </div>

    )
}
