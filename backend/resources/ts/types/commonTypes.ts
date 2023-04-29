//uriParamのタイプ
export type params_id = {
    id: string
}

// ROUTEのマッピングタイプ
export type RouteMappingType = {
    path: string
    element: JSX.Element
    auth: boolean
}

