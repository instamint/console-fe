import {convertTimeZone} from './../../_metronic/helpers/format/datetime'
import {useState, useMemo} from 'react'
import { isTimeISO } from '../../_metronic/helpers/convert/convert-type'

const useSearch = (data: any[], searchKeys: string[]) => {
  const convertType = (text) => {
    if (isTimeISO(text)) {
      return convertTimeZone(text)
    } else if (typeof text === 'string') {
      return text
    } else if (typeof text === 'boolean') {
      return text === true ? 'TRUE' : 'FALSE'
    } else if (typeof text === 'number') {
      return text.toString()
    }
  }

  const filterData = (item) => {
    let valid_totals = 0
    searchKeys?.forEach((key) => {
      const context = item[key]
      if (context !== null && context !== undefined && context !== '') {
        if (convertType(context)?.toLowerCase()?.includes(search.trim().toLowerCase())) {
          valid_totals++
        }
      }
    })
    return valid_totals > 0
  }

  const [search, setSearch] = useState<null | string>(null)
  const results = useMemo(() => {
    if (search && search?.trim() !== '' && data?.length > 0 && searchKeys?.length > 0) {
      return [...data].filter((item) => filterData(item))
    } else {
      return data
    }
  }, [data, search])
  return {setSearch, results, searched: search}
}
export default useSearch
