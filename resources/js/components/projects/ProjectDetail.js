import React from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const { id } = useParams();
  return (
    <h2>Project detail {id}</h2>
  )
}
