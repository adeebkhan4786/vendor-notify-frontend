import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../redux/actions';
import { Button, MenuItem, Select, TextField, Grid, Container } from '@mui/material';


import {campaignList, serviceList} from "../constant.js/data.js"

const CampaignForm = () => {
  const [campaignName, setCampaignName] = useState('');
  const [email_service, setService] = useState('');
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('campaign_name', campaignName);
    formData.append('email_service', email_service);
    formData.append('file', file);

    dispatch(submitForm(formData));
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <Select
              fullWidth
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="" disabled>
                Select Campaign Name
              </MenuItem>
               {
                campaignList && campaignList.map(item => (
                  <MenuItem key={item.id} value={item.campaign_name}>{item.campaign_name}</MenuItem>
                ))
               } 
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Select
              fullWidth
              value={email_service}
              onChange={(e) => setService(e.target.value)}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="" disabled>
                Select Service
              </MenuItem>
              {
                serviceList && serviceList.map(item => (
                  <MenuItem key={item.id} value={item.email_service}>{item.email_service}</MenuItem>
                ))
               } 
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="file"
              variant="outlined"
              onChange={(e) => setFile(e.target.files[0])}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CampaignForm;
