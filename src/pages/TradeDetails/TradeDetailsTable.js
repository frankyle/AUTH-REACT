import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';

const TradeDetailsTable = () => {
    const [tradeDetails, setTradeDetails] = useState([]);

    useEffect(() => {
        // Fetch trade details from the backend
        const fetchTradeDetails = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve token from storage
                const response = await axios.get('http://127.0.0.1:8000/api/tradedetails/tradedetails/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTradeDetails(response.data);
            } catch (error) {
                console.error("Error fetching trade details:", error);
            }
        };

        fetchTradeDetails();
    }, []);

    return (
        <TableContainer component={Paper}>
            <h1>TRADE DETAILS</h1>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Trade Signal</TableCell>
                        <TableCell>Currency Pair</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Idea Candle</TableCell>
                        <TableCell>Entry Candle</TableCell>
                        <TableCell>Take Profit 1</TableCell>
                        <TableCell>Take Profit 2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tradeDetails.map((trade) => (
                        <TableRow key={trade.id}>
                            <TableCell>{trade.trade_signal || '-'}</TableCell>
                            <TableCell>{trade.currency_pair || '-'}</TableCell>
                            <TableCell>{trade.is_active ? 'Active' : 'Inactive'}</TableCell>
                            <TableCell>{new Date(trade.created_at).toLocaleDateString()}</TableCell>
                            <TableCell>
                                <Avatar src={trade.idea_candle} alt="Idea Candle" />
                            </TableCell>
                            <TableCell>
                                <Avatar src={trade.entry_candle} alt="Entry Candle" />
                            </TableCell>
                            <TableCell>
                                <Avatar src={trade.take_profit_one_candle} alt="Take Profit 1" />
                            </TableCell>
                            <TableCell>
                                <Avatar src={trade.take_profit_two_candle} alt="Take Profit 2" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TradeDetailsTable;
