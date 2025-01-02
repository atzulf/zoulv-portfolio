import beranda from "../assets/images/mafoto.png";

const Home = () => {
  return (
    <div className="home py-12 mb-10">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-screen-xl">
        <div className="hero grid grid-cols-1 lg:grid-cols-2 pt-32 gap-8 items-center justify-center">
          <div className="box text-center lg:text-left mb-2 lg:mb-0 lg:max-w-md">
            <h1 className="text-5xl font-bold mb-3">
              Hello I&apos;m <span className="text-sky-500 text-5xl inline">Ataka Dzulfikar</span>
            </h1>
            <p className="text-base mb-7 text-justify">
              As a passionate about UI UX Design and Mobile Development, I focus on crafting innovative and impactful solutions for the digital world.
            </p>
            <a
              href="#"
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

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center mt-20 mb-12 gap-12 md:pt-20 pt-32 py-12">
          <div className="box">
            <img src={beranda} alt="beranda" className="md:m-0 mx-auto" />
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

      </div>
    </div>
  );
};

export default Home;
