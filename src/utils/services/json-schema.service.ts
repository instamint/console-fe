import http from "./http-common";

export interface JsonSchema {
    id: string;
    document: string;
}

const getAllSchemas = async (username: string): Promise<JsonSchema[]> => {
  const response = await http.get<JsonSchema[]>(`/json-schemas/user/${username}`)
  return response.data
}

const getSchema = async (id: string): Promise<JsonSchema> => {
    const response = await http.get<JsonSchema>(`/json-schemas/${id}`);
    return response.data;
};

const createSchema = async (schema: string, username: string): Promise<JsonSchema> => {
    const response = await http.post<JsonSchema>('/json-schemas', {
      document: schema,
      username: username,
    })
    return response.data;
};

const updateSchema = async (id: string, schema: string): Promise<JsonSchema> => {
    const response = await http.put<JsonSchema>(`/json-schemas/${id}`, schema);
    return response.data;
};

const deleteSchema = async (id: string): Promise<void> => {
    await http.delete(`/json-schemas/${id}`);
};

export default {
    getAllSchemas,
    getSchema,
    createSchema,
    updateSchema,
    deleteSchema,
};