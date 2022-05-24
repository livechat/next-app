import { useEffect, useState } from 'react'
import { createFullscreenWidget, IFullscreenWidget } from '@livechat/agent-app-sdk'

function useFullscreenWidget(): IFullscreenWidget | null {
  const [widget, setWidget] = useState<IFullscreenWidget | null>(null)

  useEffect(() => {
    createFullscreenWidget().then(setWidget)
  }, [])

  return widget
}

export default useFullscreenWidget
