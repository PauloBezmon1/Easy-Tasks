function TestimonialCard({ content, imageSrc, name, role }) {
  return (
    <div className="p-8 duration-300 ease-out border rounded-lg hover:scale-105 hover:shadow-lg hover:border-indigo-700 hover:shadow-indigo-500/50">
      <p className="leading-loose text-gray-600">{content}</p>

      <div className="flex items-center mt-8 -mx-2">
        <img
          className="object-cover mx-2 rounded-full w-14 h-14 ring-2 ring-gray-300"
          src={imageSrc}
          alt={name}
        />

        <div className="mx-2">
          <h1 className="font-semibold text-gray-800">{name}</h1>
          <span className="text-sm text-gray-500">{role}</span>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="mb-3 text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-700">O QUE ESTÃO DIZENDO</h2>
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl">Palavras dos nossos usuários</h1>
        <p className="mt-10 text-lg text-center text-gray-600">Veja como a EasyTask revoluciona a gestão de projetos. Descubra experiências <br /> dos usuários e transforme a colaboração da sua equipe.</p>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          {/* Testimonial 1 */}
          <TestimonialCard
            content="Encontrar uma ferramenta de gerenciamento de projetos tão intuitiva e eficiente foi um divisor de águas para nossa equipe. O EasyTask simplificou nossa colaboração e melhorou significativamente a visibilidade de nossos projetos."
            imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            name="Gustavo"
            role="Front-End da Meta"
          />

          {/* Testimonial 2 */}
          <TestimonialCard
            content="Eu simplesmente amo a flexibilidade do EasyTask! Personalizar as colunas e categorias de acordo com as necessidades do meu projeto tornou o gerenciamento de tarefas uma experiência personalizada e altamente eficaz."
            imageSrc="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            name="Eloisa"
            role="Tech Lead da Google"
          />

          {/* Testimonial 3 */}
          <TestimonialCard
            content="A colaboração em tempo real nos permitiu trabalhar de forma mais conectada, mesmo quando estamos em locais diferentes. É incrível ver como as atualizações são refletidas instantaneamente, mantendo toda a equipe na mesma página."
            imageSrc="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            name="Melissa"
            role="UI/UX Designer da Apple"
          />
        </section>
      </div>
    </section>
  );
}

export default Testimonials;