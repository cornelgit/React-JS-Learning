function ProfilePicture() {
    const imageUrl = "./src/assets/profilePic.jpg";

    const handleClick = (e) => {
        e.target.style.display = "none";
    };

    return <img src={imageUrl} onClick={(e) => handleClick(e)}></img>;
}

export default ProfilePicture;

// click event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing a callback
//               to the onClick event handler.
