module.exports = {
  purge: [],
  theme: {
    colors: {
      red: '#f14358',
      blue: '#99b7c2',
      background: '#191a21',
      comment: '#767b8b',
      selection: '#373a42',
      foreground: '#efe6dd',
      'foreground-dark-1': '#b3b3b3',
    },
    extend: {
      spacing: {
        '45': '11.25rem',
        '72': '18rem',
        '60': '15rem',
        '80': '20rem',
        '84': '21rem',
        '90': '22.5rem',
        '96': '24rem',
        '100': '25rem',
        '120': '30rem',
        '160': '40rem',
        '180': '45rem',
        "200": '50rem',
        "240": '60rem',
        "320": '80rem'
      },
      borderRadius: {
        'large': '20px',
      },
      borderWidth: {
        '40': '40rem'
      },
    },
  },
  variants: {
    display: [ 'responsive', 'last']
  },
  plugins: [],
}