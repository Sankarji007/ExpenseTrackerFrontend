import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TableVirtuoso} from 'react-virtuoso';
import * as React from 'react';
import TableCell from "@mui/material/TableCell";


const sample = [
    { ExpenseType: 'Frozen yoghurt', Action: 'Action 1' },
    { ExpenseType: 'Ice cream sandwich', Action: 'Action 2' },
    { ExpenseType: 'Eclair', Action: 'Action 3' },
    { ExpenseType: 'Cupcake', Action: 'Action 4' },
    { ExpenseType: 'Gingerbread', Action: 'Action 5' },
];


const columns = [
    {
        width: 100,
        label: 'Expense Type',
        dataKey: 'ExpenseType',
    },
    {
        width: 50,
        label: 'Action',
        dataKey: 'Action',

    }
];



const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref}/>
    )),
    Table: (props) => (
        <Table {...props} sx={{borderCollapse: 'separate', tableLayout: 'fixed'}}/>
    ),
    TableHead,
    TableRow: ({item: _item, ...props}) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref}/>),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    style={{width: column.width}}
                    sx={{
                        backgroundColor: 'background.paper',
                    }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index, row) {
    return (
        <React.Fragment>
            {columns.map((column) => {
                if (column.dataKey === 'Action') {
                    return (
                        <TableCell key={column.dataKey} align="center">
                            <button className="btn btn-danger btn-sm me-2" >
                                {/*onClick={() => handleDelete(row)}*/}
                                <i className="fa fa-trash"></i>
                            </button>
                            <button className="btn btn-primary btn-sm" >
                                {/*onClick={() => handleEdit(row)}*/}
                                <i className="fa fa-pencil"></i>
                            </button>
                        </TableCell>
                    );
                }
                return (
                    <TableCell key={column.dataKey} align={column.numeric || false ? 'right' : 'left'}>
                        {row[column.dataKey]}
                    </TableCell>
                );
            })}
        </React.Fragment>
    );
}
const mystle={
    height: '40vh',
    width: '100%',
    'margin-top':'3%'
}
export const MyTable = () => {
    return (
        <><Paper style={mystle}>
            <TableVirtuoso
                data={sample}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
            />
        </Paper></>
    )
}
