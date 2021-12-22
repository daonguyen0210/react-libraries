import React from 'react';
import { Primary} from "../buttons/Button.stories"
import { Large} from '../inputs/Input.stories'

export default {
  title: "form/Subscription"
}

export const PrimarySubscriptioin = () => { 
  return (
    <React.Fragment >
      < Large />
      < Primary />
    </React.Fragment>
  )
}