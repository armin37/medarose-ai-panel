

export interface SettingModel {
  hasError?: boolean;
  data: {
    id: number,
    name: string,
    createDate: Date,
    updateDate: Date,
    coverageSetting:CoverageSetting
  }
}


interface  CoverageSetting {
  id: number,
  insurancePremium: {
      min: number,
      max: number
  },
  insurancePremiumIncreaseRate: {
      min: number,
      max: number
  },
  contractDuration: {
      min: number,
      max: number
  },
  deathBenefit: {
      min: number,
      max: number
  },
  deathBenefitRatio : {
      min: number,
      max: number
  },
  deathBenefitIncreaseRate : {
      min:number ,
      max : number
  },
  accidentalDeathRatio : {
      min: number,
      max: number
  },
  diseaseCoverageRatio : {
      min: number,
      max: number
  },
  riskLevels: [
    {
      title: string ,
      interval: [number,number]
    },
    {
      title: string ,
      interval: [number,number]
    },
    {
      title:  string ,
      interval: [number,number]
    }
  ];
  companyId: number;
  createDate: Date ;
  updateDate: Date
}
