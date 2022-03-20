import './style.css'

const Table = (props) => {
    const { users } = props

    return (
        <table>
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
                        users.map((user) => {
                            return(
                                <tr key={user.id.value}>
                                    <td>{`${user.name.first} ${user.name.last}`}</td>
                                    <td>{user.email}</td>
                                    <td>{user.cell}</td>
                                    <td><i class="pointer material-icons">assignment_ind</i></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </table>
    )
}

export default Table