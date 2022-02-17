import { InputList } from '../InputList';

export class InputTeamBooleanFactory {
  get type() {
    return 'TABLE_TEAM_BOOLEAN';
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
        options={['Si', 'No']}
      />
    );
  }
}
