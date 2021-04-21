import React from 'react'
import { useStore } from 'effector-react'
import { Select } from '@yandex/ui/Select/desktop/bundle'
import { ListTile } from '@yandex/ui/ListTile/desktop'
import { Text } from '@yandex/ui/Text/bundle'

import { Clear } from './Clear'
import { Share } from './Share'

import { $themes, $themesNames, $themeName, changeThemeEvent } from '../../state/themes'

import { ThemeNames } from '../../types'

import './Header.css'

export function Header() {
  const themes = useStore($themes)
  const themeName = useStore($themeName)
  const themesNames = useStore($themesNames)

  const menuItems = themesNames.map((val) => ({
    value: val,
    content: themes[val].name || val,
  }))

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    changeThemeEvent(event.target.value as ThemeNames)

  return (
    <div className="Header">
      <ListTile
        leftSpace="m"
        rightSpace="m"
        alignItems="center"
        leading={
          <Text typography="control-m" color="secondary">
            Тема из пресетов @yandex/ui:
          </Text>
        }
      >
        <Select
          size="m"
          view="default"
          options={menuItems}
          value={themeName}
          onChange={handleChange}
          className="Header-ThemeSelector"
        />
        <Share className="Header-Share" />
        <Clear className="Header-Clear" />
      </ListTile>
    </div>
  )
}
