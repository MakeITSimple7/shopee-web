import { ResponseApi } from './utils.type.ts'
import { User } from './user.type.ts'

export type AuthResponse = ResponseApi<{
  access_token: string;
  expires: string;
  user: User
}>