import type { OperationLevel } from './results'

interface Operator {
  isSum?: boolean
  isRes?: boolean
  isMul?: boolean
  isDiv?: boolean
}

export interface ResultProps {
  operator: Operator
  children: React.ReactNode
  operation: OperationLevel
}
