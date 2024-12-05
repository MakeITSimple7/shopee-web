import { ResponseApi } from './utils.type.ts'

export type AuthResponse = ResponseApi<{
  access_token: string;
  expires: string;
  user: User
}>