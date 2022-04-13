import { useSelector } from 'react-redux';

export default function IpInfo() {
    const ip = useSelector(state => state.ipInfo.info)
    return (
        <div>
            {
                JSON.stringify(ip)
            }
        </div>
    )
}