import { Row, Col, Container } from "react-grid-system";
import { useAppTheme } from "../../../contexts";
import Typography from "../Typography/Typography";
import { StyledAppErrorBoundary } from "./AppErrorBoundary.styles"
import Button from "../Button";

type AppErrorBoundaryProps = {
    error: Error;
    resetErrorBoundary: () => void;
};

const AppErrorBoundary: React.FC<AppErrorBoundaryProps> = ({ error, resetErrorBoundary }) => {
    const { theme } = useAppTheme()
    return (
        <Container style={{ margin: 'auto' }}>
            <Row align="center">
                <Col sm={12}>
                    <StyledAppErrorBoundary>
                        <Typography variant='xxlText' color={theme.colors.primary}>Something went wrong.</Typography>
                        <Typography variant='lgText' color={theme.colors.error}>{error.message}</Typography>
                        <Button onClick={resetErrorBoundary}>Try again</Button>
                    </StyledAppErrorBoundary>
                </Col>
            </Row>
        </Container>

    );
}

export default AppErrorBoundary