import { InputText } from '../InputText';

export class InputNumberFactory {
  get type() {
    return 'NUMBER';
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
        type="number"
        defaultValue={item.defaultValue}
      />
    );
  }
}
