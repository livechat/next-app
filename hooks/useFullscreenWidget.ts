import { createFullscreenWidget, IFullscreenWidget } from '@livechat/agent-app-sdk'
import { useEffect, useState } from 'react'

function useFullscreenWidget(): IFullscreenWidget | null {
  const [widget, setWidget] = useState<IFullscreenWidget | null>(null)

  useEffect(() => {
    createFullscreenWidget().then(setWidget)
  }, [])

  return widget
}

export default useFullscreenWidget
