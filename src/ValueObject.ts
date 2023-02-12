import _ from "lodash";

interface ValueObjectProps {
  [key: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public getInstance(): this {
    return this;
  }

  public equals(vo: ValueObject<T> | null | undefined): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (!_.isEqual(this.constructor, vo.constructor)) {
      return false;
    }
    return _.isEqual(this.props, vo.props);
  }
}
