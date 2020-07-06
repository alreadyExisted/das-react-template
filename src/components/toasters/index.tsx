import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'
import { Toaster } from '@app/components/ui/toaster'
import { Alert } from '@app/components/ui/alert'
import { useCallback, SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'
import { eventsActions } from '@app/state/modules/events'
import { eventsSelector } from '@app/state/modules/events/selectors'
import { T } from '@app/components/t'

const AUTO_HIDE_DURATION = 6000

export function Toasters() {
  const events = useShallowEqualSelector(eventsSelector)
  const dispatch = useDispatch()
  const handleClose = useCallback(
    (id: string) => (_: SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') return
      dispatch(eventsActions.removeEvent(id))
    },
    [dispatch]
  )
  return (
    <>
      {events.map((item, index) => (
        <Toaster key={index} open autoHideDuration={AUTO_HIDE_DURATION} onClose={handleClose(item.id)}>
          <Alert onClose={handleClose(item.id)} severity={item.type}>
            {stringify(item.message)}
          </Alert>
        </Toaster>
      ))}
    </>
  )
}

function stringify(value: string | { id: string } | Record<string, unknown>) {
  if (!value || typeof value === 'string') return value
  if ('id' in value) return <T id={value.id as string} />
  return JSON.stringify(value)
}
