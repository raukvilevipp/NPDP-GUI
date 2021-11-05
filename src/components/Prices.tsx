import dateFormat from 'dateformat'
import { useEffect } from 'react'
const now = new Date()

const entsoeTimeFormat = 'yyyymmddHH00'

const start = dateFormat(now, entsoeTimeFormat)
const end = dateFormat(now.setHours(now.getHours() + 12), entsoeTimeFormat)

const token = process.env.ENTSOE_TOKEN;
const url =
    'https://transparency.entsoe.eu/api?documentType=A44&in_Domain=10YNO-1--------2&out_Domain=10YNO-1--------2&periodStart=' +
    start +
    '&periodEnd=' +
    end +
    '&securityToken=' +
    token

const Prices = () => {
    useEffect(() => {
        fetch(url) // { mode: "no-cors" })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch((error) => {
                console.log(error);
            })

    }, [])

    return <p>Hei, {url}</p>
}

export default Prices
