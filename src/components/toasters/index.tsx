import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'
import { Toaster } from '@app/components/ui/toaster'
import { Alert } from '@app/components/ui/alert'
import { useCallback, SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'
import { eventsActions } from '@app/state/modules/events/actions'
import { T } from '@app/components/t'

export function Toasters() {
  const events = useShallowEqualSelector(state => state.events)
  const dispatch = useDispatch()
  const handleClose = useCallback(
    (id: string) => (_?: SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') return
      dispatch(eventsActions.removeEvent({ id }))
    },
    [dispatch]
  )
  return (
    <>
      {events.map((item, index) => (
        <Toaster key={index} open autoHideDuration={6000} onClose={handleClose(item.id)}>
          <Alert onClose={handleClose(item.id)} severity={item.type}>
            {stringify(item.message)}
          </Alert>
        </Toaster>
      ))}
    </>
  )
}

function stringify(value: string | { id: string } | object) {
  if (!value || typeof value === 'string') return value
  if ('id' in value) return <T id={value.id} />
  return JSON.stringify(value)
}
