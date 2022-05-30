/*
 * We need replacer and reviver functions to serailize JS Maps
 * https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map
 * */
export const mapReplacer = (_key: any, value: any) => {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()),
    };
  } else {
    return value;
  }
};

export const mapReviver = (_key: any, value: any) => {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
};
