import { Suspense } from "react"
import {Outlet } from "react-router-dom"
import { Container, Navigation, StyledLink } from "./Layout.styled";



export const Layout = () => {
 
    return <Container>
    <Navigation>
      <StyledLink to="/" >Home</StyledLink>
      <StyledLink to="/movies"  > Movies</StyledLink>
    </Navigation>
    <Suspense fallback={<div>Loading...</div>}>
    <Outlet/>
    </Suspense>
  </Container>
}