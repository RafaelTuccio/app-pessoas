import './style.css'

const Table = (props) => {

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
                    <tr>
                        <td>Rafael Tuccio</td>
                        <td>rafael@gmail.com</td>
                        <td>(11) 99950-2222</td>
                        <td>perfil</td>
                    </tr>
                    <tr>
                        <td>Rafael Tuccio</td>
                        <td>rafael@gmail.com</td>
                        <td>(11) 99950-2222</td>
                        <td>perfil</td>
                    </tr>
                    <tr>
                        <td>Rafael Tuccio</td>
                        <td>rafael@gmail.com</td>
                        <td>(11) 99950-2222</td>
                        <td>perfil</td>
                    </tr>
                </tbody>
            </table>
        </table>
    )
}

export default Table