import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { SEO } from "@/components/SEO";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa";
import { useControls } from "@/hooks/useControls";

const TailwindPlayground: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [code, setCode] =
    useState<string>(`<div class="bg-white py-12 font-lexend dark:bg-[#282C34]">
  <div class="max-w-4xl mx-auto text-center">
    <!-- Quotation Mark -->
    <div class="text-blue-600 text-4xl mb-4">“</div>

    <!-- Testimonial Quote -->
    <p class="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
      "I hope my tool helps you in some way. Let's push for faster development and a more beautiful web together.."
    </p>

    <!-- Author & Company -->
    <div class="flex justify-center items-center space-x-4">
      <img src="https://tools4css.com/avatars/avatar5.png" alt="Company Logo" class="w-12 h-12 rounded-lg">
      <div>
        <p class="font-bold text-gray-800 dark:text-white">Felipe Nascimento</p>
        <p class="text-gray-500 dark:text-slate-300">Founder, Tools4CSS</p>
      </div>
    </div>

    <!-- Social Buttons -->
    <div class="flex flex-col mt-5 gap-2">
      <a class="bg-blue-600 mx-4 py-2 text-white rounded-xl border-4 border-blue-700">LinkedIn</a>
      <a class="bg-red-500 mx-4 py-2 text-white rounded-xl border-4 border-red-700">Instagram</a>
      <a class="bg-slate-600 mx-4 py-2 text-white rounded-xl border-4 border-gray-700">GitHub</a>
    </div>
    
  </div>
</div>

`);

  const { tailwindPlaygroundCode } = useControls();
  const [screen, setScreen] = useState<string>("split-horizontal");

  const [sanitizedCode, setSanitizedCode] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (theme !== "dark") {
      toggleTheme();
    }
  }, [theme]);

  useEffect(() => {
    setCode(tailwindPlaygroundCode);
    const clean = DOMPurify.sanitize(code);
    setSanitizedCode(clean);
  }, [code, tailwindPlaygroundCode]);

  return (
    <>
      <SEO title="Tailwind Playground" />
      <div className="p-3 w-full flex justify-between border-b border-slate-300 dark:border-slate-600 items-center bg-white dark:bg-[#282C34]">
        <Link href="/" className="cursor-pointer">
          {theme === "dark" ? (
            <Image
              className="cursor-pointer"
              src="/playground-logo-white.png"
              width={152}
              height={38}
              alt=""
            />
          ) : (
            <Image
              className="cursor-pointer"
              src="/playground-logo-dark.png"
              width={152}
              height={38}
              alt=""
            />
          )}
        </Link>
        <div className="bg-custom-gray-main dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl dark:border-slate-600 cursor-pointer">
          <button
            className={`px-3 py-3 ${screen === "split-horizontal" ? "text-blue-500" : ""}`}
            onClick={() => setScreen("split-horizontal")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z" />
            </svg>
          </button>

          <button
            className={`px-3 py-3 ${screen === "split-vertical" ? "text-blue-500" : ""}`}
            onClick={() => setScreen("split-vertical")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M320-240h320v-200H320v200Zm0-280h320v-200H320v200Zm480 360q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Zm-80 0v-640H240v640h480Zm0-640H240h480Z" />
            </svg>
          </button>

          <button
            className={`px-3 py-3 ${screen === "fullscreen" ? "text-blue-500" : ""}`}
            onClick={() => setScreen("fullscreen")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M320-320h320v-320H320v320ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
            </svg>
          </button>
        </div>

        <div className=" flex justify-center items-center gap-2">
          <Link href="https://github.com/gomestzx/tools4CSS">
            <div className=" bg-custom-gray-main dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-3 rounded-xl dark:border-slate-600 cursor-pointer">
              <FaGithub size={20} />
            </div>
          </Link>
          <button
            onClick={toggleTheme}
            className=" bg-custom-gray-main px-3 py-3 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl"
          >
            {theme === "dark" ? (
              <FaSun color="#A0AFBF" size={20} />
            ) : (
              <FaMoon size={20} />
            )}
          </button>
        </div>
      </div>

      {screen === "split-horizontal" && (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex-1">
              <CodeMirror
                value={code}
                height="100%"
                extensions={[
                  html(),
                  EditorView.lineWrapping, // Habilita a quebra de linha
                ]}
                theme={oneDark}
                onChange={(value) => setCode(value)}
                className=" rounded-lg h-full"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 bg-white dark:bg-[#282C34] border-l border-slate-300 dark:border-slate-600 overflow-auto">
            <div
              className="h-full"
              dangerouslySetInnerHTML={{ __html: sanitizedCode }}
            ></div>
          </div>
        </div>
      )}
      {screen === "fullscreen" && (
        <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-[#282C34]">
          <div className="w-full min-h-screen overflow-auto bg-white dark:bg-[#282C34]">
            <div
              className="h-full min-h-screen"
              dangerouslySetInnerHTML={{ __html: sanitizedCode }}
            ></div>
          </div>
        </div>
      )}
      {screen === "split-vertical" && (
        <div className="flex flex-col min-h-screen">
          <div className="w-full flex flex-col">
            <div className="flex-1 h-1/2">
              <CodeMirror
                value={code}
                height="100%"
                extensions={[html(), EditorView.lineWrapping]}
                theme={oneDark}
                onChange={(value) => setCode(value)}
                className="rounded-lg h-full"
              />
            </div>
          </div>

          <div className="w-full flex-1 h-1/2 bg-white border-t border-slate-300 dark:border-slate-600 overflow-auto">
            <div
              className="h-full"
              dangerouslySetInnerHTML={{ __html: sanitizedCode }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default TailwindPlayground;
