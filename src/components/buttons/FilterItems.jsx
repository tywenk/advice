import React from "react"
import { useState } from "react"

const FilterItems = ({ starToggle, lengthToggle, starFilter, lengthFilter, handleClear }) => {
	return (
		<div className='flex flex-row w-full p-2 border rounded-xl border-stone-300'>
			Filter by
			<button onClick={starToggle}>
				{starFilter === "none" ? "Star" : starFilter === "asc" ? "Star asc" : "Star desc"}
			</button>
			<button onClick={lengthToggle}>
				{lengthFilter === "none" ? "Brevity" : lengthFilter === "asc" ? "Brevity asc" : "Brevity desc"}
			</button>
			<button onClick={handleClear}>Clear</button>
		</div>
	)
}

export default FilterItems
