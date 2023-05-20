import { useEffect } from "react"

const useTitle=(title)=>{
      useEffect(()=>{
            document.title= `${title} - Toys Zone`;
      },[title])
}

export default useTitle;