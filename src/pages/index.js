import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import getCookies from "@/data/getCookies"
import Loader from '@/components/Loader'

export default function Home() {
	const [loading, setLoading] = useState(true)
	const [cookie, setCookie] = useState({})
	const router = useRouter()
	useEffect(() => {
		let tempCookie = getCookies()
		if ( tempCookie === null ){
			router.replace('/login')
		}
		setCookie(tempCookie)
		setLoading(false)
	}, [])
	return (
		loading ?
    	<div className=' bg-aa-vert w-screen h-screen flex justify-center items-center'>
			<Loader />
    	</div>
		:
		<div>
		</div>

  	)
}