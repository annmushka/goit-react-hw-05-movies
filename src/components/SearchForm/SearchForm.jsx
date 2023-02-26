import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form, Input } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, defaultValue }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const inputQuery = event.target.value;
    setQuery(inputQuery);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        defaultValue={defaultValue}
        onChange={handleChange}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
