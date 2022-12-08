import { Layout } from "antd"
export const Layouts = ({children}) => {
    return(
        <Layout className="layout">
            {children}
        </Layout>
    )
}