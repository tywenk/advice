import CopyButton from "@components/buttons/CopyButton.jsx"
import { getDatabase, ref } from "firebase/database"

const HoverOptions = ({ text, stars }) => {
	return (
		<div className='flex flex-row gap-2'>
			<CopyButton toCopy={text} />
			<div>Likes ({stars})</div>
		</div>
	)
}

export default HoverOptions
