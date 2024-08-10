import React from 'react'

const AboutMe = () => {
  return (
    <section className="section " id="about">
    <div className="container text-center">
      <div className="about">
        <div className="about-img-holder">
          <img src="assets/imgs/man.png" className="about-img"
            alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, meyawo Landing page" />
        </div>
        <div className="about-caption">
          <p className="section-subtitle">Who Am I ?</p>
          <h1 className="section-title mb-3">About Me</h1>
          <p>
            Greetings! 😀 I'm a full-stack developer with 5 years of extensive experience in the complete development cycle of various applications. I'm proficient in a variety of programming languages and have a deep passion for creating dynamic and innovative solutions.
            <br />
            Specializing in the MERN stack and Web3 technologies, I excel in designing and developing scalable and secure web applications as well as decentralized applications (dApps). My focus is on ensuring seamless user experiences and efficient performance in every project I undertake.

            <br />
            <br />
            <span className='text-primary'>
              Skiled In - </span> <br />
            C, C++, Java, Python, JavaScript, PHP
            / React.js
            / Next.js
            / Node.js
            / Express.js
            / Laravel
            / Django
            / CSS / ( Tailwind, Bootstrap )
            / HTML
            / React Native (Mobile App Development)
            / Web3
            / Solidity
            / Smart Contract
            / MVC Structure
            / NGINX
            / FTP
            / SQL - ( MySQL, PostgreSQL )
            / NoSQL - ( MongoDB, Firebase )
          </p>
          <a href='#contact' className="btn-rounded btn btn-outline-primary mt-4">Contact Me</a>
        </div>
      </div>
    </div>
  </section> 
  )
}

export default AboutMe