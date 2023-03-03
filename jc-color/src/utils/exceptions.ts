class _ValueError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class _InputError extends Error {
  constructor(except: string, but: string) {
    super(`We except a "${except}", but get a value of "${but}".`);
  }
}

function ValueError(message: string) {
  return new _ValueError(message);
}

function InputTypeError(except: string, but: string) {
  return new _InputError(except, but);
}

export { ValueError, InputTypeError };
