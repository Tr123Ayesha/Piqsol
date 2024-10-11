import React, { useState } from 'react';
import { Table, TableBody, TableCell, TablePagination, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import eventTableImage from "../../assets/eventTableImage.svg";
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Gauge } from '@mui/x-charts/Gauge';
import { gaugeClasses } from '@mui/x-charts/Gauge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './eventTable.css'; // Import your CSS file

const eventRows = [
    { event: 'Drink & Draw the The Living', image: eventTableImage, sales: '27%', status: 'Approved', attendance: '75%' },
    { event: 'Drink & Draw the The Living', image: eventTableImage, sales: '63%', status: 'Live', attendance: '78%' },
    { event: 'Drink & Draw the The Living', image: eventTableImage, sales: '0%', status: 'Not Approved', attendance: '0%' },
    { event: 'Drink & Draw the The Living', image: eventTableImage, sales: '0%', status: 'Not Approved', attendance: '0%' },
];

const EventsTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved':
                return { backgroundColor: '#23CC63', color: 'black' }; // Green for Approved
            case 'Live':
                return { backgroundColor: '#3EF466', color: 'black' }; // Blue for Live
            case 'Not Approved':
                return { backgroundColor: '#FF4242', color: 'black' }; 
            default:
                return { backgroundColor: 'gray', color: 'white' }; // Default color
        }
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <h1 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "36px",marginTop:"20px", marginBottom:"20px"}}>Events summary</h1>
                <p style={{ fontFamily: "Montserrat", fontWeight: 400, fontSize: "16px", color: "black", cursor: "pointer" }}>+ Create Event</p>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="event summary table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6">Event</Typography>
                            </TableCell>
                            <TableCell align="right"><Typography variant="h6">Sales</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6">Status</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6">Attendance</Typography></TableCell>
                            <TableCell align='right'>
                                <SettingsIcon style={{ marginLeft: '8px', cursor: 'pointer' }} />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
    {eventRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
        <TableRow key={index}>
            <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ border: "1px solid #CDCDCD", borderRadius: "4px", padding: "2px", marginRight: "10px" }} src={row.image} alt={row.event} />
                    {row.event}
                </div>
            </TableCell>
            <TableCell align="right">
                {row.sales}
                <ProgressBar
                    now={parseInt(row.sales)} // Adjust to use actual sales percentage
                    className="custom-progress-bar" // Apply your custom class
                    style={{
                        height: '8px',
                        borderRadius: '4px',
                    }}
                    label={null} // Optional: Show the sales percentage inside the bar
                />
            </TableCell>
            <TableCell align="right">
                <div style={{
                 width:"100px",
                    borderRadius: '20px', // Makes it a circle
                    backgroundColor: getStatusColor(row.status).backgroundColor, // Use the background color from your function
                     textAlign:"center"
                }} >
              {row.status}
                </div>
            </TableCell>
            <TableCell style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Gauge
                    value={parseInt(row.attendance)} // Convert the attendance percentage to a number
                    startAngle={0}
                    endAngle={360}
                    innerRadius="70%"
                    outerRadius="100%"
                    width={70}
                    height={70}
                    sx={{
                        [`& .${gaugeClasses.valueArc}`]: {
                            fill: '#8980F6', // Change the gauge bar color to your desired color
                        },
                    }}
                />
            </TableCell>
            <TableCell align='right'>
                <MoreVertIcon style={{ marginLeft: '8px', cursor: 'pointer' }} />
            </TableCell>
        </TableRow>
    ))}
</TableBody>

                </Table>
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <TablePagination
                        component="div"
                        count={eventRows.length} // Total number of rows
                        rowsPerPage={rowsPerPage} // Current rows per page
                        page={page} // Current page
                        onPageChange={handleChangePage} // Page change handler
                        labelRowsPerPage="" // Removes the "Rows per page" label
                        rowsPerPageOptions={[]} // Hides the dropdown for rows per page
                    />
                </div>
            </TableContainer>
        </div>
    );
};

export default EventsTable;
