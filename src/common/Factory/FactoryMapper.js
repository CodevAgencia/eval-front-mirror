import { InputTextFactory } from '../../components/Form/InputText';
import { InputListFactory } from '../../components/Form/InputList';
import { InputDateFactory } from '../../components/Form/InputDate';
import { InputNumberFactory } from '../../components/Form/InputNumber';
import { InputDoubleFactory } from '../../components/Form/InputDouble';
import { InputBooleanFactory } from '../../components/Form/InputBoolean';
import { InputTeamBooleanFactory } from '../../components/Form/TeamBoolean';

export class FactoryMapper {
  constructor() {
    const inputText = new InputTextFactory();
    const inpuList = new InputListFactory();
    const inputDate = new InputDateFactory();
    const inputBoolean = new InputBooleanFactory();
    const inputNumber = new InputNumberFactory();
    const inputDouble = new InputDoubleFactory();
    const inputTeamBoolean = new InputTeamBooleanFactory();

    this.factories = {};
    this.factories[inputText.type] = inputText;
    this.factories[inpuList.type] = inpuList;
    this.factories[inputDate.type] = inputDate;
    this.factories[inputBoolean.type] = inputBoolean;
    this.factories[inputNumber.type] = inputNumber;
    this.factories[inputDouble.type] = inputDouble;
    this.factories[inputTeamBoolean.type] = inputTeamBoolean;
  }

  factory = (type) => type && this.factories[type];
}
