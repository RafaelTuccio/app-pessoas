import { useEffect, useState } from 'react'
import './style.css'

const Card = (props) => {
    const [cssClass, setCssClass] = useState('')
    const { active, closeCard, data } = props
    const [user, setUser] = useState({})
    const [date, setDate] = useState('')

    const formatDate = (date, country) => {
        const day = date.substring(8, 10)
        const mouth = date.substring(5, 7)
        const year = date.substring(0, 4)
        if(country === "Brazil"){
            return `${day}/${mouth}/${year}`
        }else{
            return `${mouth}/${day}/${year}`
        }
    }


    useEffect(() => {
        
        if(active){
            setCssClass('visible')
            setUser(data)
            //const formatedDate = formatDate(user?.dob?.date ,user?.location?.country)
            let date = user?.dob?.date
            let country = user?.location?.country
            if(date && country){
                let formatedDate = formatDate(date, country)
                setDate(formatedDate)
            }
            
        }else{
            setCssClass('invisible')
            setUser('')
        }
        
    }, [active, cssClass, user, data])
    
    return(
        <div className={`card-container ${cssClass}`}>
            <div className="card">
                <div className="title-card">
                    <span><strong>Id-profile</strong> {user?.id?.value}</span>
                    <i className="material-icons pointer"
                    onClick={closeCard}
                    >close</i>
                </div>
                <div className="card-intern">
                    <div className="imgBx">
                        <img src={user?.picture?.large} alt="profile" />
                    </div>
                    <div className="content">
                        <ul className="ul-card">
                            <li className="li-card">
                                <i className="material-icons">assignment_ind</i>
                                <span>{user?.name?.title} {user?.name?.first} {user?.name?.last}</span>
                            </li>
                            <li className="li-card">
                                <i className="material-icons">person</i>
                                <span>{user?.login?.username}</span>
                            </li>
                            <li className="li-card">
                                <i className="material-icons">mail</i>
                                <span>{user?.email}</span>
                            </li>
                            <li className="li-card">
                                <i className="material-icons">cake</i>
                                <span>{date}</span>
                            </li>
                            <li className="li-card">
                                <i className="material-icons">call</i>
                                <span>{user?.phone}</span>
                            </li>
                            <li className="li-card">
                                <i className="material-icons">stay_current_portrait</i>
                                <span>{user?.cell}</span>
                            </li>
                            <li className="li-card">
                                <i className="material-icons">location_on</i>
                                <span>{user?.location?.street?.name} {user?.location?.street?.number}</span>
                            </li>
                            <li className="li-card">
                                <i className="material-icons">flag</i>
                                <span>{user?.location?.country}</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
