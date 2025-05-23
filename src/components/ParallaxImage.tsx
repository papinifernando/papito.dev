import { useEffect, useState } from 'react'

interface Props {
  imgClass?: string;
  scrollMax?: number;
  scrollRate?: number;
  mobileImage: string;
  desktopImage: string;
}

export default function ParallaxImage({
  imgClass = "w-full h-[256px] sm:h-[256px] md:h-[384px] lg:h-[512px] 2xl:h-[640px] object-cover",
  scrollMax = -150,
  scrollRate = -0.75,
  mobileImage,
  desktopImage,
}: Props) {
  const [scrollY, setScrollY] = useState(0)
  const [innerWidth, setInnerWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleResize = () => setInnerWidth(window.innerWidth)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const WIDTH_THRESHOLD = 1280
  const scrollPosition = Math.max(
    scrollY * scrollRate,
    scrollMax * (innerWidth < WIDTH_THRESHOLD
      ? 1 - (WIDTH_THRESHOLD - innerWidth) / WIDTH_THRESHOLD
      : 1
    )
  )

  const imgStyle = {
    objectPosition: `50% calc(50% + ${scrollPosition}px)`
  }

  return (
    <div>
      <img 
        src={innerWidth <= 640 ? mobileImage : desktopImage}
        className={imgClass}
        alt="parallax"
        style={imgStyle}
      />
    </div>
  )
}