import ExpanderMenu from "./ExpanderMenu";
import RegularMenu from "./RegularMenu";
import AboutUs from "./SecondaryLinksComponents/AboutUs";
import Careers from "./SecondaryLinksComponents/Careers";
import ForBusinessPartners from "./SecondaryLinksComponents/ForBusinessPartners";
import OrderAndPickup from "./SecondaryLinksComponents/OrderAndPickup";
import SocialImpact from "./SecondaryLinksComponents/SocialImpact";
import listStyle from "./SecondaryLinksComponents/style.module.scss";

type Props = {};

export default function FooPrimaryLinks({ }: Props) {
  return (
    <>
      <div className={`${listStyle.list} lg:hidden `}>
        <ExpanderMenu title="About Us">
          <AboutUs />
        </ExpanderMenu>
        <ExpanderMenu title="Careers">
          <Careers />
        </ExpanderMenu>
        <ExpanderMenu title="Social Impact">
          <SocialImpact />
        </ExpanderMenu>
        <ExpanderMenu title="For Business Partners">
          <ForBusinessPartners />
        </ExpanderMenu>
        <ExpanderMenu title="Order and Pickup">
          <OrderAndPickup />
        </ExpanderMenu>
      </div>
      <div className={`${listStyle.list} hidden  lg:flex flex-row gap-8`}>
        <RegularMenu title="About Us">
          <AboutUs />
        </RegularMenu>
        <RegularMenu title="Careers">
          <Careers />
        </RegularMenu>
        <RegularMenu title="Social Impact">
          <SocialImpact />
        </RegularMenu>
        <RegularMenu title="For Business Partners">
          <ForBusinessPartners />
        </RegularMenu>
        <RegularMenu title="Order and Pickup">
          <OrderAndPickup />
        </RegularMenu>
      </div>
    </>
  );
}
