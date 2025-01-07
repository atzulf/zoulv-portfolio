const Footer = () => {
  return (
    <footer className="footer bg-white shadow mt-20 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="home" className="text-gray-600 hover:text-sky-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-sky-500 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#project" className="text-gray-600 hover:text-sky-500 transition">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-sky-500 transition">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {/* GitHub */}
          <a
            href="https://github.com/atzulf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.87 10.96c.58.1.79-.25.79-.56v-2.06c-3.21.7-3.88-1.45-3.88-1.45-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.74 1.28 3.42.97.1-.75.41-1.28.74-1.57-2.57-.29-5.27-1.29-5.27-5.74 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.47.11-3.05 0 0 .98-.31 3.2 1.2.94-.26 1.94-.38 2.94-.39 1 .01 2 .13 2.94.39 2.21-1.52 3.2-1.2 3.2-1.2.63 1.58.23 2.76.11 3.05.75.82 1.2 1.86 1.2 3.13 0 4.46-2.71 5.45-5.29 5.74.42.36.79 1.1.79 2.23v3.3c0 .31.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/atakadzulfikar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554V15.15c0-1.265-.024-2.896-1.764-2.896-1.765 0-2.034 1.378-2.034 2.799v5.4H9.539V9h3.414v1.561h.047c.476-.9 1.637-1.847 3.368-1.847 3.6 0 4.267 2.367 4.267 5.448v6.29zM5.337 7.433a2.065 2.065 0 112.065-2.065 2.065 2.065 0 01-2.065 2.065zM6.556 20.452H4.117V9h2.439zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.454C23.208 24 24 23.226 24 22.273V1.727C24 .774 23.208 0 22.225 0z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/atakazulfikar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.42.41.516.19.89.416 1.28.81.39.39.62.764.81 1.28.17.45.355 1.25.41 2.42.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.42-.19.516-.416.89-.81 1.28-.39.39-.764.62-1.28.81-.45.17-1.25.355-2.42.41-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.42-.41-.516-.19-.89-.416-1.28-.81-.39-.39-.62-.764-.81-1.28-.17-.45-.355-1.25-.41-2.42-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.42.19-.516.416-.89.81-1.28.39-.39.764-.62 1.28-.81.45-.17 1.25-.355 2.42-.41 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.331.013 7.053.07 5.776.127 4.748.35 3.93.767a5.995 5.995 0 00-2.162 2.162C1.35 4.748 1.127 5.776 1.07 7.053.013 8.331 0 8.756 0 12c0 3.244.013 3.669.07 4.947.057 1.277.28 2.305.767 3.123a5.995 5.995 0 002.162 2.162c.818.416 1.846.64 3.123.767 1.278.057 1.703.07 4.947.07s3.669-.013 4.947-.07c1.277-.057 2.305-.28 3.123-.767a5.995 5.995 0 002.162-2.162c.416-.818.64-1.846.767-3.123.057-1.278.07-1.703.07-4.947s-.013-3.669-.07-4.947c-.057-1.277-.28-2.305-.767-3.123a5.995 5.995 0 00-2.162-2.162c-.818-.416-1.846-.64-3.123-.767C15.669.013 15.244 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-8.001 3.999 3.999 0 010 8.001zm7.2-10.1a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Copyright by <span className="font-bold">Ataka Dzulfikar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
