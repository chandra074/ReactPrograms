import React, { useEffect, useState } from "react"
import AddContact from "./components/AddContact"
import Header from "./components/Header"
import ContactList from "./components/ContactList"
import {v4 as uuidv4} from "uuid"

const App =()=>{
  const [contacts,setContact]=useState([])
 const LOCAL_STORAGE_KEY ="contacts"
 const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//  console.log(retriveContacts)
  const personDetailsHandler = (p)=>{
    // console.log(p)
    setContact([...contacts,{id:uuidv4(),...p}])
  }
  // console.log(contacts)
  useEffect(()=>{
    if(retriveContacts) setContact(retriveContacts)
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

 const removeContact =(id)=>{
  const newContactList = contacts.filter((re)=>{
    return re.id!== id
  })
  setContact(newContactList)
  console.log(newContactList)
  }
  return(
      <div className="ui container center">
        <Header />
        <AddContact setProp={personDetailsHandler} />
        <ContactList  personProp={contacts} deletePerson={removeContact}/>
      </div>
  )
}
export default App