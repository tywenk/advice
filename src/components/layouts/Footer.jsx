const Footer = () => {
	return (
		<div className='bottom-0 flex justify-between p-2 mt-10 text-sm text-stone-600'>
			<div>
				Original{" "}
				<a
					className='hover:underline'
					target='_blank'
					rel='noreferrer'
					href={"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/"}
				>
					68
				</a>
				,{" "}
				<a
					className='hover:underline'
					target='_blank'
					rel='noreferrer'
					href={"https://kk.org/thetechnium/99-additional-bits-of-unsolicited-advice/"}
				>
					99
				</a>
				,{" "}
				<a
					className='hover:underline'
					target='_blank'
					rel='noreferrer'
					href={"https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/"}
				>
					103
				</a>
			</div>
			<div>
				Site by{" "}
				<a href='https://tywenkelly.com/' target='_blank' rel='noreferrer' className='hover:underline'>
					Tywen Kelly
				</a>
			</div>
		</div>
	)
}

export default Footer
