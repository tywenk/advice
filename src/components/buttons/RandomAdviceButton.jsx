import { TbArrowsShuffle } from "react-icons/tb"

const RandomAdviceButton = ({ handleClick }) => {
	return (
		<button
			onClick={handleClick}
			className='px-2 py-1 transition ease-in-out border border-stone-300 rounded-xl hover:bg-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200 hover:shadow-lg'
		>
			<span className='flex gap-2 flex-inline'>
				Random
				<TbArrowsShuffle className='text-2xl text-stone-700 hover:text-stone-500' />
			</span>
		</button>
	)
}

export default RandomAdviceButton
