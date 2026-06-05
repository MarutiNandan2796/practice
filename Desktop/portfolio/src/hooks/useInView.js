import { useEffect, useRef, useState } from 'react'

export const useInView = (options = {}) => {
  const { threshold = 0.1, triggerOnce = false } = options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        setHasBeenInView(true)
        if (triggerOnce) {
          observer.unobserve(entry.target)
        }
      } else {
        if (!triggerOnce) {
          setInView(false)
        }
      }
    }, { threshold })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, triggerOnce])

  return { ref, inView: triggerOnce ? hasBeenInView : inView }
}
