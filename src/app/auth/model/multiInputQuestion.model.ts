export interface MultiInputQuestionModel {
  title: string,
  name: string,
  uiType: MultiInputQuestionType
}

export enum MultiInputQuestionType {
  input = "input",
  number = "number",
  time = "time"
}
