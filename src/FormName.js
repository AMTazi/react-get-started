import React, {Component} from 'react';

class FormName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form : {
        name:'',
        description:''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTextareaChange = this.handleTextareaChange.bind(this)

  }

  handleSubmit (e) {
    e.preventDefault();
    alert(this.state.from.name);

  }

  handleInputChange (e) {

    const form = {...this.state.form}

    form.name = e.target.value.toUpperCase()

    this.setState({form})

  }

  handleTextareaChange (e) {

    const form = {...this.state.form}

    form.description = e.target.value

    this.setState({form})

  }


  render() {

    return (
      <div>

        <h1>{this.state.form.name}</h1>
        <p>{this.state.form.description}</p>

        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input type="text" value={this.state.form.name} onChange={this.handleInputChange}/>
          </label>

          <label>Description:
            <textarea value={this.state.form.description} onChange={this.handleTextareaChange}/>
          </label>

          <button type="submit"> Send </button>
        </form>
      </div>
    );

  }
}


export default FormName;
