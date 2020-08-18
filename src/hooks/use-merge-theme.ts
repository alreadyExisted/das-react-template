import { useMemo } from 'react'
import { mergeTheme } from '@app/utils/theme'

export function useMergeTheme<T>(baseTheme: Record<string, string>, theme: T | undefined) {
  return (useMemo(() => mergeTheme(baseTheme, theme), [baseTheme, theme]) as unknown) as T
}
