import './style.css'
import Card from '../Card'
import { useState } from 'react'

const Table = (props) => {
    const { users } = props
    const [active, setActive] = useState(false)
    const [data, setData] = useState()

    const closeCard = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    const openCard = (user) => {
        if (!active) {
            setActive(true)
            setData(user)
        }
    }



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Fone</th>
                        <th>Perfil</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{`${user.name.first} ${user.name.last}`}</td>
                                    <td>{user.email}</td>
                                    <td>{user.cell}</td>
                                    <td>
                                        <i className="pointer material-icons"
                                            onClick={() => openCard(user)}
                                        >assignment_ind</i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Card active={active} closeCard={closeCard} data={data} />
        </div>
    )
}

export default Table