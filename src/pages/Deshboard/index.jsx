import {FaSearch} from "react-icons/fa"
import { Container, Content } from "./styles"
import { useState } from "react"
import { getUserDetails } from "../../api/github"

export const Dashboard = () => {
 const [username, setUserName] = useState('')
 const [loading, setLoading] = useState(false)

 function handleSetUser(event) {
    setUserName(event.target.value)

 }

 async function handleGetDetails() {
  try {
    const result = await getUserDetails(username)

    console.log(result)

  } catch (error) {
    console.error(error.message)

  } finally {
    setLoading(false)
  }
 }

    return(
        
    <Container>
        <Content>
            <label htmlFor="nickname">
                Digite o usuario GIT
                <input 
                id="nickname" 
                type="text" 
                placeholder="Digite aqui seu usúario" 
                onChange={handleSetUser}
                />
            </label>
                
            
        
        <button>Buscar <FaSearch /></button>
        </Content>
    </Container>
    
      
    )
}