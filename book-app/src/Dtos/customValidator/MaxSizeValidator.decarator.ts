import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function MaxArraySize(max: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'maxArraySize',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [max],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [max] = args.constraints;
          return Array.isArray(value) && value.length <= max;
        },
        defaultMessage(args: ValidationArguments) {
          const [max] = args.constraints;
          return `Array size must be at most ${max} elements`;
        },
      },
    });
  };
}
