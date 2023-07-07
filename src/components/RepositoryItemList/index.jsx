import './styles.css'

const RepositoryItemList = ({title, description, url}) => {
  return (
    <>  
      <div className='repository-item-list'>
        <a target='_blank' href={url} rel="noreferrer"><strong>{title}</strong></a>
        {description ? <p>{description}</p> : <p>No description</p>}
      </div>
      <hr/>
    </>
  )
}

export default RepositoryItemList;
