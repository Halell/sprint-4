import React, { useRef, useEffect } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideClick = (ref, cb, val, parentRef) => {
    var isOut = false
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (parentRef) {
                if (ref.current && !ref.current.contains(event.target) &&
                    parentRef.current && !parentRef.current.contains(event.target)) {
                    cb(val)
                }
            } else {
                if (ref.current && !ref.current.contains(event.target)) {
                    cb(val)
                    console.log(val)
                }

            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref, val])
    return [isOut]
}