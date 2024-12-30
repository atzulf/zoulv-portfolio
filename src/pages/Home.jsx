import mobil from "../assets/images/mob.png";

const Home = () => {
  return (
    <div className="home py-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="hero grid grid-cols-2 pt-32 gap-20 lg:flex-row items-center justify-between">
          <div className="box text-center lg:text-left mb-8 lg:mb-0 lg:max-w-md">
            <h1 className="text-5xl/tight font-semibold  mb-4">
              Ataka Dzulfikar <span className="text-sky-500">Web Portfolio</span>
            </h1>
            <p className="text-base/8 mb-7">As a passionate about UI UX Design and Mobile Development, 
            I focus on crafting innovative and impactful solutions for the digital world. 
            My recent work includes UNYCraft and PersonaWay, which highlights my ability to combine creativity and functionality in a seamless user experience.</p>
            <a href="#" className="inline-block mt-4 text-white bg-sky-500 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-sky-600 transition-all">
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
          <img src={mobil} alt="mobil" />
          </div>
        </div>

        <div className="about">
          <div className="box">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
