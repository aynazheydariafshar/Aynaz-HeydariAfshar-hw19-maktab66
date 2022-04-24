import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Edit = ({edit}) => {

    const [value, setValue] = React.useState('item');
    const handleChangeitem = (event) => {
        setValue(event.target.value);
    };

    const [valueDescription, setValueDescription] = React.useState('');
    const handleChangeDescription = (event) => {
        setValueDescription(event.target.value);
    };

    const [currency, setCurrency] = React.useState('Web Desig');
    const handleChangeSelect = (event) => {
      setCurrency(event.target.value);
    };

    const titleeb = [
        {
          value: 'Web Desig',
          label: 'Web Design',
        },
        {
          value: 'Front-End',
          label: 'Front-End',
        },
        {
          value: 'Back-End',
          label: 'Back-End',
        },
    ];

    if (edit) {
        return (<div>
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Title"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChangeitem}
                    variant="standard"
                />
            </div>
            <div>
                <TextField
                    sx={{mt:4}}
                    id="standard-select-currency"
                    select
                    label="Skills"
                    value={currency}
                    onChange={handleChangeSelect}
                    helperText="Please select your currency"
                    variant="standard"
                    >
                    {titleeb.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <TextField
                    sx={{mt:4}}
                    id="standard-multiline-flexible"
                    label="Description"
                    multiline
                    maxRows={7}
                    value={valueDescription}
                    onChange={handleChangeDescription}
                    variant="standard"
                />
            </div>
        </div>
        )
    }
    else {
        return (
            <>
                <Typography variant="h3" component="h3">
                    Welcome!
                </Typography>
                <Typography variant="body2" component="h4">
                    Please select an exercise from the list on the left side.
                </Typography>
            </>
            
        )
    }
}

export default Edit;