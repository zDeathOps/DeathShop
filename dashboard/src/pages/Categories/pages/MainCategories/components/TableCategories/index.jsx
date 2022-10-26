import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import Button from '~/components/Button';

function TableCategories() {
    const navigate = useNavigate();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const { categories } = useSelector((state) => state.categories);

    function createData(_id, name, createdAt) {
        const action = (
            <>
                <Button
                    primary
                    style={{ height: 25, fontSize: '1.2rem' }}
                    onClick={() => {
                        navigate(`/categories/edit/${_id}`);
                    }}
                    leftIcon={<BiEdit />}
                >
                    Edit Or Add Series
                </Button>
            </>
        );
        return { name, createdAt, action };
    }

    function changeListUsers(users) {
        return users.map((user) => {
            const { _id, name, createdAt } = user;
            return createData(_id, name, createdAt);
        });
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const columns = [
        { id: 'stt', label: 'STT', minWidth: 40 },
        { id: 'name', label: 'Name', minWidth: 140 },
        {
            id: 'createdAt',
            label: 'Initialize Date',
            minWidth: 50,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'action',
            label: 'Action',
            minWidth: 100,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

    return (
        <Paper
            sx={{
                Width: '100%',
                overflow: 'hidden',
            }}
        >
            <TableContainer sx={{ height: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {changeListUsers(categories)
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                                        {columns.map((column) => {
                                            let value;
                                            column.id === 'stt' ? (value = index + 1) : (value = row[column.id]);
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{
                    fontSize: 16,
                    '& .MuiButtonBase-root': {
                        '& svg': {
                            fontSize: 25,
                        },
                    },
                }}
                rowsPerPageOptions={[8, 25, 100]}
                component="div"
                count={categories.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TableCategories;
