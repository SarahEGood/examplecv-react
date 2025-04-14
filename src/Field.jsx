import React, {useState} from "react";

function Field({val, lab, onChange, onClick}) {
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing(true);
      };
    
    const handleKeyPress = e => {
    if (e.key === "Enter") {
        setIsEditing(false);
    }
    };
    
    return (
    <div className="Field">
        <label>
            {lab}
        </label>
        {isEditing ? (
        <input
            autoFocus
            onChange={onChange}
            onKeyUpCapture={handleKeyPress}
            type="text"
        />
        ) : (
        <div className='emptybox' onClick={handleClick}>
        {val}
        </div>
        )}
    </div>
    );
}

export default Field;