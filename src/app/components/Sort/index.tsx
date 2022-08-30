import SortDown from '../../images/sort-down.svg'
import SortUp from '../../images/sort-up.svg'

export default function ICSort({type = 'default'}) {
    
  return (
    <>
      {type.toLowerCase() === 'desc' && (
        <img className='ms-1' src={SortDown} width='10px' alt='' style={{marginBottom: '2px'}} />
      )}
      {type.toLowerCase() === 'default' && ''}
      {type.toLowerCase() === 'asc' && (
        <img className='ms-1' src={SortUp} width='10px' alt='' style={{marginBottom: '2px'}} />
      )}
    </>
  )
}