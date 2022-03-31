import { data } from "../../constants/constants"



export default function Home(){


    return(
        <>
       
          {data.map((p) =><div><img src={p.img}/></div>)}
         
        </>
    )
}