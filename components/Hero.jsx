import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import Form from "./Form";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${-x}deg) rotateY(${-y}deg) scale(${s})`;

const Hero = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <Section>
      <Wrapper>
        <Article>
          <h1>Janis Basis Basovs</h1>
          <h2>FrontEndDeveloper</h2>
          <Form />
        </Article>
        <ImgPlaceholder initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <animated.img
            src="./vertical-card-img@2x.png"
            alt="business card"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          />
        </ImgPlaceholder>
      </Wrapper>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #030303;
  padding: 50px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Article = styled.article`
  color: #fff;
  h1 {
    line-height: 1;
  }
  h2 {
    text-align: right;
    font-size: 18px;
    margin: 5px 0 30px;
  }
`;
const ImgPlaceholder = styled(motion.div)`
  block-size: 628px;
  img {
    inline-size: 100%;
    block-size: 628px;
    inline-size: 314px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
  }
`;
