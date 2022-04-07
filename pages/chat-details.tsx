import { ICustomerProfile } from '@livechat/agent-app-sdk'
import FullScreenLoader from 'components/FullScreenLoader'
import useDetailsWidget from 'hooks/useDetailsWidget'

function ChatDetails() {
  const { widget, customerProfile } = useDetailsWidget()

  if (widget == null) {
    return <FullScreenLoader />
  }

  return (
    <div>
      <h1>Chat Details widget</h1>
      <label>Customer profile:</label>
      <code>{JSON.stringify(customerProfile, null, 2)}</code>
    </div>
  )
}

export default ChatDetails
