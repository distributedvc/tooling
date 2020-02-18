export function req(options = {}) {
  return { ...options };
}

export const res = { status: v => v, json: val => val };
