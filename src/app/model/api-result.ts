export class ApiResultBase {
    status: number;
    message: string;
}

export class ApiResult<T> extends ApiResultBase {
    metaData: T
}
