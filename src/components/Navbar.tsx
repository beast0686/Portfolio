import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis;

const Navbar = () => {
  useEffect(() => {
    // ponytail: Lenis on window (default) — no wrapper/content needed.
    // ScrollSmoother needed wrapper/content; Lenis doesn't.
    // This lets ScrollTrigger pin: true work naturally against window scroll.
    lenis = new Lenis({
      lerp: 0.06,
      duration: 1.7,
      smoothWheel: true,
    });

    // ponytail: bridge Lenis → GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    lenis.scrollTo(0, { immediate: true });
    lenis.stop();

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let section = (e.currentTarget as HTMLAnchorElement).getAttribute("data-href");
          if (section) lenis.scrollTo(section);
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AMAN.S
        </a>
        <a
          href="mailto:amansoudagar202@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          amansoudagar202@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
