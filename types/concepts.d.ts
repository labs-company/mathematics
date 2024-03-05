export interface OperationConcept {
  title: string
  description: string
}

export interface MathOperations {
  sum: OperationConcept
  res: OperationConcept
  mul: OperationConcept
  div: OperationConcept
}

export interface OperationConceptProps {
  concept: OperationConcept
}
