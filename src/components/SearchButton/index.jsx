import './styles.css'

const SearchButton = ({title, onClick}) => {
    return (
        <button onClick={onClick}>{title}</button>
    )
}

export default SearchButton;
