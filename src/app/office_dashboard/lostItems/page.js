'use client'

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import InputLabel from '@mui/material/InputLabel';
import ArticleIcon from '@mui/icons-material/Article';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function LostItems() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const lostItems = [
        {id: 1, name: 'Wallet', description: 'Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.', owner: 'Izer Alindogan'},
        {id: 2, name: 'Wallet', description: 'Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.', owner: 'Izer Alindogan'},
        {id: 3, name: 'Wallet', description: 'Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.', owner: 'Izer Alindogan'},
        {id: 4, name: 'Wallet', description: 'Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.', owner: 'Izer Alindogan'},
        {id: 5, name: 'Wallet', description: 'Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.', owner: 'Izer Alindogan'},
        {id: 6, name: 'Wallet', description: 'Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.', owner: 'Izer Alindogan'},
        {id: 7, name: 'Wallet', description: 'Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.', owner: 'Izer Alindogan'},
        {id: 8, name: 'Wallet', description: 'Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.', owner: 'Izer Alindogan'},
    ];
    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: '1', display: 'flex', paddingRight: '1%',}}>
                <Sidebar />
                <Grid container spacing={2} sx={{ marginTop: '6rem', marginX: '1rem'}}>
                    <Box sx={{ width: '100%', marginBottom: '3rem' }}>
                        <Grid container display='flex' justifyContent='space-between'>
                            <Grid item sx={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                                <Typography variant='h4' component='div'>Lost Items</Typography>
                            </Grid>
                            <Grid item xs={12} sm={8} md={6} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <Button component={Link} href="/office_dashboard/lostItems/requests" color='info' variant="contained">
                                    <ArticleIcon sx={{ marginRight: '10px' }} /> 
                                    Requests
                                </Button>
                                <Button color='error' variant="contained" onClick={handleOpen}>
                                    <AddIcon sx={{ marginRight: '10px' }} /> 
                                    Lost Item
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={modal}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Add Lost Item
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <Grid item xs={12}>
                                                <form>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                type="text"
                                                                name="item_name"
                                                                label="Name"
                                                                variant="outlined"
                                                                fullWidth
                                                                // value={form.username}
                                                                // onChange={handleChange}
                                                                // disabled={isLoading}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                fullWidth
                                                                name="item_category"
                                                                // value={age}
                                                                // onChange={handleChange}
                                                            >
                                                                <MenuItem value='Electronics'>Electronics</MenuItem>
                                                                <MenuItem value='Clothing'>Clothing</MenuItem>
                                                                <MenuItem value='Accessories'>Accessories</MenuItem>
                                                            </Select>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                type="text"
                                                                name="item_description"
                                                                label="Description"
                                                                variant="outlined"
                                                                multiline
                                                                fullWidth
                                                                // value={form.password}
                                                                // onChange={handleChange}
                                                                // disabled={isLoading}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                type="text"
                                                                name="item_location"
                                                                label="Item Located"
                                                                variant="outlined"
                                                                fullWidth
                                                                // value={form.password}
                                                                // onChange={handleChange}
                                                                // disabled={isLoading}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer
                                                                    components={[
                                                                        'DateTimeField',
                                                                    ]}
                                                                >
                                                                    <DemoItem>
                                                                        <DateTimePicker label="Date and Time Located" />
                                                                    </DemoItem>
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                type="text"
                                                                name="owner"
                                                                label="Owner"
                                                                variant="outlined"
                                                                fullWidth
                                                                // value={form.password}
                                                                // onChange={handleChange}
                                                                // disabled={isLoading}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Button
                                                                fullWidth
                                                                type="submit"
                                                                variant="contained"
                                                                // disabled={isLoading}
                                                            >
                                                                Add
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Grid>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </Grid>
                        </Grid>
                    </Box>
                    {lostItems.map((item) => {
                        return (
                            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ maxWidth: 345 }} elevation={3}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image="/lost.jpg"
                                        title="Lost Item"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography gutterBottom variant="p" component="div">
                                            Owner: {item.owner}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href={`/office_dashboard/lostItems/${item.id}`} size="small">More Details</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
  );
}