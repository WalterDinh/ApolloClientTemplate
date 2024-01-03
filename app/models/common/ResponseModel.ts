export default class ResponseModel<T> {
    code: string;
    statusCode: number;
    isError: boolean;
    message?: string;
    rawError?: any;
    data?: T;
    totalItem?: number;

    constructor(
        code = '',
        isError = false,
        message?: string,
        data?: T,
        statusCode = 0,
        totalItem?: number,
    ) {
        this.code = code;
        this.isError = isError;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
        this.totalItem = totalItem;
    }

    static createSuccess(data: any, totalItem?: number): ResponseModel<any> {
        const response = new ResponseModel();
        response.data = data;
        response.isError = false;
        response.statusCode = 200;
        response.totalItem = totalItem;
        return response;
    }

    static createError(
        statusCode: number,
        message: string,
        code = '',
        rawError?: any,
    ): ResponseModel<any> {
        const response = new ResponseModel();
        response.isError = true;
        response.code = code;
        response.message = message;
        response.rawError = rawError;
        response.statusCode = statusCode;
        return response;
    }

    toString = () => {
        return this.message;
    };
}
