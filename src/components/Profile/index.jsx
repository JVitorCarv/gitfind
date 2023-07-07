import './styles.css'
import ProfilePicture from '../ProfilePicture'

const Profile = ({user}) => {
    return (
        <>
            <div className='perfil'>
                <ProfilePicture src={user.avatar_url}/>
                <div>
                    <h3>{user.name}</h3>
                    <span>@{user.login}</span>
                    <p>{user.bio}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Profile