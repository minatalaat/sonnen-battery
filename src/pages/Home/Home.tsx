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
import ChartLegend from '../../components/ui/Chart/ChartLegend';
import ChartTooltip from '../../components/ui/Chart/ChartTooltip';

const Home: React.FC = () => {
  const { theme } = useAppTheme();
  const { formatChargeLevelAsSegements } = useFormatChargeEvents();

  // getCharging Data handler
  const getData = async () => {
    try {
      const res = await getChargeLevels();
      if (!res?.status) return null;
      return formatChargeLevelAsSegements(res?.data);
    } catch {
      throw new Error('Failed To Fetch Charging Data');
    }
  };

  //handle caching for 1 hour
  const { data, isLoading, error } = useQuery({
    queryKey: ['charging-data'],
    queryFn: getData,
    staleTime: 60 * 60 * 1000, // cache for 1 hour
    refetchInterval: 60 * 60 * 1000, // refetch after 1 hour
  });

  if (error) {
    throw new Error('Failed To Fetch Charging Data');
  }
  return (
    //use react-grid-system to handle responsive
    <Container fluid>
      <Row nogutter>
        <Col xs={8}>
          <Typography variant="xxlText">Sonnen Battery Activity</Typography>
        </Col>
        <Col xs={4} style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.xs, alignItems: 'center', justifyContent: 'end' }}>
          <ThemeController />
        </Col>

        <Col sm={12}>
          {/* Add Skeleton To placeholder chart till fetching data */}
          {isLoading ? <PlaceHolder /> : null}
          {!isLoading && data && (
            <ChartContainer>
              <Chart
                data={data}
                xData={{ key: 'date', label: 'Time' }}
                yData={{ key: 'chargingLevel', label: 'Level' }}
                legend={
                  <ChartLegend
                    data={[
                      { label: 'Charging', color: theme.colors.liteCharing },
                      { label: 'Discharging', color: theme.colors.liteDisCharing },
                      { label: 'idle', color: theme.colors.liteIdle },
                    ]}
                  />
                }
                toolTip={<ChartTooltip />}
              />
            </ChartContainer>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
