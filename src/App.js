import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import WhatIdo from './components/what-i-Do';
import What_I_Did from './components/what-i-did';
import MyPricing from './components/my-pricing';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import ContactMe from './components/contactMe';
import Navbar from './components/navbar';
import WorkWithMe from './components/workWithMe';
import Testimonials from './components/testimonials';
import Blogs from './components/blogs';

function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageLength, setMessageLength] = useState(200)
  const [loading, isLoading] = useState(false)
  const [selectedLink, setLink] = useState("Home")
  const apiUrl = process.env.REACT_APP_API_URL;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    isLoading(true)

    try {

      const res = await axios.post(`${apiUrl}/contactMe`,
        {
          name: name,
          email: email,
          message: message
        }
      )

      if (res?.data?.st) {
        toast.success(res?.data?.msg)
        setEmail('')
        setName('')
        setMessage('')
        isLoading(false)
      } else {
        if (res?.data?.errors?.length > 0) {
          toast.error(res?.data?.errors[0].msg)
          isLoading(false)
          return
        }
        toast.error(res?.data?.msg)
        setEmail('')
        setName('')
        setMessage('')
        isLoading(false)
      }

    } catch (error) {
      toast.error("Something went wrong")
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('[id]');
    const scrollPosition = window.scrollY + 50; // Adjust this value if needed

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        setLink(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar selectedLink={selectedLink} setLink={setLink} isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Header />
      <AboutMe />
      <WhatIdo />
      <What_I_Did />
      <MyPricing />
      <WorkWithMe />
      <Testimonials />
      <Blogs />
      <ContactMe message={message} loading={loading} setMessage={setMessage} messageLength={messageLength} name={name} setName={setName} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      <Footer />
    </div >
  );
}

export default App;
