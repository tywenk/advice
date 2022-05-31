import GridItem from "../components/advice-items/GridItem"
import { getAllAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"

const grid = ({ adviceAll }) => {
	if (adviceAll.length < 0) return <div>Loading...</div>

	return (
		<BodyLayout>
			<div className='grid grid-cols-3 gap-2'>
				{adviceAll.map((advice, i) => (
					<GridItem key={"adviceGrid" + i} advice={advice} />
				))}
			</div>
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
