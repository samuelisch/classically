import React from 'react';
import { ComposerType } from '../../reducers/composersSlice';

const Composer = ({ id, birth, death, name, completeName, epoch, portrait }:ComposerType) => {

  return (
    <li>{id} birth: {birth} death: {death} {completeName} {epoch}</li>
  )
}

export default Composer