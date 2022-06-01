import { getOneAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"
import GridItem from "@components/advice-items/GridItem"

const advice = ({ advice }) => {
	if (!advice) return <></>
	return (
		<BodyLayout>
			<div className='mb-96'>
				<GridItem advice={advice} />
			</div>
		</BodyLayout>
	)
}

export const getServerSideProps = async ({ query }) => {
	const { id } = query

	if (typeof id !== "number") {
		return { props: {} }
	}

	const advice = await getOneAdviceData(id)

	return {
		props: { advice: advice },
	}
}

export default advice
