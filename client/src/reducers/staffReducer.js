export default function staffReducer(state = [1, 2, 3, 4, 5, 6, 7], action) {
  switch (action.type) {
    case 'CREATE_STAFF':
      return [...state, action.payload]
    default:
      return state;
  }
}
