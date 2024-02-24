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
import image from "../images/sd1.jpg";

const imageAltText = "Software Developer background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Tushar Arora GDSC'23 Lead 
  Pre-Final Year Computer science and engineering student (Batch - 2025)
  
  Let me introduce myself: 
  
  𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝: 
   - I am currently pursuing my Bachelor in Engineering in Computer Science & Engineering at RV Institute of Technology and Management, Bengaluru, and I'm maintaining a CGPA of 9.00.
  
  𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐦𝐞𝐧𝐭𝐬:
   - I had the honor of being selected among the top 80 teams for the ACM-ICPC Asia West Mathura-Kanpur Regionals'22.
   - I am a proud STF Scholar, recognized by the Sugun Thomas Foundation. 
   - I secured the 1st runner-up position in a Karnataka state-level inter-college coding competition named Code Battle. 
   - As an academic achiever, I earned the 2nd runner-up position with an SGPA of 9.55 in my first semester. 
   - I am currently serving as the Google Developer Student Club leader for the year 2023. Internships And 
  
  𝐑𝐞𝐬𝐞𝐚𝐫𝐜𝐡 𝐖𝐨𝐫𝐤 𝐚𝐧𝐝 𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩𝐬 :
  - I've gained valuable experience as a Data Science Intern at Brainovision Solutions India Pvt. Ltd from May 8, 2023, to June 22, 2023. 
  -I have done Web Development and Game Development internship at Vigyata Kendra from Oct, 2022, to Nov, 2022
  - My research paper, titled "Graph Theory Approach for Load Balancing in Wireless Sensor Network," was published in the UGC's HBRP Journal of Sensor Research and Technologies in April 2023. 
  - I've also developed various applications, including a Cash Flow Minimizer system and a Todo List .
  
  𝐓𝐞𝐜𝐡𝐧𝐢𝐜𝐚𝐥 𝐒𝐤𝐢𝐥𝐥𝐬:
  - I'm well-versed in a wide range of web technologies, including HTML5, CSS, PHP, MySQL, Bootstrap 4, Vanilla JavaScript, Node.js, MongoDB, and React.js. 
  - Proficient in version control using Git and GitHub. - I have a strong foundation in problem-solving with Data Structures and Algorithms in C++. - My programming skills extend to C++, C, JavaScript, Java, and Python.
  
  𝐄𝐱𝐭𝐫𝐚-𝐂𝐮𝐫𝐫𝐢𝐜𝐮𝐥𝐚𝐫 𝐀𝐜𝐭𝐢𝐯𝐢𝐭𝐢𝐞𝐬:
  - I serve as the Student Coordinator of RVITM Science Club and have been a Campus Ambassador for various organizations, including Coding Ninjas, Zuno by Foundit, and AlgoZenith.
  - I've had the privilege of providing guidance to over 200 underprivileged students at Gottigere Government School in Bengaluru, Karnataka, as a member of the NSS GreenCampus initiative";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web developmer",
  "Competitive Programmer",
  "Researcher",
  "Data Structure and Algorithms ",
  "Google Cloud",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "This is my Portfolio website.";

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
