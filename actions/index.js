export const RECEIVES_ENTRIES = 'RECEIVES_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receiveEntries(entries) {
  return {
    type: RECEIVES_ENTRIES,
    entries,
  }
}

export function addEntry(entry) {
  return {
    type: ADD_ENTRY,
    entry,
  }
}
