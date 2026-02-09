import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Implementation Expert | 0→1 Startup Operator</title>
        <meta
          name="description"
          content="Implementation expert specializing in bootstrapping startups from 0 to 1."
        />
      </Head>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
