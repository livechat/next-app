import { useEffect, useState } from 'react'
import { Card, NumericInputField } from '@livechat/design-system'
import FullScreenLoader from 'components/FullScreenLoader'
import useFullscreenWidget from 'hooks/useFullscreenWidget'
import useUserIdentity from 'hooks/useUserIdentity'
import { Config } from 'lib/config'
import ViewContainer from 'components/ViewContainer'

type Agent = {
  id: string
  name: string
  role: string
  avatar: string
}

function Fullscreen() {
  const userIdentity = useUserIdentity()
  const fullscreenWidget = useFullscreenWidget()
  const [agents, setAgents] = useState<Agent[] | null>(null)
  const [notificationsCount, setNotificationsCount] = useState(0)

  useEffect(() => {
    if (fullscreenWidget) {
      fullscreenWidget.setNotificationBadge(notificationsCount)
    }
  }, [fullscreenWidget, notificationsCount])

  useEffect(() => {
    if (userIdentity) {
      fetch(`${Config.lcApiURL}/configuration/action/list_agents`, {
        method: 'POST',
        body: '{}',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${userIdentity.token_type} ${userIdentity.access_token}`,
        },
      })
        .then((response) => response.json())
        .then(setAgents)
    }
  }, [userIdentity])

  if (fullscreenWidget === null || userIdentity === null || agents === null) {
    return <FullScreenLoader />
  }

  return (
    <ViewContainer>
      <h1>Fullscreen widget</h1>
      <NumericInputField
        min={0}
        max={99}
        id="notifications-count"
        labelText="Notifications count"
        value={String(notificationsCount)}
        onChange={(value) => setNotificationsCount(Number(value))}
      />
      <h3>Agents list:</h3>
      <div className="agents-list">
        {agents.map((agent) => (
          <Card key={agent.id} title={agent.name} img={agent.avatar}>
            {agent.role}
          </Card>
        ))}
      </div>
    </ViewContainer>
  )
}

export default Fullscreen
