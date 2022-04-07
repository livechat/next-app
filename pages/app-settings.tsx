import FullScreenLoader from 'components/FullScreenLoader'
import useUserIdentity from 'hooks/useUserIdentity'

function AppSettings() {
  const userIdentity = useUserIdentity()

  if (userIdentity === null) {
    return <FullScreenLoader />
  }

  return (
    <div>
      <h1>App Setting page</h1>
      <code>{JSON.stringify(userIdentity, null, 2)}</code>
    </div>
  )
}

export default AppSettings
