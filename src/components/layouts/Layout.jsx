import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col content-between h-screen'>
			<Navbar />
			<div className='m-1 border grow rounded-xl border-stone-300'>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
