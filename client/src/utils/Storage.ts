interface IChangeLocalData<K> {
  itemName: string;
  object: K;
}

export function getLocalData(itemName: string) {
  const storedData = localStorage.getItem(itemName);
  if (!storedData) return;
  return JSON.parse(storedData);
}

export function changeLocalData<K>({ itemName, object }: IChangeLocalData<K>) {
  const parsedObject = JSON.stringify(object);
  localStorage.setItem(itemName, parsedObject);
}

export function getSessionData(itemName: string) {
  const storedData = window.sessionStorage.getItem(itemName);
  if (!storedData) return;
  return JSON.parse(storedData);
}

export function changeSessionData<K>({ itemName, object }: IChangeLocalData<K>) {
  const parsedObject = JSON.stringify(object);
  window.sessionStorage.setItem(itemName, parsedObject);
}
