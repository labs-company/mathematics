export interface OperationLevel {
  numberOne: number
  numberTwo: number
  result: number
}

interface OperationResults {
  lvlOne?: OperationLevel
  lvlTwo?: OperationLevel
  lvlThree?: OperationLevel
}

interface Operations {
  sum?: OperationResults
  res?: OperationResults
  mul?: OperationResults
  div?: OperationResults
}

export type ResultsType = {
  [key in keyof Operations]: OperationResults;
}
