import './styles.css'
import ProfilePicture from '../ProfilePicture'

const Profile = ({user}) => {
    return (
        <>
            <div className='perfil'>
                <ProfilePicture className="profile-pic" user={user}/>
                <div className='profile-text'>
                    <a target='_blank' rel="noreferrer" href={`https://github.com/${user.login}`}>
                        <h3>{user.name}</h3>
                        <span>@{user.login}</span>
                        <p>{user.bio}</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Profile