import Navbar from "../Component/Navbar"
import Container from "../Component/Container"
import Table from "../Component/Table"
import Footer from "../Component/Footer"
import api from '../Api'
import { useEffect, useState } from "react"
import Pagination from "../Component/Pagination"

const User = (props) => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
   

    console.log("vendo de fora", page)

    const getData = async () => {
        try{
            const users = await api.get(`/?results=10&seed="0bc902816fc96e74"&page=${page}`)
            setUsers(users.data.results)
        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getData()
    },[page, setPage])




    return(
        <>
            <Navbar />
            <Container>
                <Table users={users}/>
                <Pagination page={page} setPage={setPage}/>
            </Container>
            <Footer />
        </>
    )
}

export default User