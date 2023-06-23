import { useEffect, useState } from "react"

import User from "./components/User"
import AllProjects from "./components/AllProjects"
import LastProjects from "./components/LastProjects"

function App() {

  const [user, setUser] = useState('')
  const [userClick, setUserClick] = useState('')

  return (
    <>
      <div className="container flex bar">
        <h3>Verifique seu repositóio GitHub</h3>
        <input onBlur={(evento) => setUser(evento.target.value)} type="text" placeholder="Digite seu usuário" />
        <button onClick={() => setUserClick(user) } type="button">Pesquisar</button>
      </div>

      {userClick.length > 4 && ( 
        <>
          <User nomeUsuario={userClick} />
          <LastProjects />     
          <AllProjects nomeUsuario={userClick} /> 
        </>
      )}
    </>
  )  
}

export default App


