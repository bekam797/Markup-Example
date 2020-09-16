import React from 'react';
import Layout from './Layout/Layout';
import Main from './containers/Main/Main';

function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
