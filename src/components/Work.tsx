import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  const projects = [
    {
      title: "Classical RAG for Semantic Search and Quantum Modules for Research Evaluation",
      category: "FastAPI, ReactJS",
      tools: "MongoDB Vector Search, Neo4j Knowledge Graph, LLM-based entity extraction, Multi-LLM comparison dashboard",
      image: "/images/projects/qrag.png",
    },
    {
      title: "Mini Dio",
      category: "Python, Django",
      tools: "Google Cloud Speech-to-Text, Google GenAI, Tailwind CSS, Bootstrap, PostgreSQL, Meeting Minutes Generation, Speaker Diarization, Multilingual Support",
      image: "/images/projects/mini_dio.jpg",
    },
    {
      title: "Beat Frame",
      category: "Python, Streamlit",
      tools: "Librosa, OpenAI Whisper, GPT-4o, Stable Diffusion, MoviePy",
      image: "/images/projects/beat_frame.png",
    },
    {
      title: "Play Pulse",
      category: "Python, Streamlit",
      tools: "Pandas, Numpy, Plotly Express, Scikit-learn, Sales analysis and Prediction",
      image: "/images/projects/play_pulse.jpg",
    },
    {
      title: "Meme Wizard",
      category: "Python, Flask",
      tools: "HTML, CSS, JavaScript, MongoDB, Gemini API, Imgflip API",
      image: "/images/projects/meme_wizard.jpg",
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
