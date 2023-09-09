import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import css from './Layout.module.css'

export const Layout = () => {
    return <div className={css.container}>
    <nav className={css.navigation}>
      <NavLink to="/" className={css.navLink}>Home</NavLink>
      <NavLink to="/movies" className={css.navLink}> Movies</NavLink>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
    <Outlet/>
    </Suspense>
  </div>
}