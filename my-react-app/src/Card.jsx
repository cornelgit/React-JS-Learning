function Card() {
    return (
        <div className="card">
            <img
                className="card-image"
                alt="profile picture"
                src="https://media.licdn.com/dms/image/C5103AQHq4CM5DN-hqg/profile-displayphoto-shrink_400_400/0/1516930592788?e=1726704000&v=beta&t=-U0Gska7fRnrvo8SBfCUMp-_mlQSY674AdCeiTWq05M"
            ></img>
            <h2 className="card-title">Cornel Stoica</h2>
            <p className="card-text">
                I am a Software Engineering student and play MMOs.
            </p>
        </div>
    );
}

export default Card;
