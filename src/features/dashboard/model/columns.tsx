import dayjs from 'dayjs';
import EditButton from 'features/dashboard/ui/EditButton';
import DeleteButton from '../ui/DeleteButton';

export const columns = [
  {
    key: 'id',
    label: 'ID',
    editable: false,
    cell: (info: any) => {
      return <EditButton value={info.value} info={info} isEdit={true} />;
    },
  },
  {
    key: 'companySigDate',
    label: 'Дата подписи компании',
    editable: false,
    cell: (value: { value: string }) => {
      return dayjs(value.value).isValid() ? dayjs(value.value).format('DD:MM:YYYY mm:HH') : '-';
    },
    width: '200px',
  },
  {
    key: 'companySignatureName',
    label: 'Имя подписанта компании',
    editable: false,
    width: '150px',
  },
  { key: 'documentName', label: 'Название документа', editable: false, width: '150px' },
  { key: 'documentStatus', label: 'Статус документа', editable: false, width: '150px' },
  { key: 'documentType', label: 'Тип документа', editable: false, width: '150px' },
  { key: 'employeeNumber', label: 'Номер работника', editable: false, width: '150px' },
  {
    key: 'employeeSigDate',
    label: 'Дата трудоустройства',
    editable: false,
    cell: (value: { value: string }) => {
      return dayjs(value.value).isValid() ? dayjs(value.value).format('DD:MM:YYYY mm:HH') : '-';
    },
    width: '200px',
  },
  { key: 'employeeSignatureName', label: 'Имя работника', editable: false, width: '150px' },
  {
    key: 'delete',
    label: '',
    editable: false,
    width: '150px',
    cell: (info: any) => {
      return <DeleteButton id={info?.row?.id || ''} />;
    },
  },
];
