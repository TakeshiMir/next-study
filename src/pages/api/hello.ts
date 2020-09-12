import { ServerResponse } from 'http'
import { Http2SecureServer } from 'http2'

import { NextApiResponse } from 'next'

export default (_, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}
