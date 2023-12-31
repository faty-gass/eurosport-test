import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "./components/Home";

const App: React.FC = () => {
  const client = new ApolloClient({
    uri: "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <Home></Home>
      </div>
    </ApolloProvider>
  );
};

export default App;
