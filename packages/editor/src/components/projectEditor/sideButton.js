import React from 'react';
import classNames from 'classnames';
import style from './style.less';

export function SideButton(props) {
    return(
        <button
            className={classNames([style.sideButton, 'btnNoBg', props.className, props.active && style.active])}
            onClick={props.onClick}
        >
            {props.icon}
            <span className={style.buttonText}>
                {props.name}
            </span>
        </button>
    );
}
