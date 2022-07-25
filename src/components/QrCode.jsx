import { useEffect, useState } from 'react';
import { Button,Box, CardContent, } from '@mui/material';
import Slider from '@mui/material/Slider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PublicIcon from '@mui/icons-material/Public';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import {Card} from '@mui/material';

import './App.css';
  
export function QrCode() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  
  
  
  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);
  
  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }
  
  return (
    
      
    
    <div className="App">
      <Accordion className='acc'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ><PublicIcon  />
          <Typography className='type'> ENTER CONTENT</Typography>
        </AccordionSummary>
      
        <AccordionDetails>
          <Typography>
            <label>Your Url</label>
            <input type="text" />
          </Typography>
        </AccordionDetails>
        
          </Accordion><br /> 
          <Accordion className='acc'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >< BrushIcon/>
          <Typography className='type'>SET COLORS</Typography>
        </AccordionSummary>
        <h5 className='color'>foreground color</h5>
        <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Forground Color</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Single color" />
        <FormControlLabel value="male" control={<Radio />} label="Color Gradient" />
        {/* <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
    <Checkbox  />
    <label>Custom Eye Color
</label>
        
      
          </Accordion><br /> 

          <Accordion className='acc'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ><ImageIcon/>
          <Typography className='type' >ADD LOGO IMAGE</Typography>
        </AccordionSummary>
      
          </Accordion><br /> 

          <Accordion className='acc'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        > <QrCodeIcon/>
          <Typography className='type'>CUSTOMIZE DESIGN</Typography>
        </AccordionSummary>
      
          </Accordion><br /> 
        





      <div className="input-box">
      
        <div className="Slider">
          
          <h5>Low</h5>
          
     <Box width={360}>

      <Slider defaultValue={800}  min={200} max={600} aria-label="Default" valueLabelDisplay="auto" value={size} onChange={(e) => 
           {setSize(e.target.value)}} />
    </Box>
    <h5>High</h5>
        </div>
      </div>
      <div className="output-box">
        <Card mt={20}>
          <CardContent mt={20}>

          
        <img src={qrCode} alt="" className='im' />
       
          </CardContent>
        </Card>    
        
  </div>
 
               <a href={qrCode} download="QRCode" className='anc'>
        
                 <Button variant='contained' color="success" className='btn' >Create QR Code </Button>
          <Button variant='contained' className='btn2'  >Download PNG </Button>
          </a>  
    </div>


  );
}
  
export default QrCode;