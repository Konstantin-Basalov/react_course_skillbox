import {hot} from 'react-hot-loader/root'
import * as React from 'react';

function HeaderComponent() {
    return (
        <div>
            <h1>SkillBox Course "React"</h1>
            <p>New text here</p>
        </div>

    )
}

export const Header = hot(HeaderComponent)

