import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import theme from "./theme"
import {
  Input,
  Button,
  Text,
  TextSizes,
  InputTypes,
  Heading,
  HeadingWeights,
  ButtonSizes,
  ButtonThemes
} from './dist'
import { HeadingSizes } from './dist'
import {Container, Grid} from "@material-ui/core"
import './App.css'
import Plus from "./icons/Plus";
import React from 'react'
import {useForm} from "react-hook-form";

const appTheme = createMuiTheme({
  palette: theme.colors,
  typography: theme.typography
});

function App() {
  const form = useForm();
  return (
    <ThemeProvider theme={appTheme}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Heading size={HeadingSizes.h1}>UI-kit</Heading>
          </Grid>
          <Grid item xs={12} md={4}>
            <Input name='username' label='Username' inputRef={form.register} />
            {form.watch('username')}
          </Grid>
          <Grid item xs={12} md={4}>
            <Input name='email' label='Email' error />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input name='password' type={InputTypes.password} label='Password' />
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
