import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans], // For headings
        body: ['Poppins', ...defaultTheme.fontFamily.sans],    // For body text
        content: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'body': ['20px', {
        }],
        'body-2': ['18px', {
        }],
        'body-3': ['16px', {
        }],
        'caption': ['10px', {
        },],
        'content': ['14px', {

        },],
        'content-2': ['12px', {

        },],
        'heading-1': ['48px', {

        },],
        'heading-2': ['40px', {
        },],
        'heading-3': ['32px', {
        },],
        'heading-4': ['28px', {
        },],
        'heading-5': ['24px', {
        },],
        'paragraph-4': ['10px', {
        },],
      },
      colors: {
        'active-menu': '#C0392B',
        'base-white': '#FFFFFF',
        'bg-foreground': '#F1F1F1',
        'info100': '#E5EFFF',
        'primary': '#004aad',
        'primary50': '#F6E1E3',
        'primary100': '#EECCCE',
        'primary200': '#DEA1A4',
        'primary300': '#CD767A',
        'primary400': '#BD4B50',
        'primary500': '#AD2026',
        'primary600': '#8A1A1E',
        'primary700': '#681317',
        'primary800': '#450D0F',
        'primary900': '#230608',
        'error50': '#FBEBEA',
        'error100': '#F8D7D5',
        'error200': '#F1AEAA',
        'error300': '#E98680',
        'error400': '#E25D55',
        'error500': '#DB352B',
        'error600': '#AF2A22',
        'error700': '#83201A',
        'error800': '#581511',
        'error800': '#2C0B09',
        'natural200': '#DBDBDB',
        'natural100': '#EDEDED',
        'natural300': '#CACACA',
        'natural600': '#888888',
        'success50': '#C7F7E1',
        'success500': '#00B45F',
        'textPrimary': '#030303',
        'textScondary': '#686868',
        'textTertiary': '#B3B3B3',
        'warning100': '#FDEFCF',
      }
    },
  },
  plugins: [forms],
}

