import React from 'react';
import Item from './Item';

const Profile = ({user}) => {
    const {avatar, twitterUsername, name, location, foodType, age, likes} = user
    
    return ( <div>
        <img src={avatar} />
        <h3>{name}</h3>
        <Item title="Location" content={location}></Item>
        <Item title="Eats" content={foodType}></Item>
        <Item title="Age" content={age}></Item>
        <Item title="Likes" content={likes}></Item>
        <Item title="Twitter" content={twitterUsername}></Item>
    </div> );
}
 
export default Profile;