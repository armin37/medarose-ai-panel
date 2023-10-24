export interface SettingModel {
  hasError: boolean,
  data: SettingData
}

export interface SettingData {
  id: number,
  name: string,
  createDate: Date,
  updateDate: Date,
  coverageSetting: CoverageSetting
}

export interface CoverageSetting {
  id: number,
  companyId: number,
  createDate: Date,
  updateDate: Date,
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
  deathBenefitRatio: {
    min: number,
    max: number
  },
  deathBenefitIncreaseRate: {
    min: number,
    max: number
  },
  accidentalDeathRatio: {
    min: number,
    max: number
  },
  diseaseCoverageRatio: {
    min: number,
    max: number
  },
  riskLevels: [
    {
      title: string,
      interval: [number, number]
    },
    {
      title: string,
      interval: [number, number]
    },
    {
      title: string,
      interval: [number, number]
    }
  ];
}

export interface CoverageSettingPatchRequest extends Omit<CoverageSetting, 'id' | 'companyId' | 'createDate' | 'updateDate'> {
}
