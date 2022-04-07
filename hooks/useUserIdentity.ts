import { useEffect, useState } from 'react'
import AccountsSDK from '@livechat/accounts-sdk'
import { Config } from 'lib/config'

const accountsSDK = new AccountsSDK({
  client_id: Config.lcClientId,
  server_url: Config.lcAccountsURL,
})

function useUserIdentity() {
  const [userIdentity, setUserIdentity] = useState<string | null>(null)

  useEffect(() => {
    const redirect = accountsSDK.redirect()
    redirect
      .authorizeData()
      .then(setUserIdentity)
      .catch(() => redirect.authorize())
  }, [])

  return userIdentity
}

export default useUserIdentity
