import './styles.css'
import ProfilePicture from '../ProfilePicture'

const Profile = ({user}) => {
    return (
        <>
            <div className='perfil'>
                <ProfilePicture src={user.avatar_url}/>
                <div className='profile-text'>
                    <h3>{user.name}</h3>
                    <span>@{user.login}</span>
                    <p>{user.bio}</p>
                </div>
            </div>
        </>
    )
}

export default Profile