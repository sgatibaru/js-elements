import React, { useEffect, useRef, useState } from 'react'
import { BANNER_DATA, SCROLLABLE_STICKY_DATA } from 'common/data/AppBlack'
import ScrollableStickyWrapper, {
  MockupImageWrapper,
  ScreenImageWrapper,
  Mockup,
  MockupFrame,
} from './scrollableSticky.style'
// import { Fade } from 'react-reveal'
import NextImage from 'common/components/NextImage'

const ScrollableSticky = ({ children }) => {
  const { screenImage, title } = BANNER_DATA
  const { mockupImage } = SCROLLABLE_STICKY_DATA
  const [img, setImg] = useState(screenImage)

  const prevImgRef = useRef()

  useEffect(() => {
    prevImgRef.current = img
  }, [img])

  return (
    <ScrollableStickyWrapper>
      <MockupImageWrapper>
        <Mockup>
          <MockupFrame>
            <NextImage src={mockupImage} alt={title} objectFit='contain' />
          </MockupFrame>

          <ScreenImageWrapper>
            <NextImage
              src={img}
              alt={title}
              layout='fill'
              objectFit='contain'
              className={
                prevImgRef.current !== img ? 'screen-image-animation' : ''
              }
            />
          </ScreenImageWrapper>
        </Mockup>
      </MockupImageWrapper>

      {React.Children.map(children, (child) =>
        React.cloneElement(child, { setImg: setImg })
      )}
    </ScrollableStickyWrapper>
  )
}

export default ScrollableSticky
