import * as React from 'react';
import "./Map.css"
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 26px 5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 10,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));


 function ControlPanel(props) {
   const setYear=props.setYear;
   const year=props.year;
   const setMonth=props.setMonth;
   const month=props.month;
   
    const handleChangeYear = (event) => {
      setYear(event.target.value);
    };
    const handleChangeMonth = (event) => {
      setMonth(event.target.value);
    };

  return (
    <div className="control-panel">
      <h3>Electricity consumption at City facilities </h3>
      <p>
        Map showing Primary Electricity Usage of City's facilities at different year and month. Click on
        a marker to learn more.
      </p>
      <p>
        Data source:{" "}
        <a href="https://data.calgary.ca/Environment/Corporate-Energy-Consumption/crbp-innf">
          City of Calgary’s Open Data Portal
        </a>
      </p>

        <div>
        <FormControl className='year' sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-select-native">Year</InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={year}
              onChange={handleChangeYear}
              input={<BootstrapInput />}
            >
              <option value={2014}>2014</option>
              <option value={2015}>2015</option>
              <option value={2016}>2016</option>
              <option value={2017}>2017</option>
              <option value={2018}>2018</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>
              <option value={2021}>2021</option>
              <option value={2022}>2022</option>
            </NativeSelect>
          </FormControl>

          <FormControl className='month' sx={{ m: 1 }} variant="standard">
            <InputLabel id="demo-customized-select-label">Month</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={month}
              onChange={handleChangeMonth}
              input={<BootstrapInput />}
            >
              <MenuItem value={"Jan"}>Jan</MenuItem>
              <MenuItem value={"Feb"}>Feb</MenuItem>
              <MenuItem value={"Mar"}>Mar</MenuItem>
              <MenuItem value={"Apr"}>Apr</MenuItem>
              <MenuItem value={"May"}>May</MenuItem>
              <MenuItem value={"Jun"}>Jun</MenuItem>
              <MenuItem value={"Jul"}>Jul</MenuItem>
              <MenuItem value={"Aug"}>Aug</MenuItem>
              <MenuItem value={"Sep"}>Sep</MenuItem>
              <MenuItem value={"Oct"}>Oct</MenuItem>
              <MenuItem value={"Nov"}>Nov</MenuItem>
              <MenuItem value={"Dec"}>Dec</MenuItem>
            </Select>
          </FormControl>

          
        </div>
    </div>
  );
}

// export default React.memo(ControlPanel);
export default ControlPanel;
