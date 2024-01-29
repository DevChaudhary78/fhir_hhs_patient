export interface Patient {
  id: string,
  name: {
    given: string[]
    family: string
  }[]
  identifier: {
    value: string
  }[]
  telecom: {
    value: string
  }[]
  address: {
    use: string
    line: string[]
    city: string
    state: string
    postalCode: string
    country: string
  }[]
  gender: string
  birthDate: string
}
