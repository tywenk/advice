import React, { useContext, useState, useEffect } from "react"
import { useUser } from "./UserContext"

export const LSContext = React.createContext()
export const LSUpdateContext = React.createContext()

//custom hooks
export const useLocalStorage = () => {
	return useContext(LSContext)
}

export const useLocalStorageUpdate = () => {
	return useContext(LSUpdateContext)
}

//provider
export const LocalStorageProvider = ({ children }) => {
	const [localSaveData, setLocalSaveData] = useState(null)
	const userId = useUser()
	// auto login if session cookie is present
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(userId)) || localStorage.getItem(userId)
		console.log(data)
		setLocalSaveData(data)
	}, [userId])

	const handleSetSaveData = (data) => {
		setLocalSaveData(data)
	}

	return (
		<LSContext.Provider value={localSaveData}>
			<LSUpdateContext.Provider value={handleSetSaveData}>{children}</LSUpdateContext.Provider>
		</LSContext.Provider>
	)
}
