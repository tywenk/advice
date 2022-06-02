import ListItem from "../components/advice-items/ListItem"
import { getAllAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"

const List = ({ adviceAll }) => {
	if (adviceAll.length < 0) return <div>Loading...</div>

	return (
		<BodyLayout>
			<div>
				{adviceAll.map((advice, i) => {
					return (
						<ul className='list-disc list-outside' key={"advice" + i}>
							<ListItem advice={advice} />
						</ul>
					)
				})}
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

export default List
