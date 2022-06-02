const BodyLayout = ({ children }) => {
	return (
		<div className='flex justify-center w-full h-full'>
			<div className='grid w-full gap-4 mx-2 my-3 place-content-center sm:w-3/4 xl:w-2/3'>{children}</div>
		</div>
	)
}

export default BodyLayout
