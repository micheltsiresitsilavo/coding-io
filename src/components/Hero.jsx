import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-4 md:py-8">
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src="https://ucarecdn.com/99333b78-9107-496e-b67b-2aec76d99c2d/poreto_closeupimageprogramerworkinghisdeskoffice.jpg"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />

          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>

          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
              Nous sommes une Agence Digital Marketing
            </p>
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              Coding.io
            </h1>
            <p className="mb-8 text-center text-xl font-bold text-white sm:text-4xl md:mb-12 md:text-5xl">
              Partagez vos idées avec le monde
            </p>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Link
                to="services"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Services
              </Link>
              <Link
                to="project"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Projets
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Choisir un plugin WordPress
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Découvrez notre tout dernier plugin WordPress révolutionnaire
              conçu pour simplifier la gestion de votre site web en un clin
              d'œil. Ne perdez plus de temps à jongler avec des codes complexes,
              optez pour la simplicité et l'efficacité avec notre plugin
              WordPress dès aujourd'hui!
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
            {/* <!-- left side - start --> */}
            <div className="w-full rounded-lg bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">
                  Bloom
                </h3>
                <p className="text-gray-300">
                  eMail Opt-In et Lead Generation Plugin pour WordPress{" "}
                </p>
              </div>

              <div className="mb-4 space-x-2">
                <span className="text-4xl font-bold text-gray-100">
                  130 000AR
                </span>{" "}
                <br />
                <span className="text-2xl text-gray-300 line-through">
                  200 000AR
                </span>
              </div>

              <ul className="mb-6 space-y-2 text-gray-300">
                {/* <!-- feat - start --> */}
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Pop-up Opt-In automatique</span>
                </li>
                {/* <!-- feat - end -->

          <!-- feat - start --> */}
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Fly-Ins Opt-Ins automatiques</span>
                </li>
                {/* <!-- feat - end -->

          <!-- feat - start --> */}
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Formulaires Opt-In en ligne</span>
                </li>
                {/* <!-- feat - end --> */}
              </ul>

              <a
                href="#"
                className="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base"
              >
                Obtenir Bloom
              </a>
            </div>
            {/* <!-- left side - end -->

      <!-- right side - start --> */}
            <div className="w-full rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-400 p-6 shadow-xl sm:w-1/2 sm:p-8">
              <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Monarch
                  </h3>
                  <p className="text-indigo-100">
                    Le meilleur plugin de partage de médias sociaux pour
                    WordPress
                  </p>
                </div>
              </div>

              <div className="mb-4 space-x-2">
                <span className="text-4xl font-bold text-white">130 000Ar</span>
                <span className="text-2xl text-indigo-100 line-through">
                  250 000Ar
                </span>
              </div>

              <ul className="mb-6 space-y-2 text-indigo-100">
                {/* <!-- feat - start --> */}
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Partage social</span>
                </li>
                {/* <!-- feat - end -->

          <!-- feat - start --> */}
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Add Sharing Buttons in 5 Different Locations</span>
                </li>
                {/* <!-- feat - end -->

          <!-- feat - start --> */}
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Automatic Pop-Ups</span>
                </li>
                {/* <!-- feat - end -->

          <!-- feat - start --> */}
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Design clean et personnalisable</span>
                </li>
                {/* <!-- feat - end -->

          <!-- feat - start --> */}
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Pop & Fly</span>
                </li>
                {/* <!-- feat - end --> */}
              </ul>

              <Link
                to="monarch"
                className="block rounded-lg bg-indigo-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-300 focus-visible:ring active:bg-indigo-400 md:text-base"
              >
                Obtenir Monarch
              </Link>
            </div>
            {/* <!-- right side - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
