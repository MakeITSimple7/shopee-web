import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Please enter a valid email address'
    },
    maxLength: {
      value: 160,
      message: 'Max length of characters is 160'
    },
    minLength: {
      value: 5,
      message: 'Min length of characters is 5'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Confirm password is required'
    },
    // pattern: {
    //   value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    //   message: 'Please enter a valid password'
    // },
    maxLength: {
      value: 160,
      message: 'Max length of characters is from 6 to 160'
    },
    minLength: {
      value: 6,
      message: 'Max length of characters is from 6 to 160'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Re-enter password is required'
    },
    // pattern: {
    //   value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    //   message: 'Please enter a valid password'
    // },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Not matching with password'
        : undefined
  }
})

export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Email is invalid')
    .min(5, 'Min length of characters is 5')
    .max(160, 'Max length of characters is from 6 to 160'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Min length of characters is 5')
    .max(160, 'Max length of characters is from 6 to 160'),
  confirm_password: yup
    .string()
    .required('Re-enter password is required')
    .oneOf([yup.ref('password')], 'Not matching with password')
})

export type Schema = yup.InferType<typeof schema>
