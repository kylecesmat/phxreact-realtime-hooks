import createTheme from "../../createTheme"

export const colors = {
  primary: "#F8F8F8",
  secondary: "#1F2022",
  tertiary: "#657582",
  quaternary: "#B4C2CD"
}

const theme = createTheme(
  colors,
  {
    primary: "Fira Code",
    secondary: "Inconsolata"
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: "4.5rem",
          fontWeight: 700,
          margin: "0 0 2rem"
        },
        h2: {
          fontSize: "3rem",
          fontWeight: 600,
          margin: "0 0 2rem"
        },
        h3: {
          fontSize: "2.5rem",
          fontWeight: 500,
          margin: "0 0 2rem"
        },
        h4: {
          fontSize: "2rem",
          fontWeight: 500
        },
        h5: {
          fontSize: "1.4rem",
          fontWeight: 500
        },
        h6: {
          fontSize: "1rem",
          fontWeight: 500
        }
      },
      codePane: {
        fontSize: "2rem"
      }
    }
  }
)

export default theme
