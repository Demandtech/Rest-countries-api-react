export function formatNumber(numb) {
  return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getUniqueValues = (data) => {
  let unique = data.map((item) => item.region)
  
  return ['All', ...new Set(unique)]
}