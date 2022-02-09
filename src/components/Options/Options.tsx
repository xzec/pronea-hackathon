import React from 'react';
import { IOption, QType } from '../../types';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { grey } from '@mui/material/colors';

interface OptionProps {
  options: IOption[];
  type: QType;
}

const Options: React.FC<OptionProps> = ({ options }) => {
  return (
    <RadioGroup defaultValue={options[0].value}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio sx={{ color: grey[500] }} color="secondary" />}
          label={option.value}
        />
      ))}
    </RadioGroup>
  );
};

export default Options;
