import { ListStyled } from "./HeaderLinks.styled";

export const links = [
    { name: "Menu", href: "#" },
    { name: "Rewards", href: "#" },
    { name: "Gift Cards", href: "#" },
];

type Props = {
    aClassName: string
    liClassName: string
    listClassName: string
}

export default function HeaderLinks({ aClassName, liClassName, listClassName }: Props) {
    return (
        <ListStyled className={listClassName}>
            {links.map((link, i) => (
                <li className={liClassName} key={i}>
                    <a

                        href={link.href}
                        className={aClassName}
                    >
                        {link.name}
                    </a>
                </li>
            ))}


        </ListStyled>
    )
}