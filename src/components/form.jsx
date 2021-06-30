import React, {Component} from 'react';
import './form.css'
import ISO6391 from 'iso-639-1';
import {Button} from "antd";
import {loadSearchGiphy} from "../store/searchGiphy";
import {connect} from "react-redux";

class AppForm extends Component {

  state = {
    error: {
      general: 'Some fields are required',
      search: '',
      offset: '',
      limit: '',
    },
    data: {
      query: '',
      limit: 0,
      offset: 0,
      rating: '',
      lang: '',
      random_id: ''

    },
    loading: false
  }

  validateRequiredInput = (e) => {
    let updatedError;
    let updatedData;
    const {error, data} = this.state
    if (e.target.value === '') {
      updatedError = {...error, search: 'Search term is required field', general: ''}
      updatedData = {...data, query: e.target.value}
    } else {
      updatedError = {...error, search: '', general: ''}
      updatedData = {...data, query: e.target.value}
    }
    this.setState({data: updatedData, error: updatedError})
  }

  inputRangeValidation = (e, min, max) => {
    const {name, value} = e.target
    const {error, data} = this.state
    if ((min <= parseInt(value) && parseInt(value) <= max) || value === '') {
      const updatedError = {...error, [name]: ''}
      const updatedData = {...data, [name]: value}
      this.setState({data: updatedData, error: updatedError})
      return
    }
    const updatedError = {...error, [name]: `The field needs to be between ${min} and ${max} !`}
    this.setState({error: updatedError})
  }

  formValidationError = () => {
    return !Object.keys(this.state.error).filter(key => this.state.error[key] !== '').length <= 0
  }

  setStateValueForInput = (e) => {
    const { data } = this.state
    const updatedData = {...data, [e.target.name]: e.target.value}
    this.setState({data: updatedData})
  }

  render() {
    const countryNames = ISO6391.getAllNames()
    return (
      <div className='form-wrapper'>
        <div className='form-element'>
          <label className='form-input-label'>Search:</label>
          <input onChange={this.validateRequiredInput} onBlur={this.validateRequiredInput} className='form-input-field'
                 type='text' placeholder="Enter search term"/>
          {this.state.error && <span className='error'>{this.state.error.search}</span>}
        </div>
        <div className='form-element'>
          <label className='form-input-label'>Limit:</label>
          <input name='limit' className='form-input-field' type='number' placeholder="Enter limit value"
                 onChange={(e) => this.inputRangeValidation(e, 0, 50)}/>
          {this.state.error && <span className='error'>{this.state.error.limit}</span>}
        </div>
        <div className='form-element'>
          <label className='form-input-label'>Offset:</label>
          <input name='offset' onChange={(e) => this.inputRangeValidation(e, 0, 4999)} className='form-input-field'
                 type='number' placeholder="Enter offset value"/>
          {this.state.error && <span className='error'>{this.state.error.offset}</span>}
        </div>
        <div className='form-element'>
          <label className='form-input-label'>Rating:</label>
          <select className='form-input-field' name="rating" id="cars" onChange={this.setStateValueForInput}>
            <option value="">Choose</option>
            <option value="g">g</option>
            <option value="pg">pg</option>
            <option value="pg-13">pg-13</option>
            <option value="r">r</option>
          </select>
        </div>
        <div className='form-element'>
          <label className='form-input-label'>Language:</label>
          <select className='form-input-field' name="lang" id="cars" onChange={this.setStateValueForInput}>
            <option value="none">Choose</option>
            {countryNames.map((name, i) => (
              <option key={i} value={ISO6391.getCode(name)}>{name}</option>
            ))}
          </select>
        </div>
        <div className='form-element'>
          <label className='form-input-label'>Random User ID:</label>
          <input className='form-input-field' name='random_id' type='text' placeholder="Random user id" onChange={this.setStateValueForInput}/>
        </div>
        <div className='form-element-button'>
          <Button type="primary" size="small" disabled={this.formValidationError()} onClick={() => {this.props.loadSearchGiphy(this.state.data); console.log(this.state.data)}}
                  loading={this.props.loadingSearchGiphy}>Submit</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchGiphy: state.entities.searchGiphy,
  loadingSearchGiphy: state.entities.searchGiphy.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadSearchGiphy: (data) => dispatch(loadSearchGiphy(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppForm);