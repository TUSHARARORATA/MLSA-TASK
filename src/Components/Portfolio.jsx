/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/SD4.jpg";

const imageAltText = "Software Developer";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Resume ",
    description:
      "My Resume and My and Leetcode Solutions",
      url: "https://drive.google.com/file/d/1hwbhboduVJdDHdZokvHJHiw3tf1pnsFW/view?usp=drive_link",
    
  },
  {
    title: "Color Detection for Color-Blind People",
    description:
      "Collaborated with a team to analyze and visualize data for actionable insights . Developed a color detection system using Pythonn ",
      
    url: "https://github.com/TUSHARARORATA/Color_detection?tab=readme-ov-file#color_detection",
    
  },
  {
    title: "Research Paper: Graph Theory Approach for Load Balancing",
    description:
      "UGC (HBRP Publication)",
      url: "https://zenodo.org/records/7844979#.ZFy9aXZBzIU",
  },
  {
    title: "Cash Flow Minimizer",
    description:
      "- Developed a Cash Flow Minimizer System to optimize cash flow among multiple banks using algorithmic problem-solving skills",
      
    url: "https://github.com/TUSHARARORATA/cash-flow-minimizer",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
