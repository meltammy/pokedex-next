import { Drawer, OrderBySection } from './styles'
import { types } from '@/lib/models/types'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

type FilterProps = {
  isOpen: boolean
  onClose: () => void
  resetFilter: () => void
  setFilters: (formData: FormData) => void
  filters: FormData
}

enum Order {
  ID = 'id',
  NAME = 'name',
}

type FormData = {
  types: string[]
  maxId: number
  orderBy: Order
}

export function FilterDrawer({
  isOpen,
  onClose,
  resetFilter,
  setFilters,
  filters,
}: FilterProps) {
  const MAX_ID = Number(process.env.NEXT_PUBLIC_MAX_ID)
  const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>({
    defaultValues: { types: [], maxId: MAX_ID },
  })

  const selectAllIsChecked = watch('types').length === types.length

  useEffect(() => {
    if (filters !== watch()) reset(filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  return (
    <Drawer isOpen={isOpen}>
      <form onSubmit={handleSubmit(setFilters)}>
        <header>
          <h2>Filters</h2>
          <button onClick={onClose}>&times;</button>
        </header>
        <OrderBySection>
          <h3>Order by: </h3>
          <select {...register('orderBy')}>
            <option value="id">ID</option>
            <option value="name">name</option>
          </select>
        </OrderBySection>
        <section>
          <h3>Types</h3>
          <div>
            <input
              onChange={() => {
                setValue('types', selectAllIsChecked ? [] : types)
              }}
              type="checkbox"
              checked={selectAllIsChecked}
            />
            <label htmlFor="select-all">
              <b>Select all</b>
            </label>
          </div>
          {types.sort().map(type => {
            const elementId = `checkbox-${type}`
            return (
              <div key={type}>
                <input
                  id={elementId}
                  {...register('types')}
                  type="checkbox"
                  value={type}
                />
                <label htmlFor={elementId}>{type}</label>
              </div>
            )
          })}
        </section>
        <section>
          <h3>Max. ID: {watch('maxId')}</h3>
          <input
            id="max-id"
            {...register('maxId')}
            type="range"
            max={MAX_ID}
            defaultValue={MAX_ID}
            min={1}
          />
        </section>
        <footer>
          <button type="submit" onClick={onClose}>
            Apply
          </button>
          <button
            type="reset"
            onClick={() => {
              reset()
              resetFilter()
            }}
          >
            Clear
          </button>
        </footer>
      </form>
    </Drawer>
  )
}
