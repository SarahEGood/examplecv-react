import React, {useState} from "react";

function Field({val, lab, inputType, onChange, onClick}) {
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing(true);
      };
    
    const handleKeyPress = e => {
    if (e.key === "Enter") {
        setIsEditing(false);
    }
    };

    const handleClickDone = () => {
        setIsEditing(false);
    }
    
    return (
    <div className="Field">
        <label>
            {lab}
        </label>
        {isEditing ? (
        <>
        <input
            autoFocus
            onChange={onChange}
            onKeyUpCapture={handleKeyPress}
            type={inputType}
            value={val}
        />
        <button onClick={handleClickDone}>
            Done
        </button>
        </>
        ) : (
        <>
        <div className='emptybox' onClick={handleClick}>
        {val}
        </div>
        <button onClick={handleClick}>
            Edit
        </button>
        </>
        )}
    </div>
    );
}

function dateField({val, lab, onChange, onClick}) {

}

export default Field;