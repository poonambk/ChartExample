import React, { Component } from 'react';
import Axios from 'axios';
import PieChart from './ClPieChart';
import './Form.css';
import { withAlert } from 'react-alert';
class Form extends Component {
    constructor(props) {
        super(props)



        this.state = {
            id: '',
            Name: '',
            age: '',
            gender: '',
            formSuccess: '',
            formError:''

        }

        
       
    }

    handleNameChange = event => {
        this.setState({
            Name: event.target.value
        })
    }

    handleIdChange = event => {
        this.setState({
            id: event.target.value
        })
    }

    handleAgeChange = event => {
        this.setState({
            age: event.target.value
        })
    }
    
    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        })
    }






    handleSubmit = event => {

       
     
        event.preventDefault();

      

        const sendGetRequest = async () => {
            try {
                const res =  await Axios.post('/chart', this.state);
                console.log(res.data);
              //  alert.show("test");
    
            this.props.action();
            } catch (err) {
                // Handle Error Here
                console.error(err);
                this.setState({formError: false, formSuccess: true});
            }
        };

        sendGetRequest();

  

    }

    render() {
        const { id, Name, age, gender} = this.state;
        
      

     
         
        return (
            <form onSubmit={this.handleSubmit} className='center'
            success={this.state.formSuccess} error={this.state.formError}
             
             >
                <div className='flex-item row' >
                    <label className='flex-item row'>Id   :   </label>
                    <input className='flex-item row'
                        type='Number'
                        onChange={this.handleIdChange}
                        value={id}
                        required='true'
                        

                    />
                </div>


                <div class='flex-item row'>
                    <label className='flex-item row'>Name :</label>
                    <input   className='flex-item row'
                    type="text"
                    onChange={this.handleNameChange}
                        value={Name}

                    />
                </div>
                <div class='flex-item row'>
                    <label  className='flex-item row'>Age:   </label>

                    <input 
                    className='flex-item row'
                    type="text"
                        value={age}
                        onChange={this.handleAgeChange}
                        type='Number'
                        

                    />

                </div>
                <div class='flex-item row'>  
                    <label className='flex-item row' >Gender:  </label>

                
                     <select  onChange={this.handleGenderChange}  value={gender}
                     className='flex-item row' >
                     <option value= "" onSelect={this.handleGenderChange} > </option>
                    <option value= "F" onSelect={this.handleGenderChange} > Female</option>
                    <option value= "M"  onSelect={this.handleGenderChange} > Male</option>

                </select>

               

                </div >
                <div >
                <button 
                
                type="submit" className='flex-item' >Submit</button>
                </div>
               
            </form>
        )
    }
}

export default withAlert()(Form)
