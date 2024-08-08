import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./routes/header";
import { OlimpicList } from "./components/olimpic-list";
import { Footer } from "./components/footer";
import "./global.css"
import { ThemeProvider } from "./components/theme/theme-provider";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <OlimpicList />
      },
    ]
  }
])

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto p-5 sm:flex sm:flex-col gap-5 table">
      <ThemeProvider storageKey="olimpic-theme" defaultTheme="light">
        <div className="flex-grow">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </div>
  )
}
