import { Fade } from "react-awesome-reveal";
import team from "../../assets/team.svg";
import eye from "../../assets/eye.svg";
import grid from "../../assets/grid.svg";
import DeleteImage from "../../assets/Delete.png"

// Componente reutilizável
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex duration-200 ease-in hover:scale-105">
      {/* Ícone */}
      <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-lg border text-white bg-gradient-to-tl from-purple-500 via-indigo-600 to-indigo-800 shadow-sm mx-auto">
        <img src={icon} alt={title} />
      </span>
      {/* Detalhes */}
      <div className="ms-5 sm:ms-8">
        <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};



function Features() {
  return (
    <section>
      {/* Seção principal de funcionalidades */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Animação para o título da seção */}
        <Fade cascade damping={1e-1} direction="up">
          <h2 className="mb-3 text-xl font-bold text-center text-transparent text-indigo-700 bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-700">
            POR QUE USAR
          </h2>
          <h1 className="mb-8 text-4xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl">
            Fácil, Simples, Acessível
          </h1>
          <p className="mb-10 text-lg text-center text-gray-600">
            Otimize a gestão de projetos com nosso Quadro Kanban: vantagens que impulsionam <br /> a produtividade e simplificam a colaboração da sua equipe.
          </p>
        </Fade>

        {/* Grade para cartões de funcionalidades */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Animação para cartões da esquerda para a direita */}
          <Fade cascade damping={1e-1} direction="left">
            <div className="space-y-6 lg:space-y-10">
              {/* Cartão da funcionalidade 1 */}
              <FeatureCard
                icon={team}
                title="Colaboração em Tempo Real"
                description="Colabore em tempo real com sua equipe, mantendo todos atualizados sobre o progresso do projeto."
              />

              {/* Cartão da funcionalidade 2 */}
              <FeatureCard
                icon={eye}
                title="Visualização Clara e Concisa"
                description="Obtenha uma visão clara do status do seu projeto com nosso layout limpo e conciso."
              />

              {/* Cartão da funcionalidade 3 */}
              <FeatureCard
                icon={grid}
                title="Categorização Flexível"
                description="Adapte o Quadro Kanban às suas necessidades específicas com categorizações flexíveis."
              />
            </div>
          </Fade>

          {/* Animação para a imagem da direita */}
          <Fade cascade damping={1e-1} direction="right">
            <img src={DeleteImage} alt="Delete" className="w-full object-contain h-96 sm:h-[400px] bg-[url('https://www.icolorpalette.com/download/solidcolorimage/000000_solid_color_background_icolorpalette.png')] bg-no-repeat bg-center bg-cover rounded-xl"/>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Features;
