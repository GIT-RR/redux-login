import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { signin, setUser } from '../../redux/actions';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));


const LoginForm = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    }

    const handleSubmit = () => {
        dispatch(signin());
        dispatch(setUser(values.email));
    }

    return (
        <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                value={values.password}
                onChange={handleChange('password')}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
            />
            <Button className={classes.submit} type="submit">Sign In !</Button>
        </form>
    );
}

export default LoginForm;