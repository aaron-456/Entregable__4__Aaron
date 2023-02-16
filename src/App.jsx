import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './componets/FormUsers'
import UserCard from './componets/UserCard'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isOpen, setIsOpen] = useState(false)

  console.log(updateInfo);

  const getAllUsers = () => {
    const url = "https://users-crud.academlo.tech/users/"
    axios.get(url)
      .then(res =>setUsers(res.data))
      .catch(err=> console.log(err))
  }

  const createNewUser = data =>{
    const url = "https://users-crud.academlo.tech/users/"
    axios.post(url,data)
      .then(res =>{
        console.log(res.data)
        getAllUsers()
        setUpdateInfo()
      })
      .catch(err =>console.log(err))
  }

    useEffect(()=> {
      getAllUsers()
    },[])

    
  const deleteUserById = id =>{
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(res.data)
      getAllUsers()
    })
      .catch(err => console.log(err))
  }


  const updataUserById = (id,data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(url,data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpen = () => setIsOpen(true)

  const handleClose = () => setIsOpen(false)

  return (
    <div className="app">
      <div className='app__content'>
      <h1>Users</h1>
      <button onClick={handleOpen} className='app__btn-form'><div><i class='bx bx-user-circle'></i></div>Create User</button>
      </div>
      
      <div className={`app__form ${isOpen && "app__form-visible"}`}>
      <FormUsers
      createNewUser= {createNewUser}
      updateInfo={updateInfo} 
      updataUserById={updataUserById} 
      handleClose = {handleClose} 
      setUpdateInfo= {setUpdateInfo}
      />
      </div>

      <div>
      {
        users?.map(user => (
          <div className='tutu'>
          <UserCard
          key={user.id}
          user ={user} 
          deleteUserById={deleteUserById} 
          setUpdateInfo={setUpdateInfo}  
          handleOpen={handleOpen}
          />

          </div>
          
        ))
      }
      </div>
    </div>
  )
}

export default App
