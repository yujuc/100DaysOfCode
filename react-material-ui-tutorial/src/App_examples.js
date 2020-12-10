import React from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/Button'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const useStyle = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6BBB, #FE8E53)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 5,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
       fontSize: 36,
    }
  },
  // palette: {
  //   primary: {
  //     main: green[400]
  //   },
  //   secondary: {
  //     main: orange[400]
  //   }
  // }
})

function ButtonStyled() {
  const classes = useStyle();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox 
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
        label='Testing Checkbox'
      />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">

            <AppBar>
                <ToolBar>
                  <IconButton>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6">
                    MUI Themeing
                  </Typography>
                </ToolBar>
            </AppBar>

            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>

            <Typography variant="subtitile1">
              Learn how yo use Material UI
            </Typography>

            <ButtonStyled />

            {/* <TextField 
              variant="filled"
              color="secondary"
              type="email"
              label="The Email"
              placeholder="test@test.com"
            /> */}

            <Grid container spacing={2} justify='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>
            </Grid>

            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>
                Save
              </Button>
              <Button startIcon={<DeleteIcon />}>
                Discard
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
