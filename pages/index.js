import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Projects.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold"></h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <div className="tablet:m-10 mt-2 text-xl laptop:text-xl w-full laptop:w-3/5">
              <p>Hey there🙋, I'm Lei Zhu, a recent graduate with a Bachelor of Engineering in Computer Science and Technology from University of Electronic Science and Technology of China (UESTC) 电子科技大学 and pursing my Master's degree in Information Science at UIUC.</p>
              <p>Throughout my academic and professional journey, I have passionately pursued opportunities to expand my expertise in software development and data analysis, culminating in a series of internships and projects that have significantly honed my skills and prepared me for the challenges of the tech industry.</p>
              <p>My adventure in the field of technology began shortly after my undergraduate studies at the University of Electronic Science and Technology of China, where I majored in Computer Science and Technology. This solid foundation equipped me with a deep understanding of data structures, algorithms, and software engineering principles, setting the stage for my future endeavors.</p>
              <p>In the summer of 2021, I embarked on an enriching internship with China Mingsheng Banking Corp. Ltd in Chengdu, China, as a Financial Data Analyst. Here, I developed a data analysis system leveraging Python and R to enhance loan processing and credit risk assessment. This system utilized advanced machine learning models, including Random Forest and Logistic Regression, achieving an impressive 95% accuracy rate in assessing creditworthiness. This experience not only sharpened my analytical skills but also deepened my appreciation for the impactful integration of technology and finance.</p>
              <p>My journey continued at Susallwave in Shenzhen, China, where I served as a Software Development Intern. During this time, I was instrumental in developing a web-based tool for efficient PDF file interaction, employing Java Spring Boot and React. This tool significantly improved operational efficiency, demonstrating my ability to blend frontend and backend development to create cohesive and user-friendly applications.</p>
              <p>The pinnacle of my internships was my role as a Software Engineer Intern at DiDi Chuxing in Beijing, China. Here, I built a real-time system for driver and insurance data collection, integrating Apache Kafka for reliable data transmission and utilizing Java and Spring Boot. This project not only reduced driver insurance costs by 25% but also enhanced driver retention rates, showcasing my capacity to deliver solutions that have a tangible impact on business outcomes.</p>
              <p>Parallel to my internships, I engaged in several projects that further exemplified my technical prowess and problem-solving capabilities. Notably, the Intelligent Profile project, a full-stack web application reminiscent of LinkedIn, underscored my proficiency in Java, Spring Boot, MySQL, and AWS. This project, along with others like the Scientific Translation Practice System and JD Comment Sentiment Analysis, underscore my versatility and adeptness across a broad spectrum of technologies and frameworks, including Python, TensorFlow, and MongoDB.</p>
              <p>Welcome to my website, where I share my journey, experiences, and passion for all things. Let's connect and explore the exciting world of science and engineering together!</p>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
