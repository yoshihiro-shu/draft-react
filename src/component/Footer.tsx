import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
      <footer className="w-full border-t bg-white pb-12">
      <div
        className="relative w-full flex items-center invisible md:visible md:pb-12"
      >
        {/* <button
          className="absolute bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
        >
          &#8592;
        </button>
        <button
          className="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
        >
          &#8594;
        </button> */}
      </div>
      <div className="w-full container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
          <Link to="/" className="uppercase px-3">About Us</Link>
          <Link to="/" className="uppercase px-3">Privacy Policy</Link>
          <Link to="/" className="uppercase px-3">Terms & Conditions</Link>
          <Link to="/" className="uppercase px-3">Contact Us</Link>
        </div>
        <div className="uppercase pb-6">
          {t('copyright')}
        </div>
      </div>
    </footer>
  )
}

export default Footer;