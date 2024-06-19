import * as Yup from "yup";

import getValidationErrors from "./getValidationErrors";

export function processError(error: unknown, default_message?: string) {
  const title = "Erro";
  const message =
    default_message ||
    "Erro desconhecido, tente relogar ou contactar o suporte";
  const yupErrors = {};

  console.log(".");
  console.log("ERROR 1: ", error);
  console.log("ERROR 2: ", JSON.stringify(error));
  console.log(".");

  // Erros de formulário yup
  if (error instanceof Yup.ValidationError) {
    return {
      title: "Alerta no fomulário",
      message: "Invalidade em algum campo do fomulário",
      yupErrors: getValidationErrors(error),
    };
  }

  // // Erros de requisição api
  // if (!!error?.response?.data) {
  //   const erroRest = error.response.data;

  //   if (erroRest.message === 'Unauthorized') {
  //     return {
  //       title: 'Alerta',
  //       message: 'Token expirado, favor relogue na aplicação',
  //       yupErrors: {},
  //     };
  //   }

  //   if (erroRest.message === 'Forbidden resource') {
  //     return {
  //       title: 'Alerta',
  //       message: 'Você não tem acesso a esta parte do sistema',
  //       yupErrors: {},
  //     };
  //   }

  //   if (erroRest.message === 'Internal server error') {
  //     return {
  //       title: 'Error',
  //       message:
  //         'Ocorreu um erro desconhecido no servidor, tente novamente mais tarde',
  //       yupErrors: {},
  //     };
  //   }

  //   // if (erroRest.message === 'O usuário não aceitou os termos de uso ativo!') {
  //   //   // history.push('/visualize-terms');

  //   //   return {
  //   //     title: 'Error',
  //   //     message: erroRest.message,
  //   //     yupErrors: {},
  //   //   }
  //   // }

  //   return {
  //     title: 'Erro',
  //     // @ts-ignore:next-line
  //     message: Array.isArray(erroRest.message)
  //       ? erroRest.message[0]
  //       : erroRest.message,
  //     yupErrors: {},
  //   };
  // }

  return {
    title: title,
    message: message,
    yupErrors: yupErrors,
  };
}
