import ListItem from "../components/advice-items/ListItem"
import { getAllAdviceData } from "@utils/adviceData"

const list = ({ adviceAll }) => {
	if (adviceAll.length < 0) return <div>Loading...</div>

	return (
		<div className='flex justify-center w-full'>
			<div className='flex flex-col w-1/2 gap-4'>
				{adviceAll.map((advice, i) => {
					return (
						<div key={"advice" + i}>
							<ListItem advice={advice} />
						</div>
					)
				})}
			</div>
		</div>
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
