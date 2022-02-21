import { InputList } from './InputList';

export class InputListFactory {
  get type() {
    return 'LIST';
  }

  create(item) {
    return (
      <InputList
        key={item.name}
        control={item.control}
        errors={item.errors}
        id={item.id}
        name={item.code}
        subtitle={item.criterion}
        title={item.question}
        type={item.type}
        value={item.value}
        options={item.values}
        defaultValue={item.defaultValue}
      />
    );
  }
}
