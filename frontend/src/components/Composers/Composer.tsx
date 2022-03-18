import React from 'react';

interface PropsType {
  id: string,
  birth: string,
  death: string,
  name: string,
  completeName: string,
  epoch: string,
  portrait: string
}

const Composer = ({ id, birth, death, name, completeName, epoch, portrait }:PropsType) => {

  return (
    <div>{id} birth: {birth} death: {death} {completeName} {epoch}</div>
  )
}

export default Composer