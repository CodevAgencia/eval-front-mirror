import { InputText } from '../InputText';

export class InputDoubleFactory {
  get type() {
    return 'DOUBLE';
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
      />
    );
  }
}
