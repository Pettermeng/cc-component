import { Link } from '@nextui-org/react'
import { useRouter } from 'next/router'
 
function Page() {
  const router = useRouter()
  const param  = router.query.slug

  if(param != undefined) {
    if(param.length == 1) {
      console.log(param);
    }
    if(param.length >= 2) {
      console.log('Page Detail');
    } 
  }
  else {
    console.log(1);
  }

}

export default Page