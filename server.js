
const morgan  = require('morgan');

const helmet  = require('helmet');
const fs = require('fs');
const path = require('path');
const routes = require('./server/routes/chart');
const isAuthenticated = require('./server/utils/isAuthenticated');
const express = require('express');
const cors = require('cors');


const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../access.log'),
  { flags: 'a' }
);


app.use(helmet());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/',
// isAuthenticated, 
routes);

app.use((req, res) => {
  console.log('routes not catched');
  res.status(404).send('404: Page not found');
});



/*app.get('/api/customers', cors(), (req, res) => {
  var DataPoints = [
    {id: 1, Name: 'Ruby', Age : '31' , Gender : 'F'},
    {id: 2, Name: 'Randy', Age : '32' , Gender : 'M'},
    {id: 3, Name: 'Apple', Age : '18' , Gender : 'F'},
    {id: 4, Name: 'Mango', Age : '14' , Gender : 'F'},
    {id: 5, Name: 'Ferry', Age : '37' , Gender : 'M'},
    {id: 6, Name: 'Johnson', Age : '55' , Gender : 'M'},
    {id: 6, Name: 'Larry', Age : '45' , Gender : 'M'},
    {id: 6, Name: 'Ryne', Age : '12' , Gender : 'F'},
    {id: 6, Name: 'Christopher', Age : '24' , Gender : 'M'},
  ];

  var PieData =[
    { title: 'Female', value: 0, color: '#E38627' },
    { title: 'Male', value: 0, color: '#C13C37' }
  ];
  
  var FCount = 0;
  var MCount = 0;
  for (let index = 0; index < DataPoints.length; index++) {
    if (DataPoints[index].Gender === 'F') {
      PieData[0].value = PieData[0].value + 1;
        }   
  } 
   PieData[1].value  = DataPoints.length - PieData[0].value;



  res.json(PieData);
});
*/

const port = 5000;

app.listen(port, () => 'Server running on port ${port}');
