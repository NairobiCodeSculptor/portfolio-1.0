import express from 'express'
import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';

const router = express.Router();



router.post('/sendMessage', (req, res) => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx5bCvxgSBNbk6Jad_Yusgv4kPvFboi5OmemMesok-yO9SWFoX3_o3fRlHfhk7qBeeg/exec';
  
  const form = new FormData();
  for (const key in req.body) {
    form.append(key, req.body[key]);
  }

  fetch(scriptURL, { method: 'POST', body: form })
    .then(response => {
      console.log('Success!', response.status);
      res.status(200).send('Thank you, your response has been received.');
    })
    .catch(error => {
      console.error('Error!', error.message);
      res.status(500).send('An error occurred.');
    });
});


export default router;
