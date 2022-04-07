import { createDetailsWidget, ICustomerProfile, IDetailsWidget } from '@livechat/agent-app-sdk'
import { useEffect, useState } from 'react'

function useDetailsWidget() {
  const [widget, setWidget] = useState<IDetailsWidget | null>(null)
  const [customerProfile, setCustomerProfile] = useState<ICustomerProfile | null>(null)

  useEffect(() => {
    createDetailsWidget().then(setWidget)
  }, [])

  useEffect(() => {
    if (widget) {
      setCustomerProfile(widget.getCustomerProfile())
      widget.on('customer_profile', setCustomerProfile)
      return () => widget.off('customer_profile', setCustomerProfile)
    }
  }, [widget])

  return { widget, customerProfile }
}

export default useDetailsWidget
