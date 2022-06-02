import React from "react"
import { useState } from "react"

const FilterItems = () => {
	const [starFilter, setStarFilter] = useState("none") //"asc", "desc"
	const [lengthFilter, setLengthFilter] = useState("none")

	const handleStarToggle = () => {}

	const handleLengthToggle = () => {}

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
			<button onClick={handleStarToggle}>{starButton()}</button>
			<button onClick={handleLengthToggle}>Brevity</button>
		</div>
	)
}

export default FilterItems
