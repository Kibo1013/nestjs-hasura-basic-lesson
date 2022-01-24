import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { LocalStateB } from '../components/LocalStateB'

const LocalStatePageB: VFC = () => {
  return (
    <Layout title="Local State A">
      <LocalStateB />
    </Layout>
  )
}

export default LocalStatePageB
