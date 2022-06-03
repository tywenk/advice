import React from "react"
import { useState } from "react"
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi"

const FilterItems = ({ starToggle, lengthToggle, starFilter, lengthFilter, handleClear }) => {
	return (
		<div className='flex flex-row justify-end w-full gap-2 p-1 font-mono text-sm border-b border-stone-300'>
			filter by:
			<button onClick={starToggle}>
				{starFilter === "none" ? (
					<div className='transition ease-in-out text-stone-400 hover:text-black'>stars</div>
				) : starFilter === "asc" ? (
					<div className='inline-flex items-center text-blue-500 transition ease-in-out hover:text-blue-900'>
						stars <BiDownArrowAlt />
					</div>
				) : (
					<div className='inline-flex items-center text-blue-500 transition ease-in-out hover:text-blue-900'>
						stars <BiUpArrowAlt />
					</div>
				)}
			</button>
			<button onClick={lengthToggle}>
				{lengthFilter === "none" ? (
					<div className='transition ease-in-out text-stone-400 hover:text-black'>brevity</div>
				) : lengthFilter === "asc" ? (
					<div className='inline-flex items-center text-blue-500 transition ease-in-out hover:text-blue-900'>
						brevity <BiDownArrowAlt />
					</div>
				) : (
					<div className='inline-flex items-center text-blue-500 transition ease-in-out hover:text-blue-900'>
						brevity <BiUpArrowAlt />
					</div>
				)}
			</button>
			<button onClick={handleClear} className='transition ease-in-out text-stone-400 hover:text-black'>
				clear
			</button>
		</div>
	)
}

export default FilterItems
