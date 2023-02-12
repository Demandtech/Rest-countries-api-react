const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        countries: action.payload,
        filter_countries: action.payload,
      }
    case 'SEARCH_COUNTRY':
      const { countries } = state
      let tempCountries = countries.filter((country) => {
        return country.name.common.toLowerCase().startsWith(action.payload.toLowerCase())
      })

      return { ...state, filter_countries: tempCountries }
    default:
      return { ...state }
  }
  throw new Error(`No Matching "${action.type}" action type`)
}

export default reducer
