import FooSecondaryLinks from "./foo_true/FooSecondaryLinks";
import FooPrimaryLinks from "./foo_true/FooPrimaryLinks";
import FooRights from "./foo_true/FooRights";
import SocialMedia from "./foo_true/SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <footer className='py-6'>
      <nav className='px-4 md:px-6 lg:px-10'>
        <FooPrimaryLinks />
        <hr className="my-8 border-gray-300 border-t-2" />
        <SocialMedia />
        <FooSecondaryLinks />
        <FooRights />
      </nav>
    </footer>
  );
}
