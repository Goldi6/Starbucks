"use client";
import LocationButton from "../LocationButton";
import LoginButtons from "../LoginButtons";
import './style.scss'
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import { useRef } from "react";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

("");

export default function AsideNav({ isOpen, setIsOpen }: Props) {

    const navRef = useRef<HTMLDivElement>(null);

    const modal = navRef.current?.parentElement;

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                setIsOpen(false);
            }
        })
    }

    const links = navRef.current?.getElementsByTagName('a');
    if (links) {

        for (let i = 0; i < links?.length; i++) {
            links[ i ].addEventListener('click', () => {
                setIsOpen(false);
            })
        }
    }


    const aClassN = 'no-underline text-lg  text-gray-900 hover:text-green-700 py-4  text-[19px]';

    return (
        <>
            <nav
                ref={navRef}
                style={{}}
                className={`[&>*]:whitespace-nowrap
                h-full bg-white ${isOpen ? "w-5/6" : "w-0"
                    } absolute right-0 py-8 ${isOpen ? "px-8" : "px-0"
                    } box-border transition-width duration-[400ms] ease-in overflow-hidden`}
            >
                <div className="">
                    <HeaderLinks aClassName={""} liClassName={aClassN} listClassName='' />
                </div>
                <hr className="mt-4" />
                <div className="my-8">
                    <LoginButtons />
                    <br />
                    <LocationButton />
                </div>
            </nav>
        </>
    );
}
