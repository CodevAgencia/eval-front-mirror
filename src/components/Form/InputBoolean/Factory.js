import { InputList } from '../InputList';

export class InputBooleanFactory {
  get type() {
    return 'BOOLEAN';
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
        defaultValue={item.defaultValue}
        value={item.value}
        options={['Si', 'No']}
      />
    );
  }
}
