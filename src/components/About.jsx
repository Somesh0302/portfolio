import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Somesh Mohanty, a passionate Web developer with a keen eye for MERN
          Stack . With a background in Computer science Engineering, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Btech, C.V. Raman Global University, 2024 , CSE
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        Languages:  JAVA, HTML, CSS, JavaScript, SQL
        Developer Tools: Git, GitHub, MongoDB , Postman
        Technologies/Frameworks: React JS, Node JS, Express JS
        Relevant Coursework: Data Structures And Algorithms(basic), DBMS, OOPS
        </span>
        <br />
        <br />
      
         
       
      </div>
    </div>
  );
}

export default About;
