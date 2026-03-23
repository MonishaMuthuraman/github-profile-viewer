export default function ProfileCard(props) { 
    console.log(props.data);
    let fetchedUser = props.data;
    return (
        <div>
            <img alt="profile_pic" src={fetchedUser.avatar_url} />
            <h2 className="profile-name">{fetchedUser.name}</h2>
            <p className="username">@{fetchedUser.login}</p>
            <p className="about">{fetchedUser.bio}</p>
            <div>
                <h3>{fetchedUser.public_repos}</h3>
                <p>Repositories</p>
            </div>
            <div>
                <h3>{fetchedUser.followers}</h3>
                <p>Followers</p>
            </div>
            <div>
                <h3>{fetchedUser.following}</h3>
                <p>Following</p>
            </div>
        </div>
    )
}