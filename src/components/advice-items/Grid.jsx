import GridItem from "./GridItem"
import { useEffect } from "react"
import { useUser } from "../../contexts/UserContext"

const Grid = ({ adviceAll }) => {
	const userId = useUser()

	useEffect(() => {
		const localData = localStorage.getItem(userId) || JSON.parse(localStorage.getItem(userId))
		console.log(localData)
		// if (localData[id]) {
		// 	setIsStarred(true)
		// }
	}, [])

	return (
		<div className='grid grid-cols-2 gap-2 md:grid-cols-3 '>
			{adviceAll.map((advice, i) => (
				<GridItem key={"adviceGrid" + i} advice={advice} />
			))}
		</div>
	)
}

export default Grid
