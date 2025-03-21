import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface Column {
  key: string;
  label: string;
  editable?: boolean;
  width?: string | number;
  isDate?: boolean;
  cell?: (info: { row: any; value: any }) => React.ReactNode;
}

interface Props {
  name: string;
  columns: Column[];
}

const EditableTable = ({ name, columns }: Props) => {
  const { watch } = useFormContext();
  const rows = watch(name) ?? [];

  if (rows.length === 0) {
    return (
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        <Typography variant="h2" textAlign="center">
          Нет данных, попробуйте добавить документ.
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer sx={{ overflowX: 'auto', maxWidth: '100%' }}>
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableHead
          sx={{
            border: '1px solid black',
          }}
        >
          <TableRow>
            {columns?.map((col) => (
              <TableCell
                key={col.key}
                sx={{
                  border: '1px solid black',
                  width: '200px',
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {rows.length > 0 && (
          <TableBody>
            {rows?.map((row: any) => (
              <TableRow key={row.id}>
                {columns?.map((col) => (
                  <TableCell
                    key={col.key}
                    sx={{
                      border: '1px solid black',
                    }}
                  >
                    {col.cell ? col.cell({ row, value: row[col.key] }) : row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default memo(EditableTable);
