const db = require('../models');
const Datapoints = require('../models/Chart/Datapoints');
const Chart = db.rest.models.Datapoints;

exports.getBar = async (req, res) => {

  var DataPoints;
  var Data;

   DataPoints = [
    {id: 1, name: 'Ruby', age : '31' , gender : 'F'},
    {id: 2, name: 'Randy', age : '32' , gender : 'M'},
    {id: 3, name: 'Apple', age : '18' , gender : 'F'},
    {id: 4, name: 'Mango', age : '14' , gender : 'F'},
    {id: 5, name: 'Ferry', age : '37' , gender : 'M'},
    {id: 6, name: 'Johnson', age : '55' , gender : 'M'},
    {id: 7, name: 'Larry', age : '45' , gender : 'M'},
    {id: 8, name: 'Ryne', age : '12' , gender : 'F'},
    {id: 9, name: 'Christopher', age : '24' , gender : 'M'},
  ];    
  for (let index = 0; index < DataPoints.length; index++) {
    const { id } = DataPoints[index];
    var Chart1 = await Chart.findOne({
      where: {
        id,
      },
    });
  
  if (!Chart1) {
  try {
    let newData = await Chart.create(DataPoints[index]);
   
  } catch (err) {
    console.log("create failed " + err.message);
    return res.status(500).send({
      message: err.message,
    });
  }
}
}

try {
  DataPoints= await Chart.findAll({
    
    });
  } catch (error) {
   
    
  }
 

  
   
  var BarData =[
    { text: 'Young Adult', value: 0},
    { text: 'Adult', value: 0 },
    { text: 'seniors', value: 0 },
  ];
  
  var YoungAdult = 0;
  var Adult = 0;
  var seniors = 0;
  for (let index = 0; index < DataPoints.length; index++) {
  
    if (DataPoints[index].age < 35 ) 
        BarData[0].value = BarData[0].value + 1;
    else if(DataPoints[index].age > 35 && DataPoints[index].age < 50 ) 
    BarData[1].value = BarData[1].value + 1;
    else if(DataPoints[index].age > 51 ) 
    BarData[2].value = BarData[2].value + 1;
  } 
   

  console.log(BarData);
  return res.json(BarData);

  
  
};

exports.getPie = async (req, res) => {  
  var DataPoints;
  var Data;

   DataPoints = [
    {id: 1, name: 'Ruby', age : '31' , gender : 'F'},
    {id: 2, name: 'Randy', age : '32' , gender : 'M'},
    {id: 3, name: 'Apple', age : '18' , gender : 'F'},
    {id: 4, name: 'Mango', age : '14' , gender : 'F'},
    {id: 5, name: 'Ferry', age : '37' , gender : 'M'},
    {id: 6, name: 'Johnson', age : '55' , gender : 'M'},
    {id: 7, name: 'Larry', age : '45' , gender : 'M'},
    {id: 8, name: 'Ryne', age : '12' , gender : 'F'},
    {id: 9, name: 'Christopher', age : '24' , gender : 'M'},
  ];    
  for (let index = 0; index < DataPoints.length; index++) {
    const { id } = DataPoints[index];
    var Chart1 = await Chart.findOne({
      where: {
        id,
      },
    });
  
  if (!Chart1) {
  try {
    //await can often save you a bunch of lines of code making your code simpler to read, test and maintain. That's why it was invented.
    let newData = await Chart.create(DataPoints[index]);
   
  } catch (err) {
    console.log("create failed " + err.message);
    return res.status(500).send({
      message: err.message,
    });
  }
}
}

try {
  DataPoints= await Chart.findAll({
    
    });
  } catch (error) {
   
    
  }
 

  
   
  var PieData =[
    { title: 'Female', value: 0, color: '#E38627' },
    { title: 'Male', value: 0, color: '#C13C37' }
  ];
  
  var FCount = 0;
  var MCount = 0;
  for (let index = 0; index < DataPoints.length; index++) {
  
    if (DataPoints[index].gender === 'F') {
      PieData[0].value = PieData[0].value + 1;
        }   
  } 
   PieData[1].value  = DataPoints.length - PieData[0].value;


  return res.json(PieData);

  
};

exports.addToChart = async (req, res) => {
  const { id, Name, age,gender } = req.body;
  var Data1 =
  {id: id, 
  name: Name, 
  age : age ,
   gender : gender};

   console.log(Data1);  
  try {

    let newData = await Chart.create( Data1);
    return res.send(newData);
    console.log(newData);
  } catch (err) {
    console.log("create failed : " + err.message);
    return res.status(500).send({
      message: err.message,
    });
  }

  

 

 


};

exports.getChart = async (req, res) => {
  var DataPoints;
  var Data;

   DataPoints = [
    {id: 1, name: 'Ruby', age : '31' , gender : 'F'},
    {id: 2, name: 'Randy', age : '32' , gender : 'M'},
    {id: 3, name: 'Apple', age : '18' , gender : 'F'},
    {id: 4, name: 'Mango', age : '14' , gender : 'F'},
    {id: 5, name: 'Ferry', age : '37' , gender : 'M'},
    {id: 6, name: 'Johnson', age : '55' , gender : 'M'},
    {id: 7, name: 'Larry', age : '45' , gender : 'M'},
    {id: 8, name: 'Ryne', age : '12' , gender : 'F'},
    {id: 9, name: 'Christopher', age : '24' , gender : 'M'},
  ];    

try {
  DataPoints= await Chart.findAll({
    
    });
  } catch (error) {   
  }
 
  return res.json(DataPoints);






};

