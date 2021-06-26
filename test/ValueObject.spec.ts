import { expect } from "chai";
import { ValueObject } from "../src/ValueObject";
import "mocha";

interface CustomValueObjectProps {
  aString: string;
  aNumber: number;
}

class CustomValueObject extends ValueObject<CustomValueObjectProps> {
  private aString: string;
  private aNumber: number;

  constructor(props: CustomValueObjectProps) {
    super(props);
    this.aString = props.aString;
    this.aNumber = props.aNumber;
  }
}

describe("ValueObject equals", function () {
  it("should return false when object is null", function () {
    const firstObject = new CustomValueObject({ aNumber: 1, aString: "hello" });
    const secondObject = null;

    expect(firstObject.equals(secondObject)).to.be.false;
  });
  it("should return false when object is undefined", function () {
    const firstObject = new CustomValueObject({ aNumber: 1, aString: "hello" });
    const secondObject = undefined;

    expect(firstObject.equals(secondObject)).to.be.false;
  });
  it("should return false when values are different", function () {
    const firstObject = new CustomValueObject({ aNumber: 1, aString: "hello" });
    const secondObject = new CustomValueObject({ aNumber: 2, aString: "hello" });

    expect(firstObject.equals(secondObject)).to.be.false;
  });
  it("should return true when all values are equal", function () {
    const firstObject = new CustomValueObject({ aNumber: 1, aString: "hello" });
    const secondObject = new CustomValueObject({ aNumber: 1, aString: "hello" });

    expect(firstObject.equals(secondObject)).to.be.true;
  });
  it("should return true when an object is referenced by the other", function () {
    const firstObject = new CustomValueObject({ aNumber: 1, aString: "hello" });
    const secondObject = firstObject;

    expect(firstObject.equals(secondObject)).to.be.true;
  });
});
