// import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  // Paper,
  Grid,
  NoSsr,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return {
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }
})

const SiteLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div style={{ display: 'flex' }}>
      <NoSsr>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar disableGutters>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h5"
              component="h1"
              className={classes.title}
            >
              Разработка сайта material-ui
            </Typography>

            <Button
              color="inherit"
              variant="outlined"
              className={classes.menuButton}
            >
              Button
            </Button>

            <Button color="secondary" variant="contained">
              Button
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}

        {/* <div
          style={{
            backgroundImage: `url(https://source.unsplash.com/user/erondu/1600x550)`,
          }}
        >
          <Container
            fixed
            style={{ paddingTop: 2 * 8, paddingBottom: 2 * 8 }}
          >
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={6}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Some text h1
                </Typography>

                <Typography component="h5" color="inherit" paragraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni impedit, et a sed in quod officiis. Fugiat est aut
                  dolorum, eos, tempore fuga commodi expedita quidem,
                  aspernatur magni ipsa voluptate?
                </Typography>
              </Grid>

              <Grid item md={6}>
                <Typography component="h1" color="inherit" gutterBottom>
                  Some text h1
                </Typography>

                <Typography component="h5" color="inherit" paragraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni impedit, et a sed in quod officiis. Fugiat est aut
                  dolorum, eos, tempore fuga commodi expedita quidem,
                  aspernatur magni ipsa voluptate?
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div> */}
      </main>
      </NoSsr>
    </div>
  )
}

export default SiteLayout
