import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import theme from "./theme"
import Input, {inputTypes} from './components/Input'
import {Container, Grid} from "@material-ui/core"
import './App.css'
import Heading, {HeadingSizes, HeadingWeights} from "./components/Heading";
import Text, {TextSizes} from "./components/Text";
import Button, {ButtonSizes, ButtonThemes} from "./components/Button";
import Plus from "./icons/Plus";

console.log(theme)

const appTheme = createMuiTheme({
  palette: theme.colors,
  typography: theme.typography
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Heading size={HeadingSizes.h1}>UI-kit</Heading>
          </Grid>
          <Grid item xs={12} md={4}>
            <Input name='username' label='Username' />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input name='email' type={inputTypes.email} label='Email' error />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input name='password' type={inputTypes.password} label='Password' />
          </Grid>
        </Grid>
        <hr/>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Heading
              size={HeadingSizes.h1}
              weight={HeadingWeights.bold}
            >
              Съешь еще этих булочек
            </Heading>
          </Grid>
          <Grid item xs={12}>
            <Heading
              size={HeadingSizes.h2}
              weight={HeadingWeights.bold}
            >
              Съешь еще этих булочек
            </Heading>
          </Grid>
          <Grid item xs={12}>
            <Heading
              size={HeadingSizes.h3}
              weight={HeadingWeights.bold}
            >
              Съешь еще булочек
            </Heading>
          </Grid>
        </Grid>
        <hr/>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Text size={TextSizes.textLg}>
              Съешь еще этих булочек
            </Text>
          </Grid>
          <Grid item xs={12}>
            <Text size={TextSizes.textMd}>
              Съешь еще этих булочек
            </Text>
          </Grid>
          <Grid item xs={12}>
            <Text size={TextSizes.textSm}>
              Съешь еще этих булочек
            </Text>
          </Grid>
        </Grid>
        <hr/>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={1}
          >
            <Button size={ButtonSizes.sm}>
              Button
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
          >
            <Button>
              Button
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
          >
            <Button size={ButtonSizes.lg}>
              Button
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <Button
              size={ButtonSizes.sm}
              startIcon={<Plus />}
            >
              Button
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <Button
              startIcon={<Plus />}
            >
              Button
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <Button
              size={ButtonSizes.lg}
              startIcon={<Plus />}
              theme={ButtonThemes.redLight}
            >
              Button
            </Button>
          </Grid>
        </Grid>
        <hr/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
