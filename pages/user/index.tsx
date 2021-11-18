import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'


interface UserProps {
    dataUser: Array<any>
}

export default function User(props: UserProps) {

    const { dataUsers }: any = props
    console.log("data users", dataUsers);
    const router = useRouter()


    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [])

    return (
        <>        
        {/* {
            dataUsers.map((user: any) => {
                <div>
                    <p className={styles['title-user']}>{user.name}</p>
                    <p className={styles['title-user']}>{user.email}</p>
                </div>
            })
        } */}
        </>

    )
}


export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await response.json()

    return {
        props: {
            dataUsers
        }
    }
}