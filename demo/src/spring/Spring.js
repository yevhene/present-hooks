import React from 'react'
import { useSpring, animated } from 'react-spring'

function Spring() {
  return (
    <div>
      <Card>
        <div>
          <h5>Hello Hooks!</h5>
          <p>Lorem ipsum dolore sit amet consectetur</p>
        </div>
      </Card>

      <hr />

      <Card>
        <div>
          <h5>Helo Spring!</h5>
          <p>Lorem ipsum dolore sit amet consectetur</p>
        </div>
      </Card>

      <hr />

      <Card>
        <div>
          <h5>Helo Vinnytsia.JS!</h5>
          <p>Lorem ipsum dolore sit amet consectetur</p>
        </div>
      </Card>
    </div>
  )
}

function Card({ children }) {
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
      scale: 1,
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    })
  )

  function handleEnter() {
    setAnimatedProps({ scale: 1.2 });
  }

  function handleLeave() {
    setAnimatedProps({ scale: 1 });
  }

  return (
    <animated.div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        transform: animatedProps.scale.interpolate(
          (scale) => `scale(${scale})`
        )
      }}
    >
      {children}
    </animated.div>
  )
}

export default Spring
