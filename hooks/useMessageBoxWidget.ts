import { createMessageBoxWidget, IMessageBoxWidget } from '@livechat/agent-app-sdk'
import { useEffect, useState } from 'react'

function useMessageBoxWidget(): IMessageBoxWidget | null {
  const [widget, setWidget] = useState<IMessageBoxWidget | null>(null)

  useEffect(() => {
    createMessageBoxWidget().then(setWidget)
  }, [])

  return widget
}

export default useMessageBoxWidget
