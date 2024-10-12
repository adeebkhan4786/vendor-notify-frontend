import React from 'react';
import CampaignForm from './components/CampaignForm';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
      <h1>Send Email Campaign</h1>
      <CampaignForm />
    </div>
  );
}

export default App;
