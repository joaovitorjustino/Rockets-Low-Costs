import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Login from "./router/Login";
import Validacao from "./router/Validacao";
import Cadastro from "./router/Cadastro";
import Foguetes from "./router/Foguetes";
import Lancafoguete from "./router/Lancafoguete";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "validacao",
        element: <Validacao />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "foguetes",
        element: <Foguetes />,
      },
      {
        path: "lancafoguetes",
        element: <Lancafoguete />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);