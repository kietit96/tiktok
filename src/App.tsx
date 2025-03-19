import { BrowserRouter, Route, Routes } from "react-router"
import { publicRouter } from "./routes"
import { DefaultLayout } from "./components/Layouts"
import React, { Fragment } from "react"
interface Iroute {
  path: string
  component: () => React.JSX.Element
  layout?: ((props: { children: React.ReactNode }) => React.JSX.Element) | typeof Fragment
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          publicRouter.map((route: Iroute, index: number) => {
            const Layout = route.layout || DefaultLayout
            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
