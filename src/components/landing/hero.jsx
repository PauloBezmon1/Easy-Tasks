import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Overview from "../../assets/Overview.png"

function Hero() {
    return(
      <Fade cascade damping={1e-1} direction='up' triggerOnce={true}>
          <section>
          <div className="relative overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 sm:text-4xl md:text-6xl">Organize e melhore sua produtividade</h1>
                <p className="mt-6 text-lg text-gray-600 mb-6">Simples e flexível. Bastam quadros, listas e cartões para obter uma visualização clara de quem está fazendo o que e o que precisa ser feito.</p>

                <Link to="login">
                  <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-700 text-white mr-2 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 duration-300 ease-out ">Comece agora</button>
                </Link>

              <a href="#prices">
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 mb-6 hover:scale-105 duration-300">Ver preços </button>
              </a>
              
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <img src={Overview} alt="Overview" className="object-contain w-full h-96 sm:h-[480px] bg-no-repeat bg-center bg-cover rounded-3xl" />

                <div className="absolute bottom-24 -start-24 blur-3xl -z-[1] w-64 h-64 bg-gradient-to-b from-purple-500 to-indigo-700 p-px rounded-full">
                  <div className="w-64 h-64 rounded-full "></div>
                </div>

                <div className="absolute -top-12 -end-20 blur-3xl -z-[1] w-96 h-96 bg-gradient-to-t from-purple-500 to-indigo-700 p-px rounded-full">
                  <div className="w-96 h-96 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>
          </section>
      </Fade>

    );
}

export default Hero