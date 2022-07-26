import Fuse from 'fuse.js'
import {useState, useMemo} from 'react'
const defaultOptions = {
  includeScore: true,
  keys: ['id'],
}
const useSearch = (data: any[], searchKeys: string[]) => {
  const searchOptions = useMemo(
    () => ({...defaultOptions, keys: [...defaultOptions.keys, ...searchKeys]}),
    [searchKeys]
  )
  const [search, setSearch] = useState<null | string>(null)
  const fuzeSearch = useMemo(() => {
    return new Fuse(data, searchOptions)
  }, [data, searchOptions])
  const results = useMemo(() => {
    if (search === null) return data
    return fuzeSearch
      .search(search)
      .sort((a, b) => {
        return (a.score || 0) > (b.score || 0) ? 1 : -1
      })
      .filter(({score}) => (score || 0) < 0.2)
      .map(({item}) => item)
  }, [data, search, fuzeSearch])
  return {setSearch, results, searched: search === null}
}
export default useSearch
