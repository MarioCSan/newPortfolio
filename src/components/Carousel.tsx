import { useState, useEffect } from 'react'
import styles from './Carousel.module.css'

interface CarouselProps {
  items: React.ReactNode[]
  itemsPerView?: number
  autoScroll?: boolean
  autoScrollInterval?: number
}

export function Carousel({
  items,
  itemsPerView = 1,
  autoScroll = true,
  autoScrollInterval = 5000
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const totalItems = items.length
  const maxIndex = Math.max(0, totalItems - itemsPerView)

  useEffect(() => {
    if (!autoScroll || isHovering) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [autoScroll, isHovering, maxIndex, autoScrollInterval])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.slide}
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalItems > itemsPerView && (
        <>
          <button
            className={styles.navButton + ' ' + styles.prev}
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            className={styles.navButton + ' ' + styles.next}
            onClick={goToNext}
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {totalItems > itemsPerView && (
        <div className={styles.indicators}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
