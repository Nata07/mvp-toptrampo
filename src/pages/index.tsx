import { encode } from "punycode";
import { useEffect, useState } from "react";

export default function Home() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    console.log('chegou aqui')
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);
  async function onSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "questionary", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }
  return (
    <>
      <form action="/?success=true" name="questionary" method="POST" data-netlify="true" onSubmit={(e) => onSubmit(e)}>
        <input type="hidden" name="form-name" value="questionary" />
        <div className="text-center mt-8">
          <h1 className="font-bold text-3xl text-green-600">Bem vindo a Top Trampo</h1>
          <span className="w-sm">Estamos contruindo uma plataforma e comunidade focada para prestadores de serviços. <br /> Esse é um questionário para você ajudar a construir o melhor produto.</span>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 p-4">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Informações pessoais</h3>
                <p className="mt-1 text-sm text-gray-600">Preencha seus dados de forma correta. 
                  <span className="block">Essas informações serão usadas na plataforma para fornece 
                    a melhor experiência para você e para seus clientes. 
                    <span className="block">Atente-se aos dados de email e telefone, é atraves desses dados que iremos entrar em contato contigo.</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
            {success && (
            <h2 className="block text-sm font-bold text-green-600  px-4">
              Dados enviado com sucesso! Entraremos assim que possível para mais detalhes.<br />
              Agradecemos sua colaboração.
            </h2>
)}
              {/* <form action="#" method="POST"> */}
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Seu Nome
                        </label>
                        <input
                          type="text"
                          required
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Sobrenome
                        </label>
                        <input
                          type="text"
                          required
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Endereço <span className="text-xs text-gray-400">(Ex: Rua Brasil, 1234)</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          Cidade
                        </label>
                        <input
                          type="text"
                          required
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          Estado
                        </label>
                        <input
                          type="text"
                          required
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          CEP / Código Postal
                        </label>
                        <input
                          type="text"
                          required
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Gênero
                        </label>
                        <div className="flex flex-row gap-6 mt-4">
                          <div className="flex items-center">
                            <input
                              id="male"
                              name="gender"
                              type="radio"
                              className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                            />
                            <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
                              Masculino
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="female"
                              name="gender"
                              type="radio"
                              className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                            />
                            <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
                              Feminino
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="other"
                              name="gender"
                              type="radio"
                              className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                            />
                            <label htmlFor="other" className="ml-3 block text-sm font-medium text-gray-700">
                              Prefiro não dizer
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                          Idade
                        </label>
                        <div className="flex flex-row gap-6">
                          <select
                            id="age"
                            name="age"
                            autoComplete="age"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          >
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-50">36-50</option>
                            <option value="Acima de 50">Acima de 50</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 p-4">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Questionário</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Esse questionário serve como um auxilio para nós ao criar a plataforma da <span className="font-bold text-green-600">Top Trampo</span>.
                  <span className="block"> <br /> </span>
                  <span className="block">
                    É de extrema importancia voce preencher com respostas que acredita de fato e espera de uma plataforma 
                    que atenda suas necessidades e expectativas. 
                    <span className="block font-bold">Isso é de muita importancia pra produzirmos o melhor produto.</span>
                  </span>
                  <span className="block"> <br /> </span>
                  {/* <span className="block">
                    É de extrema importancia voce preencher com respostas que acredita de fato e espera de uma plataforma 
                    que atenda suas necessidades e expectativas. 
                    <span className="block font-bold">Isso é muita valia para nosso serviço.</span>
                  </span> */}

                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                        Qual sua profissão?
                      </label>
                      <textarea
                        required
                        name="profession"
                        id="profession"
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="hobby" className="block text-sm font-medium text-gray-700">
                        Você tem algum hobby, que poderia trazer uma renda extra?
                      </label>
                      <select
                        required
                        id="hobby"
                        name="hobby"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      >
                        <option value="Acredito que sim">Acredito que sim</option>
                        <option value="Acho que não">Acho que não</option>
                      </select>
                    </div>
                    
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="used-app" className="block text-sm font-medium text-gray-700">
                        Cite 2 aplicativos que você mais usa em seu dia a dia.
                      </label>
                      <textarea
                        required
                        name="used-app"
                        id="used-app"
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="platform-winmoney" className="block text-sm font-medium text-gray-700">
                        Existe alguma plataforma digital que te ajuda a ganhar dinheiro com seu trabalho? <br /> Se sim, cite qual é e os motivos do por que você usa.
                      </label>
                      <textarea
                        required
                        name="platform-winmoney"
                        id="platform-winmoney"
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="plataform-necessary" className="block text-sm font-medium text-gray-700">
                        Você acha que hoje em dia uma plataforma que ajude pessoas a ganhar dinheiro é necessário?
                      </label>
                      <select
                        required
                        id="plataform-necessary"
                        name="plataform-necessary"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      >
                        <option value="Acredito que sim">Acredito que sim</option>
                        <option value="Acho que não">Acho que não</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="service-platform" className="block text-sm font-medium text-gray-700">
                        Você conhece e/ou ja usou alguma app/plataforma para contratar ou prestar serviços? <br /> Se sim cite-os e o que achou.
                      </label>
                      <textarea
                        required
                        name="service-platform"
                        id="service-platform"
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="use-platform-facility" className="block text-sm font-medium text-gray-700">
                        Você utilizaria uma plataforma que facilite a contratação de serviço e/ou para você como prestador 
                        de serviço te ofereça mais possibilidade de clientes e renda?
                      </label>
                      <select required name="use-platform-facility" id="use-platform-facility" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                        <option value="Sim, utilizaria com toda a certeza">Sim, utilizaria com toda a certeza</option>
                        <option value="Talvez utilizaria">Talvez utilizaria</option>
                        <option value="Fiquei interessado">Fiquei interessado</option>
                        <option value="Hoje não tenho necessidade">Hoje não tenho necessidade</option>
                        <option value="Não utilizaria">Não utilizaria</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="service-provided" className="block text-sm font-medium text-gray-700">
                        O que mais te atrai em para contratar um serviço e em um serviço prestado?
                      </label>
                      <select required name="service-provided" id="service-provided" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                        <option value="Prazo">Prazo</option>
                        <option value="Atendimento">Atendimento</option>
                        <option value="Preço">Preço</option>
                        <option value="Qualidade do serviço">Qualidade do serviço</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="service-provided" className="block text-sm font-medium text-gray-700">
                        Quanto você estaria disposto a investir na plataforma para solicitar ou prestar serviços.
                      </label>
                      <select required name="service-provided" id="service-provided" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                        <option value="0-19.90">R$0 - R$29,90</option>
                        <option value="20.00-39.90">R$20,00 - R$39,90</option>
                        <option value="40.00-69.90">R$40,00 - R$69,90</option>
                        <option value="Nada">Nada</option>
                      </select>
                      
                      <label htmlFor="" className="block text-sm font-medium text-gray-700 mt-4">Cite suas considerações</label>
                      <textarea
                        // required
                        name="profession"
                        id="profession"
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>               
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  )
}
