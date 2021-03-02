import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../Store/actions/index';

const Header = (props) => {
  const authButton = props.currentUser ? (
    <a href='/api/logout'>Logout</a>
  ) : (
    <a href='/api/auth/google'>Login</a>
  );

  return (
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo'>
        React SSR
      </Link>
      <ul className='right'>
        <li>
          <Link to='/users'>Users</Link>
        </li>

        <li>
          <Link to='/admins'>Admins</Link>
        </li>

        <li>{authButton}</li>
      </ul>
    </div>
  );
};

function mapStateToProps({ currentUser }) {
  return { currentUser };
}
// mapStateToProps have state object as an argument, we can fetch state[Data] like this as obvious

export default connect(mapStateToProps)(Header);
// in App.tsx file, currentUserDetails are already fetched
// and App.tsx file is directly connected to the every route we render --- notice --- only routes - pages
// normal components (not pages) will be connected to App.tsx by using that components in that App.tsx
