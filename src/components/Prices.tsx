import dateFormat, { masks } from "dateformat";
const now = new Date();

const entsoeTimeFormat = "yyyyMMddHH00";

const start = dateFormat(now, entsoeTimeFormat);
const end = dateFormat(now.setHours(now.getHours() + 12), entsoeTimeFormat);

const token = process.env.ENTSOE_TOKEN;
const Url = "https://transparency.entsoe.eu/api?documentType=A44&in_Domain=10YNO-1--------2&out_Domain=10YNO-1--------2&periodStart="+start+"&periodEnd="+end+"&securityToken="+token

export default Url