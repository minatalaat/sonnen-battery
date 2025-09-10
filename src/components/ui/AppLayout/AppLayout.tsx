import { StyledAppLayout } from "./AppLayout.styles";
import type { AppLayoutType } from "./AppLayout.types";

const AppLayout: React.FC<AppLayoutType> = ({ children }) => {

    return (
        <StyledAppLayout>{children}</StyledAppLayout>
    )
}

export default AppLayout