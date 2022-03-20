import Navbar from "../Component/Navbar"
import Container from "../Component/Container"
import Table from "../Component/Table"
import Footer from "../Component/Footer"

const User = (props) => {
    return(
        <>
            <Navbar />
            <Container>
                <Table />
            </Container>
            <Footer />
        </>
    )
}

export default User