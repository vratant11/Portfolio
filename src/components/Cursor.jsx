import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
const Cursor = () => {
  return (
    <AnimatedCursor
    innerSize={10}
      outerSize={30}
      color='202, 61, 61'
      outerAlpha={0.5}
      innerScale={0.8}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default Cursor