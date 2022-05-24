import { Card } from '@livechat/design-system'
import FullScreenLoader from 'components/FullScreenLoader'
import ViewContainer from 'components/ViewContainer'
import useDetailsWidget from 'hooks/useDetailsWidget'

function ChatDetails() {
  const { widget, customerProfile } = useDetailsWidget()

  if (widget === null || customerProfile === null) {
    return <FullScreenLoader />
  }

  return (
    <ViewContainer>
      <h1>Chat Details widget</h1>
      <Card title="Customer profile">
        <ul>
          <li>Name: {customerProfile.name}</li>
          <li>Country: {customerProfile.geolocation.country}</li>
          <li>Timezone: {customerProfile.geolocation.timezone}</li>
        </ul>
      </Card>
    </ViewContainer>
  )
}

export default ChatDetails
