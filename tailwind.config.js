module.exports = {
  theme: {
    
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    
    fontFamily: {
      title: [
        'Montserrat',
        'sans-serif',
      ],
      body: [
        'IBM Plex Sans',
        'sans-serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ]
    },

    colors: {
      transparent: 'transparent',
      black: {
        default: '#333',
        10: 'rgba(51,51,51,0.1)',
        20: 'rgba(51,51,51,0.2)',
        50: 'rgba(51,51,51,0.5)',
        80: 'rgba(51,51,51,0.8)',
        90: 'rgba(51,51,51,0.9)',
      },
      white: {
        default: '#fff',
        10: 'rgba(255,255,255,0.1)',
        20: 'rgba(255,255,255,0.2)',
      },
      green: '#26de81',

      umbraco: '#ff6e00',
      github: '#24292e',
      twitter: '#1da1f2',
      linkedin: '#0077b5',
    },

    extend: {
      fontSize: {
        '8xl': '4.5rem',    // 72px
        '9xl': '5.635rem',  // 90px
        '12xl': '7.5rem',   // 120px
        '16xl': '9rem',     // 144px
      },
      lineHeight: {
        overlap: 0.9
      },
      height: {
        '1/2-screen': '50vh',
        '1/3-screen': '33.33333vh',
        '2/3-screen': '66.66667vh',
        '1/4-screen': '25vh',
        '3/4-screen': '75vh',
        '1/5-screen': '20vh',
        '2/5-screen': '40vh',
        '3/5-screen': '60vh',
        '4/5-screen': '80vh',
        '1/6-screen': '16.66667vh',
        '5/6-screen': '83.33333vh',
        'screen': '100vh'
      }
    }

  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus'],
    fontWeight: ['responsive', 'hover', 'focus'],
    shadow: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus'],
    textStyle: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('./src/css/plugins/ratio')({
      ratios: {
        'square': 1,
        '32/27': 32/27,
        '24/9': 24/9,
        '16/9': 16/9,
        '9/16': 9/16,
        '8/9': 8/9,
        '6/3': 6/3,
        '4/3': 4/3,
        '2/3': 2/3
      },
      variants: ['responsive'],
    })
  ]
}