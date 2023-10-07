import { useTrail, useChain, useSprings, animated, useSpringRef } from '@react-spring/web'
import { Box, styled, useTheme } from '@mui/material';

const ORIGINAL_COORDS = [
  // H
  [10, 10],
  [10, 20],
  [10, 30],
  [10, 40],
  [10, 50],
  [20, 30],
  [30, 10],
  [30, 20],
  [30, 30],
  [30, 40],
  [30, 50],

  // E
  [50, 10],
  [50, 20],
  [50, 30],
  [50, 40],
  [50, 50],
  [60, 10],
  [60, 30],
  [60, 50],
  [70, 10],
  [70, 50],

  // L
  [90, 10],
  [90, 20],
  [90, 30],
  [90, 40],
  [90, 50],
  [100, 50],
  [110, 50],

  // L
  [130, 10],
  [130, 20],
  [130, 30],
  [130, 40],
  [130, 50],
  [140, 50],
  [150, 50],

  // O
  [170, 10],
  [170, 20],
  [170, 30],
  [170, 40],
  [170, 50],
  [180, 10],
  [180, 50],
  [190, 10],
  [190, 20],
  [190, 30],
  [190, 40],
  [190, 50],
  
]
const COORDS = ORIGINAL_COORDS.slice().sort(() => Math.random() - 0.5);

const STROKE_WIDTH = 0.5

const OFFSET = STROKE_WIDTH / 2

const MAX_WIDTH = 210 + OFFSET * 2
const MAX_HEIGHT = 70 + OFFSET * 2

const Hello = () => {
  const gridApi = useSpringRef()

  const gridSprings = useTrail(47, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
  })

  const boxApi = useSpringRef()

  const [boxSprings] = useSprings(47, i => ({
    ref: boxApi,
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    delay: i * 50,
    config: {
      mass: 2,
      tension: 220,
    },
  }))

  useChain([gridApi, boxApi], [0, 1], 1/*1500*/)
  const theme = useTheme();
  return (
    <BackgroundContainer theme={theme}>
      <Container>
        <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
{/*           <g>
            {gridSprings.map(({ x2 }, index) => (
              <animated.line
                x1={0}
                y1={index * 10 + OFFSET}
                x2={x2}
                y2={index * 10 + OFFSET}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
            {gridSprings.map(({ y2 }, index) => (
              <animated.line
                x1={index * 10 + OFFSET}
                y1={0}
                x2={index * 10 + OFFSET}
                y2={y2}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
          </g> */}
          {boxSprings.map(({ scale }, index) => (
            <animated.rect
              key={index}
              width={10}
              height={10}
              fill="currentColor"
              style={{
                transformOrigin: `${5 + OFFSET * 2}px ${5 + OFFSET * 2}px`,
                transform: `translate(${COORDS[index][0] + OFFSET}px, ${COORDS[index][1] + OFFSET}px)`,
                scale,
              }}
            />
          ))}
        </svg>
      </Container>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled(Box)`
  max-width: 800px;
  width: 50vw;
  margin: 0 auto;
`
export default Hello;