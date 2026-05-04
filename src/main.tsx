import { createRoot } from "react-dom/client";
import "@/index.css";
import "./features/translations/i18n";
import { RouterProvider } from "react-router";
import { router } from "@/app/router";
import AppProviders from "@/app/providers/provider";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/alata/400.css";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>,
);
