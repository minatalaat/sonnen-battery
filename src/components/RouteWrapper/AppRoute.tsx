import { Suspense, type ReactNode } from "react"

const AppRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Suspense fallback={<></>}> {children}</Suspense >
    )
}

export default AppRoute