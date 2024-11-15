"use client";
import Navbar from './Navbar';
import React, { useEffect,useState } from 'react';


const Navbarin: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // The debounce function receives our function as a parameter
        const debounce = (fn: Function) => {
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame: number;
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params: any[]) => {
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params);
                });
            }
        };

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY.toString();
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
    }, [])


    useEffect(() => {
        console.log("Component updated");
      });

    return (
        <>
            <div className='bg-navbar'>
                <Navbar />
                <button onClick={() => setCount(count + 1)}>
                Click me: {count}
            </button>
            </div>
        </>
    );
}

export default Navbarin;
