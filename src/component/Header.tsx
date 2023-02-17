import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
    return (
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
            <Link to="/" className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
            {t('title')}
            </Link>
            <p className="text-lg text-gray-600">
            Lorem Ipsum Dolor Sit Amet
            </p>
        </div>
      </header>
    )
}

export default Header;
