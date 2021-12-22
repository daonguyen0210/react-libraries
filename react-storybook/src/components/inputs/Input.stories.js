import React from 'react';
import Input from './Input'

export default {
  title: "form/Input",
  component: Input,
}

export const Small = () => { return( <Input variant="small">Small</Input>)}
export const Medium = () => { return( <Input variant="medium">Medium</Input>)}
export const Large = () => { return( <Input variant="large">Large</Input>)}