import {Head, Box, Heading, Container} from "@chakra-ui/react";
import Stage from "../components/stage";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei"
import styled from "@emotion/styled"

export default function Home() {
  return (
      <Wrapper>
          <Canvas
              shadows={true}
              camera={{
                position: [3, 3, 3],
              }}
          >
             <OrbitControls/>
              <ambientLight color={"white"} intensity={1} />
              <Stars/>
            <Stage/>
          </Canvas>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    canvas { width: 100vw; height: 100vh; display: block; margin:0; padding:0; background-color: coral;}

`;
