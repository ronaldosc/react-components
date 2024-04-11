import {
  DeleteButton,
  TrashButton,
  Sidebar1,
  Sidebar2,
  PasswordStrengthExample,
  ScrollReveal,
  ImageAccordionExample,
  Login1,
  Card1,
  Modal1,
} from "./components";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import "./App.css";

const routes = [
  {
    name: "DeleteButton",
    path: "/buttons/delete-button",
    element: <DeleteButton />,
  },
  {
    name: "TrashButton",
    path: "/buttons/trash-button",
    element: <TrashButton />,
  },
  {
    name: "Sidebar1",
    path: "/sidebars/sidebar-1",
    element: <Sidebar1 />,
  },
  {
    name: "PasswordStrength",
    path: "/controls/password-strength",
    element: <PasswordStrengthExample />,
  },
  {
    name: "ScrollReveal",
    path: "/gsap/scroll-reveal",
    element: <ScrollReveal />,
  },
  {
    name: "ImageAccordion",
    path: "/accordions/image-accordion",
    element: <ImageAccordionExample />,
  },
  {
    name: "Login1",
    path: "/logins/login-1",
    element: <Login1 />,
  },
  {
    name: "Sidebar2",
    path: "/sidebars/sidebar-2",
    element: <Sidebar2 />,
  },
  {
    name: "Card1",
    path: "/cards/card-1",
    element: <Card1 />,
  },
  {
    name: "Modal1",
    path: "/modals/modal-1",
    element: <Modal1 />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  ...routes,
]);

function Layout() {
  return (
    <main className="app">
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </main>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
