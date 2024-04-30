const Services = () => {
  return (
    <div>
      <div className="sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-4 py-2 md:py-6">
          <section className="min-h-14 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-4 shadow-lg md:py-10 xl:py-14">
            <img
              src="https://ucarecdn.com/9b7d82b4-ecf8-4781-a1aa-d3fc965df1ef/25332.jpg"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-slate-500 mix-blend-multiply"></div>

            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                NOS SERVICES
              </h1>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-white">
        <div className="flex items-center justify-center px-6 py-4 sm:px-8 ">
          <h1 className=" text-2xl font-bold text-danger sm:text-3xl md:text-4xl">
            QUE FAISONS-NOUS?
          </h1>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-danger text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Création de sites web personnalisés
                  </h3>
                  <p className="mb-2 text-gray-500">
                    Nous créons des sites web uniques et adaptés aux besoins de
                    nos clients, avec une attention particulière accordée à
                    l'expérience utilisateur et à la convivialité.
                  </p>
                </div>
              </div>
              {/* <!-- feature - end -->

      <!-- feature - start --> */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-danger text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Sécurité
                  </h3>
                  <p className="mb-2 text-gray-500">
                    Mise en place de mesures de sécurité pour protéger les sites
                    web et les applications contre les cyberattaques.
                  </p>
                </div>
              </div>
              {/* <!-- feature - end -->

      <!-- feature - start --> */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-danger text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Conception graphique
                  </h3>
                  <p className="mb-2 text-gray-500">
                    Nous offrons des services de conception graphique pour les
                    logos, les cartes de visite, les affiches, les brochures,
                    les packaging, etc. pour garantir que leur image de marque
                    soit professionnelle et attractive.
                  </p>
                </div>
              </div>
              {/* <!-- feature - end -->

      <!-- feature - start --> */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-danger text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Optimisation de sites web
                  </h3>
                  <p className="mb-2 text-gray-500">
                    Nous offrons des services d'optimisation pour améliorer les
                    performances, la vitesse et l'expérience utilisateur des
                    sites web existants.
                  </p>
                </div>
              </div>
              {/* <!-- feature - end -->

      <!-- feature - start --> */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-danger text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Community management
                  </h3>
                  <p className="mb-2 text-gray-500">
                    Nous offrons une gestion de qualité pour les réseaux sociaux
                    en garantissant une présence active, une réponse rapide aux
                    commentaires et messages, une gestion de crise, une veille
                    concurrentielle, une rédaction de contenus pertinents pour
                    les réseaux sociaux et une analyse de performance pour aider
                    les entreprises à développer leur communauté en ligne.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-danger text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" />
                    <path d="M18 6h4" />
                    <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
                    <path d="m5 10-2 8" />
                    <path d="M12 10v3c0 .6-.4 1-1 1H8" />
                    <path d="m7 18 2-8" />
                    <path d="M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Maintenance et support
                  </h3>
                  <p className="mb-2 text-gray-500">
                    Nous offrons une maintenance et un support continu pour les
                    sites web et les applications développées, ainsi que les
                    correctifs de bogues pour garantir que tout fonctionne
                    correctement et pour apporter des améliorations en fonction
                    des besoins de nos clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
