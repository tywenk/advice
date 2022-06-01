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

	// auto login if session cookie is present
	useEffect(() => {
		//setcurrentuser
	}, [])

	return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}
