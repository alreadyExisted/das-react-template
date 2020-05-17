export interface ApiErrorOptions {
  statusCode: number
  message: string
  error?: string
}

export class ApiError extends Error {
  constructor(public name: string, public opts: ApiErrorOptions) {
    super(name)
  }
}

export class AuthError extends ApiError {
  constructor(opts: ApiErrorOptions) {
    super('AuthError', opts)
  }
}

export class BadRequestError extends ApiError {
  constructor(opts: ApiErrorOptions) {
    super('BadRequestError', opts)
  }
}

export class ServerError extends ApiError {
  constructor(opts: ApiErrorOptions) {
    super('ServerError', opts)
  }
}
