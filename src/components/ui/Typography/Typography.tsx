import { StyledTypography } from "./Typography.styles";
import type { TypographyType } from "./Typography.types";


const Typography: React.FC<TypographyType> = ({ variant, weight, fontSize, color, children }) => {

    return <StyledTypography variant={variant} $color={color} $weight={weight} $fontSize={fontSize} >{children}</StyledTypography>
}
export default Typography 