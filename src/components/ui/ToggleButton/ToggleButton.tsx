import { useState } from "react"
import { ToggleInput } from "./ToggleButton.styles"

interface ToggleButtonProps {
    name: string;
    onChange: (value: boolean) => void,

}
const ToggleButton: React.FC<ToggleButtonProps> = ({ name, onChange }) => {
    const [checked, setChecked] = useState<boolean>(false)

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e?.target?.checked;
        setChecked(newChecked);
        onChange(newChecked)
    };

    return (<ToggleInput name={name} type="checkbox" checked={checked} onChange={handleToggle} aria-checked={checked} role="switch" />)
}
export default ToggleButton