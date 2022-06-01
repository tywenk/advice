import { TbArrowsShuffle } from "react-icons/tb"

const RandomAdviceButton = ({ handleClick }) => {
	return (
		<button onClick={handleClick}>
			<TbArrowsShuffle className='text-2xl' />
		</button>
	)
}

export default RandomAdviceButton
