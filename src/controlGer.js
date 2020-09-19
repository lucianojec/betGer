import React from 'react';

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }

  export default EssayForm