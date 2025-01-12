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
          <p className="text-center pb-5">Let&apos;s Know about my Contact</p>

          <section className="bg-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-6">
                    <div className="lg:w-1/2 lg:mx-6">
                        <h1 className="text-2xl font-semibold text-black capitalize lg:text-3xl">
                            Contact Me
                        </h1>

                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="mx-2 text-gray-700 truncate w-72">
                                    Yogyakarta DIY Indonesia
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="mx-2 text-gray-700 truncate w-72 ">+62-882-0060-35316</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="mx-2 text-gray-700 truncate w-72 ">atzulfikar45@gmail.com</span>
                            </p>
                        </div>

                        <div className="mt-6 w-80 md:mt-8">
                            <h3 className="text-gray-600 dark:text-gray-300">Follow us</h3>
                            
                            <div className="flex mt-4 -mx-1.5 ">
                              
                              <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://linkedin.com/in/atakadzulfikar">
                                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                      <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                      <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                  </svg>
                              </a>

                              <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://web.facebook.com/zulfikar.ataka/">
                                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                  </svg>
                              </a>

                              <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://instagram.com/atakazulfikar">
                                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                  </svg>
                              </a>
                          </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:mx-6 shadow-black-300/50">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-xl  lg:max-w-xl shadow-black-300/10 ">
                            <h1 className="text-lg font-medium text-gray-700 ">What do you want to ask?</h1>

                            <form className="mt-6">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 ">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring focus:ring-blue-400 focus:outline-none" />
                                </div>

                                <div className="mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring focus:ring-blue-400 focus:outline-none" />
                                </div>

                                <div className="mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 ">Message</label>
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
