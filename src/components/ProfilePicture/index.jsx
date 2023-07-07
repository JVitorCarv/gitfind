import './styles.css'

const ProfilePicture = ({user}) => {
    return (
        <a target='_blank' rel="noreferrer" href={`https://github.com/${user.login}`}>
            <img src={user.avatar_url} className="profile" alt="Profile picture" />
        </a>
    )
}

export default ProfilePicture;
