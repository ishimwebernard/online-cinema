import React from 'react'
import { v4 } from 'uuid'

export default function FooterComponent({ title, items }) {
    const lines = [];

    items.forEach((item)=>{
        lines.push(
            <p key={v4()} className="text-gray-300">{item}</p>
        )
    })
    return (
        <div className="items-center text-center">
            <p className="font-semibold text-gray-400">{title}</p>
            <div className="mt-4">
            {lines}
            </div>
        </div>
    )
}
FooterComponent.defaultProps = {
    title: 'COMPANY',
    items: ['About Us', 'Careers', 'Contact']
}
