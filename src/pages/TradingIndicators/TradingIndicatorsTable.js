import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TradingIndicatorsTable = () => {
    const [tradingIndicators, setTradingIndicators] = useState([]);

    useEffect(() => {
        // Fetch trading indicators from the backend
        const fetchTradingIndicators = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve token from storage
                const response = await axios.get('http://127.0.0.1:8000/api/tradingindicators/tradingindicators/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTradingIndicators(response.data);
            } catch (error) {
                console.error("Error fetching trading indicators:", error);
            }
        };

        fetchTradingIndicators();
    }, []);

    return (
        <TableContainer component={Paper}>
            <h1>INDICATORS COMFIRMATIONS</h1>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Candle Pattern</TableCell>
                        <TableCell>Fibonacci Level</TableCell>
                        <TableCell>Session</TableCell>
                        <TableCell>5 Min Order Block</TableCell>
                        <TableCell>Previous Day Color Structure</TableCell>
                        <TableCell>Asian Kill Zone</TableCell>
                        <TableCell>London Kill Zone</TableCell>
                        <TableCell>New York Kill Zone</TableCell>
                        <TableCell>Flip Four Hour Candle</TableCell>
                        <TableCell>15 Min Break of Structure</TableCell>
                        <TableCell>FVG Blocks</TableCell>
                        <TableCell>Change Color UT Alert</TableCell>
                        <TableCell>Flactial and Alligator</TableCell>
                        <TableCell>Pips Stop Loss</TableCell>
                        <TableCell>Pips Gained</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tradingIndicators.map((indicator) => (
                        <TableRow key={indicator.id}>
                            <TableCell>{indicator.candle_pattern || '-'}</TableCell>
                            <TableCell>{indicator.fibonacci_level || '-'}</TableCell>
                            <TableCell>{indicator.session || '-'}</TableCell>
                            <TableCell>{indicator.five_min_order_block ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.previous_day_color_structure ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.asion_kill_zone ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.london_kill_zone ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.newyork_kill_zone ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.flip_four_hour_candle ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.fifteen_min_break_of_structure ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.fvg_blocks ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.change_color_ut_alert ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.flactial_and_alligator ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{indicator.pips_stoplost || '0'}</TableCell>
                            <TableCell>{indicator.pips_gained || '0'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TradingIndicatorsTable;
