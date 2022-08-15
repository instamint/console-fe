import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL_DESIGNER
export interface JsonSchema {
  id: string
  document: string
  updateAt?: string
  propertyId?: string | number
  username?: string
}

const getAllSchemas = async (username: string): Promise<JsonSchema[]> => {
  const response = await axios.get<JsonSchema[]>(`${API_URL}/json-schemas/user/${username}`)
  return response.data
}

const getSchema = async (id: string): Promise<JsonSchema> => {
  const response = await axios.get<JsonSchema>(`${API_URL}/json-schemas/${id}`)
  return response.data
}

const createSchema = async (schema: string, username: string): Promise<JsonSchema> => {
  const response = await axios.post<JsonSchema>(`${API_URL}/json-schemas`, {
    document: schema,
    username: username,
  })
  return response.data
}

const updateSchema = async (id: string, schema: string): Promise<JsonSchema> => {
  const response = await axios.put<JsonSchema>(`${API_URL}/json-schemas/${id}`, schema)
  return response.data
}

const deleteSchema = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/json-schemas/${id}`)
}

const getAllProperty = async (): Promise<JsonSchema[]> => {
  const response = await axios.get<JsonSchema[]>(`${API_URL}/properties`)
  return response.data
}

const getAllFavourite = async (username: string): Promise<any> => {
  const response = await axios.get<JsonSchema>(`${API_URL}/properties/user/${username}/favourite/`)
  return response.data
}

const addFavourite = async (id: string | number, username: string): Promise<any> => {
  const response = await axios.post<JsonSchema>(`${API_URL}/properties/user/favourite/add`, {
    propertyId: id,
    username: username,
  })
  return response.data
}

const removeFavourite = async (id: string | number, username: string): Promise<any> => {
  const response = await axios.get(`${API_URL}/properties/user/favourite/delete/${username}/${id}`)
  return response.data
}

export default {
  getAllSchemas,
  getSchema,
  createSchema,
  updateSchema,
  deleteSchema,
  getAllProperty,
  getAllFavourite,
  addFavourite,
  removeFavourite,
}
