import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';

export default function RadioButtonsGroup() {

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>

            <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
            />
            <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
            />

            <Radio
                {...controlProps('e')}
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
            />
        </FormControl>
    );
}
