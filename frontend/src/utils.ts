export const showYear = (date: string) => {
  return date.split('-')[0]
}

export const listColor = (period: string) => {
  switch (period) {
    case 'Medieval':
      return "orange"
    case 'Renaissance':
      return 'turquoise'
    case 'Baroque':
      return 'skyblue'
    case 'Classical':
      return 'darkblue'
    case 'Early Romantic':
      return 'red';
    case 'Romantic':
      return 'grey'
    case 'Late Romantic':
      return 'pink'
    case '20th Century':
      return 'lime'
    case 'Post-War':
      return 'maroon'
    case '21st Century':
      return 'yellow'
    default:
      return 'rgb(240, 240, 240'
  }
}