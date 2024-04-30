import { Image } from "@nextui-org/react";
const Projet = () => {
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
                Nos projets
              </h1>
            </div>
          </section>
        </div>
      </div>

      <section id="team" className="bg-white">
        <div className="flex items-center justify-center px-2 py-4 sm:px-2 ">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className=" text-2xl  font-bold text-danger sm:text-3xl md:text-4xl">
              PROJETS QUE VOUS AIMEREZ PEUT-ÊTRE
            </h1>
          </div>
        </div>
        <div className="relative items-center w-full px-2 py-12 mx-auto  lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-4">
              <Image
                isZoomed
                width={240}
                className="mb-8"
                alt="NextUI Fruit Image with Zoom"
                src="https://ucarecdn.com/d7954682-a3ce-4e06-a76d-5debc26aec34/groupecapsudcom.png"
              />
              <h2 className="mb-8 text-xl font-semibold tracking-widest text-danger uppercase">
                Capsud
              </h2>
            </div>
            <div className="p-4">
              <Image
                isZoomed
                width={240}
                className="mb-8"
                alt="NextUI Fruit Image with Zoom"
                src="https://ucarecdn.com/b6177229-6855-476d-9e09-47041ea3c447/LemaliaToutseulonvaplusviteensembleonvaplusloinlemaliacom2.png"
              />
              <h2 className="mb-8 text-xl font-semibold tracking-widest text-danger uppercase">
                Lemalia
              </h2>
            </div>
            <div className="p-4">
              <Image
                isZoomed
                width={240}
                className="mb-8"
                alt="NextUI Fruit Image with Zoom"
                src="https://ucarecdn.com/eb820b5e-ab35-43a7-9e0f-1dd58d4908ab/WFFWorldFreightForwarderMadagascarwffgroupcom2.png"
              />
              <h2 className="mb-8 text-xl font-semibold tracking-widest text-danger uppercase">
                WFF Madagascar
              </h2>
            </div>
            <div className="p-4">
              <Image
                isZoomed
                width={240}
                className="mb-8"
                alt="NextUI Fruit Image with Zoom"
                src="https://ucarecdn.com/9a934b1c-88b5-4444-b35e-33dab8d4c25d/ESCALEVOYAGESMADAGASCARAgencedeVoyagesTourOprateurRcept_wwwesvmadagascarmg2.png"
              />
              <h2 className="mb-8 text-xl font-semibold tracking-widest text-danger uppercase">
                ESCALE VOYAGES MADAGASCAR
              </h2>
            </div>
            <div className="p-4">
              <Image
                isZoomed
                width={240}
                className="mb-8"
                alt="NextUI Fruit Image with Zoom"
                src="https://ucarecdn.com/634b7713-2029-4d4d-99c8-c5917358f916/lafinestramadagascarcom.png"
              />
              <h2 className="mb-8 text-xl font-semibold tracking-widest text-danger uppercase">
                Lafinestra
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projet;
