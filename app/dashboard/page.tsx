
import { getSession } from '@/lib';
import { JwtPayload } from 'jsonwebtoken';
import type { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
      const session: JwtPayload | undefined = await getSession()
    return (
            <p className='justify-self-stretch'>{session?.role}</p>
      )
}
export default page;