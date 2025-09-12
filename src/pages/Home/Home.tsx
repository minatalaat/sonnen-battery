import { Col, Container, Row } from 'react-grid-system';
import Typography from '../../components/ui/Typography/Typography';
import { useAppTheme } from '../../contexts/AppTheme';
import { getChargeLevels } from '../../services/chargeLevels.services';
import { useFormatChargeEvents } from '../../hooks/useFormatChargeEvents';
import ThemeController from '../../components/ui/ThemeController/ThemeController';
import PlaceHolder from '../../components/ui/PlaceHolder/PlaceHolder';
import { useQuery } from '@tanstack/react-query';
import ChartContainer from '../../components/ui/ChartContainer';
import Chart from '../../components/ui/Chart';

const Home: React.FC = () => {
    const { theme } = useAppTheme();
    const { formatChargeLevelAsSegements } = useFormatChargeEvents();

    const getData = async () => {
        try {
            // const res = await getChargeLevels();
            // if (!res?.status) return null;
            // return formatChargeLevelAsSegements(res?.data);

        } catch {
            throw new Error("Failed To Fetch Charging Data");
        }
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['charging-data'],
        queryFn: getData,
        staleTime: 60 * 60 * 1000, // cache for 1 hour
        refetchInterval: 60 * 60 * 1000, // refetch after 1 hour
    });

    if (error) {
        throw new Error("Failed To Fetch Charging Data");
    }
    return (
        <Container fluid>
            <Row nogutter>
                <Col xs={8}>
                    <Typography variant="xxlText">Sonnen Battery Analyizer</Typography>
                </Col>
                <Col xs={4} style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.xs, alignItems: 'center', justifyContent: 'end' }}>
                    <ThemeController />
                </Col>

                <Col sm={12}>
                    {isLoading ? <PlaceHolder /> : null}
                    {!isLoading && data && (
                        <ChartContainer>
                            <Chart data={data} xData={{ key: 'date', label: 'Time' }} yData={{ key: 'chargingLevel', label: 'Level' }} />
                        </ChartContainer>
                    )}
                </Col>
            </Row>
        </Container>
    );
};
export default Home;
