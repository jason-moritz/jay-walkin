import "./Layout.css"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"


const Layout = (props) => (
  <div className="layout">
    <Nav className="layout-nav" user={props.user} />
    <div className="layout-children">
      {props.children}
    </div>
    <Footer className="layout-footer" />
  </div>
)
  
  


export default Layout