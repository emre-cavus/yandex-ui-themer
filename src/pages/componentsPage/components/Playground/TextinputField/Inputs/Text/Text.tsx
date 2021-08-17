import React, { ChangeEventHandler, FC } from 'react'
import { withDebounceInput } from '@yandex/ui/withDebounceInput'
import { Input } from 'react-figma-components'

import { TokenBase } from '../../../../../model'
import { cnTextinput } from '../../../../../../../components/Textinput'

export type TextProps = TokenBase & {
  handleChange: ChangeEventHandler<HTMLInputElement>
  value: string
}

const DebounceInput = withDebounceInput(Input)

export const Text: FC<TextProps> = ({ label, value, handleChange }) => {
  return (
    <div className={cnTextinput({ type_text: true })}>
      <DebounceInput
        onChange={handleChange}
        value={value}
        debounceTimeout={500}
        forceNotifyByEnter
        forceNotifyOnBlur
        data-testid={label}
        className="TextinputField-Input"
      />
    </div>
  )
}
