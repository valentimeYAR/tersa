import React, { memo } from 'react';
import { columns, useGetDocumentsQuery } from '../model';
import { Box, CircularProgress } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { EditableTable } from 'shared/ui';
import EditButton from './EditButton';

const Dashboard = () => {
  const { isLoading, data } = useGetDocumentsQuery();
  const methods = useForm({
    values: {
      rows: data?.data,
    },
  });
  const onSubmit = () => {
    console.log();
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'flex-end' }} mb={4}>
          <Box>
            <EditButton value="Создать" info={{}} isEdit={false} />
          </Box>
        </Box>
        <EditableTable name="rows" columns={columns} />
      </form>
    </FormProvider>
  );
};

export default memo(Dashboard);
