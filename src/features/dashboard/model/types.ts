export type GetDocumentsApiResponse = {
  error_code?: number;
  error_message: string;
  data: DocumentDto[];
};

export type DocumentDto = {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
  id: string;
};

export type UpdateDocumentApiArgs = {
  id: string;
  body: DocumentDto;
};
