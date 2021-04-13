import { Theme } from '@yandex/ui/Theme'

export type TokenInfoType = {
    value: string | number,
    path: string[],
    description?: string,
};

/** 
 * @example 
 * {
 *  'button-font-size': {
 *    value: '28px',
 *    path: ['button', 'fontSize'], 
 *    description: 'The token is responsible for font size of button'
 *  },
 *  'button-line-height': {
 *    value: '28px',
 *    path: ['button', 'lineHeight'], 
 *    description: 'The token is responsible for line height of button'
 *  }
 * }
 */
export type GlobalsType = Record<string, TokenInfoType>;

/** 
 * @example 
 * {
 *  'button': {
 *   'button-font-size': {
 *     value: '28px',
 *     path: ['button', 'fontSize'], 
 *     description: 'The token is responsible for font size of button'
 *   },
 *   'button-line-height': {
 *     value: '28px',
 *     path: ['button', 'lineHeight'], 
 *     description: 'The token is responsible for line height of button'
 *   }
 *  }
 * }
 */
export type ComponentsType = Record<string, Record<string, TokenInfoType>>;

export type TokensType = {
    globals: GlobalsType,
    components: ComponentsType,
};

export type ThemeType = { 
    tokens: TokensType,
    preset: Theme,
    mappings: Record<string, string>
    name?: string
};