export const statusCodes = {
  BAD_REQUEST: 400,
  UN_AUTH: 401,
  FORBIDDEN: 403,
  SERVER_ERROR: 500,
};

interface HttpStatusMessages {
  [key: number]: string;
}

export const statusCodesMessages: HttpStatusMessages = {
  400: 'Bad Request',
  401: 'Un Authorized',
  403: 'Forbidden',
  500: 'Internal Server Error',
};
