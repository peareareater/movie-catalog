import { ReactComponent as UserLogo } from '../../icons/user.svg';

export const UserAccount = () => {
    return (
        <div className="user-account">
            <UserLogo />
            <p className="text text_theme_black text_size_md user-account__text">Your Name</p>
        </div>
    );
};
