import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCache,
  NormalizedCacheObject,
} from '@apollo/client'
import 'cross-fetch/polyfill'

// export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      // uri: 'https://basic-lesson-hc.hasura.app/v1/graphql',
      uri: process.env.NEXT_PUBLIC_HASURA_URL,
      headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_KEY,
      },
    }),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()
  // SSG window means client side
  if (typeof window === 'undefined') return _apolloClient
  // client side
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}
