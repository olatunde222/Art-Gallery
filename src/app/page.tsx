import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { symlink } from "fs";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import NewHeader from "@/components/NewHeader";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header Section */}
      {/* <section className={styles.containerStyle}>
        <div id="header">
          <Header/>
        </div>
      </section> */}
      {/* New Header Section */}
      <section>
        <div id="header">
          <NewHeader/>
        </div>
      </section>
      {/* Hero Section  */}
      <section className= "bg-[url(../assets/hero-bg.png)] bg-cover bg-center relative z-[1] after:content-[' '] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:opacity-[.7] after:z-[-1]">
        <div id="hero" className={`${styles.heroStyle} ${styles.containerStyle}`}>
          <Hero/>
        </div>
      </section>
      {/* Serives Section */}
      <section className= {styles.containerStyle}>
        <div id="services">
          <Services/>
        </div>
      </section>
      {/* Gallery Serction */}
      <section className= {styles.containerStyle}>
        <div id="gallery">
          <Gallery/>
        </div>
      </section>
      {/* About me Section */}
      <section className= {styles.containerStyle}>
        <div id="about">
          <About/>
        </div>
      </section>
      {/* Contact Section */}
      <section className= {styles.containerStyle}>
        <div id="contact">
          <Contact/>
        </div>
      </section>
    </main>
  );
}
