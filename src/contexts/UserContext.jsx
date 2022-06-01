import React, { useContext, useState, useEffect } from "react"
import { getAuth, signInAnonymously } from "firebase/auth"

export const UserContext = React.createContext()

//custom hook
export const useUser = () => {
	return useContext(UserContext)
}

//provider
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({})
	const auth = getAuth()

	// auto login
	useEffect(() => {
		signInAnonymously(auth)
			.then((res) => {
				// Signed in..
				console.log("signed in anonymously")
				const uid = res.user.uid
				console.log(uid)
				setCurrentUser(uid)
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorMessage, errorCode)
			})
	}, [])

	return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}