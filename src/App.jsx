import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import images from "./images/home.mp4";

function App() {
  const textLines = [
    { label: "Best Developer 2025", video: "/videos/developer.mp4" },
    { label: "Top UI Design", video: "/videos/ui.mp4" },
    { label: "Fastest Web Performance", video: "/videos/performance.mp4" },
    { label: "Cleanest Code Award", video: "/videos/code.mp4" },
    { label: "Most Creative Interface", video: "/videos/interface.mp4" },
    { label: "Outstanding UX", video: "/videos/ux.mp4" },
    { label: "Annual Awards Show", video: "/videos/showcase.mp4" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const trackRef = useRef(null);
  useEffect(() => {
    const track = trackRef.current;

    const handleMouseEnter = () => {
      track.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
      track.style.animationPlayState = "running";
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="header">
        <h1>awwwards.</h1>
        <h1>Prize-Giving 2025</h1>
      </div>

      <div className="main">
        <marquee id="m1" scrollAmount="30">
          Annual Awards — Annual Awards — Annual Awards — Annual Awards —
        </marquee>
        <h1 className="heading-one">2025</h1>
        <h2 className="heading-two">
          Only the brightest digital creators make our
          <br />
          winners list. These exceptional websites and <br />
          their masterminds push boundaries and invest <br />
          countless hours perfecting their art. Digital
          <br />
          design is a revolution—our winners are <br />
          trailblazers turning pixels into masterpieces
          <br />
          and innovation into legacy. Join us in celebrating
          <br />
          the creative geniuses reshaping our digital world.
          <br />
        </h2>
        <div className="image-container">
          <img
            src="https://assets.awwwards.com/assets/images/pages/awards-2024/trophy.png?v6"
            alt="Awwward trophy"
            className="image-main"
          />
        </div>
      </div>

      <div className="side">
        <h3>Share</h3>
        <span className="sidespan"> Tw. Fb. Ln.</span>
      </div>

      <div className="sectionTwo">
        <video className="videomain" autoPlay muted loop playsInline>
          <source src={images} type="video/mp4" />
        </video>
      </div>

      <div className="sectionThree">
        <h2>And the winners are</h2>
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            At the Xiamen University Malaysia, Sepang, Selangor, Malaysia
          </div>
          <div className="spoke"></div>
        </div>
        <h2>Annual Awards 2025</h2>
      </div>

      <div className="sectionFour">
        <div className="hover-text-wrapper">
          {textLines.map((item, index) => (
            <div
              key={index}
              className="hover-text-container"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
            >
              {hoveredIndex === index ? (
                <div className="hover-marquee">
                  <span>
                    {" "}
                    {item.label} - {item.label}
                  </span>
                </div>
              ) : (
                <span className="hover-text">{item.label}</span>
              )}
              <br />
              {hoveredIndex === index && (
                <video
                  ref={videoRef}
                  className="video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    top: mousePos.y,
                    left: mousePos.x,
                  }}
                >
                  <source src={images} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
      <div class="auto-slider">
        <div className="slider-track" ref={trackRef}>
          <img
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
          />
          <img
            src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 3"
          />
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
            alt="Image 4"
          />
          <img
            src="https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8"
            alt="Image 5"
          />
          <img
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
          />
          <img
            src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 3"
          />
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
            alt="Image 4"
          />
          <img
            src="https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8"
            alt="Image 5"
          />
        </div>
      </div>
      <div className="footer">
        <h2>
          W . The Awards For Design, Creativity And Innovation On The Internet
        </h2>
        <h2>Copyright © 2021 - 2025</h2>
      </div>
    </div>
  );
}

export default App;
