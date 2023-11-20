/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/ondas.jpg";

const imageAltText = "Ondas azules en el agua";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Soy un estudiante de ingenieria quimica al que le gusta leer y aprender ademas de contar aqueyo que aprendo, me gustan los deportes en especial las artes marciales ademas de la programacion en particular las redes neuronales; mi meta es trabajar en la divulgacion cientifica he investigacion relacionada con epigenetica.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Diseño web",
  "Reparacion de celulares y computadoras",
  "Enseñar a aprender ",
  "Azure",
  "Logica propocicional",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Soy una persona a la que le encanta empezar nuvos proyectos aunque me cuesta terminarlos, Toma lo que es util, desacha lo que no y agraga eso unico que es tuyo, Bruce Lee.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
