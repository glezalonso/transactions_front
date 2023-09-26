import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  const year = new Date().getFullYear()
  const { pathname } = useLocation()

  return (
    <>
      <Navbar
        style={{ background: '#4a65a3', fontSize: '14px' }}
        className="rounded-bottom  w-100"
      >
        <Container>
          <div className=" overflow-auto py-1 over">
            <Nav className="d-flex flex-row gap-2 mx-auto p-1 ">
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-01`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-01`}
              >
                Enero
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-02`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-02`}
              >
                Febrero
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-03`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-03`}
              >
                Marzo
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-04`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-04`}
              >
                Abril
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-05`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-05`}
              >
                Mayo
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-06`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-06`}
              >
                Junio
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-07`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-07`}
              >
                Julio
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-08`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-08`}
              >
                Agosto
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-09`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-09`}
              >
                Septiembre
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-10`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-10`}
              >
                Octubre
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-11`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-11`}
              >
                Noviembre
              </Link>
              <Link
                className={`nav-link text-light ${
                  pathname === `/month/${year}-12`
                    ? 'fs-4 text-decoration px-4 '
                    : 'px-3'
                }`}
                to={`../month/${year}-12`}
              >
                Diciembre
              </Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
export default NavBar
