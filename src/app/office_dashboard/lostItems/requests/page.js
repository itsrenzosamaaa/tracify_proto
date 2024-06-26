"use client";

import React from "react";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Input from "@mui/joy/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { visuallyHidden } from "@mui/utils";
import Grid from "@mui/material/Grid";
import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import ModalClose from "@mui/joy/ModalClose";

const foundItems = [
  {
    id: 1,
    itemName: "Wallet",
    category: "Accessories",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    owner: "Simon",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
  {
    id: 2,
    itemName: "Keys",
    category: "Accessories",
    description: "May kasama po siyang keychain",
    owner: "Joy",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
  {
    id: 3,
    itemName: "Charger",
    category: "Electronics",
    description: "Type C po yung charger niya.",
    owner: "Benedict",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
  {
    id: 4,
    itemName: "Airpods",
    category: "Electronics",
    description: "2nd gen po yung airpods nito",
    owner: "Rex",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
  {
    id: 5,
    itemName: "T-Shirt",
    category: "Clothing",
    description: "Plain white po siya, large size",
    owner: "Ray",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
  {
    id: 6,
    itemName: "Gloves",
    category: "Clothing",
    description: "Leather po yung texture neto tsaka yellow po yung kulay niya",
    owner: "Zoe",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
  {
    id: 7,
    itemName: "Headset",
    category: "Accessories",
    description: "May sticker po sa left side nito",
    owner: "Jane",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
  {
    id: 8,
    itemName: "Bracelet",
    category: "Accessories",
    description: "Naka genshin electro vision po yung bracelet",
    owner: "Robert",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
  {
    id: 9,
    itemName: "Cap",
    category: "Clothing",
    description: "May Chicago Bulls po na logo",
    owner: "Jered",
    location: "RLO202",
    dateLost: "January 12, 2024",
    timeLost: "2:30 PM",
  },
];

function createData(
  id,
  owner,
  itemName,
  category,
  description,
  location,
  dateLost,
  timeLost
) {
  return {
    id,
    owner,
    itemName,
    category,
    description,
    location,
    dateLost,
    timeLost,
  };
}

const rows = foundItems.map((item) =>
  createData(
    item.id,
    item.owner,
    item.itemName,
    item.category,
    item.description,
    item.location,
    item.dateLost,
    item.timeLost
  )
);

const columns = [
  {
    id: "owner",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "itemName",
    numeric: true,
    disablePadding: false,
    label: "Item",
  },
  {
    id: "category",
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Request Found Items
        </Typography>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const Requests = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openModal, setOpenModal] = React.useState(null);
  const handleOpenModal = (rowId) => setOpenModal(rowId);
  const handleCloseModal = () => setOpenModal(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset page number when search term changes
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const visibleRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: "1",
          display: "flex",
          paddingRight: "1%",
          height: "100%",
        }}
      >
        <Sidebar />
        <Grid container spacing={2} sx={{ marginTop: "6rem" }}>
          <Box sx={{ width: "100%", marginBottom: "3rem" }}>
            <Grid item xs={10} sm={10} md={9} lg={8} sx={{ margin: "0 auto" }}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                <Toolbar
                  sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                  }}
                >
                  <Typography
                    sx={{ flex: "1 1 100%" }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                  >
                    Request Lost Items
                  </Typography>
                  <Input
                    sx={{ width: "20rem" }}
                    id="outlined-basic"
                    placeholder="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    startDecorator={
                      <SearchIcon
                        color="action"
                        sx={{ marginRight: "0.5rem" }}
                      />
                    }
                  />
                </Toolbar>
                <TableContainer sx={{ paddingLeft: "1rem" }}>
                  <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                  >
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {visibleRows.map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.id)}
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                            sx={{ cursor: "pointer" }}
                          >
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {row.owner}
                            </TableCell>
                            <TableCell align="right">{row.itemName}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">
                              <Button
                                variant="solid"
                                onClick={() => handleOpenModal(row.id)}
                              >
                                View Details
                              </Button>
                              <Modal
                                open={openModal === row.id}
                                onClose={handleCloseModal}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <ModalDialog>
                                  <ModalClose />
                                  <DialogTitle>Lost Item Details</DialogTitle>
                                  <DialogContent>
                                    Information about the owner&apos;s item.
                                  </DialogContent>
                                  <Stack spacing={2}>
                                    <Box
                                      sx={{
                                        my: "2rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Image
                                        src="/lost.jpg"
                                        height="140"
                                        width="250"
                                        alt="Found Item"
                                      />
                                    </Box>
                                    <Typography
                                      id="modal-modal-title"
                                      variant="h6"
                                      component="h2"
                                      sx={{ mb: "2rem", textAlign: "center" }}
                                    >
                                      <strong>{row.itemName}</strong>
                                    </Typography>
                                    <Typography
                                      variant="body1"
                                      component="div"
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: "1rem",
                                      }}
                                    >
                                      <span>
                                        <strong>Lost in:</strong>
                                      </span>
                                      <span>{row.location}</span>
                                    </Typography>
                                    <Typography
                                      variant="body1"
                                      component="div"
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: "1rem",
                                      }}
                                    >
                                      <span>
                                        <strong>Date Lost:</strong>
                                      </span>
                                      <span>{row.dateLost}</span>
                                    </Typography>
                                    <Typography
                                      variant="body1"
                                      component="div"
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: "2rem",
                                      }}
                                    >
                                      <span>
                                        <strong>Time Lost:</strong>
                                      </span>
                                      <span>{row.timeLost}</span>
                                    </Typography>
                                    <Typography
                                      variant="body1"
                                      component="div"
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: "1rem",
                                        textAlign: "center",
                                      }}
                                    >
                                      <strong>Item Description:</strong>
                                    </Typography>
                                    <Typography
                                      variant="body1"
                                      component="div"
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        wordBreak: "break-word",
                                        mb: "1rem",
                                        textAlign: "center",
                                      }}
                                    >
                                      &ldquo;{row.description}&rdquo;
                                    </Typography>
                                  </Stack>
                                </ModalDialog>
                              </Modal>
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                display: "flex",
                              }}
                            >
                              <Button color="danger" variant="solid">
                                <CloseIcon />
                              </Button>
                              <Button color="success" variant="solid">
                                <CheckCircleOutlineIcon />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: (dense ? 33 : 53) * emptyRows,
                          }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
              <FormControlLabel
                control={
                  <Switch checked={dense} onChange={handleChangeDense} />
                }
                label="Dense padding"
              />
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Requests;
