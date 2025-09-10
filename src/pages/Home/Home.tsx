import { Col, Container, Row } from 'react-grid-system';
import Typography from '../../components/ui/Typography/Typography';
import { useAppTheme } from '../../contexts/AppTheme';
import { ToggleButton } from '../../components/ui/ToggleButton';

const Home: React.FC = () => {
    const { theme, toggleTheme } = useAppTheme();
    return (
        <Container fluid>
            <Row nogutter align="center">
                <Col xs={8}>
                    <Typography variant="xxlText">Sonnen Battery Analyizer</Typography>
                </Col>
                <Col xs={4} style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.xs, alignItems: 'center', justifyContent: 'end' }}>
                    <Typography variant="mdText">Light </Typography>
                    <ToggleButton name="toggle" onChange={() => toggleTheme()}></ToggleButton>
                    <Typography variant="mdText">Dark </Typography>
                </Col>
            </Row>
        </Container>
    );
};
export default Home;
