import "./style.css"
const Pagination = (props) => {
    const { page, setPage } = props

    const forward = () => {
        const currentPage = Number(page)
        let nextPage = currentPage + 1
        setPage(nextPage)
        
    }

    const forback = () => {
        const currentPage = Number(page)
        if(currentPage === 1 || currentPage < 1){
        }else{
            let backPage = currentPage - 1
            setPage(backPage)
        }
    }


    return(
        <div className="pagination-container">
            <ul className="pagination">
              <li onClick={forback}>«</li>
              <li className="active">{page}</li>
              <li onClick={forward}>»</li>
            </ul>
        </div>
    )
}

export default Pagination