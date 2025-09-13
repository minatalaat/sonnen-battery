import { useEffect, useState } from 'react';
import { ToggleInput } from './ToggleButton.styles';
import { MODES } from '../../../constants/modes.contants';
import { useAppTheme } from '../../../contexts';

interface ToggleButtonProps {
  name: string;
  onChange: (value: boolean) => void;
}
const ToggleButton: React.FC<ToggleButtonProps> = ({ name, onChange }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { mode } = useAppTheme();
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e?.target?.checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  useEffect(() => {
    if (mode === MODES.DARK) return setChecked(true);
    return setChecked(false);
  }, [mode]);

  return <ToggleInput name={name} type="checkbox" checked={checked} onChange={handleToggle} aria-checked={checked} role="switch" />;
};
export default ToggleButton;
