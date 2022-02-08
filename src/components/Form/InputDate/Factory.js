import { InputDate } from './InputDate';

export class InputDateFactory {
  get type() {
    return 'DATE';
  }

  create(item) {
    return (
      <InputDate
        key={item.name}
        control={item.control}
        errors={item.errors}
        id={item.id}
        name={item.code}
        subtitle={item.criterion}
        title={item.question}
        type={item.type}
        value={item.value}
      />
    );
  }
}
