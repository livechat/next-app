import { useEffect, useState } from 'react'
import AccountsSDK from '@livechat/accounts-sdk'
import { Config } from 'lib/config'

type UserIdentity = {
  account_id: string
  access_token: string
  expires_in: number
  organization_id: string
  scope: string
  token_type: 'Bearer'
}

const accountsSDK = new AccountsSDK({
  client_id: Config.lcClientId,
  server_url: Config.lcAccountsURL,
})

function useUserIdentity() {
  const [userIdentity, setUserIdentity] = useState<UserIdentity | null>(null)

  useEffect(() => {
    accountsSDK.popup().authorize().then(setUserIdentity)
  }, [])

  return userIdentity
}

export default useUserIdentity
