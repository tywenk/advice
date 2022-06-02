import React from "react"
import { useState } from "react"

const FilterItems = ({ starToggle, lengthToggle }) => {
	const [starFilter, setStarFilter] = useState("none") //"asc", "desc"
	const [lengthFilter, setLengthFilter] = useState("none")

	const starButton = () => {
		if (starFilter === "asc") {
			return <div>Star ^</div>
		}

		if (starFilter === "desc") {
			return <div>Star v</div>
		}

		return <div>Star</div>
	}

	return (
		<div className='flex flex-row w-full p-2 border rounded-xl border-stone-300'>
			Filter by
			<button onClick={starToggle}>{starButton()}</button>
			<button onClick={lengthToggle}>Brevity</button>
		</div>
	)
}

export default FilterItems
