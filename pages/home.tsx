
import { useEffect, useState } from 'react'
import BasePage from './base-page'

export default function Home(props:any) {

    const [datas, setData] = useState([])
    const [hero, setHero] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://8.222.167.60/api/page/home')
          .then((res) => res.json())
          .then((data) => {
            const tiang = data?.[0].sections
            setData(tiang)
            const hero = data?.[0].hero
            setHero(hero)
          })
      }, [])

    return (
        <>
        {/* Init Hero Section */}
            {JSON.stringify(hero)}

        {/* Init Body Section */}
            {
                datas?.map((value : any)=>(
                    BasePage(value.view)
                ))
            }
        </>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch('http://8.222.167.60/api/page/home')
//     const posts = await res.json()
   
    
//     return {
//       props: {
//         posts,
//       },
//     }
//   }