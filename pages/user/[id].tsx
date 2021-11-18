import { useRouter } from "next/dist/client/router"


export default function User() {

    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <p>Username : { id }</p>
        </div>
    )
}