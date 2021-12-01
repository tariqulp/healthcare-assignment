import { useEffect, useState } from "react"

const useShops = () => {
    const [shop, setShop] = useState([])
    useEffect(() => {
        fetch('/shop.JSON')
            .then(res => res.json())
            .then(data => setShop(data))
    }, [])

    return {
        shop,
        setShop
    }
}
export default useShops;