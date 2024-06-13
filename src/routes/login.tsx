import { useCallback, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import goTaskIcon from "../../public/faviconIcon.svg";
import loginIllustrationSvg from "../assets/login-illustration-svg.svg";
import bgImg from "../assets/bg2.jpg";

import { Input } from "../components/input";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOnError, setisEmailOnError] = useState(false);
  const [isPasswordOnError, setisPasswordOnError] = useState(false);

  // Try catch with error
  // Toas
  const handleSubmit = useCallback(() => {
    // const login = z.object({
    //   email: z.string().email("asdas"),
    //   password: z.string(),
    // });
    // login.parse({ email, password });
    // type login = z.infer<typeof login>;
    // console.log("LOGIN: ", login);
    // navigate("/dashboard");
  }, [navigate, email, password]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-900 text-slate-50 antialiased">
      <div className="max-w-screen-xl w-11/12 h-4/5 max-h-[600px] py-4 bg-slate-100 rounded-lg overflow-hidden flex flex-row items-center justify-between max-md:h-5/6 max-md:max-h-full max-md:flex-col max-md:justify-center">
        <div className="w-2/4 px-10 pb-4 flex flex-col max-md:w-full">
          <div className="flex flex-rom justify-start items-center max-md:justify-center">
            <img src={goTaskIcon} className="w-10" />

            <Typography
              variant="h1"
              className="text-xl text-slate-800 font-semibold"
            >
              GoTask
            </Typography>
          </div>

          <div className="w-full flex flex-col justify-start items-start mt-10">
            <Typography className="text-3xl text-slate-800 font-bold">
              Bem vindo de volta!
            </Typography>

            <Typography className="text-sm text-slate-500 mt-1">
              Entre com seu email e senha para gerenciar suas notas
            </Typography>

            {/* Form */}
            <div className="flex flex-col w-full gap-1 mt-10">
              <Input
                title="Email"
                value={email}
                onChange={(text) => setEmail(text)}
                isOnError={isEmailOnError}
              />
              <Input
                title="Senha"
                value={password}
                onChange={(text) => setPassword(text)}
                isOnError={isPasswordOnError}
              />

              <Typography
                component="a"
                className="text-sm text-right text-slate-600 mt-2 font-semibold cursor-pointer"
              >
                Esqueceu a senha?
              </Typography>

              <Button
                variant="contained"
                onClick={handleSubmit}
                className="mt-6 w-full py-2 bg-slate-950 text-slate-100 text-base font-semibold rounded-md cursor-pointer transition-all ease-in-out hover:bg-slate-800"
              >
                ENTRAR
              </Button>

              <div className="text-center mt-10 cursor-pointer">
                <Typography
                  component="a"
                  className="text-sm text-slate-600 mt-10 font-light"
                >
                  Não tem conta?
                </Typography>

                <Typography
                  component="a"
                  className="text-sm text-slate-600 mt-10 font-semibold ml-1"
                >
                  Cadastrar
                </Typography>
              </div>
            </div>
            {/* Form */}
          </div>
        </div>

        <div className="w-2/4 h-full pr-4 max-md:hidden">
          <div
            className="w-full h-full bg-slate-950 rounded-ss-xl rounded-es-[6rem] overflow-hidden bg-contain flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="hexagon w-4/5 h-4/5 bg-main-yellow/90 flex items-center justify-center">
              <div className="hexagon w-11/12 h-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src={loginIllustrationSvg} className="w-9/12" />
              </div>
            </div>

            <Typography
              component="h1"
              className="text-2xl text-center text-slate-100 mt-2 font-bold"
            >
              Gerencie suas tarefas de qualquer lugar
            </Typography>

            <Typography
              component="span"
              className="text-sm text-center mt-1 text-slate-400 font-medium w-2/4"
            >
              Ut minim est qui cillum minim nisi enim nulla aliquip culpa
              nostrud qui ipsum.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
