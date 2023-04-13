import { withUrqlClient, initUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import ClientPage from '@/components/ClientPage';
import ServerPage from '@/components/ServerPage';

export default function Sample(){
    return(
        <div>
             <p></p> serversideComponent
            <ClientPage/>
        </div>
    )

}