import { useEffect, useState } from 'react'
import { NumericInputField } from '@livechat/design-system'
import FullScreenLoader from 'components/FullScreenLoader'
import useFullscreenWidget from 'hooks/useFullscreenWidget'

function Fullscreen() {
  const fullscreenWidget = useFullscreenWidget()
  const [notificationsCount, setNotificationsCount] = useState(0)

  useEffect(() => {
    if (fullscreenWidget) {
      fullscreenWidget.setNotificationBadge(notificationsCount)
    }
  }, [fullscreenWidget, notificationsCount])

  if (fullscreenWidget === null) {
    return <FullScreenLoader />
  }

  return (
    <div>
      <h1>Fullscreen widget</h1>
      <NumericInputField
        min={0}
        max={99}
        id="notifications-count"
        labelText="Notifications count"
        value={String(notificationsCount)}
        onChange={(value) => setNotificationsCount(Number(value))}
      />
    </div>
  )
}

export default Fullscreen
