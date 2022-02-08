import { InputText } from './InputText';

export class InputTextFactory {
  get type() {
    return 'TEXT';
  }

  create(item) {
    return (
      <InputText
        key={item.name}
        control={item.control}
        errors={item.errors}
        id={item.id}
        name={item.code}
        subtitle={item.criterion}
        title={item.question}
        value={item.value}
      />
    );
  }
}
