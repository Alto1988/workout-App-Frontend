import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import { UsersInfo } from './Components/UsersInfo';


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{
      backgroundColor: '#00000008',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
        <h2>First Apollo app
         <span role="img" aria-label="rocket">🚀</span>
        </h2>
        <UsersInfo/>
      </div>
    </ApolloProvider>
  );
}

export default App;
