import React from 'react';

function Avatar({user}) {
  return (
    <img className="Avatar"
      src={user.avatarUrl}
      alt={user.name}
    />
  )
}

function UserInfo({user}) {
  return (
    <div className="UserInfo">
      <Avatar user={user} />
      <div className="UserInfo-name">
        {user.name}
      </div>
    </div>
  );
}


export default function Comment(props) {
  function formatDate (date) {
    return date.toLocaleTimeString()
  }
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
