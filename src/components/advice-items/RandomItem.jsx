import GridItem from "./GridItem"
import RandomAdviceButton from "../buttons/RandomAdviceButton"
import { useState, useMemo } from "react"
import { getOneAdviceData } from "@utils/adviceData"
import { shuffle } from "lodash"

const RandomItem = ({ advice }) => {
	const [currentAdvice, setCurrentAdvice] = useState(advice)
	const [index, setIndex] = useState(0)
	const [reset, setReset] = useState(false)

	const lengthAdvice = 10

	const randomArray = useMemo(() => {
		let arr = []
		//402 is number of advice
		for (let i = 0; i <= lengthAdvice; i++) {
			arr.push(i)
		}

		return shuffle(arr)
	}, [])

	const randomAdviceId = () => {
		if (index > lengthAdvice) {
			setIndex(0)
		}
		const id = randomArray[index]
		const newAdvice = getOneAdviceData(id)
		setCurrentAdvice(newAdvice)
		setIndex((index) => (index += 1))
	}

	return (
		<div>
			<GridItem advice={currentAdvice} />
			<RandomAdviceButton handleClick={randomAdviceId} />
			<div>{index}</div>
		</div>
	)
}

export default RandomItem
