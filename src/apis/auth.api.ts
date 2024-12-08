import http from 'src/utils/http';
import { AuthResponse } from '../types/auth.type.ts'

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/register', body)

export const login = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/login', body)