import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/dist/ReactToastify.css";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { router } from "./app/router/routes";
import { StoreContext, store } from "./libs/stores/store";
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <QueryClientProvider client={new QueryClient()}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          theme="colored"
        />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StoreContext.Provider>
  </StrictMode>
);
