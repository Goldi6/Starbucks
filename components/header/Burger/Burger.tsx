import { useState } from 'react';
import './style.css'

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Burger({ isOpen, setIsOpen }: Props) {
    const [ classN, setClassN ] = useState('CLOSED')

    const toggleMenu = () => {
        if (isOpen) {

            setClassN((c) => 'CLOSING');
            setTimeout(() => {

                setClassN((c) => 'CLOSED');
            }, 500);


        }
        else {
            setClassN((c) => 'OPENING');
            setTimeout(() => {

                setClassN((c) => 'OPEN');
            }, 500);
        } setIsOpen(!isOpen);
    };



    return (
        <button
            aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
            className="sb-iconButton relative color-textBlackSoft"
            aria-expanded={isOpen ? true : false}
            aria-controls="primary-hamburger-nav-panel"
            style={{ minWidth: '44px', minHeight: '44px' }}
            onClick={toggleMenu}
        >
            <svg
                aria-hidden="true"
                className="valign-middle absoluteCenter"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                style={{ width: '24px', height: '24px', overflow: 'visible', fill: 'currentcolor' }}
            >
                <path
                    className={`sb-hamburgerButton-middleLine-${classN} sb-hamburgerButton-animation`}
                    d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"
                ></path>
                <path
                    className={`sb-hamburgerButton-topLine-${classN} sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines`}
                    d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"
                ></path>
                <path
                    className={`sb-hamburgerButton-bottomLine-${classN} sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines`}
                    d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"
                ></path>
                <circle className="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle>
            </svg>
        </button>
    );
}


