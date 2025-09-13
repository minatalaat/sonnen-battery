import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Chart from './Chart';
import type { ChargeLevelWithStatusDTO } from '../../../dtos/chargeLevels.types';
import { AppTheme } from '../../../contexts/AppTheme';
import { appTheme } from '../../../themes/theme';

// Mock the useBreakpointCheck hook
vi.mock('../../../hooks/useBreakpointCheck', () => ({
  default: vi.fn(() => false),
}));

// Mock theme data
const mockTheme = {
  ...appTheme,
  colors: {
    primary: '#0a1535',
    litePrimary: 'rgba(47, 92, 228, 1)',
    secondary: '#767676ff',
    liteSecondary: '#cccccc',
    charging: '#58ba1a',
    idle: 'blue',
    liteIdle: 'lightblue',
    liteCharing: '#90bc74ff',
    discharging: '#c98f1f',
    liteDisCharing: '#ba9958ff',
    background: '#e6e1e1ff',
    border: '#f0f2f3',
    hightLightColor: '#cbc7c7ff',
    error: '#F75270',
    chartBackground: '#f5f5f5ff',
  },
};

// Mock context value
const mockContextValue = {
  theme: mockTheme,
  toggleTheme: vi.fn(),
};

// Test data
const mockData: ChargeLevelWithStatusDTO[] = [
  {
    date: '2024-01-01',
    chargingLevel: 75,
    internalEventId: 1,
    status: 'charging',
    stroke: '#007bff',
    fill: '#007bff',
  },
  {
    date: '2024-01-02',
    chargingLevel: 85,
    internalEventId: 2,
    status: 'discharging',
    stroke: '#dc3545',
    fill: '#dc3545',
  },
  {
    date: '2024-01-03',
    chargingLevel: 60,
    internalEventId: 3,
    status: 'idle',
    stroke: '#6c757d',
    fill: '#6c757d',
  },
];

// Test props
const defaultProps = {
  data: mockData,
  xData: { key: 'date', label: 'date' },
  yData: { key: 'chargingLevel', label: 'chargingLevel' },
};

// Custom Legend component for testing
const MockLegend = () => <div data-testid="legend">Legend</div>;

// Custom Tooltip component for testing
const MockTooltip = () => <div data-testid="tooltip">Tooltip</div>;

// Wrapper component to provide theme context
const ChartWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AppTheme.Provider value={mockContextValue}>{children}</AppTheme.Provider>
);

describe('Chart Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders chart container', () => {
      const { container } = render(
        <ChartWrapper>
          <Chart {...defaultProps} />
        </ChartWrapper>
      );

      // Check if the chart container is rendered
      const chartContainer = container.querySelector('.recharts-responsive-container');
      expect(chartContainer).toBeInTheDocument();
    });

    it('renders chart with null data', () => {
      const propsWithNullData = {
        ...defaultProps,
        data: null,
      };

      const { container } = render(
        <ChartWrapper>
          <Chart {...propsWithNullData} />
        </ChartWrapper>
      );

      const chartContainer = container.querySelector('.recharts-responsive-container');
      expect(chartContainer).toBeInTheDocument();
    });

    it('renders chart with both custom legend and tooltip', () => {
      const propsWithBoth = {
        ...defaultProps,
        legend: <MockLegend />,
        toolTip: <MockTooltip />,
      };

      render(
        <ChartWrapper>
          <Chart {...propsWithBoth} />
        </ChartWrapper>
      );

      expect(screen.getByTestId('legend')).toBeInTheDocument();
      expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    });
  });

  describe('Props Handling', () => {
    it('handles xData without label', () => {
      const propsWithoutXLabel = {
        ...defaultProps,
        xData: { key: 'date' },
      };

      const { container } = render(
        <ChartWrapper>
          <Chart {...propsWithoutXLabel} />
        </ChartWrapper>
      );

      const chartContainer = container.querySelector('.recharts-responsive-container');
      expect(chartContainer).toBeInTheDocument();
    });
    it('handles yData with customDomain', () => {
      const propsWithCustomDoamin = {
        ...defaultProps,
        ydata: { key: 'chargingLevel', domain: [0, 80] },
      };

      const { container } = render(
        <ChartWrapper>
          <Chart {...propsWithCustomDoamin} />
        </ChartWrapper>
      );

      const chartContainer = container.querySelector('.recharts-responsive-container');
      expect(chartContainer).toBeInTheDocument();
    });
  });

  describe('Responsive', () => {
    it('spacing when isMobile is true', async () => {
      const { default: useBreakpointCheck } = await import('../../../hooks/useBreakpointCheck');
      vi.mocked(useBreakpointCheck).mockReturnValue(true);

      const { container } = render(
        <ChartWrapper>
          <Chart {...defaultProps} />
        </ChartWrapper>
      );

      const chartContainer = container.querySelector('.recharts-responsive-container');
      expect(chartContainer).toBeInTheDocument();
    });
  });
});
