import camelcase from 'camelcase'
import { StatusCodes } from 'http-status-codes'
import { NextApiRequest, NextApiResponse } from 'next'
import mapKeys from 'lodash.mapkeys'

type ChatActionPayload = {
  licenceId: string
  agentId: string
  time: string
  instanceId: string
  source: string
  chatId: string
  threadId: string
  customerId: string
  customerName: string
  customerEmail: string
  customerHost: string
  customerIp: string
  customerLatitude: string
  customerLongitude: string
  customerCountry: string
  customerRegion: string
  customerCity: string
  customerTimezone: string
}

async function ChatAction(req: NextApiRequest, res: NextApiResponse) {
  const payload = mapKeys(req.query, (_, key) => camelcase(key)) as ChatActionPayload

  console.log('ChatAction', payload)

  res.status(StatusCodes.OK).end()
}

export default ChatAction
