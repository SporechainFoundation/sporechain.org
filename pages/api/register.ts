// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosPromise } from 'axios'
import { resolve } from 'path'

type SubmitResponse = {
  response: string
}

const url = 'http://66.42.64.56/register'

const handler = (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return axios({
    method: 'post',
    headers : { 'Content-type': 'application/json', },
    url: url,
    data: {'name': req.body.name, 'email': req.body.email }
  })
  .then((results) =>{
    res.status(results.status).json(results.data)
  })
  .catch((error) => {
    res.status(error.status).json(error.response.data)
  })

}

export default handler;