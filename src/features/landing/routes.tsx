import { LandingPage } from "@/features/landing/pages/LandingPage";
import type { RouteObject } from "react-router";

export const landingRoutes: RouteObject[] = [
  {
    index: true,
    element: <LandingPage />,
  },
];
