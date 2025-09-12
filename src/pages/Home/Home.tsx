import { Col, Container, Row } from 'react-grid-system';
import Typography from '../../components/ui/Typography/Typography';
import { useAppTheme } from '../../contexts/AppTheme';
import { useEffect, useState } from 'react';
import { getChargeLevels } from '../../services/chargeLevels.services';
import { Chart } from '../../components/ui/Chart';
import { useFormatChargeEvents } from '../../hooks/useFormatChargeEvents';
import { ChartContainer } from '../../components/ui/ChartContainer';
import type { ChargeLevelWithStatusDTO } from '../../dtos/chargeLevels.types';
import ThemeController from '../../components/ui/ThemeController/ThemeController';
import PlaceHolder from '../../components/ui/PlaceHolder/PlaceHolder';


const Home: React.FC = () => {
    const { theme } = useAppTheme();
    const { formatChargeLevelAsSegements } = useFormatChargeEvents();
    const [isLoading, setIsLoading] = useState(true);
    const [chargeLevelEvents, setChargeLevelEvents] = useState<Array<ChargeLevelWithStatusDTO> | null>(null)


    const getData = async () => {
        try {
            setIsLoading(true);
            const res = await getChargeLevels();
            if (!res?.status) return setChargeLevelEvents([])
            console.log(res?.data);

            return setChargeLevelEvents(formatChargeLevelAsSegements(res?.data))

        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>

            <Container fluid>
                <Row nogutter >
                    <Col xs={8}>
                        <Typography variant="xxlText">Sonnen Battery Analyizer</Typography>
                    </Col>
                    <Col xs={4} style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.xs, alignItems: 'center', justifyContent: 'end' }}>
                        <ThemeController />
                    </Col>

                    <Col sm={12}>
                        {isLoading && <PlaceHolder />}
                        {!isLoading && <ChartContainer>
                            <Chart data={chargeLevelEvents} xData={{ key: 'date', label: 'Time' }} yData={{ key: 'chargingLevel', label: 'Level' }} />
                        </ChartContainer>}
                    </Col>
                </Row>
            </Container >
        </>

    );
};
export default Home;
