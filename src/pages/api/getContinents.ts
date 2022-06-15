import { NextApiRequest, NextApiResponse } from "next"
import { query as q } from 'faunadb'
import { fauna } from "../../services/fauna"

type Continent = {
  data: {
    ref: {
      id:string;
    }
    name: string,
    url: string,
    slide: {
      banner: string,
      desc: string
    }
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const continents = await fauna.query<Continent>(
      q.Map(
        // q.Paginate(q.Documents(q.Collection('continents'))),
        q.Paginate(q.Match(q.Index('allContinents'))),
        q.Lambda(x => q.Get(x))
      )
    )

    let continentId = continents.data[0].ref.id
    let dados = continents.data
    // console.log(continents)

    res.status(200).json(continents.data)
  } catch(error) {
    // console.log(error.message)
    res.status(500).end('Method not allowed')
  }
  
}