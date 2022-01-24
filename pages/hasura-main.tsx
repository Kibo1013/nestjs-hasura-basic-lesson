import { VFC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'
import { Layout } from '../components/Layout'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    // fetchPolicy: 'network-only',
    // fetchPolicy: 'cache-first',
    // fetchPolicy: 'no-cache',
    fetchPolicy: 'cache-and-network', //推奨
  })
  console.log(data)
  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <a>Error: {error.message}</a>
      </Layout>
    )
  return (
    <Layout title="Hasura fetchPolicy">
      <a className="mb-6 font-bold">Hasura main page</a>
      {data?.users.map((user) => {
        return (
          <p key={user.id} className="my-1">
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
