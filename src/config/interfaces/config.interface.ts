interface ApiConfigProps {
    apiUrl: string
    httpTimeout: number
}

interface MongodbConfigProps {
    connectionString: string
    databaseName: string
}


export interface ConfigProps {
    port: number
    jwt_secret: string
    jwt_expire_time: string
    api: ApiConfigProps,
    upload_url: string,
    mongodb: {
        database: MongodbConfigProps
    }
}