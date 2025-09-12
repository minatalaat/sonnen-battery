import Typography from "../../Typography/Typography";
import { StatusIndicator, StyledLegend, StyledLegendContainer } from "./ChartLegend.styles"

interface LegendData {
    color: string;
    label: string;
}
interface ChartLegendProps {
    data: Array<LegendData>
}
const ChartLegend: React.FC<ChartLegendProps> = ({ data }) => {
    return (
        <StyledLegendContainer>
            {data.map((legend, index) =>
                <StyledLegend key={index}>
                    <StatusIndicator $color={legend.color} />
                    <Typography variant="lgText">{legend.label}</Typography>
                </StyledLegend>
            )}

        </StyledLegendContainer>
    )
}
export default ChartLegend