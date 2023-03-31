class DataType {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
  
  getName() { ... }
  getSize() { ... }
}

class PrimitiveType extends DataType {
  constructor(name, size) {
    super(name, size);
    this.isPrimitive = true;
  }
  
  getDefaultValue() { ... }
}

class NumericType extends PrimitiveType {
  constructor(name, size) {
    super(name, size);
    this.isNumeric = true;
  }
  
  getMinValue() { ... }
  getMaxValue() { ... }
}

class IntegerType extends NumericType {
  constructor(name, size) {
    super(name, size);
    this.isInteger = true;
  }
  
  isSigned() { ... }
}

class FloatType extends NumericType {
  constructor(name, size) {
    super(name, size);
    this.isFloat = true;
  }
  
  getPrecision() { ... }
}