import React from 'react';
import logo from './logo.svg';
import {useFela} from 'react-fela';

const HomePageView: React.FC = () => {
  const styles = useStyleSheet();

  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const useStyleSheet = () => {
  const {css, renderer} = useFela();
  const logoSpiner = renderer.renderKeyframe(() => ({
    from: {transform: 'rotate(0deg)'},
    to: {transform: 'rotate(360deg)'},
  }), {});

  return ({
    Container: css({
      textAlign: 'center',
    }),
    Header: css({
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: '#FFF',
      backgroundColor: '#282C34',
    }),
    Logo: css({
      height: '40vmin',
      pointerEvents: 'none',
      animation: logoSpiner + ' infinite 20s linear',
    }),
    Link: css({
      color: '#61DAFB',
    }),
  });
};

export default HomePageView;
