
import Logo from "../Logo";
import { ListStyled } from "../HeaderLinks/HeaderLinks.styled";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

type Props = {
};


const liClassN = 'flex items-center m-0 ml-6 first-of-type:m-0'
const aClassN = 'no-underline text-[14px]  text-gray-900 hover:text-green-700';

export default function LogoNav({ }: Props) {
  return (

    <div className="hidden md:flex content-center">
      <HeaderLinks aClassName={aClassN} liClassName={liClassN} listClassName={"flex flex-row uppercase"} />
    </div>

  );
}
