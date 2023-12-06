function Prices () {
    return(

    <section id="prices">
    <div className="py-8 px-4 mx-auto max-w-[85rem] lg:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-3 text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-700">NOSSOS PREÇOS</h2>
            <h1 className="mb-8 text-4xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl">Pronto para começar?</h1>
            <p className="mb-10 text-lg text-center text-gray-600">Descubra a liberdade de gerenciar seus projetos de maneira eficiente com nossos planos flexíveis. Oferecemos opções para todos os tipos de equipes.</p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">

            {/* CARD PREÇO PLANO GRATUITO */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 duration-300 ease-in-out border border-gray-200 rounded-lg shadow hover:scale-105">
                <h3 className="mb-4 text-2xl font-bold">Gratuito</h3>
                <p className="leading-loose text-gray-600 sm:text-lg ">Melhor opção para projetos pessoais ou pequenos.</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">R$0</span>
                    <span className="text-gray-500">/mensal</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Número limitado de usuários</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Quadros e listas limitados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Tamanho do time: <span className="font-semibold">2 pessoas</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Suporte premium: <span className="font-semibold">1 mês</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Updates gratuitos: <span className="font-semibold">1 mês</span></span>
                    </li>
                </ul>
                <a href="login" className="text-white font-semibold px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-indigo-700 hover:shadow-md rounded-md hover:shadow-indigo-500/50 duration-300 ease-out">Comece agora</a>
            </div>

            {/* CARD PREÇO PLANO PRO */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 duration-300 ease-in-out bg-gray-100 border border-gray-200 rounded-lg shadow hover:scale-105">
                <h3 className="mb-4 text-2xl font-bold">Pro</h3>
                <p className="leading-loose text-gray-600 sm:text-lg">Relevante para vários usuários, suporte estendido e premium.</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">R$50</span>
                    <span className="text-gray-500">/mensal</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Número limitado de usuários</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Quadros e listas ilimitados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Tamanho do time: <span className="font-semibold">10 pessoas</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Suporte premium: <span className="font-semibold">12 meses</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Updates gratuitos: <span className="font-semibold">12 meses</span></span>
                    </li>
                </ul>
                <a href="login" className="text-white font-semibold px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-indigo-700 hover:shadow-md rounded-md hover:shadow-indigo-500/50 duration-300 ease-out">Comece agora</a>
            </div>

            {/* CARD PREÇO PLANO ULTIMATE */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 duration-300 ease-in-out border border-gray-200 rounded-lg shadow hover:scale-105">
                <h3 className="mb-4 text-2xl font-bold">Ultimate</h3>
                <p className="leading-loose text-gray-600 sm:text-lg">Melhor para usos em larga escala e direitos de redistribuição estendidos.</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">R$250</span>
                    <span className="text-gray-500">/mensal</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Quadros e listas ilimitados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Relatórios avançados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Tamanho do time: <span className="font-semibold">100 pessoas</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Suporte premium: <span className="font-semibold">36 meses</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Updates gratuitos: <span className="font-semibold">36 meses</span></span>
                    </li>
                </ul>

                    <a href="login" className="text-white font-semibold px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-indigo-700 hover:shadow-md rounded-md hover:shadow-indigo-500/50 duration-300 ease-out">Comece agora</a>
            </div>
        </div>
    </div>
    </section>
    )
}

export default Prices