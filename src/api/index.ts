import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const httpLink = createHttpLink({
  uri: 'http://localhost:8010/graphql',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

const Query = {
  deadlines: gql`
    query fetchDeadlines {
      deadlines {
        deadlines {
          deadline
          jackpot
          type
        }
      }
    }
  `,
  draws: gql`
    query fetchDraws($lottery: String!, $limit: Int!) {
      draw(type: $lottery, limit: $limit) {
        draws {
          date
          numbers
          additionalNumbers
          jackpot
        }
      }
    }
  `,
};

export { apolloProvider, Query };
