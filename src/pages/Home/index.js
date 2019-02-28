import React, { Component } from 'react';
import api from '../../services/api';

import {
  Wrapper,
  CheckRadio,
  FormSearch,
  NameRadio,
  RadioContainer,
  InputSearch,
  ButtonSearch,
} from './styles';

class Home extends Component {
  state = {
    options: [
      { id: 1, name: 'artist', check: false },
      { id: 2, name: 'album', check: false },
      { id: 3, name: 'track', check: false },
    ],
    currentOption: '',
    inputSearch: '',
  };

  handleChangeRadio = e => {
    const optionName = e.target.name;

    this.setState(
      {
        options: this.state.options.map(option =>
          option.name === optionName
            ? { ...option, check: true }
            : { ...option, check: false },
        ),
      },
      () => {
        this.setState({ currentOption: optionName });
      },
    );
  };

  handleChangeInput = e => {
    this.setState({ inputSearch: e.target.value });
  };

  handleClickSubmit = async () => {
    const response = await api.get('/q=name:abacab&type=album');
    console.log(response.data);
  };

  render() {
    const { options } = this.state;
    return (
      <Wrapper>
        <FormSearch onSubmit={this.handleClickSubmit}>
          {options.map(option => (
            <RadioContainer key={option.id}>
              <CheckRadio
                type="radio"
                name={option.name}
                checked={option.check}
                onChange={this.handleChangeRadio}
              />
              <NameRadio>{option.name}</NameRadio>
            </RadioContainer>
          ))}
          <InputSearch type="text" onChange={this.handleChangeInput} />
          <ButtonSearch type="submit">Search</ButtonSearch>
        </FormSearch>
      </Wrapper>
    );
  }
}

export default Home;
