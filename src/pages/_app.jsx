import "../styles/globals.css"
import Layout from "../components/layouts/Layout"
import { UserProvider } from "../contexts/UserContext"
import { LocalStorageProvider } from "../contexts/LocalStorageContext"

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<LocalStorageProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</LocalStorageProvider>
		</UserProvider>
	)
}

export default MyApp
