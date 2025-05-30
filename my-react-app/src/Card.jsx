import profilePic from './assets/roadmapjpg.jpg'

function Card(){

    return(
        <div className="card">
            <img className = "card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">TadPole</h2>
            <p className="card-text">I make Games in Unity, Unreal, custom C++ Engines</p>
        </div>
    );
}

export default Card