import { AttributeType, IDom, INode } from "../types/jsx";
import nodeCompare from "./diff";

abstract class Component {
  state: any;
  props: AttributeType;
  abstract render(): IDom;
  _DOM: INode;

  constructor(props: AttributeType){
    this.props = props;
  }

  setState(newState: Record<string, any>){
    this.state = newState;
    const realDOM = this._DOM;    
    const componentVDOM = this.render();
    // 어디서 시작되는지 알기 위해 현재 컴포넌트 정보를 저장
    componentVDOM.DJ_COMPONENT = this;

    nodeCompare(componentVDOM, realDOM.parentNode, realDOM);
  }

  static DJ_COMPONENT = true;
}

export default Component;