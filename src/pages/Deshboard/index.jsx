import {FaSearch} from "react-icons/fa"
import { useNavigate} from 'react-router-dom'
import { Container, Content,ContentLoader } from "./styles"
import {  useState } from "react"
import { getUserDetails } from "../../api/github"

import {CirclesVSD} from '../../components/loaders/HourglassVSD'

export const Dashboard = () => {
 const [username, setUserName] = useState('')
 const [loading, setLoading] = useState(false)
 const navigate = useNavigate()

 function handleSetUser(event) {
    setUserName(event.target.value)

 }

 async function handleGetDetails() {
  try {
    const result = await getUserDetails(username)

    navigate('/repositories', {state: {profile: result}})

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
            
                
            
        
        <button type="button" onClick={() => handleGetDetails()}>Buscar <FaSearch /></button>
        </Content>
        {loading && ( 
          <ContentLoader>
           <CirclesVSD />
        </ContentLoader>
      )}
       
    </Container>
    
      
    )
}