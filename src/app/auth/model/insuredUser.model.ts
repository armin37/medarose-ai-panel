import * as moment from 'jalali-moment';

export class InsuredUserModel {
  id: number;
  userId: string;
  insuranceCompanyId: number;
  name: string;
  nationalCode: string;
  phone: string;
  updateDate: Date;
  updateDateStr: string;
  createDate: Date;
  createDateStr: string;


  constructor(data: InsuredUserModel) {
    Object.assign(this, data);

    this.updateDateStr = moment(data?.updateDate).format('jYYYY/jMM/jDD');
    this.createDateStr = moment(data?.createDate).format('jYYYY/jMM/jDD');
  }
}
