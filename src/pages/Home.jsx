import beranda from "../assets/images/mafoto.png";

const Home = () => {
  return (
    <div className="home py-12">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-screen-xl">
        <div className="hero grid grid-cols-1 lg:grid-cols-2 pt-32 gap-8 items-center justify-center">
          <div className="box text-center lg:text-left mb-2 lg:mb-0 lg:max-w-md">
            <h1 className="text-5xl font-bold mb-3">
              Hello I&apos;m <span className="text-sky-500 text-5xl inline">Ataka Dzulfikar</span>
            </h1>
            <p className="text-base mb-7">
              As a passionate about UI UX Design and Mobile Development, I focus on crafting innovative and impactful solutions for the digital world.
            </p>
            <a
              href="#"
              className="inline-block mt-3 text-white bg-sky-500 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-sky-600 transition-all"
            >
              Tentang Saya <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box flex justify-center lg:justify-end">
            <img
              src={beranda}
              alt="beranda"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
