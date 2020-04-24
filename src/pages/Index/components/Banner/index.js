import React, { useEffect, useState } from 'react';
import { BannerImg } from './styles';

import api from '../../../../services/api';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {

    const [ loading, setLoading ] = useState(false);
    const [ confirmed, setConfirmed ] = useState(0);
    const [ deaths, setDealths ] = useState(0);

    useEffect(() => {
        // alert('kkkkk')
        async function load() {
            let { data }  = await api.get('/cases/br');
            data = data[0];

            setConfirmed(data.confirmed);
            setDealths(data.deaths);
            setLoading(false);
            // alert(JSON.stringify(data[0]))
        }

        setLoading(true);
        load();
        

    }, []);
    return (
        <BannerImg>
            <div className="text" id="text">
                <h1>
                    Russas Contra O Coronavírus
                </h1>
            </div>
            <p className="brasil">
                Acompanhe os números no Brasil
            </p>
            { loading && <div className="loader-more" style={{ marginTop: 5}}></div>}
            { !loading && 
                <div className="cases">
                    <div className="confirmed">
                        <FontAwesomeIcon icon={faUserCheck} /> 
                        <div className="text"> 
                            <h1>{ confirmed }</h1>
                            <p>confirmados</p>
                        </div>
                    </div>
                    <div className="dealths">
                        <FontAwesomeIcon icon={faHeartbeat} /> 
                        <div className="text">
                            <h1>{ deaths }</h1>
                            <p>mortes</p>
                        </div>
                    </div>
                </div>
            }
        </BannerImg>
    );
}
