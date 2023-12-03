import { useState } from 'react';
import SelectTransportItem from './SelectTransportItem';

function SelectTransport() {
    const [mode, setMode] = useState('Driving');
    const [leaveBy, setLeaveBy] = useState('9:50');
    const [duration, setDuration] = useState('32');
    const [cost, setCost] = useState('200');

    return (
        <div className="SelectTransport">
            <h2>Select Transport</h2>
            <SelectTransportItem Mode={ mode } LeaveBy={ leaveBy } Duration={ duration } Cost={ cost } />
            <SelectTransportItem Mode="Driving" LeaveBy="9:50" Duration="32" Cost="200" />
        </div>
    );
}

export default SelectTransport;