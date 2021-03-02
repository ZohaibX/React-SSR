import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../Store/actions';
import { connect } from 'react-redux';

const Home = (props) => {
  //! This function is for SEO
  const head = () => (
    <Helmet>
      <title>{`Home Component`}</title>
      {/* // this is how we will make our title dynamic */}
      <meta property='og:title' content='Home'></meta>
      {/* // this title is for SEO -- to identify this page title  */}
      {/* // we normally have to add 4 required meta tags and we can add more optional meta tags for SEO */}
      {/* //? https://ogp.me/ */}
    </Helmet>
  );

  const fetchFakeAPIOnClick = () => {
    props.fetchUsers();
  };
  const showFakeAPIOnClick = () => {
    if (props.users.data.length) {
      return props.users.data.map((item) => (
        <ul key={item.id}>
          <li>Name is: {item.name}</li>
        </ul>
      ));
    }
    return null;
  };

  return (
    <div>
      {head()}
      {/* I can place head() function anywhere, Helmet will automatically put it into head tag */}
      <h1>Im a Home Component </h1>
      <button onClick={() => console.log('You Pressed Me!')}>
        Press Me - !
      </button>
      <br />
      <Link to='/users'>
        <button>Get me to Users</button>
      </Link>
      <br />
      <br />
      <button onClick={fetchFakeAPIOnClick}>fetch data </button>
      <br />
      {showFakeAPIOnClick()}
    </div>
  );
};

function mapStateToProps({ users }) {
  return { users };
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(Home), // this styling is for Routes file specially
};
