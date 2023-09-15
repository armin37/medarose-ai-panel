export interface searchUsersModel {
  hasError: boolean,
  data: {
    id: number,
    companyId: string,
    createDate: Date,
    name: string,
    nationalcode: string,
    updateDate: Date,
    userid: string
  }  
}