const BodyLayout = ({ children, width = "1/2" }) => {
	const customClass = `flex flex-col w-${width} gap-4`
	return (
		<div className='flex justify-center w-full'>
			<div className={customClass}>{children}</div>
		</div>
	)
}

export default BodyLayout
