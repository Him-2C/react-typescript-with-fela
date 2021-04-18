import React from 'react';
import {RendererProvider} from 'react-fela';
import HomePageView from './routes/home/HomPageView';
import felaRenderer from './utils/fela/felaRenderer';

const App: React.FC = () => {
  return (
    <RendererProvider renderer={felaRenderer}>
      <HomePageView />
    </RendererProvider>
  );
};

export default App;
