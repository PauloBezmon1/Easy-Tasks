import { useEffect, useState } from "react";
import useAuth from "../../API/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { data, error, loading, fetchData } = useAuth(); // Chama useAuth para obter fetchData
  const navigate = useNavigate()

  const emailHandleChange = (e) => {
    setEmail(e.target.value);
  };

  const senhaHandleChange = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chama fetchData ao submeter o formulário, passando email e senha
    fetchData("auth", email, senha);
  };

  // Utiliza useEffect para monitorar mudanças em 'data', 'error' ou 'loading'
  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.token)

      if (data.message == "Autenticado") {
        navigate("/tasks")
        toast.success("Login efetuado com sucesso")
      }
    } else if (error) {
      toast.error("Não foi possível efetuar o login")
    }
    }, [data, error]);

  return (
    <section>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full p-8 lg:p-36 md:p-52 sm:20 lg:w-1/2">
          <h1 className="my-5 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">Login</h1>
          <p className="mb-4 text-gray-600 text-md">Entre com seu email e senha</p>

          <hr className="h-px my-5 bg-gray-200 border-0" />


          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">
                Email
              </label>
              <input
                placeholder="email@exemple.com"
                type="text"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                autoComplete="on"
                onChange={emailHandleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">
                Senha
              </label>
              <input
                placeholder="Min 8 caracteres"
                type="password"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                autoComplete="on"
                onChange={senhaHandleChange}
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label className="ml-2 text-gray-600">
                Manter logado
              </label>
            </div>
            <div className="mb-6 text-blue-500">
              <a href="/signup" className="text-indigo-700 hover:underline">
                Não tenho uma conta
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-5 py-2.5 font-semibold text-center text-white duration-300 ease-out rounded-lg bg-gradient-to-r from-purple-500 to-indigo-700 hover:shadow-md hover:shadow-indigo-500/50"
            >
              Login
            </button>
          </form>

        </div>
        <div className="hidden w-1/2 h-screen lg:block">
          <img
            src="https://i.ibb.co/b1Vpq7f/Background-5-4.png"
            className="object-cover w-full h-full rounded-bl-[128px]"
            alt="Background Image"
          />
        </div>
      </div>
    </section>

  )
}

export default Login