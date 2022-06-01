import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const NavLink = ({ to, label }) => {
	const router = useRouter()

	return (
		<Link href={to}>
			<a className={router.pathname == to ? "underline" : ""}>{label}</a>
		</Link>
	)
}

export default NavLink
