import { createStore, createEvent, createEffect, forward, attach } from 'effector'

import { downloadTheme } from '../api/downloadTheme'
import { variablesReset } from './designTokens'
import { $yamlText } from './yaml'
import { DesignTokensType, VariablesType, MappingsType } from '../types'
import { $invertedTokenMappings } from './mappings'

export const $resolvedTokens = createStore<DesignTokensType>({})

const resolvedTokensUpdate = createEvent<VariablesType[]>()

$resolvedTokens
  .on(resolvedTokensUpdate, (state, tokens) => {
    const ret: Record<string, any> = {}
    tokens.forEach((v) => (ret[v.name] = v))
    return { ...state, ...ret }
  })
  .reset(variablesReset)

export const resolveTokensFx = createEffect(
  async ({ content, mappings }: { content: string; mappings: MappingsType }) => {
    resolvedTokensUpdate(await downloadTheme(content, mappings))
  },
)

export const resolveTokensAttach = attach({
  effect: resolveTokensFx,
  source: $invertedTokenMappings,
  mapParams: (content: string, mappings: MappingsType) => ({
    content,
    mappings,
  }),
})

forward({ from: $yamlText, to: resolveTokensAttach })