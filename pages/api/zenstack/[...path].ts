import { NextApiRequest, NextApiResponse } from 'next';
import {
    type RequestHandlerOptions,
    requestHandler,
} from '@zenstackhq/runtime/server';
import service from '@zenstackhq/runtime/server';

const options: RequestHandlerOptions = {
    async getServerUser(req: NextApiRequest, res: NextApiResponse) {
        return undefined;
    },
};
export default requestHandler(service, options);
