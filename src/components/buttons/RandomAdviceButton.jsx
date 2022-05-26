const RandomAdviceButton = () => {
	const handleOnClick = () => {
		console.log("fetching random item")
	}
	return <button onClick={handleOnClick}>Random</button>
}

export default RandomAdviceButton
