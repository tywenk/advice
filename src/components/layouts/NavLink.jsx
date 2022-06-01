import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const NavLink = ({ to, label }) => {
	const router = useRouter()

	return (
		<Link href={to}>
			<a
				className={
					router.pathname == to
						? "p-1.5 border border-stone-50 underline decoration-2  hover:bg-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200 hover:shadow-lg rounded-lg transition ease-in-out"
						: "p-1.5 border border-stone-50 hover:underline decoration-dotted hover:bg-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200 hover:shadow-lg rounded-lg transition ease-in-out"
				}
			>
				{label}
			</a>
		</Link>
	)
}

export default NavLink
