import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const inter = Inter({subsets:["latin"]});

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-&#35;8A9A5B/80 hover:scrollbar-thumb-&#35;8A9A5B bg-rgb(&#36;36,&#36;36,&#36;36) text-white z-0">
      <Head>
        <title>Ravi's Web</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section id="header" className="snap-start">
        <Header/>
      </section>
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
      <section id="about" className="snap-center transition-duration-900">
        <About/>
      </section>
      <section id="experience" className="snap-center transition-duration-900">
        <WorkExperience/>
      </section>
      <section id="skills" className="snap-center transition-duration-900">
        <Skills/>
      </section>
      <section id="projects" className="snap-center transition-duration-900">
        <Projects/>
      </section>
      <section id="contact" className="snap-center transition-duration-900">
        <Contact/>
      </section>
    </div>
  );
}
