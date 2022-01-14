import React from "react";
import PropTypes from "prop-types";

const Profile =(props)=>{
    props.func("My name is "+props.Fullname)
return(
    <>
    <div>
        <div>{props.children}</div>
        <h1>{props.Fullname}</h1>
    </div>
    
   <h3>im a {props.profession}</h3>
   <p>{props.bio}</p>

   
    </>
);
}
Profile.defaultProps={
    children:"unknown",
    Fullname:"unknown",
    profession:"unknown",
    bio:"unknown"
};
Profile.propType={
    profession:PropTypes.string,
    Fullname:PropTypes.string,
    bio:PropTypes.string,
    func:PropTypes.func
};
export default Profile;