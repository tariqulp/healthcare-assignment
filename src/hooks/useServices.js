const { useState, useEffect } = require("react")

const useServices = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('/data.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return {
        service,
        setService
    }
}
export default useServices;