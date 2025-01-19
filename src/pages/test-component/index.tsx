import React from "react";

const page = () => {
    return (
        <div>
            <div className=" w-full flex flex-col justify-center items-center mt-4 px-8">
                <span className=" bg-orange-500 px-4 py-1 text-base text-center rounded-full font-DMSans text-white">Valores e Planos</span>
                <h3 className=" text-4xl font-redHat font-bold mt-1 text-center">A Ocalev tem um plano <br className="hidden lg:block" /> para a sua necessidade</h3>
            </div>
            <div className="bg-white py-10 font-DMSans">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-8 lg:auto-rows-fr">
                   
                    <div
                        style={{ backgroundColor: "#F6F5F4" }}
                        className="rounded-lg p-6"
                    >
                        <h3 className="text-xl font-bold text-gray-800 font-redHat">
                            Gratuito
                        </h3>
                        <p className="text-4xl font-bold mt-4">R$ 0</p>
                        <p className="text-gray-500 mt-2 ">
                            For individuals to organize personal projects and life
                        </p>
                        <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg">
                            Cadastre-se
                        </button>
                        <ul className="mt-6 space-y-2 text-gray-600">
                            <h3 className=" pb-2 font-semibold text-base text-black">
                                Essenciais
                            </h3>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Desenho da planta baixa
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Posicionamento manual de pontos elétricos
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Projetos ilimitados
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Posicionamento manual de eletrodutos
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Suporte
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Desenho da planta baixa
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M200-440v-80h560v80H200Z"
                                        fill="#1F2937"
                                        stroke="#1F2937"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Basic page analytics
                            </li>
                            <li>7 day page history</li>
                            <li>Invite 10 guests</li>
                        </ul>
                    </div>

                    <div
                        style={{ backgroundColor: "#F6F5F4" }}
                        className="bg-white rounded-lg p-6"
                    >
                        <h3 className="text-xl font-bold text-gray-800 font-redHat">
                            Premium mensal
                        </h3>
                        <div className="relative text-4xl font-bold mt-4">
                            <span className="">
                                R$ 69,90<span className="text-base font-normal"> / mês</span>
                            </span>
                            <div
                                className="absolute text-xs font-semibold text-orange-500"
                                style={{
                                    bottom: "auto",
                                    top: "-14px",
                                    background: "transparent",
                                    fontWeight: 800,
                                    left: "0px",
                                }}
                            >
                                R$ 84,90 no pix ou
                            </div>
                        </div>


                        <p className="text-gray-500 mt-2">
                            Acesso por 30 dias, sem renovação automática
                        </p>
                        <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg">
                            Comprar
                        </button>

                        <ul className="mt-6 space-y-2 text-gray-600">
                            <h3 className=" pb-2 font-semibold text-base text-black">
                                Essenciais
                            </h3>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Customização do ponto elétrico (Ex.: tomada baixa, média, alta)
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Lançamento automático de eletrodutos
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Lançamento automático da fiação
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Dimensionamento automático de condutos
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Quadro de cargas
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Lista de materiais
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Um quadro geral (QGBT)
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                DR (apenas para proteção disjuntor geral) e DPS
                            </li>

                            <h3 className=" pb-2 font-semibold text-base text-black">
                                Avançado
                            </h3>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Quadro de cargas
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Lista de materiais
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Um quadro geral (QGBT)
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                DR (apenas para proteção disjuntor geral) e DPS
                            </li>

                            <h3 className=" pb-2 font-semibold text-base text-black">
                                Novidades
                            </h3>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Quadro de cargas
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Lista de materiais
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Um quadro geral (QGBT)
                            </li>

                            <h3 className=" pb-2 font-semibold text-base text-black">
                                Exportação
                            </h3>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Quadro de cargas
                            </li>
                            <li className="flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 -960 960 960"
                                    fill="none"
                                >
                                    <path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                        fill="#F97316"
                                        stroke="#F97316"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Lista de materiais
                            </li>
                        </ul>
                    </div>

                    <div className="relative border-2 border-orange-500 rounded-lg">
                        <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold py-1 px-4 rounded-full">
                            Recomendado
                        </div>
                        <div className="bg-white rounded-lg p-6 h-full">
                            <h3 className="text-xl font-bold text-gray-800 flex items-center justify-between font-redHat">
                                Advanced mensal
                            </h3>

                            <p className="text-4xl font-bold mt-4">
                                R$ 119<span className="text-base font-normal"> / mês</span>

                            </p>
                            <p className="text-gray-500 mt-2">
                                Renovação automática a cada 30 dias
                            </p>
                            <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg">
                                Assinar
                            </button>
                            <ul className="mt-6 space-y-2 text-gray-600">
                                <h3 className=" pb-2 font-semibold text-base text-black">
                                    Funções extras
                                </h3>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Projetos com 1 QGBT e até 3 quadros parciais de energia
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    DR (limite de 2 por projeto) e DPS
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    Impressão personalizada, incluindo o quadro de cargas
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Edição do Fator de Demanda
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Edição de capacidade mínima do disjuntor
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Edição da seção mínima de um condutor
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Edição dos nomes dos circuitos
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative border-2 border-teal-500 rounded-lg">
                        <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-teal-500 text-white text-xs font-semibold py-1 px-4 rounded-full">
                            Custo benefício
                        </div>
                        <div className=" rounded-lg p-6 h-full">
                            <h3 className="text-xl font-bold text-gray-800 flex items-center font-redHat">
                                Advanced anual
                            </h3>

                            <div className="relative text-4xl font-bold mt-4">
                                <span className="relative">
                                    R$ 69,90 <span className="text-base font-normal"> / mês</span>
                                    <div
                                        className="absolute text-xs font-semibold text-orange-500"
                                        style={{
                                            bottom: "auto",
                                            top: "-29px",
                                            background: "transparent",
                                            fontWeight: 800,
                                            right: "-46px",
                                        }}
                                    >
                                        <div style={{ transform: "rotate(-12deg)" }}>
                                            <div className="flex">
                                                <svg data-v-93502b43="" width="16" height="30" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-93502b43="" fill-rule="evenodd" clip-rule="evenodd" d="M18.0808 0C16.5161 0 15.0277 0.67567 13.9977 1.8535L1.34101 16.3268C-0.480869 18.4102 -0.442043 21.5311 1.4311 23.5685L14.0068 37.247C15.034 38.3642 16.4822 39 17.9998 39H20.2725V0L18.0808 0ZM11.361 23.4843C13.5614 23.2888 15.1868 21.3465 14.9912 19.146C14.7957 16.9455 12.8534 15.3202 10.6529 15.5157C8.45245 15.7113 6.82711 17.6536 7.02263 19.8541C7.21815 22.0545 9.16049 23.6799 11.361 23.4843Z" fill="#14B8A6"></path></svg>
                                                <div className="bg-teal-500 text-white text-base font-semibold w-20 rounded-r-md flex justify-center items-center">
                                                    44% off
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </span>
                                <div
                                    className="absolute text-xs font-semibold text-orange-500"
                                    style={{
                                        bottom: "auto",
                                        top: "-15px",
                                        background: "transparent",
                                        fontWeight: 800,
                                        left: "0px",
                                    }}
                                >
                                    <div style={{ textDecorationThickness: "1.2px" }} className="line-through text-slate-400 font-DMSans font-light text-sm">
                                        R$ 119

                                    </div>
                                </div>
                                {/* <div
                                    className="absolute text-xs font-semibold text-orange-500"
                                    style={{
                                        bottom: "auto",
                                        top: "-29px",
                                        background: "transparent",
                                        fontWeight: 800,
                                        right: "-16px",
                                    }}
                                >
                                    <div style={{ transform: "rotate(-12deg)" }}>
                                        <div className="flex">
                                            <svg data-v-93502b43="" width="16" height="30" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-93502b43="" fill-rule="evenodd" clip-rule="evenodd" d="M18.0808 0C16.5161 0 15.0277 0.67567 13.9977 1.8535L1.34101 16.3268C-0.480869 18.4102 -0.442043 21.5311 1.4311 23.5685L14.0068 37.247C15.034 38.3642 16.4822 39 17.9998 39H20.2725V0L18.0808 0ZM11.361 23.4843C13.5614 23.2888 15.1868 21.3465 14.9912 19.146C14.7957 16.9455 12.8534 15.3202 10.6529 15.5157C8.45245 15.7113 6.82711 17.6536 7.02263 19.8541C7.21815 22.0545 9.16049 23.6799 11.361 23.4843Z" fill="#14B8A6"></path></svg>
                                            <div className="bg-teal-500 text-white text-base font-semibold w-20 rounded-r-md flex justify-center items-center">
                                                44% off
                                            </div>
                                        </div>

                                    </div>


                                </div> */}
                            </div>
                            <p className="text-gray-500 mt-2">
                                Renovação automática a cada 30 dias
                            </p>
                            <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg">
                                Assinar
                            </button>
                            <ul className="mt-6 space-y-2 text-gray-600">
                                <h3 className=" pb-2 font-semibold text-base text-black">
                                    Funções exclusivas
                                </h3>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Projetos com 1 QGBT e até 3 quadros parciais de energia
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    DR (limite de 2 por projeto) e DPS
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    Impressão personalizada, incluindo o quadro de cargas
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Edição do Fator de Demanda
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Edição de capacidade mínima do disjuntor
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Edição da seção mínima de um condutor
                                </li>
                                <li className="flex justify-start items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 flex-shrink-0"
                                        viewBox="0 -960 960 960"
                                        fill="none"
                                    >
                                        <path
                                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                                            fill="#F97316"
                                            stroke="#F97316"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Edição dos nomes dos circuitos
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
