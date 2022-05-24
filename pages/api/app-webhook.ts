import { NextApiRequest, NextApiResponse } from 'next'
import camelcase from 'camelcase'
import { Config } from 'lib/config'

async function AppWebook(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { clientID, licenseID, event, payload } = req.body
    if (clientID !== Config.lcClientId) {
      throw new Error('Unauthorized')
    }
    const handlerName = camelcase(event) as keyof typeof WebhooksHandlers
    await WebhooksHandlers[handlerName](licenseID, payload)
  } catch (error) {
    const { message } = error as Error
    console.log('AppWebook -> error: ', message)
  } finally {
    res.status(200).end()
  }
}

const WebhooksHandlers = {
  async applicationInstalled(licenseID: number, payload: { applicationID: string }) {
    console.log('AppWebook -> applicationInstalled', licenseID, payload)
  },

  async applicationUninstalled(licenseID: number, payload: { applicationID: string }) {
    console.log('AppWebook -> applicationUninstalled', licenseID, payload)
  },

  async paymentActivated(licenseID: number, payload: { paymentID: string; quantity: number }) {
    console.log('AppWebook -> paymentActivated', licenseID, payload)
  },

  async paymentCollected(licenseID: number, payload: { paymentID: string; total: number }) {
    console.log('AppWebook -> paymentCollected', licenseID, payload)
  },

  async paymentCancelled(licenseID: number, payload: { paymentID: string }) {
    console.log('AppWebook -> paymentCancelled', licenseID, payload)
  },
}

export default AppWebook
