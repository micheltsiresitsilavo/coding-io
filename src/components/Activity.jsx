import Glide from "@glidejs/glide";
import { useEffect } from "react";
export default function Activity() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="">
      {/*<!-- Component: Slider with indicators inside --> */}
      <div className="relative w-full  glide-02">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full  h-[500px] overflow-hidden p-0">
            <li className="bg-gray-800">
              <div className=" w-full px-10 py-8">
                <h4 className="text-xl font-bold lg:text-3xl">Nos Activités</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="">
                    <h4 className="text-xl font-bold lg:text-3xl my-10">
                      Projet “Femme éveillées”
                    </h4>
                    <p>
                      Une formation professionnelle dans l’objectif principal
                      est de donner une autonomie financière aux femmes. Cette
                      activité consiste à former 5 femmes par quartier, donnant
                      une totalité de 690 femmes dans 138 quariers dans toutr la
                      Province.{" "}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src="https://Tailwindmix.b-cdn.net/image-04.jpg"
                      className="w-full max-w-full rounded shadow-2xl max-h-full m-auto"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
