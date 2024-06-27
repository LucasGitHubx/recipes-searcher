import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/:id" element={<RecipePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
