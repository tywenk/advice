import ListItem from "../components/advice-items/ListItem"
import { getAllAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"

const list = ({ adviceAll }) => {
	if (adviceAll.length < 0) return <div>Loading...</div>

	return (
		<BodyLayout>
			{adviceAll.map((advice, i) => {
				return (
					<div key={"advice" + i}>
						<ListItem advice={advice} />
					</div>
				)
			})}
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

export default list
