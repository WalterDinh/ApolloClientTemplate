import { ENV } from '~config/env';

interface IConstructor {
    environment: ENV;
    endPoint: string;
    universalLink: string;
}

export default class Config {
    environment: ENV;
    endPoint: string;
    universalLink: string;

    constructor(data: IConstructor) {
        const { environment, endPoint, universalLink } = data;
        this.environment = environment;
        this.endPoint = endPoint;
        this.universalLink = universalLink;
    }
}
