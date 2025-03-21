export type LoginApiArgs = {
  username: string;
  password: string;
};

export type LoginApiResponse = {
  error_code: number;
  data: {
    token: string;
  };
};
