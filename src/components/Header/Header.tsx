import Logo from '../../images/logo.png';
import { SearchInput } from '../SearchInput';
import { UserAccount } from '../UserAccount';

export const Header = () => {
    return (
        <div className="header">
            <img className='header__logo' src={Logo} alt="logo" />
            <SearchInput />
            <UserAccount />
        </div>
    );
};
