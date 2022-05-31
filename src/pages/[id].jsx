import SingleItem from "@components/advice-items/SingleItem"
import { getOneAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"

const advice = ({ advice }) => {
	return (
		<BodyLayout>
			<SingleItem advice={advice} />
		</BodyLayout>
	)
}

export const getServerSideProps = async ({ query }) => {
	const { id } = query
	console.log("hello")

	const advice = await getOneAdviceData(id)

	return {
		props: { advice: advice },
	}
}

export default advice
