const BodyLayout = ({ children }) => {
	return (
		<div className='flex justify-center w-full h-full'>
			<div className='grid w-full gap-4 mx-2 my-3 bg-green-100 place-content-center sm:w-3/4 xl:w-1/2'>
				<div className=''>{children}</div>
			</div>
		</div>
	)
}

export default BodyLayout
