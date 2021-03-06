import RandomAdviceButton from "../buttons/RandomAdviceButton"
import { getOneAdviceData } from "@utils/adviceData"
import { useState, useEffect } from "react"
import GridItem from "./GridItem"

const RandomItem = ({ arr }) => {
	const [currentAdvice, setCurrentAdvice] = useState(null)
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const fetchAdvice = async () => {
			if (index > 401) {
				setIndex(0)
			}

			const id = arr[index]
			const newAdvice = await getOneAdviceData(id)
			setCurrentAdvice(newAdvice)
		}

		if (arr) {
			fetchAdvice()
		}
	}, [arr, index])

	if (!currentAdvice) return <></>

	return (
		<div className='grid w-full grid-cols-1 gap-4 place-items-center grow'>
			<GridItem advice={currentAdvice} />
			<RandomAdviceButton handleClick={() => setIndex((prev) => prev + 1)} />
		</div>
	)
}

export default RandomItem
