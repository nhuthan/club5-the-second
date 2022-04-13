import { useState } from 'react'
import { useDispatch } from 'react-redux';
import IpInfo from './ipInfo'

import { fetchIpInfo } from '../../actions/home';

export default function Home() {
    const [ip, setIp] = useState('118.70.52.28');
    const dispatch = useDispatch()

    const getInfo = (e) => {
        dispatch(fetchIpInfo(ip))
    }

    return (
        <div>
            <input type="text" onChange={e => setIp(e.target.value)} value={ip} />
            <button onClick={getInfo}>Get Info</button>

            <IpInfo />
        </div>
    )
}