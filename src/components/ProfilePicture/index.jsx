import './styles.css'

const ProfilePicture = ({src}) => {
    return (
        <img src={src} className="profile" alt="Profile picture" />
    )
}

export default ProfilePicture;
