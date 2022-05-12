/* eslint-disable import/prefer-default-export */
export function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}

export function get(name, subst = null) {
  // Substitute value for JSON.parse if getItem failed вернет объект
  return JSON.parse(window.localStorage.getItem(name) || subst);
}

// lang = get('kbLang', '"ru"') по умолчанию

export function del(name) {
  localStorage.removeItem(name);
}

// import { set } from ''
