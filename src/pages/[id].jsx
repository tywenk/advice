import { getOneAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"
import GridItem from "@components/advice-items/GridItem"

const advice = ({ advice }) => {
	return (
		<BodyLayout>
			<GridItem advice={advice} />
		</BodyLayout>
	)
}

export const getServerSideProps = async ({ query }) => {
	const { id } = query
	const advice = await getOneAdviceData(id)

	return {
		props: { advice: advice },
	}
}

export default advice
