import { useEffect, useState } from "react"
import { ToggleInput } from "./ToggleButton.styles"
import { MODES } from "../../../constants/modes";

interface ToggleButtonProps {
    name: string;
    onChange: (value: boolean) => void,

}
const ToggleButton: React.FC<ToggleButtonProps> = ({ name, onChange }) => {
    const [checked, setChecked] = useState<boolean>(false)
    const localeMode = localStorage.getItem('mode')
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e?.target?.checked;
        setChecked(newChecked);
        onChange(newChecked)
    };

    useEffect(() => {
        if (localeMode === MODES.DARK) return setChecked(true)
        return setChecked(false)
    }, [localeMode])

    return (<ToggleInput name={name} type="checkbox" checked={checked} onChange={handleToggle} aria-checked={checked} role="switch" />)
}
export default ToggleButton