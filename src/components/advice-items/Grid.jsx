import GridItem from "./GridItem"
import { useEffect, useState } from "react"
import { useUser } from "../../contexts/UserContext"

const Grid = ({ adviceAll }) => {
	const [localSaveData, setLocalSaveData] = useState(null)
	const userId = useUser()

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(userId)) || localStorage.getItem(userId)
		console.log(data)
		setLocalSaveData(data)
	}, [userId])

	const handleSetSaveData = (data) => {
		setLocalSaveData(data)
	}

	return (
		<div className='grid grid-cols-2 gap-2 md:grid-cols-3 '>
			{adviceAll.map((advice, i) => (
				<GridItem
					key={"adviceGrid" + i}
					advice={advice}
					localSaveData={localSaveData}
					setSaveData={handleSetSaveData}
				/>
			))}
		</div>
	)
}

export default Grid
