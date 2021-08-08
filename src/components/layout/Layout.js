import Navbar from './Navbar'
import Follow from './Follow'
import Links from './Links'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Navbar />

        {children}

        <Follow />
      </div>

      <Links />
      <Footer />
    </>
  )
}

export default Layout
