import "../styles/globals.css"
import Layout from "../components/layouts/Layout"
import { UserProvider } from "../contexts/UserContext"

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	)
}

export default MyApp
