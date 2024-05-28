import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div>
      <div className="sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-4 py-2 md:py-6">
          <section className="min-h-14 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-4 shadow-lg md:py-10 xl:py-14">
            <img
              src="https://www.elegantthemes.com/images/monarch/monarch-sharing-networks.jpg"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-slate-500 mix-blend-multiply"></div>

            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                Merci pour votre achat
              </h1>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-white">
        <main className="flex items-center justify-center px-6 py-4 sm:px-8 ">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className=" text-2xl font-bold text-gray-600 sm:text-3xl md:text-4xl">
              Une fois le paiement effectué, nous pourrons finaliser la
              transaction et vous fournir l'accès au plugin souhaité. Merci pour
              votre compréhension et votre coopération.{" "}
            </h1>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Thanks;
