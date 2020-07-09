import React from 'react'
import './Day.scss'

export default function Day(props) {
    /// props:
    ///     isToday: boolean to show if that's the actual day
    ///     isSelected: boolean to show if that is the selected day
    ///     hasContent: boolean to show if user has text stored for that day
    return (
        <div className="Day" >
            {/* Added this cover to make the click possible in all cases */}
            <div className="cover" onClick={() => { props.onClickHandler() }}></div>

            <div className="day"></div>
            {props.isToday && <div className="today"></div>}
            {props.isSelected && <div className="selected"></div>}
            {props.hasContent && <div className="content"></div>}

        </div >
    )
}