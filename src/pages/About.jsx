import { Image } from "@nextui-org/react";

const About = () => {
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
                A propos
              </h1>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-white">
        <main className="flex items-center justify-center px-6 py-4 sm:px-8 ">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className=" text-2xl font-bold text-danger sm:text-3xl md:text-4xl">
              Transformez votre présence digitale avec notre expertise
            </h1>

            <p className="mt-4 leading-relaxed text-gray-700 text-lg">
              Notre agence digitale est une équipe passionnée qui se consacre à
              aider les entreprises à prospérer dans le monde numérique. Nous
              sommes spécialisés dans la création de sites web sur mesure et le
              développement de solutions numériques innovantes pour répondre aux
              besoins uniques de nos clients. Que ce soit pour une présence en
              ligne percutante, une plateforme e-commerce efficace ou des outils
              numériques sur mesure, nous travaillons en étroite collaboration
              avec nos clients pour réaliser leurs objectifs. Avec notre
              expertise technique et notre créativité, nous transformons les
              idées en solutions numériques concrètes qui propulsent nos clients
              vers le succès.
            </p>
          </div>
        </main>
      </section>
      <section id="team" className="bg-white">
        <div className="flex items-center justify-center px-2 py-4 sm:px-2 ">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className=" text-2xl  font-bold text-danger sm:text-3xl md:text-4xl">
              Nos experts
            </h1>
          </div>
        </div>
        <div className="relative items-center w-full px-2 py-12 mx-auto  lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <img
                className="object-cover object-center w-full mb-8 lg:h-56 md:h-36 rounded-xl"
                src="https://ucarecdn.com/6f3a3485-cec2-48ae-a786-74ce58143558/tahiry.jpg"
                alt="blog"
              />

              <h2 className="mb-8 text-xs font-semibold tracking-widest text-danger uppercase">
                Tahiry Valisoa RAKOTORAHALAHY
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                CEO et Architecte Web
              </h1>
            </div>
            <div className="p-6">
              <img
                className="object-cover object-center w-full mb-8 lg:h-56 md:h-36 rounded-xl"
                src="https://coding-io.netlify.app/assets/images/team/team-1.jpg"
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-danger uppercase">
                Lamina Dalhia
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Chargé de prospection et commerciales - Web
              </h1>
            </div>
            <div className="p-6">
              <img
                className="object-cover object-center w-full mb-8 lg:h-56 md:h-36 rounded-xl"
                src="https://ucarecdn.com/c5e6bca5-1170-4a66-8cf9-a6c4ccf99b83/kristian.jpg"
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-danger uppercase">
                Kristian RAZAFINAMBININA
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Data Analist et Développeur Back-end
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
