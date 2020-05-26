import React, {useRef, useEffect, useState} from 'react';
import Playlists from './Playlists';

const Categories = () => {
    const mainInnerRef = useRef()
    const [limiter, setLimiter] = useState(0)

    const dataCategories = [ 
        {
            id: 1,
            name: 'Focus',
            tagline: 'Musci to help you concentrate'
        },
        {
            id:2,
            name: 'Mood',
            tagline: 'Playlists to match your mood'
        },
        {
            id: 3,
            name: 'Soundtrack your home',
            tagline: ''
        },
        {
            id: 4,
            name: 'Kcik back this Sunday...',
            tagline: ''
        },
    ]

    useEffect(() => {
        const handleWindowResize = () => {
            const calculation = Math.floor(mainInnerRef.current.getBoundingClientRect().width / 190); 
            setLimiter(calculation)
        }
        handleWindowResize()

        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <div className="mainInner" ref={mainInnerRef}>
        {dataCategories.map((category, id) => (
            <div className="cardsWrap" key={id}>
            <h2>{category.name}</h2>
            <p className="subText">Music to help you concentrate.</p>
            <Playlists category_id = {category.id} limiter={limiter} />
            </div>
        ))}
            </div>
    )
}

export default Categories;