import ListItem from "../components/advice-items/ListItem"
import getAdviceData from "../utils/getAdviceData"

const list = ({ adviceAll }) => {
	if (adviceAll.length < 0) return <div>Loading...</div>

	return (
		<div className='w-1/2'>
			{adviceAll.map((advice, i) => {
				return (
					<div key={"advice" + i}>
						<ListItem advice={advice} />
					</div>
				)
			})}
		</div>
	)
}

export const getServerSideProps = async () => {
	const advice = await getAdviceData()

	return {
		props: {
			adviceAll: advice,
		},
	}
}

export default list
