"use client";

import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import PropTypes from "prop-types";
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
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { visuallyHidden } from "@mui/utils";
import Grid from "@mui/material/Grid";
import Button from "@mui/joy/Button";
import { Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import EditOutlined from "@mui/icons-material/EditOutlined";
import Delete from "@mui/icons-material/Delete";

function createData(id, name, role, action) {
  return {
    id,
    name,
    role,
    action,
  };
}

const rows = [
  createData(1, "Jean", "Teacher", "Resolved", 67, 4.3),
  createData(2, "Klee", "Student", "Validating", 51, 4.9),
  createData(3, "Zean", "Student", "Published", 24, 6.0),
  createData(4, "Gon", "Student", "Validating", 24, 4.0),
  createData(5, "Anton", "Teacher", "Reserved", 49, 3.9),
  createData(6, "John", "Student", "Reserved", 87, 6.5),
  createData(7, "Bennett", "Teacher", "Resolved", 37, 4.3),
  createData(8, "Travis", "Teacher", "Published", 94, 0.0),
  createData(9, "George", "Student", "Resolved", 7.0),
];

const columns = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "role",
    numeric: true,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "action",
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

const Users = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
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

  const isSelected = (id) => selected.indexOf(id) !== -1;

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
          <Box
            sx={{
              width: "100%",
              marginBottom: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={10} lg={4}>
                <Paper sx={{ width: "100%", mb: 2, padding: '1rem', }}>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "0.5rem",
                    }}
                  >
                    <span>
                      <strong>Office Name:</strong>
                    </span>
                    <span>SASO</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "0.5rem",
                    }}
                  >
                    <span>
                      <strong>Office Address:</strong>
                    </span>
                    <span>3rd Floor of RLF Building</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "0.5rem",
                    }}
                  >
                    <span>
                      <strong>School Category:</strong>
                    </span>
                    <span>Higher Education</span>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={10} lg={7}>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
                    <Typography
                      sx={{ flex: "1 1 100%" }}
                      variant="h6"
                      id="tableTitle"
                      component="div"
                    >
                      Users
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
                  <TableContainer sx={{ pl: { sm: "1rem" } }}>
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
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.role}</TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  display: "flex",
                                }}
                              >
                                <Button color="danger" variant="solid">
                                  <Delete />
                                </Button>
                                <Button color="primary" variant="solid">
                                  <EditOutlined />
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                        {emptyRows > 0 && (
                          <TableRow
                            style={{ height: (dense ? 33 : 53) * emptyRows }}
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
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Users;
