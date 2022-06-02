import { getOneAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"
import GridItem from "@components/advice-items/GridItem"

const advice = ({ advice }) => {
	if (!advice) return <></>

	return (
		<BodyLayout>
			<div>
				<GridItem advice={advice} />
			</div>
		</BodyLayout>
	)
}

export const getServerSideProps = async ({ query }) => {
	let { id } = query
	id = parseInt(id)

	if (typeof id !== "number") {
		return { props: {} }
	}

	const advice = await getOneAdviceData(id)
	console.log(advice)

	return {
		props: { advice: advice },
	}
}

export default advice
