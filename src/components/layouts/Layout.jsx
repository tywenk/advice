import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col content-between h-screen'>
			<Navbar />
			<div className='grow'>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
