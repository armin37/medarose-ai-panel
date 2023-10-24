export interface UserResponseModel {
  data: UserAllDataModel,
  hasError: boolean
}

export interface UserAllDataModel {
  contract: ContractModel,
  user: UserModel
}

export interface ContractModel {
  accidentalDeathRatio: number
  companyId: number
  contractDuration: number
  createDate: Date
  deathBenefitIncreaseRate: number
  deathBenefitRatio: number
  diseaseCoverageRatio: number
  id: number
  insurancePremium: number
  insurancePremiumIncreaseRate: number
  updateDate: Date
  userId: number
}

export interface UserModel {
  id: number
  userId: string
  name: string,
  phone: string
  nationalCode: string
  gender: string
  birthdate: Date
  insuranceCompanyId: number
  createDate: Date
  updateDate: Date
  metadata: any
}
