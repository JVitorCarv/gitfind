import RepositoryItemList from '../RepositoryItemList'
import './styles.css'

const RepositoryList = ({repositories}) => {
  return (
    <div className="repository-list">
        <h4 id="repository-title">Repositories</h4>
        {repositories.map(repo => (
            <div key={repo.name}>
                <RepositoryItemList title={repo.name} description={repo.description} url={repo.url}/>
            </div>
        ))}
    </div>
  )
}

export default RepositoryList