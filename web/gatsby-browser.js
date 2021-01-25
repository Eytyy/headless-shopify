import React from "react"
import Layout from "./src/components/layout"
import { StoreContextProvider } from "./src/context/siteContext"

export const wrapPageElement = ({ element, props }) => {
  return (
    <StoreContextProvider>
      <Layout {...props}>{element}</Layout>
    </StoreContextProvider>
  )
}
