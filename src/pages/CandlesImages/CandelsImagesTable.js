import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';

const CandleImagesTable = () => {
    const [candleImages, setCandleImages] = useState([]);

    useEffect(() => {
        const fetchCandleImages = async () => {
            try {
                const token = localStorage.getItem('token'); 
                const response = await axios.get('http://127.0.0.1:8000/api/candleimages/candleimages/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCandleImages(response.data);
            } catch (error) {
                console.error("Error fetching candle images:", error);
            }
        };

        fetchCandleImages();
    }, []);

    return (
        <TableContainer component={Paper}>
            <h1>CANDLES IMAGES</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Monday Candle</TableCell>
                        <TableCell>Tuesday Candle</TableCell>
                        <TableCell>Wednesday Candle</TableCell>
                        <TableCell>Thursday Candle</TableCell>
                        <TableCell>Friday Candle</TableCell>
                        <TableCell>Saturday Candle</TableCell>
                        <TableCell>Sunday Candle</TableCell>
                        <TableCell>Swing Trade Candle</TableCell>
                        <TableCell>Two Hour Candle</TableCell>
                        <TableCell>Breakeven Candle</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {candleImages.map((candleImage) => (
                        <TableRow key={candleImage.id}>
                            <TableCell><Avatar src={candleImage.monday_candle} alt="Monday Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.tuesday_candle} alt="Tuesday Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.wednesday_candle} alt="Wednesday Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.thursday_candle} alt="Thursday Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.friday_candle} alt="Friday Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.saturday_candle} alt="Saturday Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.sunday_candle} alt="Sunday Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.swing_trade_candle} alt="Swing Trade Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.two_hour_candle} alt="Two Hour Candle" /></TableCell>
                            <TableCell><Avatar src={candleImage.breakeven_candle} alt="Breakeven Candle" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CandleImagesTable;
