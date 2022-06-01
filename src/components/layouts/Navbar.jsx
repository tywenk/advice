import NavLink from "./NavLink"

const Navbar = () => {
	return (
		<div className='w-full'>
			<div className='flex justify-center gap-10 p-2 m-1 border border-stone-300 bg-stone-100 rounded-xl'>
				<NavLink to='/' label='Home' />
				<NavLink to='/list' label='List' />
				<NavLink to='/grid' label='Grid' />
				<NavLink to='/about' label='?' />
			</div>
		</div>
	)
}

export default Navbar
