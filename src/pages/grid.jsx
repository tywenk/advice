import Grid from "../components/advice-items/Grid"
import { getAllAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"

const grid = ({ adviceAll }) => {
	if (adviceAll.length < 0) return <div>Loading...</div>

	return (
		<BodyLayout>
			<Grid adviceAll={adviceAll} />
		</BodyLayout>
	)
}

export const getServerSideProps = async () => {
	const advice = await getAllAdviceData()

	return {
		props: {
			adviceAll: advice,
		},
	}
}

export default grid
