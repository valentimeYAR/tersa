import React, { memo } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useDisclosure } from 'shared/hooks';
import ModalContainer from 'shared/ui/Modal/ModalContainer';
import { FormProvider, useForm } from 'react-hook-form';
import { DatePicker, TextField } from 'shared/ui';
import {
  DocumentDto,
  useCreateDocumentMutation,
  useUpdateDocumentMutation,
} from 'features/dashboard/model';

interface Props {
  value: string;
  info?: { row?: DocumentDto };
  isEdit: boolean;
}

const EditButton = ({ value, info, isEdit }: Props) => {
  const [handleCreate, { isLoading }] = useCreateDocumentMutation();
  const [handleUpdate, { isLoading: isLoadingUpdate }] = useUpdateDocumentMutation();

  const methods = useForm<DocumentDto>({
    defaultValues: info?.row || {},
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = (values: DocumentDto) => {
    if (isEdit) {
      handleUpdate({ id: info?.row?.id || '', body: values }).then(() => onClose());
    } else {
      handleCreate(values).then(() => onClose());
    }
  };

  return (
    <FormProvider {...methods}>
      {isEdit ? (
        <Button variant="contained" onClick={onOpen}>
          {value}
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2196f3',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '12px',
            textTransform: 'none',
            boxShadow: '0 4px 10px rgba(33, 150, 243, 0.3)',
            transition: '0.3s ease',

            '&:hover': {
              backgroundColor: '#1e88e5',
              boxShadow: '0 6px 15px rgba(33, 150, 243, 0.4)',
            },
          }}
          onClick={onOpen}
        >
          {value}
        </Button>
      )}
      {isOpen && (
        <ModalContainer>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Typography variant="h6" mb={3}>
              {isEdit ? 'Редактирование документа' : 'Создание документа'}
            </Typography>
            <Box display="flex" flexDirection="column" gap={2} mb={2}>
              <TextField name="companySignatureName" label="Имя подписанта компании" required />
              <TextField name="documentName" label="Название документа" required />
              <TextField name="documentStatus" label="Статус документа" required />
              <TextField name="documentType" label="Тип документа" required />
              <TextField name="employeeNumber" label="Номер работника" required />
              <TextField name="employeeSignatureName" label="Имя работника" required />
              {!isEdit && (
                <>
                  <DatePicker name="companySigDate" required />
                  <DatePicker name="employeeSigDate" required />
                </>
              )}
            </Box>
            <Box display="flex" gap={2}>
              <Button variant="contained" onClick={methods.handleSubmit(onSubmit)}>
                {isLoading || isLoadingUpdate ? (
                  <CircularProgress sx={{ color: '#ffffff' }} />
                ) : (
                  'Сохранить'
                )}
              </Button>
              <Button variant="outlined" color="error" onClick={onClose}>
                Отмена
              </Button>
            </Box>
          </form>
        </ModalContainer>
      )}
    </FormProvider>
  );
};

export default memo(EditButton);
