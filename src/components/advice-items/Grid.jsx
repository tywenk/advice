import GridItem from "./GridItem"
import { useEffect, useState } from "react"
import { useUser } from "../../contexts/UserContext"

const Grid = ({ adviceAll }) => {
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
