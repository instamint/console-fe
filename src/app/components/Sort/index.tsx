/* eslint-disable eqeqeq */

import {
  convertType,
  isNil,
  isNumber,
  toLower,
} from '../../../_metronic/helpers/convert/convert-type'
import SortDown from '../../images/sort-down.svg'
import SortUp from '../../images/sort-up.svg'

export default function ICSort({type = 'default'}) {
  return (
    <>
      {type.toLowerCase() === 'desc' && (
        <img className='ms-1' src={SortDown} width='10px' alt='' style={{marginBottom: '2px'}} />
      )}
      {type.toLowerCase() === 'default' && (
        <img
          className='ms-1'
          src={SortUp}
          width='10px'
          alt=''
          style={{marginBottom: '2px', visibility: 'hidden'}}
        />
      )}
      {type.toLowerCase() === 'asc' && (
        <img className='ms-1' src={SortUp} width='10px' alt='' style={{marginBottom: '2px'}} />
      )}
    </>
  )
}

export function sortRows(rows, sort) {
  try {
    return rows.sort((a, b) => {
      const {sort_type, sort_name} = sort
      let preValue = a
      let curValue = b

      // where the value is pointed to many internal objects (ex: value = groupType.type)
      if (sort_name?.includes('.')) {
        const listName = sort_name.split('.')
        listName?.length > 0 &&
          listName?.forEach((name) => {
            preValue = preValue[name]
            curValue = curValue[name]
          })
      } else {
        preValue = preValue[sort_name]
        curValue = curValue[sort_name]
      }

      // if (isNil(preValue)) return 1
      // if (isNil(curValue)) return -1

      const aLocale = convertType(preValue)
      const bLocale = convertType(curValue)

      if (toLower(sort_type) === 'asc') {
        return aLocale.localeCompare(bLocale, 'en', {numeric: isNumber(curValue)})
      } else {
        return bLocale.localeCompare(aLocale, 'en', {numeric: isNumber(preValue)})
      }
    })
  } catch (error) {
    console.error({error})
    return rows
  }
}