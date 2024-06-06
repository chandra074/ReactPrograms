function ContactCard(props){
    const {id,name,email} = props.details
    return(
        <div className="item" style={{display:"flex"}}>
            <div className="content" key={id}>
                <div className="header">{name}</div>
                <div>{email}</div>
            </div> 
            <i className="trash alternate outline icon" style={{color:"red",marginLeft:'50%'}} onClick={()=>props.deleteSelectedPerson(id)}></i>
        </div>
    )
}
export default ContactCard