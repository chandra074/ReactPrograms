import ContactCard from "./ContactCard"

function ContactList({personProp,deletePerson}){
    // console.log(props.personProp)
    // const rednderList = props.personProp.map((e)=>{
    //      return <div>
    //         <h1>{e.name}</h1>
    //         <h2>{e.email}</h2>
    //     </div>
    // })
    const list = personProp.map((e,index)=>(
        <ContactCard details={e} deleteSelectedPerson={deletePerson} />
    )
    )

    return(
        <div className="ui celled list">
          {/* {rednderList} */}
          {list}
        </div>
    )
}
export default ContactList