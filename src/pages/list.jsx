import ListItem from "../components/advice-items/ListItem"
import { getAllAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"
import { useState, useEffect } from "react"
import ScrollToTop from "@components/buttons/ScrollToTop"

const List = ({ advice }) => {
	const [adviceAll, setAdviceAll] = useState([])
	useEffect(() => {
		setAdviceAll(advice)
	}, [advice])

	const handleSetAdvice = (id, increment) => {
		const toUpdate = adviceAll.find((e) => e.id === id)
		toUpdate.stars += increment
		const newAdviceAll = [...adviceAll, toUpdate]
		setAdviceAll(newAdviceAll)
	}

	if (adviceAll.length < 0) return <div>Loading...</div>

	return (
		<BodyLayout>
			<div>
				{adviceAll.map((advice, i) => {
					return (
						<ul className='list-disc list-outside' key={"advice" + i}>
							<ListItem advice={advice} setAdvice={handleSetAdvice} />
						</ul>
					)
				})}
			</div>
			<ScrollToTop />
		</BodyLayout>
	)
}

export const getStaticProps = async () => {
	const advice = await getAllAdviceData()

	return {
		props: {
			advice: advice,
		},
		revalidate: 10,
	}
}

export default List
