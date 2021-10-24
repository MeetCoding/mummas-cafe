import React, { useEffect, useState } from 'react';

const FADE_TIME = 2; //seconds
const FADE_DISP = 20; //pixels

export default function useFadeEffect(compRef) {

    const comp = compRef.current;

    comp.style.transform = `translateY(${FADE_DISP}px)`;
    comp.style.opacity = '0';
    comp.style.transition = `all ${FADE_TIME}s`;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const height = document.documentElement.clientHeight;
            const top = comp.getBoundingClientRect().top;
            if (height - top > 20) {
                comp.style.transform = 'translateY(0)';
                comp.style.opacity = '1';
            }
        })
    }, [])
}