import NavLink from "./NavLink"

const Navbar = () => {
	return (
		<div className='w-full'>
			<div className='flex justify-center gap-10 p-0.5 m-1 transition ease-in-out border rounded-xl border-stone-300'>
				<NavLink to='/' label='Random' />
				<NavLink to='/list' label='List' />
				<NavLink to='/grid' label='Grid' />
				<NavLink to='/about' label='?' />
			</div>
		</div>
	)
}

export default Navbar
