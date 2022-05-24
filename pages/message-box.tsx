import { IRichMessage } from '@livechat/agent-app-sdk'
import { Button } from '@livechat/design-system'
import FullScreenLoader from 'components/FullScreenLoader'
import ViewContainer from 'components/ViewContainer'
import useMessageBoxWidget from 'hooks/useMessageBoxWidget'

const RICH_MESSAGE: IRichMessage = {
  template_id: 'cards',
  elements: [
    {
      title: 'Hello',
      subtitle: 'This is an example card',
      buttons: [
        {
          type: 'message',
          text: 'Say hello',
          value: 'Say hello',
          postback_id: 'send_message',
          user_ids: [],
        },
      ],
    },
  ],
}

function MessageBox() {
  const messageBoxWidget = useMessageBoxWidget()

  if (messageBoxWidget === null) {
    return <FullScreenLoader />
  }

  return (
    <ViewContainer>
      <h1>Message box widget</h1>
      <Button kind="primary" type="button" onClick={() => messageBoxWidget.putMessage(RICH_MESSAGE)}>
        Put a message
      </Button>
    </ViewContainer>
  )
}

export default MessageBox
