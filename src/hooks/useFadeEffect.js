import { useEffect } from 'react';

export const FADE_TIME = 2; //seconds
export const APPEAR_DIST = 50; //pixels
export const Y_DISP = 20; //pixels

export default function useFadeEffect(compRef) {

    useEffect(() => {

        const comp = compRef.current;

        comp.style.position = 'relative';
        comp.style.transform = `translateY(${Y_DISP}px)`;
        comp.style.opacity = '0';
        comp.style.transition = `all ${FADE_TIME}s`;

        window.addEventListener('scroll', () => {
            const height = document.documentElement.clientHeight;
            const top = comp.getBoundingClientRect().top;
            if (height - top > APPEAR_DIST) {
                comp.style.transform = 'translateY(0)';
                comp.style.opacity = '1';
            }
        })
    }, [])
}