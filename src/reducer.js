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
        return country.name
          .toLowerCase()
          .startsWith(action.payload.toLowerCase())
      })
      return { ...state, filter_countries: tempCountries }
    case 'SEARCH_REGION':
      let regionCountries = state.countries.filter((country) => {
        if (action.payload === 'All') {
          return country
        } else {
          return country.region === action.payload
        }
      })

      return { ...state, filter_countries: regionCountries }
    default: 
      return {...state}
  } 
}

export default reducer
