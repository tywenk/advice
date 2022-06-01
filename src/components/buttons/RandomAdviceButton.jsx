import { TbArrowsShuffle } from "react-icons/tb"

const RandomAdviceButton = ({ handleClick }) => {
	return (
		<button onClick={handleClick}>
			<TbArrowsShuffle className='text-2xl text-stone-700 hover:text-stone-500' />
		</button>
	)
}

export default RandomAdviceButton
