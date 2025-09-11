import type React from "react"
import { StyledChartContainer } from "./ChartContainer.styles"
import type { ReactNode } from "react"

const ChartContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (<StyledChartContainer>{children}</StyledChartContainer>)

}
export default ChartContainer