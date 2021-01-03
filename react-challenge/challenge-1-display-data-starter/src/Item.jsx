import React from 'react';

const Item = ({title, content}) => {
    return ( 
        <div>
            <strong>{title}</strong>
            {(title!=="Twitter") ? <div className="content">{content}</div> : 
            <a href={`https://twitter.com/${content}`}>@{content}</a>}
            
        </div>
     );
}
 
export default Item;