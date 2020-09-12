import { ServerResponse } from 'http'
import { Http2SecureServer } from 'http2'

export default (_, res) => {
  res.status(200).json({ text: 'Hello' })
}
