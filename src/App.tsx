import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import MoonBackground from "./images/moon.png";
import LandBackground from "./images/land.png";
import Cat from "./images/cat.gif";

import "./App.css";

function App() {
  const ref = useRef(null);

  return (
    <div>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${MoonBackground})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${LandBackground})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={Cat} alt="sky driving cat" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
