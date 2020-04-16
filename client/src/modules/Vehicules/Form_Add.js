import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Caracteristiques Techniques', 'Caracteristiques Physiques', 'Autres'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={12} lg={4}>
          <TextField
           id="outlined-full-width"
           label="Marque"
           style={{ margin: 8 }}
           placeholder="Marque"
           helperText=""
           fullWidth
           margin="normal"
           variant="outlined"
           InputLabelProps={{
             shrink: true,
           }}
         />
         </Grid>
         <Grid item xs={12} sm={12} lg={4}>
           <TextField
            id="outlined-full-width"
            label="Model"
            style={{ margin: 8 }}
            placeholder="Model"
            helperText=""
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <TextField
           id="outlined-full-width"
           label="Categorie"
           style={{ margin: 8 }}
           placeholder="Categorie"
           helperText=""
           fullWidth
           margin="normal"
           variant="outlined"
           InputLabelProps={{
             shrink: true,
           }}
         />
       </Grid>
       <Grid item xs={12} sm={12} lg={4}>
         <TextField
          id="outlined-full-width"
          label="Controle Technique"
          style={{ margin: 8 }}
          placeholder="Controle Technique"
          helperText=""
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={4}>
        <TextField
         id="outlined-full-width"
         label="Assurance"
         style={{ margin: 8 }}
         placeholder="Assurance"
         helperText=""
         fullWidth
         margin="normal"
         variant="outlined"
         InputLabelProps={{
           shrink: true,
         }}
       />
     </Grid>
     <Grid item xs={12} sm={12} lg={4}>
       <TextField
        id="outlined-full-width"
        label="Vidange"
        style={{ margin: 8 }}
        placeholder="Vidange"
        helperText=""
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
      </Grid>;
    case 1:
      return <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={12} lg={6}>
          <TextField
           id="outlined-full-width"
           label="Etat"
           style={{ margin: 8 }}
           placeholder="Etat"
           helperText=""
           fullWidth
           margin="normal"
           variant="outlined"
           InputLabelProps={{
             shrink: true,
           }}
         />
         </Grid>
         <Grid item xs={12} sm={12} lg={6}>
           <TextField
            id="outlined-full-width"
            label="Couleur"
            style={{ margin: 8 }}
            placeholder="Couleur"
            helperText=""
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

      </Grid>;
    case 2:
      return <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
           id="outlined-full-width"
           label="Matricule"
           style={{ margin: 8 }}
           placeholder="Matricule"
           helperText=""
           fullWidth
           margin="normal"
           variant="outlined"
           InputLabelProps={{
             shrink: true,
           }}
         />
         </Grid>

      </Grid>;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} lg={5}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Ajouter' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Ajouter d'Autre
          </Button>
        </Paper>
      )}
    </div>
  );
}
