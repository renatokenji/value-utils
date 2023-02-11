import { expect } from "chai";
import { ValueObject } from "../src/ValueObject";
import "mocha";

interface DummyValueObjectProps {
  aString: string;
  aNumber: number;
  aBoolean: boolean;
}

class DummyValueObject extends ValueObject<DummyValueObjectProps> {
  readonly aString: string;
  readonly aNumber: number;
  readonly aBoolean: boolean;

  constructor(props: DummyValueObjectProps) {
    super(props);
    this.aString = props.aString;
    this.aNumber = props.aNumber;
    this.aBoolean = props.aBoolean;
  }
}

describe("ValueObject equals", function () {
  it("should return false when object is null", function () {
    const firstObject = new DummyValueObject({ aNumber: 1, aString: "hello", aBoolean: true });
    const secondObject = null;

    expect(firstObject.equals(secondObject)).to.be.false;
  });
  it("should return false when object is undefined", function () {
    const firstObject = new DummyValueObject({ aNumber: 1, aString: "hello", aBoolean: true });
    const secondObject = undefined;

    expect(firstObject.equals(secondObject)).to.be.false;
  });
  it("should return false when some values are different", function () {
    const firstObject = new DummyValueObject({ aNumber: 1, aString: "hello", aBoolean: true });
    const secondObject = new DummyValueObject({ aNumber: 2, aString: "hello", aBoolean: true });

    expect(firstObject.equals(secondObject)).to.be.false;
  });
  it("should return false when all values are different", function () {
    const firstObject = new DummyValueObject({ aNumber: 1, aString: "hello", aBoolean: true });
    const secondObject = new DummyValueObject({ aNumber: 2, aString: "hi", aBoolean: false });

    expect(firstObject.equals(secondObject)).to.be.false;
  });
  it("should return true when all values are equal", function () {
    const firstObject = new DummyValueObject({ aNumber: 1, aString: "hello", aBoolean: true });
    const secondObject = new DummyValueObject({ aNumber: 1, aString: "hello", aBoolean: true });

    expect(firstObject.equals(secondObject)).to.be.true;
  });
  it("should return true when an object is referenced by the other", function () {
    const firstObject = new DummyValueObject({ aNumber: 1, aString: "hello", aBoolean: true });
    const secondObject = firstObject;

    expect(firstObject.equals(secondObject)).to.be.true;
  });
});
