import React from 'react'
import Button from './Button'

export default {
  title/* mandatory-should be unique in entire the project */:  "form/Button",
  component: Button,
}

export const Primary = () => { return (<Button variant="primary">Primary</Button>)}
export const Secondary = () => { return (<Button variant="secondary">Secondary</Button>)}
export const Success = () => { return (<Button variant="success">Success</Button>)}
export const Danger = () => { return (<Button variant="danger">Danger</Button>)}

const Template = (args) => { return ( <Button {...args} />)}

// https://youtu.be/fpsa_Hf2vz4?list=PLC3y8-rFHvwhC-j3x3t9la8-GQJGViDQk&t=148