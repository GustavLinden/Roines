import { Link } from 'react-router-dom';
import { IHeaderLink } from '../../models/IHeaderLink';

const HeaderLink: React.FC<IHeaderLink> = ({ page, children }) => {
  // const title = page.charAt(0).toUpperCase() + page.slice(1);
  return (
    <Link className="navbar-item" to={`${page}`}>
      {children}
    </Link>
  );
};

export default HeaderLink;
