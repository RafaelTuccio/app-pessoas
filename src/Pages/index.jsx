import Navbar from "../Component/Navbar"
import Container from "../Component/Container"
import Table from "../Component/Table"
import Footer from "../Component/Footer"
import api from '../Api'
import { useEffect, useState } from "react"

const User = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try{
            const users = await api.get('/?results=13')
            setUsers(users.data.results)
        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getUsers()
    },[])




    return(
        <>
            <Navbar />
            <Container>
                <Table users={users}/>
            </Container>
            <Footer />
        </>
    )
}

export default User