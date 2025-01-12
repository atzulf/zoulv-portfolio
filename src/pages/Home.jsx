import beranda from "../assets/images/mafoto.png";
import aboutme from "../assets/images/abotmi.png"
import port1 from "../assets/images/crawlingtwitter.png"
import port2 from "../assets/images/fundamental.png"
import port3 from "../assets/images/imk.png"
import port4 from "../assets/images/insectdetection.png"
import port5 from "../assets/images/intermediate1.png"
import port6 from "../assets/images/intermediate2.png"
import port7 from "../assets/images/pam.png"
import port8 from "../assets/images/personaway.png"
import port9 from "../assets/images/unycraft.png"
import port10 from "../assets/images/unycraftapp.png"
import port11 from "../assets/images/spkweb.png"
import port12 from "../assets/images/image.png"
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Home = () => {
  const [text] = useTypewriter({
    words: [
      "UI UX Design Enthusiast",
      "Android App Development",
      "Front End Development",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  return (
    <div className="home py-12 mb-10">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-screen-xl">
        <div className="hero grid grid-cols-1 lg:grid-cols-2 pt-32 gap-8 items-center justify-center">
          <div className="box text-center lg:text-left mb-2 lg:mb-0 lg:max-w-md">
            <h1 className="text-5xl font-bold mb-3">
              Hello I&apos;m <span className="text-sky-500 text-5xl inline">Ataka Dzulfikar</span>
            </h1>
            <h2 className=" text-3xl font-semibold text-sky-700 mb-2">
            {text}
              <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="#0ea5e9"
              />
            </h2>
            <p className="text-base mb-7 text-justify">
              As a passionate about UI UX Design and Mobile Development, I focus on crafting innovative and impactful solutions for the digital world.
            </p>
            <a
              href="#about"
              className="inline-block mt-3 text-white bg-sky-500 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-sky-600 transition-all"
            >
              About Me <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box flex justify-center lg:justify-end pb-12">
            <img
              src={beranda}
              alt="beranda"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div id="about" className="about grid md:grid-cols-2 grid-cols-1 items-center mt-40 mb-12 gap-12 md:pt-20 pt-32 py-12">
          <div className="box">
            <img src={aboutme} alt="aboutme" className="w-80 md:m-0 mx-auto" />
          </div>
          <div className="box">
            <h1 className="text-5xl font-bold mb-3">
              Let&apos;s Get to <span className="text-sky-500 text-5xl inline">Know Me</span>
            </h1>
            <p className="text-base/loose leading-relaxed mb-6 text-justify">
              Hello! My Name is <strong>Ataka Dzulfikar</strong> I&apos;m a Information Technology Student at Universitas Negeri Yogyakarta, passionate developer specializing in
              <strong> UI/UX Design</strong> and <strong>Mobile Development</strong>. 
              I have experience in application design and created several application projects. 
            </p>
            <p className="text-base/loose leading-relaxed mb-6 text-justify">
              I enjoy solving complex problems through creative solutions. 
              Whether it’s designing user-friendly interfaces or building robust mobile applications, 
              my goal is to deliver exceptional results that exceed expectations.
            </p>
          </div>
        </div>

        <div id="project" className="project pt-28">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-bold mb-2">Project</h1>
          <p className="text-center">Let&apos;s Know about my project</p>
          <div className="project-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port1} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">Crawling Data Twitter with Streamlit</h3>
              <p className="text-base/loose text-justify">Creating a Twitter Data Crawling Website using Streamlit for Web Application project.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port2} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">Mobile Apps Dicoding Event</h3>
              <p className="text-base/loose text-justify">Create Kotlin Dicoding Event App using Retrofit as API caller for fundamental class submision collection.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port3} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">UI Design Figma UNYCraft</h3>
              <p className="text-base/loose text-justify">Creating Figma UNYCraft UI Design for 5th semester Human Computer Interaction Course.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port4} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">Insect Animals Detection Website using Streamlit</h3>
              <p className="text-base/loose text-justify">Creating an Insect Detection Website using Streamlit as a web application assignment collection.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port5} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">Course Story App 1 Android Intermediate</h3>
              <p className="text-base/loose text-justify">Creating an Android Intermediate 1 Course Story Application that uses the Auth API and user upload features using the gallery and camera.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port7} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">DigiSkill Android App 5th semester</h3>
              <p className="text-base/loose text-justify">Creating DigiSkill applications using Android Java in the Mobile Application Development course.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port6} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">Course Story App 2 Android Intermediate</h3>
              <p className="text-base/loose text-justify">Create an Android Intermediate 2 Course Story Application that has the addition of using the Google Maps API and infinity Scrolling using pagging 3.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port8} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">PersonaWay Personality App</h3>
              <p className="text-base/loose text-justify">Creating Personality test applications using DISC and the use of Inter ML CC configuration to form Kotlin applications.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port9} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">UNYCraft Website</h3>
              <p className="text-base/loose text-justify">Creating a UNYCraft E-commerce website using PHP that has a login feature as an Admin and login as a User Management information system.</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port10} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">UNYCraft Mobile App</h3>
              <p className="text-base/loose text-justify">Create a UNYCraft android application that implements recycle view and intent as a beginner Android Submission</p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port11} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">UNYCraft UI Design</h3>
              <p className="text-base/loose text-justify">Create a UNYCraft UI Design Figma for Decision Making Systems course </p>
            </div>

            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={port12} alt="crawlingtwitter" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">UNYCraft UI Web Design</h3>
              <p className="text-base/loose text-justify">Create a UNYCraft UI Design Website Figma for software project management course</p>
            </div>

          </div>
        </div>

        <div id="contact" className="contact pt-28">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-bold mb-2">Contact Me</h1>
          <p className="text-center">Let&apos;s Know about my Contact</p>

          <section className="bg-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-6">
                    <div className="lg:w-1/2 lg:mx-6">
                        <h1 className="text-2xl font-semibold text-black capitalize lg:text-3xl">
                            Contact us fo more info
                        </h1>

                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="mx-2 text-gray-700 truncate w-72">
                                    Cecilia Chapman, 711-2880 Nulla St., Mankato, Mississippi 96522
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="mx-2 text-gray-700 truncate w-72 ">(257) 563-7401</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="mx-2 text-gray-700 truncate w-72 ">acb@example.com</span>
                            </p>
                        </div>

                        <div className="mt-6 w-80 md:mt-8">
                            <h3 className="text-gray-600 dark:text-gray-300">Follow us</h3>
                            <div className="flex mt-4 -mx-1.5">
                                <a className="mx-1.5 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 transform" href="#">
                                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 className="text-lg font-medium text-gray-700 dark:text-white">What do you want to ask?</h1>

                            <form className="mt-6">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring focus:ring-blue-400 focus:outline-none" />
                                </div>

                                <div className="mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring focus:ring-blue-400 focus:outline-none" />
                                </div>

                                <div className="mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea placeholder="Write your message here..." className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring focus:ring-blue-400 focus:outline-none"></textarea>
                                </div>

                                <button className="px-6 py-3 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </div>

      </div>
    </div>
  );
};

export default Home;
