import React, { useEffect, useState } from 'react'

export default function UserEffect() {
    const [count, setCount] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setCount(window.innerWidth)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setCount(window.screen.width)
            })
                     }
})

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh", flexDirection: 'column-reverse' }}>
            <h1>HEllo Effect</h1>
            <h1>{count}</h1>
        </div>
    )
}
