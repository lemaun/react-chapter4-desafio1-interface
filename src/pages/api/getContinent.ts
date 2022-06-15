import { NextApiRequest, NextApiResponse } from "next"
import { query as q } from 'faunadb'
import { fauna } from "../../services/fauna"

type Continent = {
  data: {
    name: string,
    url: string,
    bannerHeader: string,
    about: string,
    indexes: {
      countries: number,
      laguages: number,
      cities: number,
    },
    cities100: 
      {
        name: string,
        country: string,
        img: string,
        flag: string,
      }[]
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req.body)
  try {
    const continent = await fauna.query<Continent>(
      q.Map(
        q.Paginate(q.Match(q.Index("ContinentByUrl"), req.body)),
        q.Lambda(x => q.Get(x))
      )
    )

    // let continentId = continent.data.ref.id
    let dados = continent.data[0].data
    // console.log(dados)

    res.status(200).json(dados)
  } catch(error) {
    // console.log(error.message)
    res.status(500).end('Method not allowed')
  }
  
}