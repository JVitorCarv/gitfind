import { useState } from "react"
import Header from "../../components/Header"
import Input from '../../components/Input'
import Profile from "../../components/Profile"
import RepositoryList from "../../components/RepositoryList"
import SearchButton from "../../components/SearchButton"
import background from "../../assets/background.png"
import './styles.css'


function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null)
  const [repositoryList, setRepositoryList] = useState(null);

  const handleGetData = async() => {
    if (user.trim() !== '') {
      let trimmedUser = user.trim()
      const userData = await fetch(`https://api.github.com/users/${trimmedUser}`)
      const newUser = await userData.json()
      console.log(newUser)

      if (userData.ok) {
        setUser(newUser.login);
        setCurrentUser(newUser);
        
        const repoData = await fetch(`https://api.github.com/users/${trimmedUser}/repos`)
        if (repoData.ok) {
          const repoList = await repoData.json()
          const filteredList = repoList.map(repo => (
            {
              "name": repo.name,
              "url": repo.html_url,
              "description": repo.description
            }
          ))
          console.log(filteredList)
          setRepositoryList(filteredList)
        }
      }
    }
  }

  return (
    <div className='App'>
      <Header/>
      <div className="conteudo">
        <img src={background} className="github-background" alt="GitHub Logo" />
        <div className="info">
          <div className="search">
            <Input value={user} onChange={setUser}/>
            <SearchButton title="Buscar" onClick={handleGetData}/>
          </div>
          {currentUser === null ? '' : <Profile user={currentUser}/>}
          {repositoryList === null ? '' : <RepositoryList repositories={repositoryList}/>}
        </div>
      </div>
    </div>
  )
}

export default App
